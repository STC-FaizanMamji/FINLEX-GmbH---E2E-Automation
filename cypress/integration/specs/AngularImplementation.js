import * as businessHelper from '../../helpers/BusinessHelper'
import OptionsGroups from '../pageElements/OptionsGroups'
import DialogModal from '../pageElements/DialogModal'
import * as CommonElements from '../commonStaticElements/commonElements'
import ModalOptions from '../pageElements/ModalOptions';
import AngularRealWorld from '../pageElements/AngularRealWorld';

let optionsgroup, dialogModal, modalOptions, angularRealWorld;
const dayjs = require('dayjs');


before(() => {
    optionsgroup = new OptionsGroups();
    dialogModal = new DialogModal();
    modalOptions = new ModalOptions();
    angularRealWorld = new AngularRealWorld();
})

describe('Automation E2E Test', function () {
    it('Autocomplete Cases', () => {
        businessHelper.visitPage(businessHelper.configValue.autoComplete)
        optionsgroup.drpOptions().click()
        optionsgroup.drpOptionsTypeText().type(businessHelper.configValue.autocompleteText)
        optionsgroup.drpOptionsSelectValue().click()
    })

    it('Dialog Case', () => {
        businessHelper.visitPage(businessHelper.configValue.dialog)
        dialogModal.openDialog().click()
        dialogModal.closeFirstDialog().click()
    })

    it('DialogOverview Case', () => {
        dialogModal.dialogOverviewTextField().type(businessHelper.configValue.dialogOverviewText)
        dialogModal.dialogOverviewButton().click()
        dialogModal.dialogOverviewModal().click()
        dialogModal.dialogOverviewModal().clear().type(businessHelper.configValue.dialogOverviewText)
        cy.wait(2000)
        dialogModal.dialogOverviewModalButton().click()
        businessHelper.asserText(CommonElements.dialogOverviewElement, businessHelper.configValue.dialogOverviewText)
        cy.log(businessHelper.configValue.modal)
    })

    it('Modal Options', () => {
        businessHelper.visitPage(businessHelper.configValue.modal)
        modalOptions.modalDefaultOption().click()
        modalOptions.modalDateOfBirth().type(dayjs().format("YYYY-MM-DD"))
        modalOptions.modalOptionModalBtnSave().click()
    })

    it('Modal Back Drop', () => {
        modalOptions.modalBackDrop().click()
        modalOptions.modalBackDropBtnClose().click()
    })

    it('Assert Article Preview', () => {
        businessHelper.visitPage(businessHelper.configValue.angular)
        angularRealWorld.articlePreview()
    })
})

