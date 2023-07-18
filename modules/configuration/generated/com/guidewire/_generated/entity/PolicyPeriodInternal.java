package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriod.eti;PolicyPeriod.eix;PolicyPeriod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyPeriodInternal extends com.guidewire._generated.entity.EffDatedBranchInternal, com.guidewire._generated.entity.RootInfoInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.AnswerContainerInternal, com.guidewire._generated.entity.DestructionRootPinnableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods, com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods, com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods, com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch, com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.api.contingency.ContingencyCreator, gw.api.domain.AnswerContainerAdapter, gw.api.domain.DenormalizedFKOutOfDomainGraph, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory, gw.api.reinsurance.ReinsurableCoverable {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String BINDSUBMISSION_EVENT = "BindSubmission";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String CANCELPERIOD_EVENT = "CancelPeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String CHANGEPERIOD_EVENT = "ChangePeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String CREATEPERIOD_EVENT = "CreatePeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String FINALAUDIT_EVENT = "FinalAudit";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ISSUECANCELLATION_EVENT = "IssueCancellation";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ISSUEPERIOD_EVENT = "IssuePeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ISSUEPOLICYCHANGE_EVENT = "IssuePolicyChange";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ISSUEREINSTATEMENT_EVENT = "IssueReinstatement";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ISSUERENEWAL_EVENT = "IssueRenewal";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ISSUEREWRITE_EVENT = "IssueRewrite";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ISSUESUBMISSION_EVENT = "IssueSubmission";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPERIODADDED_EVENT = "PolicyPeriodAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPERIODCHANGED_EVENT = "PolicyPeriodChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPERIODPURGED_EVENT = "PolicyPeriodPurged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String POLICYPERIODREMOVED_EVENT = "PolicyPeriodRemoved";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PREEMPTEDPERIOD_EVENT = "PreemptedPeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PREMIUMREPORT_EVENT = "PremiumReport";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REINSTATEPERIOD_EVENT = "ReinstatePeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RENEWPERIOD_EVENT = "RenewPeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REQUESTQUOTE_EVENT = "RequestQuote";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String REWRITEPERIOD_EVENT = "RewritePeriod";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SCHEDULEFINALAUDIT_EVENT = "ScheduleFinalAudit";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SENDCANCELLATIONNOTICES_EVENT = "SendCancellationNotices";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SENDNONRENEWAL_EVENT = "SendNonRenewal";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SENDNONRENEWALDOCUMENTS_EVENT = "SendNonRenewalDocuments";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SENDNOTTAKEN_EVENT = "SendNotTaken";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SENDNOTTAKENDOCUMENTS_EVENT = "SendNotTakenDocuments";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SENDRENEWALDOCUMENTS_EVENT = "SendRenewalDocuments";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String SENDRESCINDNOTICES_EVENT = "SendRescindNotices";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String WAIVEFINALAUDIT_EVENT = "WaiveFinalAudit";
  
  /**
   * Adds the given element to the APDTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAPDTransactions(entity.APDTransaction element);
  
  
  /**
   * Adds the given element to the AsyncQuoteIssues array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAsyncQuoteIssues(entity.AsyncQuoteIssue element);
  
  
  /**
   * Adds the given element to the BATransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBATransactions(entity.BATransaction element);
  
  
  /**
   * Adds the given element to the BOPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPTransactions(entity.BOPTransaction element);
  
  
  /**
   * Adds the given element to the CPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPTransactions(entity.CPTransaction element);
  
  
  /**
   * Adds the given element to the Contingencies array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContingencies(entity.Contingency element);
  
  
  /**
   * Adds the given element to the EffectiveDatedFieldsArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEffectiveDatedFieldsArray(entity.EffectiveDatedFields element);
  
  
  /**
   * Adds the given element to the Forms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToForms(entity.Form element);
  
  
  /**
   * Adds the given element to the GLTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLTransactions(entity.GLTransaction element);
  
  
  /**
   * Adds the given element to the HOPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPTransactions(entity.HOPTransaction element);
  
  
  /**
   * Adds the given element to the IMTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMTransactions(entity.IMTransaction element);
  
  
  /**
   * Adds the given element to the InvoiceStreamOverridesArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInvoiceStreamOverridesArray(entity.InvoiceStreamOverrides element);
  
  
  /**
   * Adds the given element to the Lines array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLines(entity.PolicyLine element);
  
  
  /**
   * Adds the given element to the LocationRisks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationRisks(entity.LocationRisk element);
  
  
  /**
   * Adds the given element to the NewInvoiceStreamArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNewInvoiceStreamArray(entity.BillingInvoiceStream element);
  
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element);
  
  
  /**
   * Adds the given element to the PATransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPATransactions(entity.PATransaction element);
  
  
  /**
   * Adds the given element to the PRActiveWorkflowArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPRActiveWorkflowArray(entity.PRActiveWorkflow element);
  
  
  /**
   * Adds the given element to the PeriodAnswers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPeriodAnswers(entity.PeriodAnswer element);
  
  
  /**
   * Adds the given element to the PolicyContactRoles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyContactRoles(entity.PolicyContactRole element);
  
  
  /**
   * Adds the given element to the PolicyFXRates array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyFXRates(entity.PolicyFXRate element);
  
  
  /**
   * Adds the given element to the PolicyLocations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyLocations(entity.PolicyLocation element);
  
  
  /**
   * Adds the given element to the PolicyRisks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyRisks(entity.PolicyRisk element);
  
  
  /**
   * Adds the given element to the RIRiskVersionLists array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRIRiskVersionLists(entity.RIRiskVersionList element);
  
  
  /**
   * Adds the given element to the SelectedPaymentPlanArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSelectedPaymentPlanArray(entity.PaymentPlanSummary element);
  
  
  /**
   * Adds the given element to the UWIssuesIncludingSoftDeleted array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUWIssuesIncludingSoftDeleted(entity.UWIssue element);
  
  
  /**
   * Adds the given element to the WCTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCTransactions(entity.WCTransaction element);
  
  
  /**
   * Adds the given element to the Workflows array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWorkflows(entity.PolicyPeriodWorkflow element);
  
  
  /**
   * Adds the given element to the WorksheetContainerArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWorksheetContainerArray(entity.WorksheetContainer element);
  
  
  /**
   * Gets the value of the APDTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDTransaction[] getAPDTransactions();
  
  
  /**
   * Gets the value of the ActiveWorkflow field.
   * The workflow that is active from the perspective of the UI. This workflow will be polled when the UI is waiting for results.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriodWorkflow getActiveWorkflow();
  
  
  public gw.pl.persistence.core.Key getActiveWorkflowID();
  
  
  /**
   * Gets the value of the AllocationOfRemainder field.
   * @deprecated The method to allocate the remainder of cost if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingRemainderAllocate getAllocationOfRemainder();
  
  
  /**
   * Gets the value of the AltBillingAccountNumber field.
   * The number of the billing account which may only exist in billing system.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAltBillingAccountNumber();
  
  
  /**
   * Gets the value of the AsyncQuoteIssues field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AsyncQuoteIssue[] getAsyncQuoteIssues();
  
  
  /**
   * Gets the value of the BATransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BATransaction[] getBATransactions();
  
  
  /**
   * Gets the value of the BOPTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPTransaction[] getBOPTransactions();
  
  
  /**
   * Gets the value of the BaseState field.
   * State the policy period is based in.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getBaseState();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BillImmediatelyPercentage field.
   * @deprecated The percentage to bill immediately if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBillImmediatelyPercentage();
  
  
  /**
   * Gets the value of the BillingMethod field.
   * Billing Method (Agency Bill, Direct Bill, etc)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingMethod getBillingMethod();
  
  
  /**
   * Gets the value of the BranchName field.
   * The reference name of this branch of the job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBranchName();
  
  
  /**
   * Gets the value of the BranchNumber field.
   * The number of this branch of the job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBranchNumber();
  
  
  /**
   * Gets the value of the CPTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPTransaction[] getCPTransactions();
  
  
  /**
   * Gets the value of the Contingencies field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency[] getContingencies();
  
  
  /**
   * Gets the value of the DepositAmount field.
   * Deposit amount calculated from the deposit % and total cost subject to reporting
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDepositAmount();
  
  
  /**
   * Gets the value of the DepositAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDepositAmount_amt();
  
  
  /**
   * Gets the value of the DepositAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDepositAmount_cur();
  
  
  /**
   * Gets the value of the DepositCollected field.
   * @deprecated The deposit amount collected
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDepositCollected();
  
  
  /**
   * Gets the value of the DepositCollected_amt field.
   * @deprecated 
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDepositCollected_amt();
  
  
  /**
   * Gets the value of the DepositCollected_cur field.
   * @deprecated 
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDepositCollected_cur();
  
  
  /**
   * Gets the value of the DepositOverridePct field.
   * Override of the default reporting deposit % of the reporting pattern chosen
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDepositOverridePct();
  
  
  /**
   * Gets the value of the EffectiveDatedFields field.
   * Stores fields that change in effective time but do not fit in any policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EffectiveDatedFields getEffectiveDatedFields();
  
  
  /**
   * Gets the value of the EffectiveDatedFieldsArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EffectiveDatedFields[] getEffectiveDatedFieldsArray();
  
  
  public gw.pl.persistence.core.Key getEffectiveDatedFieldsID();
  
  
  /**
   * Gets the value of the EstimatedPremium field.
   * User estimate of total premium amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getEstimatedPremium();
  
  
  /**
   * Gets the value of the EstimatedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getEstimatedPremium_amt();
  
  
  /**
   * Gets the value of the EstimatedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getEstimatedPremium_cur();
  
  
  /**
   * Gets the value of the Forms field.
   * Forms associated with this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Form[] getForms();
  
  
  /**
   * Gets the value of the GLTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLTransaction[] getGLTransactions();
  
  
  /**
   * Gets the value of the HOPTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPTransaction[] getHOPTransactions();
  
  
  /**
   * Gets the value of the IMTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMTransaction[] getIMTransactions();
  
  
  /**
   * Gets the value of the InvoiceStreamCode field.
   * The public id of the invoice stream in billing system.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInvoiceStreamCode();
  
  
  /**
   * Gets the value of the InvoiceStreamOverrides field.
   * Fields which override the default fields of an InvoiceStream.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InvoiceStreamOverrides getInvoiceStreamOverrides();
  
  
  /**
   * Gets the value of the InvoiceStreamOverridesArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InvoiceStreamOverrides[] getInvoiceStreamOverridesArray();
  
  
  public gw.pl.persistence.core.Key getInvoiceStreamOverridesID();
  
  
  /**
   * Gets the value of the InvoicingMethod field.
   * The invoicing method for this PolicyPeriod
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InvoicingMethod getInvoicingMethod();
  
  
  /**
   * Gets the value of the Job field.
   * The job this policy period is part of.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the Lines field.
   * Lines (e.g. Auto, Property,etc.) of this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine[] getLines();
  
  
  /**
   * Gets the value of the LocationAutoNumberSeq field.
   * Sequence to autonumber policy locations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getLocationAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getLocationAutoNumberSeqID();
  
  
  /**
   * Gets the value of the LocationRisks field.
   * All reinsurable risks associated with policy locations on this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRisk[] getLocationRisks();
  
  
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Gets the value of the NewInvoiceStream field.
   * The new invoice stream created by this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BillingInvoiceStream getNewInvoiceStream();
  
  
  /**
   * Gets the value of the NewInvoiceStreamArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BillingInvoiceStream[] getNewInvoiceStreamArray();
  
  
  public gw.pl.persistence.core.Key getNewInvoiceStreamID();
  
  
  /**
   * Gets the value of the Notes field.
   * Notes associated with this PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes();
  
  
  /**
   * Gets the value of the PATransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PATransaction[] getPATransactions();
  
  
  /**
   * Gets the value of the PNIContactDenorm field.
   * The primary named insured's contact on the policy. Denorm field so contact is retained when the policyperiod is archived.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getPNIContactDenorm();
  
  
  public gw.pl.persistence.core.Key getPNIContactDenormID();
  
  
  /**
   * Gets the value of the PRActiveWorkflowArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PRActiveWorkflow[] getPRActiveWorkflowArray();
  
  
  /**
   * Gets the value of the Period field.
   * Branches with the same PeriodID are in the same period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPeriod();
  
  
  /**
   * Gets the value of the PeriodAnswers field.
   * Set of answers for this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PeriodAnswer[] getPeriodAnswers();
  
  
  public gw.pl.persistence.core.Key getPeriodID();
  
  
  /**
   * Gets the value of the Policy field.
   * The policy to which this period belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  /**
   * Gets the value of the PolicyContactRoles field.
   * The policy contact roles of this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyContactRole[] getPolicyContactRoles();
  
  
  /**
   * Gets the value of the PolicyFXRates field.
   * fx rates used for monetary amount conversions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyFXRate[] getPolicyFXRates();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyLocations field.
   * The period locations.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation[] getPolicyLocations();
  
  
  /**
   * Gets the value of the PolicyNumber field.
   * The policy number for this policy period. This value may be different from the core policy number on the associated Policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber();
  
  
  /**
   * Gets the value of the PolicyRisks field.
   * The reinsurable risk associated with this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyRisk[] getPolicyRisks();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   * Policy term information associated with this period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the PreferredCoverageCurrency field.
   * Preferred Coverage Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCoverageCurrency();
  
  
  /**
   * Gets the value of the PreferredSettlementCurrency field.
   * Preferred Settlement Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredSettlementCurrency();
  
  
  /**
   * Gets the value of the PrimaryInsuredName field.
   * The display name of the primary names insured (denormalization).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredName();
  
  
  /**
   * Gets the value of the PrimaryInsuredNameDenorm field.
   * denorm field for PrimaryInsuredName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredNameDenorm();
  
  
  /**
   * Gets the value of the ProducerCodeOfRecord field.
   * The producer code that created this policy in this period and should get the commissions.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfRecord();
  
  
  public gw.pl.persistence.core.Key getProducerCodeOfRecordID();
  
  
  /**
   * Gets the value of the QuoteCloneOriginalPeriod field.
   * Soft FK to the original policy period that this policy period was cloned from.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuoteCloneOriginalPeriod();
  
  
  /**
   * Gets the value of the QuoteCloneSequenceNumber field.
   * This is only used during policy quote clone.  It is a sequence number for the cloned quote.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getQuoteCloneSequenceNumber();
  
  
  /**
   * Gets the value of the QuoteIdentifier field.
   * If this PolicyPeriod originated from a HVQ quote, this field references that quote's ID.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuoteIdentifier();
  
  
  /**
   * Gets the value of the QuoteMaturityLevel field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.QuoteMaturityLevel getQuoteMaturityLevel();
  
  
  /**
   * Gets the value of the RIRiskVersionLists field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVersionList[] getRIRiskVersionLists();
  
  
  /**
   * Gets the value of the RateAsOfDate field.
   * The date the policy should be rated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRateAsOfDate();
  
  
  /**
   * Gets the value of the RefundCalcMethod field.
   * The method used to calculate the amount of refund due.  Once a policy is canceled, subsequent policy periods inherit this until it is reinstated, at which point this field is reset to null.  Also returns null if the cancellation cannot be found (e.g. if the cancellation was done in an external system).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalculationMethod getRefundCalcMethod();
  
  
  /**
   * Gets the value of the Segment field.
   * Market segment this policy period is in.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Segment getSegment();
  
  
  /**
   * Gets the value of the SelectedPaymentPlan field.
   * The selected payment plan for this period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PaymentPlanSummary getSelectedPaymentPlan();
  
  
  /**
   * Gets the value of the SelectedPaymentPlanArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PaymentPlanSummary[] getSelectedPaymentPlanArray();
  
  
  public gw.pl.persistence.core.Key getSelectedPaymentPlanID();
  
  
  /**
   * Gets the value of the SelectedTermType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TermType getSelectedTermType();
  
  
  /**
   * Gets the value of the SeriesCheckingPatternCode field.
   * The code of the pattern to use for creating and scheduling a series of checking audits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSeriesCheckingPatternCode();
  
  
  /**
   * Gets the value of the SingleCheckingPatternCode field.
   * The code of the pattern to use for creating and scheduling single checking audits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSingleCheckingPatternCode();
  
  
  /**
   * Gets the value of the SpecialHandling field.
   * special handling to be applied to the charges on a billing instruction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialHandling getSpecialHandling();
  
  
  /**
   * Gets the value of the Status field.
   * The period's status. This field can only be updated via workflow methods available on the various Job entities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyPeriodStatus getStatus();
  
  
  /**
   * Gets the value of the TaxSurchargesRPT field.
   * Total amount of tax and surcharges on the policy period. The total is denormalized for higher performance UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTaxSurchargesRPT();
  
  
  /**
   * Gets the value of the TaxSurchargesRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTaxSurchargesRPT_amt();
  
  
  /**
   * Gets the value of the TaxSurchargesRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTaxSurchargesRPT_cur();
  
  
  /**
   * Gets the value of the TemporaryCloneStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyPeriodCloneStatus getTemporaryCloneStatus();
  
  
  /**
   * Gets the value of the TermNumber field.
   * A sequence number that starts at 1 and is incremented on a renewal and rewrite, usually to distinguish between different periods of a same policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getTermNumber();
  
  
  /**
   * Gets the value of the TotalCostRPT field.
   * Total amount of all premium, taxes, and any other costs for the entire policy period. The total is denormalized for higher performance UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalCostRPT();
  
  
  /**
   * Gets the value of the TotalCostRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalCostRPT_amt();
  
  
  /**
   * Gets the value of the TotalCostRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalCostRPT_cur();
  
  
  /**
   * Gets the value of the TotalPremiumRPT field.
   * Total amount of all premium (but not taxes or any other costs) for the entire policy period. The total is denormalized for higher performance UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPremiumRPT();
  
  
  /**
   * Gets the value of the TotalPremiumRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPremiumRPT_amt();
  
  
  /**
   * Gets the value of the TotalPremiumRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPremiumRPT_cur();
  
  
  /**
   * Gets the value of the TransactionCostRPT field.
   * Total change in premium, taxes, and any other costs caused by a job. For a job that creates a new policy period (i.e. Submission, Renewal, or Rewrite), the TransactionCostRPT will be the same as the TotalCostRPT because there were no prior costs for the period. For mid-term jobs (Policy Change, Cancellation, etc.), this field represents the change in amount from the prior job. The total is denormalized for UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTransactionCostRPT();
  
  
  /**
   * Gets the value of the TransactionCostRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTransactionCostRPT_amt();
  
  
  /**
   * Gets the value of the TransactionCostRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTransactionCostRPT_cur();
  
  
  /**
   * Gets the value of the TransactionPremiumRPT field.
   * Total change in premium (but not taxes or any other costs) caused by a job. For a job that creates a new policy period (i.e. Submission, Renewal, or Rewrite), the TransactionPremiumRPT will be the same as the TotalPremiumRPT because there were no prior premiums for the period. For mid-term jobs (Policy Change, Cancellation, etc.), this field represents the change in amount from the prior job. The total is denormalized for UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTransactionPremiumRPT();
  
  
  /**
   * Gets the value of the TransactionPremiumRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTransactionPremiumRPT_amt();
  
  
  /**
   * Gets the value of the TransactionPremiumRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTransactionPremiumRPT_cur();
  
  
  /**
   * Gets the value of the UWCompany field.
   * Underwriting company that insures this policy.  This can only change on a Cancellation or Rewrite, never mid-term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWCompany getUWCompany();
  
  
  public gw.pl.persistence.core.Key getUWCompanyID();
  
  
  /**
   * Gets the value of the UWIssuesIncludingSoftDeleted field.
   * Issues generated during policy evaluation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssue[] getUWIssuesIncludingSoftDeleted();
  
  
  /**
   * Gets the value of the WCTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCTransaction[] getWCTransactions();
  
  
  /**
   * Gets the value of the Workflows field.
   * Set of workflows associated with this period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriodWorkflow[] getWorkflows();
  
  
  /**
   * Gets the value of the WorksheetContainer field.
   * ArchiveRoot for Worksheet data, if present
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetContainer getWorksheetContainer();
  
  
  /**
   * Gets the value of the WorksheetContainerArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetContainer[] getWorksheetContainerArray();
  
  
  public gw.pl.persistence.core.Key getWorksheetContainerID();
  
  
  /**
   * Gets the value of the WrittenDate field.
   * Nominally, the date this period was created. For reinstatements, it is the written date of the reinstated period. For rewrites, it can be the date of the rewrite or the date of the original period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getWrittenDate();
  
  
  /**
   * Gets the value of the AssignedRisk field.
   * Flag for policy/risk assigned by state requirement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAssignedRisk();
  
  
  /**
   * Gets the value of the EditLocked field.
   * Whether the PolicyPeriod is locked from edit by users without permission to edit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEditLocked();
  
  
  /**
   * Gets the value of the FailedOOSEEvaluation field.
   * True if this is a PolicyPeriod in an OOS job that has blocking UWIssues at a later slice than the current primary slice
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFailedOOSEEvaluation();
  
  
  /**
   * Gets the value of the FailedOOSEValidation field.
   * True if this is a draft PolicyPeriod in an OOS job that has failed validation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFailedOOSEValidation();
  
  
  /**
   * Gets the value of the Orphaned field.
   * Whether this is an orphaned policy period that should be purged by batch process
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOrphaned();
  
  
  /**
   * Gets the value of the OverrideBillingAllocation field.
   * @deprecated Whether to override the billing allocation for installments plan
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverrideBillingAllocation();
  
  
  /**
   * Gets the value of the QuoteHidden field.
   * Whether the quote is hidden from users without permission to view quote
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isQuoteHidden();
  
  
  /**
   * Gets the value of the ValidReinsurance field.
   * True if reinsurables were generated sucessfully.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isValidReinsurance();
  
  
  /**
   * Gets the value of the WaiveDepositChange field.
   * Whether to waive the deposit amount change from current policy period and the based on
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWaiveDepositChange();
  
  
  /**
   * Removes the given element from the APDTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromAPDTransactions(entity.APDTransaction element);
  
  
  /**
   * Removes the given element from the APDTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAPDTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the AsyncQuoteIssues array. This is achieved by marking the element for removal.
   */
  public void removeFromAsyncQuoteIssues(entity.AsyncQuoteIssue element);
  
  
  /**
   * Removes the given element from the AsyncQuoteIssues array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAsyncQuoteIssues(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BATransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromBATransactions(entity.BATransaction element);
  
  
  /**
   * Removes the given element from the BATransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBATransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BOPTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPTransactions(entity.BOPTransaction element);
  
  
  /**
   * Removes the given element from the BOPTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CPTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromCPTransactions(entity.CPTransaction element);
  
  
  /**
   * Removes the given element from the CPTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
   */
  public void removeFromContingencies(entity.Contingency element);
  
  
  /**
   * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContingencies(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the EffectiveDatedFieldsArray array. This is achieved by marking the element for removal.
   */
  public void removeFromEffectiveDatedFieldsArray(entity.EffectiveDatedFields element);
  
  
  /**
   * Removes the given element from the EffectiveDatedFieldsArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEffectiveDatedFieldsArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Forms array. This is achieved by marking the element for removal.
   */
  public void removeFromForms(entity.Form element);
  
  
  /**
   * Removes the given element from the Forms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromForms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GLTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromGLTransactions(entity.GLTransaction element);
  
  
  /**
   * Removes the given element from the GLTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPTransactions(entity.HOPTransaction element);
  
  
  /**
   * Removes the given element from the HOPTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromIMTransactions(entity.IMTransaction element);
  
  
  /**
   * Removes the given element from the IMTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the InvoiceStreamOverridesArray array. This is achieved by marking the element for removal.
   */
  public void removeFromInvoiceStreamOverridesArray(entity.InvoiceStreamOverrides element);
  
  
  /**
   * Removes the given element from the InvoiceStreamOverridesArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInvoiceStreamOverridesArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Lines array. This is achieved by marking the element for removal.
   */
  public void removeFromLines(entity.PolicyLine element);
  
  
  /**
   * Removes the given element from the Lines array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLines(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationRisks(entity.LocationRisk element);
  
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationRisks(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the NewInvoiceStreamArray array. This is achieved by marking the element for removal.
   */
  public void removeFromNewInvoiceStreamArray(entity.BillingInvoiceStream element);
  
  
  /**
   * Removes the given element from the NewInvoiceStreamArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNewInvoiceStreamArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   */
  public void removeFromNotes(entity.Note element);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PATransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromPATransactions(entity.PATransaction element);
  
  
  /**
   * Removes the given element from the PATransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPATransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PRActiveWorkflowArray array. This is achieved by marking the element for removal.
   */
  public void removeFromPRActiveWorkflowArray(entity.PRActiveWorkflow element);
  
  
  /**
   * Removes the given element from the PRActiveWorkflowArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPRActiveWorkflowArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PeriodAnswers array. This is achieved by marking the element for removal.
   */
  public void removeFromPeriodAnswers(entity.PeriodAnswer element);
  
  
  /**
   * Removes the given element from the PeriodAnswers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPeriodAnswers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyContactRoles array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyContactRoles(entity.PolicyContactRole element);
  
  
  /**
   * Removes the given element from the PolicyContactRoles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyContactRoles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyFXRates array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyFXRates(entity.PolicyFXRate element);
  
  
  /**
   * Removes the given element from the PolicyFXRates array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyFXRates(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyLocations array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyLocations(entity.PolicyLocation element);
  
  
  /**
   * Removes the given element from the PolicyLocations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyLocations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyRisks array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyRisks(entity.PolicyRisk element);
  
  
  /**
   * Removes the given element from the PolicyRisks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyRisks(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RIRiskVersionLists array. This is achieved by marking the element for removal.
   */
  public void removeFromRIRiskVersionLists(entity.RIRiskVersionList element);
  
  
  /**
   * Removes the given element from the RIRiskVersionLists array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRIRiskVersionLists(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the SelectedPaymentPlanArray array. This is achieved by marking the element for removal.
   */
  public void removeFromSelectedPaymentPlanArray(entity.PaymentPlanSummary element);
  
  
  /**
   * Removes the given element from the SelectedPaymentPlanArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSelectedPaymentPlanArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UWIssuesIncludingSoftDeleted array. This is achieved by marking the element for removal.
   */
  public void removeFromUWIssuesIncludingSoftDeleted(entity.UWIssue element);
  
  
  /**
   * Removes the given element from the UWIssuesIncludingSoftDeleted array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUWIssuesIncludingSoftDeleted(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WCTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromWCTransactions(entity.WCTransaction element);
  
  
  /**
   * Removes the given element from the WCTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Workflows array. This is achieved by marking the element for removal.
   */
  public void removeFromWorkflows(entity.PolicyPeriodWorkflow element);
  
  
  /**
   * Removes the given element from the Workflows array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWorkflows(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the WorksheetContainerArray array. This is achieved by marking the element for removal.
   */
  public void removeFromWorksheetContainerArray(entity.WorksheetContainer element);
  
  
  /**
   * Removes the given element from the WorksheetContainerArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWorksheetContainerArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the APDTransactions field.
   */
  public void setAPDTransactions(entity.APDTransaction[] value);
  
  
  /**
   * Sets the value of the ActiveWorkflow field.
   */
  public void setActiveWorkflow(entity.PolicyPeriodWorkflow value);
  
  
  public void setActiveWorkflowID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AllocationOfRemainder field.
   * @deprecated The method to allocate the remainder of cost if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  public void setAllocationOfRemainder(typekey.BillingRemainderAllocate value);
  
  
  /**
   * Sets the value of the AltBillingAccountNumber field.
   */
  public void setAltBillingAccountNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the AssignedRisk field.
   */
  public void setAssignedRisk(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AsyncQuoteIssues field.
   */
  public void setAsyncQuoteIssues(entity.AsyncQuoteIssue[] value);
  
  
  /**
   * Sets the value of the BATransactions field.
   */
  public void setBATransactions(entity.BATransaction[] value);
  
  
  /**
   * Sets the value of the BOPTransactions field.
   */
  public void setBOPTransactions(entity.BOPTransaction[] value);
  
  
  /**
   * Sets the value of the BaseState field.
   */
  public void setBaseState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.PolicyPeriod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BillImmediatelyPercentage field.
   * @deprecated The percentage to bill immediately if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  public void setBillImmediatelyPercentage(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the BillingMethod field.
   */
  public void setBillingMethod(typekey.BillingMethod value);
  
  
  /**
   * Sets the value of the BranchName field.
   */
  public void setBranchName(java.lang.String value);
  
  
  /**
   * Sets the value of the BranchNumber field.
   */
  public void setBranchNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the CPTransactions field.
   */
  public void setCPTransactions(entity.CPTransaction[] value);
  
  
  /**
   * Sets the value of the Contingencies field.
   */
  public void setContingencies(entity.Contingency[] value);
  
  
  /**
   * Sets the value of the DepositAmount field.
   */
  public void setDepositAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the DepositAmount_amt field.
   */
  public void setDepositAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DepositAmount_cur field.
   */
  public void setDepositAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the DepositCollected field.
   * @deprecated The deposit amount collected
   */
  @java.lang.Deprecated
  public void setDepositCollected(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the DepositCollected_amt field.
   * @deprecated 
   */
  @java.lang.Deprecated
  public void setDepositCollected_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DepositCollected_cur field.
   * @deprecated 
   */
  @java.lang.Deprecated
  public void setDepositCollected_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the DepositOverridePct field.
   */
  public void setDepositOverridePct(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the EditLocked field.
   */
  public void setEditLocked(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the EffectiveDatedFields field.
   */
  public void setEffectiveDatedFields(entity.EffectiveDatedFields value);
  
  
  /**
   * Sets the value of the EffectiveDatedFieldsArray field.
   */
  public void setEffectiveDatedFieldsArray(entity.EffectiveDatedFields[] value);
  
  
  public void setEffectiveDatedFieldsID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EstimatedPremium field.
   */
  public void setEstimatedPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the EstimatedPremium_amt field.
   */
  public void setEstimatedPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the EstimatedPremium_cur field.
   */
  public void setEstimatedPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the FailedOOSEEvaluation field.
   */
  public void setFailedOOSEEvaluation(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FailedOOSEValidation field.
   */
  public void setFailedOOSEValidation(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Forms field.
   */
  public void setForms(entity.Form[] value);
  
  
  /**
   * Sets the value of the GLTransactions field.
   */
  public void setGLTransactions(entity.GLTransaction[] value);
  
  
  /**
   * Sets the value of the HOPTransactions field.
   */
  public void setHOPTransactions(entity.HOPTransaction[] value);
  
  
  /**
   * Sets the value of the IMTransactions field.
   */
  public void setIMTransactions(entity.IMTransaction[] value);
  
  
  /**
   * Sets the value of the InvoiceStreamCode field.
   */
  public void setInvoiceStreamCode(java.lang.String value);
  
  
  /**
   * Sets the value of the InvoiceStreamOverrides field.
   */
  public void setInvoiceStreamOverrides(entity.InvoiceStreamOverrides value);
  
  
  /**
   * Sets the value of the InvoiceStreamOverridesArray field.
   */
  public void setInvoiceStreamOverridesArray(entity.InvoiceStreamOverrides[] value);
  
  
  public void setInvoiceStreamOverridesID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InvoicingMethod field.
   */
  public void setInvoicingMethod(typekey.InvoicingMethod value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Lines field.
   */
  public void setLines(entity.PolicyLine[] value);
  
  
  /**
   * Sets the value of the LocationAutoNumberSeq field.
   */
  public void setLocationAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setLocationAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LocationRisks field.
   */
  public void setLocationRisks(entity.LocationRisk[] value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NewInvoiceStream field.
   */
  public void setNewInvoiceStream(entity.BillingInvoiceStream value);
  
  
  /**
   * Sets the value of the NewInvoiceStreamArray field.
   */
  public void setNewInvoiceStreamArray(entity.BillingInvoiceStream[] value);
  
  
  public void setNewInvoiceStreamID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value);
  
  
  /**
   * Sets the value of the Orphaned field.
   */
  public void setOrphaned(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the OverrideBillingAllocation field.
   * @deprecated Whether to override the billing allocation for installments plan
   */
  @java.lang.Deprecated
  public void setOverrideBillingAllocation(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PATransactions field.
   */
  public void setPATransactions(entity.PATransaction[] value);
  
  
  /**
   * Sets the value of the PNIContactDenorm field.
   */
  public void setPNIContactDenorm(entity.Contact value);
  
  
  public void setPNIContactDenormID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PRActiveWorkflowArray field.
   */
  public void setPRActiveWorkflowArray(entity.PRActiveWorkflow[] value);
  
  
  /**
   * Sets the value of the Period field.
   */
  public void setPeriod(entity.PolicyPeriod value);
  
  
  /**
   * Sets the value of the PeriodAnswers field.
   */
  public void setPeriodAnswers(entity.PeriodAnswer[] value);
  
  
  public void setPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  /**
   * Sets the value of the PolicyContactRoles field.
   */
  public void setPolicyContactRoles(entity.PolicyContactRole[] value);
  
  
  /**
   * Sets the value of the PolicyFXRates field.
   */
  public void setPolicyFXRates(entity.PolicyFXRate[] value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLocations field.
   */
  public void setPolicyLocations(entity.PolicyLocation[] value);
  
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyRisks field.
   */
  public void setPolicyRisks(entity.PolicyRisk[] value);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the PreferredSettlementCurrency field.
   */
  public void setPreferredSettlementCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the PrimaryInsuredName field.
   */
  public void setPrimaryInsuredName(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryInsuredNameDenorm field.
   */
  public void setPrimaryInsuredNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the ProducerCodeOfRecord field.
   */
  public void setProducerCodeOfRecord(entity.ProducerCode value);
  
  
  public void setProducerCodeOfRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the QuoteCloneOriginalPeriod field.
   */
  public void setQuoteCloneOriginalPeriod(java.lang.String value);
  
  
  /**
   * Sets the value of the QuoteCloneSequenceNumber field.
   */
  public void setQuoteCloneSequenceNumber(java.lang.Long value);
  
  
  /**
   * Sets the value of the QuoteHidden field.
   */
  public void setQuoteHidden(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the QuoteIdentifier field.
   */
  public void setQuoteIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the QuoteMaturityLevel field.
   */
  public void setQuoteMaturityLevel(typekey.QuoteMaturityLevel value);
  
  
  /**
   * Sets the value of the RIRiskVersionLists field.
   */
  public void setRIRiskVersionLists(entity.RIRiskVersionList[] value);
  
  
  /**
   * Sets the value of the RateAsOfDate field.
   */
  public void setRateAsOfDate(java.util.Date value);
  
  
  /**
   * Sets the value of the RefundCalcMethod field.
   */
  public void setRefundCalcMethod(typekey.CalculationMethod value);
  
  
  /**
   * Sets the value of the Segment field.
   */
  public void setSegment(typekey.Segment value);
  
  
  /**
   * Sets the value of the SelectedPaymentPlan field.
   */
  public void setSelectedPaymentPlan(entity.PaymentPlanSummary value);
  
  
  /**
   * Sets the value of the SelectedPaymentPlanArray field.
   */
  public void setSelectedPaymentPlanArray(entity.PaymentPlanSummary[] value);
  
  
  public void setSelectedPaymentPlanID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SelectedTermType field.
   */
  public void setSelectedTermType(typekey.TermType value);
  
  
  /**
   * Sets the value of the SeriesCheckingPatternCode field.
   */
  public void setSeriesCheckingPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the SingleCheckingPatternCode field.
   */
  public void setSingleCheckingPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the SpecialHandling field.
   */
  public void setSpecialHandling(typekey.SpecialHandling value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.PolicyPeriodStatus value);
  
  
  /**
   * Sets the value of the TaxSurchargesRPT field.
   */
  public void setTaxSurchargesRPT(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TaxSurchargesRPT_amt field.
   */
  public void setTaxSurchargesRPT_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TaxSurchargesRPT_cur field.
   */
  public void setTaxSurchargesRPT_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TemporaryCloneStatus field.
   */
  public void setTemporaryCloneStatus(typekey.PolicyPeriodCloneStatus value);
  
  
  /**
   * Sets the value of the TermNumber field.
   */
  public void setTermNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the TotalCostRPT field.
   */
  public void setTotalCostRPT(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalCostRPT_amt field.
   */
  public void setTotalCostRPT_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalCostRPT_cur field.
   */
  public void setTotalCostRPT_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TotalPremiumRPT field.
   */
  public void setTotalPremiumRPT(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalPremiumRPT_amt field.
   */
  public void setTotalPremiumRPT_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalPremiumRPT_cur field.
   */
  public void setTotalPremiumRPT_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TransactionCostRPT field.
   */
  public void setTransactionCostRPT(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TransactionCostRPT_amt field.
   */
  public void setTransactionCostRPT_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TransactionCostRPT_cur field.
   */
  public void setTransactionCostRPT_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TransactionPremiumRPT field.
   */
  public void setTransactionPremiumRPT(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TransactionPremiumRPT_amt field.
   */
  public void setTransactionPremiumRPT_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TransactionPremiumRPT_cur field.
   */
  public void setTransactionPremiumRPT_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the UWCompany field.
   */
  public void setUWCompany(entity.UWCompany value);
  
  
  public void setUWCompanyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the UWIssuesIncludingSoftDeleted field.
   */
  public void setUWIssuesIncludingSoftDeleted(entity.UWIssue[] value);
  
  
  /**
   * Sets the value of the ValidReinsurance field.
   */
  public void setValidReinsurance(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WCTransactions field.
   */
  public void setWCTransactions(entity.WCTransaction[] value);
  
  
  /**
   * Sets the value of the WaiveDepositChange field.
   */
  public void setWaiveDepositChange(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Workflows field.
   */
  public void setWorkflows(entity.PolicyPeriodWorkflow[] value);
  
  
  /**
   * Sets the value of the WorksheetContainer field.
   */
  public void setWorksheetContainer(entity.WorksheetContainer value);
  
  
  /**
   * Sets the value of the WorksheetContainerArray field.
   */
  public void setWorksheetContainerArray(entity.WorksheetContainer[] value);
  
  
  public void setWorksheetContainerID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the WrittenDate field.
   */
  public void setWrittenDate(java.util.Date value);
  
  
  
}