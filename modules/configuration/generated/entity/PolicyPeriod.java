package entity;

/**
 * PolicyPeriod
 * Policy Period allows a point in time reconstruction of all key policy attributes.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriod.eti;PolicyPeriod.eix;PolicyPeriod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PolicyPeriod")
public class PolicyPeriod extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDatedBranch, entity.RootInfo, entity.FrozenSetMember, entity.AnswerContainer, entity.DestructionRootPinnable, entity.EventAware, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, gw.api.contingency.ContingencyCreator, gw.api.domain.DenormalizedFKOutOfDomainGraph, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory, gw.api.reinsurance.ReinsurableCoverable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PolicyPeriod>("entity.PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> APDTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "APDTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACTIVEWORKFLOW_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ActiveWorkflow");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ALLOCATIONOFREMAINDER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AllocationOfRemainder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ALLOWGAPSBEFORE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AllowGapsBefore");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ALTBILLINGACCOUNTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AltBillingAccountNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILURE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILUREDETAILS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailureDetails");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVESCHEMAINFO_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveSchemaInfo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ARCHIVESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ArchiveState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASSIGNEDRISK_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AssignedRisk");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ASYNCQUOTEISSUES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AsyncQuoteIssues");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BATRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BATransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BOPTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BOPTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BASESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BaseState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASEDONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BasedOnDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BILLIMMEDIATELYPERCENTAGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BillImmediatelyPercentage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BILLINGMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BillingMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BRANCHNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BranchName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BRANCHNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BranchNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CPTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CPTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CANCELLATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CancellationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CONTINGENCIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Contingencies");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> DEPOSITAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "DepositAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEPOSITAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DepositAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DEPOSITAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DepositAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> DEPOSITCOLLECTED_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "DepositCollected");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEPOSITCOLLECTED_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DepositCollected_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DEPOSITCOLLECTED_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DepositCollected_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEPOSITOVERRIDEPCT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DepositOverridePct");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTDESTROY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DoNotDestroy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDITEFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EditEffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDITLOCKED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EditLocked");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> EFFECTIVEDATEDFIELDS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "EffectiveDatedFields");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> EFFECTIVEDATEDFIELDSARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "EffectiveDatedFieldsArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ESTIMATEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "EstimatedPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ESTIMATEDPREMIUM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EstimatedPremium_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ESTIMATEDPREMIUM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "EstimatedPremium_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludeReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEDFROMARCHIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludedFromArchive");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FAILEDOOSEEVALUATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FailedOOSEEvaluation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FAILEDOOSEVALIDATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FailedOOSEValidation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Forms");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FUTUREPERIODS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FuturePeriods");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> GLTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "GLTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> HOPTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "HOPTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> IMTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "IMTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INVOICESTREAMCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InvoiceStreamCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INVOICESTREAMOVERRIDES_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "InvoiceStreamOverrides");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> INVOICESTREAMOVERRIDESARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "InvoiceStreamOverridesArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INVOICINGMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "InvoicingMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LINES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Lines");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LOCATIONAUTONUMBERSEQ_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LocationAutoNumberSeq");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOCATIONRISKS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LocationRisks");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCKED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Locked");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCKINGCOLUMN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LockingColumn");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MODELDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ModelDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MODELNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ModelNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MODELNUMBERINDEX_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ModelNumberIndex");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MOSTRECENTMODEL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MostRecentModel");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MOSTRECENTMODELINDEX_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MostRecentModelIndex");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> NEWINVOICESTREAM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "NewInvoiceStream");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NEWINVOICESTREAMARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "NewInvoiceStreamArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORPHANED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Orphaned");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEBILLINGALLOCATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideBillingAllocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PATRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PATransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PNICONTACTDENORM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PNIContactDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRACTIVEWORKFLOWARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PRActiveWorkflowArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Period");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PERIODANSWERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PeriodAnswers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PERIODEND_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PeriodEnd");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PERIODSTART_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PeriodStart");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYCONTACTROLES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyContactRoles");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYFXRATES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyFXRates");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYLOCATIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyLocations");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYRISKS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyRisks");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYTERM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyTerm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREEMPTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Preempted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDCOVERAGECURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredCoverageCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDSETTLEMENTCURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredSettlementCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYINSUREDNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryInsuredName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYINSUREDNAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryInsuredNameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PRODUCERCODEOFRECORD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProducerCodeOfRecord");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> QUOTECLONEORIGINALPERIOD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "QuoteCloneOriginalPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> QUOTECLONESEQUENCENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "QuoteCloneSequenceNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> QUOTEHIDDEN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "QuoteHidden");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> QUOTEIDENTIFIER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "QuoteIdentifier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> QUOTEMATURITYLEVEL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "QuoteMaturityLevel");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RIRISKVERSIONLISTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RIRiskVersionLists");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RATEASOFDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RateAsOfDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REFUNDCALCMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RefundCalcMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SEGMENT_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Segment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SELECTEDPAYMENTPLAN_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "SelectedPaymentPlan");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SELECTEDPAYMENTPLANARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "SelectedPaymentPlanArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SELECTEDTERMTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SelectedTermType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SERIESCHECKINGPATTERNCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeriesCheckingPatternCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SINGLECHECKINGPATTERNCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SingleCheckingPatternCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SPECIALHANDLING_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SpecialHandling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TAXSURCHARGESRPT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TaxSurchargesRPT");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TAXSURCHARGESRPT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TaxSurchargesRPT_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TAXSURCHARGESRPT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TaxSurchargesRPT_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEMPORARYBRANCH_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TemporaryBranch");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TEMPORARYCLONESTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TemporaryCloneStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TERMNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TermNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALCOSTRPT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalCostRPT");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALCOSTRPT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalCostRPT_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALCOSTRPT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalCostRPT_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALPREMIUMRPT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalPremiumRPT");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALPREMIUMRPT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalPremiumRPT_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALPREMIUMRPT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalPremiumRPT_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TRANSACTIONCOSTRPT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TransactionCostRPT");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TRANSACTIONCOSTRPT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TransactionCostRPT_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TRANSACTIONCOSTRPT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TransactionCostRPT_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TRANSACTIONPREMIUMRPT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TransactionPremiumRPT");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TRANSACTIONPREMIUMRPT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TransactionPremiumRPT_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TRANSACTIONPREMIUMRPT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TransactionPremiumRPT_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UWCOMPANY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UWCompany");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> UWISSUESINCLUDINGSOFTDELETED_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "UWIssuesIncludingSoftDeleted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VALIDREINSURANCE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ValidReinsurance");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> WCTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "WCTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WAIVEDEPOSITCHANGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "WaiveDepositChange");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> WORKFLOWS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Workflows");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> WORKSHEETCONTAINER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "WorksheetContainer");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> WORKSHEETCONTAINERARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "WorksheetContainerArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WRITTENDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "WrittenDate");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PolicyPeriodInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ALLOW_GAPS_BEFORE_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.ALLOW_GAPS_BEFORE_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASEDON_DATE_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.BASEDON_DATE_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDIT_EFFECTIVEDATE_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.EDIT_EFFECTIVEDATE_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FUTURE_PERIODS_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.FUTURE_PERIODS_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MODELNUMBER_INDEX_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.MODELNUMBER_INDEX_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MOST_RECENT_MODEL_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.MOST_RECENT_MODEL_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MOST_RECENT_MODEL_INDEX_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.MOST_RECENT_MODEL_INDEX_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PERIODID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.PERIODID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PERIOD_END_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.PERIOD_END_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PERIOD_START_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.PERIOD_START_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEMPORARY_BRANCH_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch.TEMPORARY_BRANCH_DYNPROP;
  
  public static final gw.api.domain.policy.period.PolicyPeriodFinder finder = com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods.finder;
  
  public static final com.guidewire.pc.domain.policy.period.PolicyPeriodStatusHelper statuses = com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods.statuses;
  
  public static final java.lang.String BINDSUBMISSION_EVENT = "BindSubmission";
  
  public static final java.lang.String CANCELPERIOD_EVENT = "CancelPeriod";
  
  public static final java.lang.String CHANGEPERIOD_EVENT = "ChangePeriod";
  
  public static final java.lang.String CREATEPERIOD_EVENT = "CreatePeriod";
  
  public static final java.lang.String FINALAUDIT_EVENT = "FinalAudit";
  
  public static final java.lang.String ISSUECANCELLATION_EVENT = "IssueCancellation";
  
  public static final java.lang.String ISSUEPERIOD_EVENT = "IssuePeriod";
  
  public static final java.lang.String ISSUEPOLICYCHANGE_EVENT = "IssuePolicyChange";
  
  public static final java.lang.String ISSUEREINSTATEMENT_EVENT = "IssueReinstatement";
  
  public static final java.lang.String ISSUERENEWAL_EVENT = "IssueRenewal";
  
  public static final java.lang.String ISSUEREWRITE_EVENT = "IssueRewrite";
  
  public static final java.lang.String ISSUESUBMISSION_EVENT = "IssueSubmission";
  
  public static final java.lang.String POLICYPERIODADDED_EVENT = "PolicyPeriodAdded";
  
  public static final java.lang.String POLICYPERIODCHANGED_EVENT = "PolicyPeriodChanged";
  
  public static final java.lang.String POLICYPERIODPURGED_EVENT = "PolicyPeriodPurged";
  
  public static final java.lang.String POLICYPERIODREMOVED_EVENT = "PolicyPeriodRemoved";
  
  public static final java.lang.String PREEMPTEDPERIOD_EVENT = "PreemptedPeriod";
  
  public static final java.lang.String PREMIUMREPORT_EVENT = "PremiumReport";
  
  public static final java.lang.String REINSTATEPERIOD_EVENT = "ReinstatePeriod";
  
  public static final java.lang.String RENEWPERIOD_EVENT = "RenewPeriod";
  
  public static final java.lang.String REQUESTQUOTE_EVENT = "RequestQuote";
  
  public static final java.lang.String REWRITEPERIOD_EVENT = "RewritePeriod";
  
  public static final java.lang.String SCHEDULEFINALAUDIT_EVENT = "ScheduleFinalAudit";
  
  public static final java.lang.String SENDCANCELLATIONNOTICES_EVENT = "SendCancellationNotices";
  
  public static final java.lang.String SENDNONRENEWAL_EVENT = "SendNonRenewal";
  
  public static final java.lang.String SENDNONRENEWALDOCUMENTS_EVENT = "SendNonRenewalDocuments";
  
  public static final java.lang.String SENDNOTTAKEN_EVENT = "SendNotTaken";
  
  public static final java.lang.String SENDNOTTAKENDOCUMENTS_EVENT = "SendNotTakenDocuments";
  
  public static final java.lang.String SENDRENEWALDOCUMENTS_EVENT = "SendRenewalDocuments";
  
  public static final java.lang.String SENDRESCINDNOTICES_EVENT = "SendRescindNotices";
  
  public static final java.lang.String WAIVEFINALAUDIT_EVENT = "WaiveFinalAudit";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PolicyPeriod()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PolicyPeriod(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected PolicyPeriod(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PolicyPeriodInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.PolicyPeriodInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public void accept(gw.api.domain.PinnableVisitor pinnableVisitor) {
    ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).accept(pinnableVisitor);
  }
  
  /**
   * Adds the given {@link entity.PolicyLocation} to the PolicyPeriod and auto-numbers it.
   * @param location the PolicyLocation to add to this PolicyPeriod
   */
  public void addAndNumberLocation(entity.PolicyLocation location) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addAndNumberLocation(location);
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Add a new {@link PolicyContactRole} of the given type to this PolicyPeriod ultimately connected to the given
   * {@link Contact}.  If the {@link entity.AccountContact} for this contact does not already
   * exist on the Account for this PolicyPeriod, the AccountContact is created.
   * If the {@link entity.AccountContactRole} appropriate for the given PolicyContactRole does
   * not exist on the AccountContact, it is created.
   * The PolicyContactRole is created in this PolicyPeriod's bundle.
   * @param contact The Contact that the PolicyNamedInsured ultimately refers to
   * @param role The Role to create for the given Contact on this PolicyPeriod
   *                given role on this Period
   * @return the created PolicyContactRole
   */
  public entity.PolicyContactRole addNewPolicyContactRoleForContact(entity.Contact contact, typekey.PolicyContactRole role) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addNewPolicyContactRoleForContact(contact, role);
  }
  
  public entity.PolicyContactRole addNewPolicyContactRoleForContactWithCheckProperties(entity.Contact contact, typekey.PolicyContactRole role, java.util.Map<gw.entity.IEntityPropertyInfo, java.lang.Object> preInsertCheckProperties) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addNewPolicyContactRoleForContactWithCheckProperties(contact, role, preInsertCheckProperties);
  }
  
  /**
   * Adds the given element to the APDTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAPDTransactions(entity.APDTransaction element) {
    __getInternalInterface().addArrayElement(APDTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the AsyncQuoteIssues array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAsyncQuoteIssues(entity.AsyncQuoteIssue element) {
    __getInternalInterface().addArrayElement(ASYNCQUOTEISSUES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the BATransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBATransactions(entity.BATransaction element) {
    __getInternalInterface().addArrayElement(BATRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the BOPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPTransactions(entity.BOPTransaction element) {
    __getInternalInterface().addArrayElement(BOPTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the CPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCPTransactions(entity.CPTransaction element) {
    __getInternalInterface().addArrayElement(CPTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Contingencies array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContingencies(entity.Contingency element) {
    __getInternalInterface().addArrayElement(CONTINGENCIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Forms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToForms(entity.Form element) {
    __getInternalInterface().addArrayElement(FORMS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the GLTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGLTransactions(entity.GLTransaction element) {
    __getInternalInterface().addArrayElement(GLTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the HOPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPTransactions(entity.HOPTransaction element) {
    __getInternalInterface().addArrayElement(HOPTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the IMTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMTransactions(entity.IMTransaction element) {
    __getInternalInterface().addArrayElement(IMTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Lines array. This is achieved by setting the parent foreign key to this entity instance.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void addToLines(entity.PolicyLine value) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addToLines(value);
  }
  
  /**
   * Adds the given element to the LocationRisks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationRisks(entity.LocationRisk element) {
    __getInternalInterface().addArrayElement(LOCATIONRISKS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element) {
    __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PATransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPATransactions(entity.PATransaction element) {
    __getInternalInterface().addArrayElement(PATRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PeriodAnswers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPeriodAnswers(entity.PeriodAnswer element) {
    __getInternalInterface().addArrayElement(PERIODANSWERS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PolicyContactRoles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyContactRoles(entity.PolicyContactRole element) {
    __getInternalInterface().addArrayElement(POLICYCONTACTROLES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PolicyFXRates array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyFXRates(entity.PolicyFXRate element) {
    __getInternalInterface().addArrayElement(POLICYFXRATES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PolicyLocations array. This is achieved by setting the parent foreign key to this entity instance.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void addToPolicyLocations(entity.PolicyLocation value) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addToPolicyLocations(value);
  }
  
  /**
   * Adds the given element to the PolicyRisks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyRisks(entity.PolicyRisk element) {
    __getInternalInterface().addArrayElement(POLICYRISKS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the RIRiskVersionLists array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRIRiskVersionLists(entity.RIRiskVersionList element) {
    __getInternalInterface().addArrayElement(RIRISKVERSIONLISTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the UWIssuesIncludingSoftDeleted array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUWIssuesIncludingSoftDeleted(entity.UWIssue element) {
    __getInternalInterface().addArrayElement(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the WCTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWCTransactions(entity.WCTransaction element) {
    __getInternalInterface().addArrayElement(WCTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Workflows array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWorkflows(entity.PolicyPeriodWorkflow element) {
    __getInternalInterface().addArrayElement(WORKFLOWS_PROP.get(), element);
  }
  
  /**
   * Applies changes from the sourcePeriod into this PolicyPeriod.  This is done by generating a list of diffs from the
   * sourcePeriod to its BasedOn period, then applying any applicable diffs to this branch, and finally doing some
   * cleanup
   * @param sourcePeriod the original branch to generate diffs from
   */
  public void applyChangesFromBranch(entity.PolicyPeriod sourcePeriod) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).applyChangesFromBranch(sourcePeriod);
  }
  
  /**
   * Applies changes from the sourcePeriod into this PolicyPeriod.  This is done by generating a list of diffs from the
   * sourcePeriod to its BasedOn period.  Currently there is no support for directly applying diffs as of a different
   * effective date, so an equivalent set of actions are taken to simulated applying these diffs, and finally doing some
   * cleanup
   * @param sourcePeriod the original branch to generate diffs from
   * @param effectiveDate the new effective date
   */
  public void applyChangesFromBranchForDate(entity.PolicyPeriod sourcePeriod, java.util.Date effectiveDate) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).applyChangesFromBranchForDate(sourcePeriod, effectiveDate);
  }
  
  /**
   * Can this location be safely removed?  This is determined by the customer-defined implementation of
   * {@link gw.api.policy.PolicyLineJavaMethods#canSafelyDeleteLocation(entity.PolicyLocation)}
   * @param location - the PolicyLocation to be checked
   * @return false if the location is associated with data that will be broken by its removal
   */
  public boolean canRemoveLocation(entity.PolicyLocation location) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).canRemoveLocation(location);
  }
  
  /**
   * This method will return true if this object can be restored at this time.  There are two possible reason why this
   * would be false.  1.  the object was not archived in the first place; 2.  The archive source is not currently available
   * @return true if okay to restore
   */
  public boolean canRestore() {
    return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).canRestore();
  }
  
  /**
   * Marks this PolicyPeriod as canceled as of the given cancellationDate
   * @param cancellationDate the date this PolicyPeriod is (or will be) canceled
   */
  public void cancel(java.util.Date cancellationDate) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).cancel(cancellationDate);
  }
  
  /**
   * Sets the given {@link Address} as the {@link entity.PolicyAddress} for this PolicyPeriod.  The supplied Address must
   * be an Address (Primary or other) of the {@link entity.PolicyPeriod#getPrimaryNamedInsured() PrimaryNamedInsured}.
   * This has the side effect of creating the PolicyAddress if it does not yet exist.
   * @param address the Address to set as the PolicyAddress for this PolicyPeriod.
   */
  public void changePolicyAddressTo(entity.Address address) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).changePolicyAddressTo(address);
  }
  
  /**
   * Set the <code>contact</code> as the primary named insured on this policy if it isn't already.
   * This has the side-effect of<ul>
   * <li>creating the AccountContact for the contact if one does already exist
   * <li>making the account contact a NamedInsured if it isn't already one
   * <li>making the account contact a PolicyPriNamedInsured if it isn't already one
   * <li>removing the PolicyPriNamedInsured role from the previous primary named insured
   * <li>removing any LocationNamedInsureds on acctContact; the primary named insured is the default named insured for all locations
   * <li>denormalizing the primary insured name
   * <li>calling <code>changePolicyAddressTo(address)</code> with the primary address of the contact of the primary named insured
   * </ul>
   * @param contact the Contact to set as the Primary Named Insured for this PolicyPeriod.
   */
  public void changePrimaryNamedInsuredTo(entity.Contact contact) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).changePrimaryNamedInsuredTo(contact);
  }
  
  /**
   * Set the <code>contact</code> as the secondary named insured on this policy period if it isn't already.
   * This has the side-effect of<ul>
   * <li>creating the AccountContact for the contact if one does already exist
   * <li>making the account contact a NamedInsured if it isn't already one
   * <li>making the account contact a PolicySecNamedInsured if it isn't already one
   * <li>removing the PolicySecNamedInsured role from the previous secondary named insured
   * </ul>
   * It throws an exception if the account contact is the primary named insured.
   * @param contact the Contact to set as Secondary Named Insured for this PolicyPeriod.
   */
  public void changeSecondaryNamedInsuredTo(entity.Contact contact) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).changeSecondaryNamedInsuredTo(contact);
  }
  
  /**
   * Checks all answers stored on this container against the availability of the questions defined in
   * the product model.
   * @return a list of issues encountered
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel() {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel(gw.api.productmodel.QuestionSet[] questionSetsToSync) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel(questionSetsToSync);
  }
  
  /**
   * Checks for any Overlaps or disallowed Gaps in Bound PolicyPeriods on this Policy. <em>DO NOT<em/>call this
   * method, it should only be used by internal calls to verify Policy Effective Dates.
   */
  public void checkForOverlapsAndGaps() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).checkForOverlapsAndGaps();
  }
  
  /**
   * Returns all issues involving the selected {@link Offering} on this period.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @return the ProductModelSyncIssues involving which Offering is selected for this PolicyPeriod.
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkOfferingAgainstProductModel() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).checkOfferingAgainstProductModel();
  }
  
  /**
   * Returns all {@link ProductModelSyncIssue} involving the availability of {@link PolicyLine PolicyLines} due
   * to the selected offering on this period.  None of the actions involved will be taken at this point; this
   * will just return information about any potential lines being unavailable.
   * @return the ProductModelSyncIssues involving which PolicyLines are available for this PolicyPeriod based
   * on which Offering is selected.
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkPolicyLinesAgainstProductModel() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).checkPolicyLinesAgainstProductModel();
  }
  
  /**
   * Removes all the {@link Transaction Transactions} in the PolicyPeriod.
   */
  public void clearAllTransactions() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).clearAllTransactions();
  }
  
  /**
   * Clears any Question/QuestionFilter dependencies that have been cached. Should be
   * called before displaying a question set in the app.
   */
  public void clearQuestionDependencies() {
    ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).clearQuestionDependencies();
  }
  
  /**
   * Clear notification that a future bound period existed when this branch was
   * promoted.
   */
  public void clearResolveWithFuturePeriods() {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).clearResolveWithFuturePeriods();
  }
  
  /**
   * Clones the given {@link EffDated} into this branch with the given effective and expiration dates. The given dates
   * must be within the effective range of this period.
   * @param bean the EffDated bean to clone
   * @param effectiveDate the new Effective Date for the cloned bean
   * @param expirationDate the new Expiration Date for the cloned bean
   * @return the cloned bean in Slice mode
   */
  public entity.EffDated cloneBeanIntoSlice(entity.EffDated bean, java.util.Date effectiveDate, java.util.Date expirationDate) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).cloneBeanIntoSlice(bean, effectiveDate, expirationDate);
  }
  
  /**
   * Clone this policy period to edit the effective date.
   * <ol>
   * <li>Creates a new PolicyPeriod from the {@link #getBasedOn()}</li>
   * <li>Modify the job to be associated with the cloned policy period this policy period.</li>
   * <li>Links this PolicyPeriod to the same PolicyTerm as this PolicyPeriod.</li>
   * </ol>
   * @return the newly cloned PolicyPeriod
   */
  public entity.PolicyPeriod cloneBranchForEditingEffectiveDate() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).cloneBranchForEditingEffectiveDate();
  }
  
  /**
   * Generates the differences between this PolicyPeriod and the passed in PolicyPeriod for the given
   * {@link DiffReason}.  The PolicyPeriods are compared as of their given {@link entity.PolicyPeriod#getSliceDate() Slice Dates};
   * if either PolicyPeriod is not sliced, then it is sliced as of its {@link entity.PolicyPeriod#getEditEffectiveDate() Edit Effective Date}.
   * The base PolicyPeriod is the PolicyPeriod with the later Slice Date, or this PolicyPeriod if the Slice Dates
   * are equal.  The Differences are generated by calling
   * {@link gw.plugin.diff.IPolicyPeriodDiffPlugin#compareBranches(typekey.DiffReason, entity.PolicyPeriod, entity.PolicyPeriod)}
   * @param diffReason The DiffReason to use when generating and filtering differences
   * @param p1 the PolicyPeriod to compare this one to
   * @return the set of DiffItems representing the differences between this PolicyPeriod and the passed in one for the given DiffReason
   */
  public java.util.List<gw.api.diff.DiffItem> compareTo(typekey.DiffReason diffReason, entity.PolicyPeriod p1) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).compareTo(diffReason, p1);
  }
  
  /**
   * Mark the current Active Workflow into a complete status and delete the associated work item
   */
  public void completeActiveWorkflow() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).completeActiveWorkflow();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Creates a copy of this PolicyPeriod into a new PolicyPeriod in the given {@link Policy}.  Creates
   * a new {@link entity.PolicyTerm} in the target Policy to hold the new PolicyPeriod.  The caller of this method
   * is responsible for creating a suitable {@link Job} to hold the new PolicyPeriod.  This method is intended
   * to be used for functionality such as Copy New Submission.
   * @param policy the Policy to create the draft PolicyPeriod in
   * @return a new PolicyPeriod in Draft status in the given Policy
   */
  public entity.PolicyPeriod copyBranchIntoNewPolicy(entity.Policy policy) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).copyBranchIntoNewPolicy(policy);
  }
  
  /**
   * Creates a copy of this PolicyPeriod into a new PolicyPeriod in a different {@link Policy}.  The
   * BasedOn linke for the new PolicyPeriod is determeind by the passed in {@link BasedOnHandling}.  Creates
   * a new {@link entity.PolicyTerm} in the target Policy to hold the new PolicyPeriod.  The caller of this method is
   * responsible for creating a suitable {@link Job} to hold the new PolicyPeriod.  This method is intended
   * to be sued for functionality such as Rewrite New Account.
   * @param policy the new policy we are going to copy the branch into
   * @param basedOnHandling How to associate the new branch with this branch through the BasedOn link
   * @return New PolicyPeriod in Draft Status in the given Policy
   */
  public entity.PolicyPeriod copyBranchIntoNewPolicy(entity.Policy policy, com.guidewire.pl.system.entity.proxy.BasedOnHandling basedOnHandling) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).copyBranchIntoNewPolicy(policy, basedOnHandling);
  }
  
  /**
   * Creates an instance of {@link PolicyPeriodWorkflow} of the given workflow subtype.
   * The new workflow will displace any previously established active workflows, but all
   * workflows started this way will be available on the Workflows array unless
   * they are explicitly removed.
   * <p>
   * NOTE: This method does not start the workflow.
   * @param workflowSubtype type of workflow to create for this period
   * @throws IllegalArgumentException if the specified version for the workflow
   *                                  does not exist.
   * @return the newly created PolicyPeriodWorkflow
   */
  public entity.PolicyPeriodWorkflow createActiveWorkflow(typekey.Workflow workflowSubtype) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createActiveWorkflow(workflowSubtype);
  }
  
  /**
   * Creates an answer for the given question and sets its value to the question's
   * default answer value, if any.
   * @param question the question to create an answer for
   * @throws IllegalStateException if an answer has already been allocated for the
   * question.
   * @return the created answer
   */
  public entity.PCAnswerDelegate createAnswer(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).createAnswer(question);
  }
  
  /**
   * Creates a contingency with the proper foreign keys set
   * @return Contingency
   */
  public entity.Contingency createContingency() {
    return ((gw.api.contingency.ContingencyCreator)__getDelegateManager().getImplementation("gw.api.contingency.ContingencyCreator")).createContingency();
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description);
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description, java.lang.String originalValue, java.lang.String newValue) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description, originalValue, newValue);
  }
  
  /**
   * Like {@link #createDraftBranchInSamePeriod(Date)}, but creates the new PolicyPeriod
   * in a brand new {@link entity.PolicyTerm} based on the passed-in effective date and
   * {@link TermType}.
   * @param effDate the effective date of the new PolicyPeriod
   * @param expDate expiration date of the new PolicyPeriod. IF NULL, will be
   *                calculated from the eff date & term type. IF NON-NULL, will be
   *                constrained within the allowed values for the eff date &
   *                term type
   * @return a new PolicyPeriod based on this PolicyPeriod, with the new period's status set to
   * Draft in a newly created PolicyTerm with effective and expiration dates as specified
   */
  public entity.PolicyPeriod createDraftBranchInNewPeriod(java.util.Date effDate, java.util.Date expDate) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createDraftBranchInNewPeriod(effDate, expDate);
  }
  
  /**
   * Creates and returns a new draft PolicyPeriod based on this PolicyPeriod (which is not
   * necessarily bound; consider the case of multi-quote).
   * <p>
   * Also adds the newly created PolicyPeriod to the {@link Policy}. Futhermore, if the new
   * PolicyPeriod does not have a primary named insured, a new one is created
   * and added from the associated Account (see {@link #maybeCreatePrimaryNamedInsuredFromMainAccountContact()}).
   * <p>
   * Creates the draft PolicyPeriod in the same {@link entity.PolicyTerm} as this PolicyPeriod
   * @param editEffectiveDate the EditEffectiveDate for the newly created PolicyPeriod
   * @return a draft PolicyPeriod (i.e. new BranchID) with its status set to Draft and
   * in the same PolicyTerm as this PolicyPeriod.
   */
  public entity.PolicyPeriod createDraftBranchInSamePeriod(java.util.Date editEffectiveDate) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createDraftBranchInSamePeriod(editEffectiveDate);
  }
  
  /**
   * Creates a new PolicyPeriod from this PolicyPeriod in the same {@link entity.PolicyTerm} and {@link Job}
   * for Multi-Quote.
   * @return a new PolicyPeriod with status set to Draft copied from this PolicyPeriod in the
   * same PolicyTerm and Job as this PolicyPeriod.
   */
  public entity.PolicyPeriod createDraftMultiVersionJobBranch() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createDraftMultiVersionJobBranch();
  }
  
  /**
   * Handles all unhandled preemptions associated with this period. In
   * particular, if this period has no unhandled preemptions, this method is a
   * no-op. Otherwise, this method: <ol> <li>marks all preemptions as
   * handled;</li> <li>in the case of a normal internal preemption, sets the
   * "BasedOn" period of the head period to point to the new most recent prior
   * bound period stored in PolicyCenter;</li> <li>in the case of a future
   * preemption where PolicyCenter is the system-of-record (SOR) for the policy,
   * sets this period's "OOSJob" bit to indicate this period is out-of-sequence
   * (if it was not so marked already); and</li> <li>deletes any superseding
   * periods that may have existed; and</li> <li>sets this period's "Canceled"
   * bit to match the "Canceled" bit of the normal preempting period that was
   * bound most recently.</li> <li>synchronizes changes to the main branch's
   * EUBasis data</li> </ol><p>
   * <p>
   * All modified entities are loaded into this period's bundle, but this method
   * does not commit that bundle. On the other hand, the superseding periods (if
   * any) are deleted using a separate bundle, which <em>is</em> committed.<p>
   * <p>
   * The changes made to any normally preempting period must still be folded
   * into this preempted period manually by the user.
   * @return the newly created PolicyPeriod with the correct BasedOn and preemptions marked
   * as handled.
   */
  public entity.PolicyPeriod createNewBranchForPreemption() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createNewBranchForPreemption();
  }
  
  /**
   * Creates a {@link PolicyLine} based on the given {@link PolicyLinePattern} and adds it to this Period's
   * array of PolicyLines.  The entity type must be a valid entity type defined in metadata and must have a
   * defined PolicyLinePattern.
   * @param linePattern 
   */
  public void createPolicyLine(gw.api.productmodel.PolicyLinePattern linePattern) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createPolicyLine(linePattern);
  }
  
  /**
   * Create the reinsurable risk from this reinsurable coverable.
   * @return the applicable reinsurable risk
   */
  public entity.Reinsurable createReinsurableRisk() {
    return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).createReinsurableRisk();
  }
  
  /**
   * Creates an instance of {@link PolicyPeriodWorkflow}of the given workflow subtype,
   * and associates it with this PolicyPeriod. The workflow will not be considered
   * the active workflow.
   * <p>
   * NOTE: This method does not start the workflow.
   * @param workflowSubtype type of workflow to create for this period
   * @throws IllegalArgumentException if the specified version for the workflow
   *                                  does not exist.
   * @return the newly created PolicyPeriodWorkflow
   */
  public entity.PolicyPeriodWorkflow createWorkflow(typekey.Workflow workflowSubtype) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createWorkflow(workflowSubtype);
  }
  
  public boolean denormalizedFKIsCorrect() {
    return ((gw.api.domain.DenormalizedFKOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.DenormalizedFKOutOfDomainGraph")).denormalizedFKIsCorrect();
  }
  
  /**
   * Queue this PolicyPeriod for Ceding Premium for Reinsurance.  The PolicyPeriod will not be queued if Reinsurance
   * is not enabled.
   * @param reason the RIRecalcReason for queuing this PolicyPeriod for premium ceding
   * @param comment an optional comment
   */
  public void enqueueForCededPremiumCalculation(typekey.RIRecalcReason reason, java.lang.String comment) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).enqueueForCededPremiumCalculation(reason, comment);
  }
  
  /**
   * Wraps up the post-rating process and releases the Quoting Commit token.  If the PolicyPeriod is still stuck in a
   * QUOTING status, (meaning that the post-rating quote itself did not complete), it is put back to RATED status; otherwise
   * it remains in the current status.
   */
  public void finishPostRatingQuoting() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).finishPostRatingQuoting();
  }
  
  /**
   * Wraps up the quoting process and releases the Quoting Commit token.  If the PolicyPeriod is still stuck in a
   * QUOTING status, (meaning that the quote itself did not complete), it is put back to DRAFT status; otherwise
   * it remains in the current status.
   */
  public void finishQuoting() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).finishQuoting();
  }
  
  /**
   * Wraps up the rating process and releases the Quoting Commit token.  If the PolicyPeriod is still stuck in a
   * QUOTING status, (meaning that the rate itself did not complete), it is put back to DRAFT status; otherwise
   * it remains in the current status.
   */
  public void finishRating() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).finishRating();
  }
  
  /**
   * Executes the custom plugin for generating the current period policy number
   * for a period of a policy. This policy period is passed as the sole argument
   * to the function.<p>
   * <p>
   * Unlike the core policy number associated with the root Policy object and
   * shared by all periods of the policy, the current period policy number is
   * associated with each PolicyPeriod instance and may vary from period to
   * period. This method is invoked on the initial period of a policy (as part
   * of a new submission) and on policy renewal.
   * @return the new policy number to set on the PolicyPeriod.
   */
  public java.lang.String genNewPeriodPolicyNumber() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).genNewPeriodPolicyNumber();
  }
  
  /**
   * Gets the value of the APDTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDTransaction[] getAPDTransactions() {
    return (entity.APDTransaction[])__getInternalInterface().getFieldValue(APDTRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the ActiveWorkflow field.
   * The workflow that is active from the perspective of the UI. This workflow will be polled when the UI is waiting for results.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriodWorkflow getActiveWorkflow() {
    return (entity.PolicyPeriodWorkflow)__getInternalInterface().getFieldValue(ACTIVEWORKFLOW_PROP.get());
  }
  
  /**
   * Returns all the {@link AccountSyncable AccountSyncables} in the current and all future OOS slices (as future OOS
   * slices are edited at the same time, we have to perform AccountSyncable operations on them at the same time as well)
   * @return all AccountSyncables for this PolicyPeriod, including any from future OOS slices
   */
  public gw.api.domain.account.AccountSyncable[] getAllAccountSyncables() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllAccountSyncables();
  }
  
  /**
   * Return all Costs across the term, in window mode.  This is basically an
   * aggregate of the window costs from each line that ever existed on the
   * period.
   * @return All Costs in window mode across the Effective Dates of the PolicyPeriod
   */
  public java.util.Set<entity.Cost> getAllCosts() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllCosts();
  }
  
  /**
   * Returns all Covered {@link Jurisdiction Jurisdictions} on all {@link PolicyLine PolicyLines} in this PolicyPeriod.
   * @return The union of all covered states on all lines in this period.
   */
  public java.util.Set<typekey.Jurisdiction> getAllCoveredStates() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllCoveredStates();
  }
  
  /**
   * Returns a sorted list of distinct effective and expiration dates that
   * exist on EffDated beans in the branch.
   * <p/>
   * Looking at every effective and expiration date of every bean in the branch to build
   * this list is expensive. Call this once then cache the result if you know
   * that the beans won't change while you use this information.
   * @return A sorted list of distinct effective and expiration dates that
   *         exists in the branch.
   */
  public java.util.List<java.util.Date> getAllEffectiveDates() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getAllEffectiveDates();
  }
  
  /**
   * Return all the {@link Transaction Transactions} in the PolicyPeriod.
   * @return all Transactions in the PolicyPeriod
   */
  public java.util.Set<entity.Transaction> getAllTransactions() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllTransactions();
  }
  
  /**
   * Gets the value of the AllocationOfRemainder field.
   * @deprecated The method to allocate the remainder of cost if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingRemainderAllocate getAllocationOfRemainder() {
    return (typekey.BillingRemainderAllocate)__getInternalInterface().getFieldValue(ALLOCATIONOFREMAINDER_PROP.get());
  }
  
  /**
   * Gets the value of the AltBillingAccountNumber field.
   * The number of the billing account which may only exist in billing system.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAltBillingAccountNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ALTBILLINGACCOUNTNUMBER_PROP.get());
  }
  
  /**
   * Returns the answer to the given question, or null if none has been allocated
   * yet.
   * @param question the question to get the answer for
   * @return the answer for the given question
   */
  public entity.PCAnswerDelegate getAnswer(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswer(question);
  }
  
  /**
   * Gets the actual value of the answer. If the answer is undefined on this
   * entity, use the default answer if there is one, else null.
   * @param question the question to get the answer value for
   * @return the answer value
   */
  public java.lang.Object getAnswerValue(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswerValue(question);
  }
  
  public entity.PCAnswerDelegate[] getAnswers() {
    return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAnswers();
  }
  
  public int getApplicationMajorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getApplicationMajorVersion();
  }
  
  public int getApplicationMinorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getApplicationMinorVersion();
  }
  
  /**
   * Gets the value of the ArchiveDate field.
   * When archiving was attempted on the root. Null if we never attempted to archive it.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getArchiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ARCHIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveFailure field.
   * Short version of the reason for a failure to archive
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveFailure getArchiveFailure() {
    return (entity.ArchiveFailure)__getInternalInterface().getFieldValue(ARCHIVEFAILURE_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveFailureDetails field.
   * Full details of archive failure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveFailureDetails getArchiveFailureDetails() {
    return (entity.ArchiveFailureDetails)__getInternalInterface().getFieldValue(ARCHIVEFAILUREDETAILS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveSchemaInfo field.
   * Schema version at which the root was archived or null if it was not archived
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UpgradeDatamodelInfo getArchiveSchemaInfo() {
    return (entity.UpgradeDatamodelInfo)__getInternalInterface().getFieldValue(ARCHIVESCHEMAINFO_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveState field.
   * The archive state of the graph
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ArchiveState getArchiveState() {
    return (typekey.ArchiveState)__getInternalInterface().getFieldValue(ARCHIVESTATE_PROP.get());
  }
  
  public entity.PolicyPeriod getAssociatedPolicyPeriod() {
    return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAssociatedPolicyPeriod();
  }
  
  /**
   * Gets the value of the AsyncQuoteIssues field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AsyncQuoteIssue[] getAsyncQuoteIssues() {
    return (entity.AsyncQuoteIssue[])__getInternalInterface().getFieldValue(ASYNCQUOTEISSUES_PROP.get());
  }
  
  /**
   * Returns the {@link Audit} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not an Audit
   * @return the Audit Job associated with this PolicyPeriod, null if this is not an Audit Job
   */
  public entity.Audit getAudit() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAudit();
  }
  
  /**
   * Return the AuditInformations associated with this PolicyPeriod.
   * @return all AuditInformations associated with this PolicyPeriod
   */
  public entity.AuditInformation[] getAuditInformations() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAuditInformations();
  }
  
  /**
   * Gets the value of the BATransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BATransaction[] getBATransactions() {
    return (entity.BATransaction[])__getInternalInterface().getFieldValue(BATRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the BOPTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPTransaction[] getBOPTransactions() {
    return (entity.BOPTransaction[])__getInternalInterface().getFieldValue(BOPTRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the BaseState field.
   * State the policy period is based in.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getBaseState() {
    return (typekey.Jurisdiction)__getInternalInterface().getFieldValue(BASESTATE_PROP.get());
  }
  
  public entity.PolicyPeriod getBasedOn() {
    return (entity.PolicyPeriod)__getInternalInterface().getBasedOnUntyped();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getBasedOnDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(BASEDONDATE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBasedOnValue() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the BillImmediatelyPercentage field.
   * @deprecated The percentage to bill immediately if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBillImmediatelyPercentage() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(BILLIMMEDIATELYPERCENTAGE_PROP.get());
  }
  
  /**
   * Gets the value of the BillingMethod field.
   * Billing Method (Agency Bill, Direct Bill, etc)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingMethod getBillingMethod() {
    return (typekey.BillingMethod)__getInternalInterface().getFieldValue(BILLINGMETHOD_PROP.get());
  }
  
  /**
   * Gets the value of the BranchName field.
   * The reference name of this branch of the job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBranchName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BRANCHNAME_PROP.get());
  }
  
  /**
   * Gets the value of the BranchNumber field.
   * The number of this branch of the job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBranchNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(BRANCHNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the CPTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPTransaction[] getCPTransactions() {
    return (entity.CPTransaction[])__getInternalInterface().getFieldValue(CPTRANSACTIONS_PROP.get());
  }
  
  /**
   * Returns the {@link Cancellation} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not a Cancellation
   * @return the Cancellation Job associated with this PolicyPeriod, null if this is not a Cancellation Job
   */
  public entity.Cancellation getCancellation() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getCancellation();
  }
  
  /**
   * Gets the value of the CancellationDate field.
   * Date this period was canceled, or null if still active
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCancellationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CANCELLATIONDATE_PROP.get());
  }
  
  /**
   * Gets the ID of the container to which this branch belongs.
   */
  public gw.pl.persistence.core.Key getContainerId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getContainerId();
  }
  
  /**
   * Gets the container to which this branch belongs.
   */
  public entity.EffDatedContainer getContainerUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getContainerUntyped();
  }
  
  /**
   * Gets the value of the Contingencies field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency[] getContingencies() {
    return (entity.Contingency[])__getInternalInterface().getFieldValue(CONTINGENCIES_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Returns all {@link entity.PolicyLocation PolicyLocations} from the current slice date and any added to the PolicyPeriod
   * after the current slice date.
   * @return an array of Policy Locations from current and future slices.
   */
  public entity.PolicyLocation[] getCurrentAndFutureLocations() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getCurrentAndFutureLocations();
  }
  
  /**
   * Gets the value of the DepositAmount field.
   * Deposit amount calculated from the deposit % and total cost subject to reporting
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDepositAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DEPOSITAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the DepositAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDepositAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEPOSITAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the DepositAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDepositAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(DEPOSITAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the DepositCollected field.
   * @deprecated The deposit amount collected
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDepositCollected() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DEPOSITCOLLECTED_PROP.get());
  }
  
  /**
   * Gets the value of the DepositCollected_amt field.
   * @deprecated 
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDepositCollected_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEPOSITCOLLECTED_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the DepositCollected_cur field.
   * @deprecated 
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDepositCollected_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(DEPOSITCOLLECTED_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the DepositOverridePct field.
   * Override of the default reporting deposit % of the reporting pattern chosen
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDepositOverridePct() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEPOSITOVERRIDEPCT_PROP.get());
  }
  
  /**
   * Generates the differences between this PolicyPeriod and its {@link #getBasedOn() Based On PolicyPeriod} for the
   * given {@link DiffReason}.  If there is no BasedOn for this PolicyPeriod, an empty List of {@link DiffItem DiffItems}
   * is returned.  {@link gw.api.domain.account.AccountSyncable#prepareForDiff()} is called for each
   * {@link AccountSyncable} on this PolicyPeriod prior to generating the DiffItems.
   * @param diffReason the DiffReason to use when generating and filtering differences
   * @return the set of DiffItems representing the changes in this PolicyPeriod from its BasedOn for the given DiffReason
   */
  public java.util.List<gw.api.diff.DiffItem> getDiffItems(typekey.DiffReason diffReason) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDiffItems(diffReason);
  }
  
  /**
   * Generates the differences between this PolicyPeriod and its {@link #getBasedOn() Based On PolicyPeriod} for the
   * given {@link DiffReason}.  If there is no BasedOn for this PolicyPeriod, an empty List of {@link DiffItem DiffItems}
   * is returned.  {@link gw.api.domain.account.AccountSyncable#prepareForDiff()} is called for each
   * {@link AccountSyncable} on this PolicyPeriod prior to generating the DiffItems.
   * @param diffReason the DiffReason to use when generating and filtering differences
   * @param useMergeBases True if BasedOns should be calculated using merge bases if available
   * @return the set of DiffItems representing the changes in this PolicyPeriod from its BasedOn for the given DiffReason
   */
  public java.util.List<gw.api.diff.DiffItem> getDiffItems(typekey.DiffReason diffReason, boolean useMergeBases) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDiffItems(diffReason, useMergeBases);
  }
  
  /**
   * Returns all documents linked to this period
   * @return the set of documents linked to this period
   */
  public gw.api.database.IQueryBeanResult<entity.Document> getDocuments() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDocuments();
  }
  
  /**
   * Gets all {@link Document Documents} of the given {@link DocumentType} on this period
   * @param docType the DocumentType to return
   * @return All Docuements of the given DocuementType found on this PolicyPeriod
   */
  public entity.Document[] getDocuments(typekey.DocumentType docType) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDocuments(docType);
  }
  
  /**
   * Gets the value of the EditEffectiveDate field.
   * Dates edits are effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEditEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EDITEFFECTIVEDATE_PROP.get());
  }
  
  /**
   * Returns a DateRange that starts on this PolicyPeriod's {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate} and
   * ends at this PolicyPeriod's {@link entity.PolicyPeriod#getPeriodEnd() PeriodEnd}.
   * @return the date range between the edit effective date and the period end
   */
  public com.guidewire.pl.system.util.DateRange getEditEffectiveDateRange() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getEditEffectiveDateRange();
  }
  
  /**
   * Get an effective date independent key for this bean. This key will include
   * the BranchId and the FixedId. This is the key for the "logical" bean.
   * <p/>
   * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
   * the same throughout its effective range (or its period range) so there is
   * no difference between the "logical" bean and the actual bean.
   */
  public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
  }
  
  /**
   * Gets the value of the EffectiveDatedFields field.
   * Stores fields that change in effective time but do not fit in any policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EffectiveDatedFields getEffectiveDatedFields() {
    return (entity.EffectiveDatedFields)__getInternalInterface().getFieldValue(EFFECTIVEDATEDFIELDS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EffectiveDatedFields[] getEffectiveDatedFieldsArray() {
    return (entity.EffectiveDatedFields[])__getInternalInterface().getFieldValue(EFFECTIVEDATEDFIELDSARRAY_PROP.get());
  }
  
  /**
   * Return the cancellation date if it is defined; otherwise, return the period end date.
   * @return the date coverage ends for this PolicyPeriod
   */
  public java.util.Date getEndOfCoverageDate() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getEndOfCoverageDate();
  }
  
  /**
   * Get factory used to produce branch related error messages.
   * @return Factory used to produce branch related error messages.
   */
  public com.guidewire.commons.entity.effdate.EffDatedErrorMessageFactory getErrorMessageFactory() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getErrorMessageFactory();
  }
  
  /**
   * Gets the value of the EstimatedPremium field.
   * User estimate of total premium amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getEstimatedPremium() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(ESTIMATEDPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the EstimatedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getEstimatedPremium_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ESTIMATEDPREMIUM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the EstimatedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getEstimatedPremium_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(ESTIMATEDPREMIUM_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the ExcludeReason field.
   * Reason for excluding or skipping the entity from archiving. If the ExcludeFromArchive bit is set, this gives the reason for excluding. Else, if this is not null, it is the reason for skipping.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExcludeReason() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLUDEREASON_PROP.get());
  }
  
  public int getExtensionsVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getExtensionsVersion();
  }
  
  /**
   * Returns the first issued PolicyPeriod with the same PeriodId as this PolicyPeriod. In other
   * words, returns the PolicyPeriod from the original Submission, Renewal or Rewrite that created
   * this {@link entity.PolicyTerm}, unless an Issuance Job exists - in that case we will not return
   * the Submission PolicyPeriod but instead the Issuance PolicyPeriod. The returned PolicyPeriod may not be the most
   * recent period.
   * @return the PolicyPeriod that initially created or issued this PolicyTerm.
   */
  public entity.PolicyPeriod getFirstIssuedPeriodInTerm() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFirstIssuedPeriodInTerm();
  }
  
  /**
   * Returns a {@link DateRange} starting at the {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate} of
   * this PolicyPeriod and ending at the next slice.  If there is no future slice, the end date of the DateRange will be
   * the {@link entity.PolicyPeriod#getPeriodEnd() PeriodEnd}
   * @return the date range of the edit effective date of this period and the end of the next slice
   */
  public com.guidewire.pl.system.util.DateRange getFirstOOSSliceDateRange() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFirstOOSSliceDateRange();
  }
  
  /**
   * Returns the first created PolicyPeriod with the same PeriodId as this PolicyPeriod. In other
   * words, returns the PolicyPeriod from the original Submission, Renewal or Rewrite that started
   * this {@link entity.PolicyTerm}. The returned PolicyPeriod may not be the most recent period.
   * @return the PolicyPeriod that initially created this PolicyTerm.
   */
  public entity.PolicyPeriod getFirstPeriodInTerm() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFirstPeriodInTerm();
  }
  
  /**
   * Gets the value of the Forms field.
   * Forms associated with this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Form[] getForms() {
    return (entity.Form[])__getInternalInterface().getFieldValue(FORMS_PROP.get());
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Returns all edit effective dates for the periods of the given policy that were bound before this PolicyPeriod was
   * bound and have a later {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate} than this PolicyPeriod's.
   * @param policy to get bound edit effective dates for
   * @return sorted array of all the qualified edit effective dates for the given policy.
   */
  public java.util.Date[] getFutureBoundDate(entity.Policy policy) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureBoundDate(policy);
  }
  
  /**
   * Returns a sorted array of bound edit effective dates in this period after the
   * {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate}.
   * @return sorted array of bound edit effective dates in this period.
   */
  public java.util.Date[] getFutureBoundDatesInPeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureBoundDatesInPeriod();
  }
  
  /**
   * Returns a sorted array of bound edit effective dates corresponding to a rewritten policy that falls within this period.
   * @return sorted array of bound edit effective dates corresponding for rewritten policy that fall within this period.
   */
  public java.util.Date[] getFutureBoundDatesInRewriteSourcePeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureBoundDatesInRewriteSourcePeriod();
  }
  
  /**
   * Returns all future Renewal periods that are latest bound, renews this PolicyPeriod, and
   * are not flat cancelled, plus all Future Renewals for those PolicyPeriods.
   * 
   * To get the next future Renewal period, call {@link #getNextRenewal()} instead.
   * @return a {@link java.util.List}<{@link entity.PolicyPeriod}> of all periods
   * that are the latest bound periods that renew the current period and
   * are not flat cancelled.
   */
  public java.util.List<entity.PolicyPeriod> getFutureRenewals() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureRenewals();
  }
  
  /**
   * Returns the slice dates in this period after the {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate}.
   * @return sorted array of future slice dates in this period.
   */
  public java.util.Date[] getFutureSliceDatesInPeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureSliceDatesInPeriod();
  }
  
  /**
   * Gets the value of the GLTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLTransaction[] getGLTransactions() {
    return (entity.GLTransaction[])__getInternalInterface().getFieldValue(GLTRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the HOPTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPTransaction[] getHOPTransactions() {
    return (entity.HOPTransaction[])__getInternalInterface().getFieldValue(HOPTRANSACTIONS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IMTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMTransaction[] getIMTransactions() {
    return (entity.IMTransaction[])__getInternalInterface().getFieldValue(IMTRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the InvoiceStreamCode field.
   * The public id of the invoice stream in billing system.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInvoiceStreamCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INVOICESTREAMCODE_PROP.get());
  }
  
  /**
   * Gets the value of the InvoiceStreamOverrides field.
   * Fields which override the default fields of an InvoiceStream.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InvoiceStreamOverrides getInvoiceStreamOverrides() {
    return (entity.InvoiceStreamOverrides)__getInternalInterface().getFieldValue(INVOICESTREAMOVERRIDES_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InvoiceStreamOverrides[] getInvoiceStreamOverridesArray() {
    return (entity.InvoiceStreamOverrides[])__getInternalInterface().getFieldValue(INVOICESTREAMOVERRIDESARRAY_PROP.get());
  }
  
  /**
   * Gets the value of the InvoicingMethod field.
   * The invoicing method for this PolicyPeriod
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InvoicingMethod getInvoicingMethod() {
    return (typekey.InvoicingMethod)__getInternalInterface().getFieldValue(INVOICINGMETHOD_PROP.get());
  }
  
  /**
   * Returns the {@link Issuance} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not an Issuance
   * @return the Rewrite Issuance associated with this PolicyPeriod, null if this is not an Issuance Job
   */
  public entity.Issuance getIssuance() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getIssuance();
  }
  
  /**
   * Gets the value of the Job field.
   * The job this policy period is part of.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob() {
    return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
  }
  
  /**
   * Get the {@link IJobProcess} associated with this PolicyPeriod
   * @return returns the JobProcess associated with this PolicyPeriod
   */
  public gw.api.job.IJobProcess getJobProcessInternal() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getJobProcessInternal();
  }
  
  /**
   * Gets the most recent (highest {@link Document#getID() ID}) {@link Document} of the
   * given {@link DocumentType} on this period, or null if none was found of the given DocumentType
   * @param docType the DocumentType to return
   * @return The most recent Document of the given DocumentType found on this PolicyPeriod; null if none found
   */
  public entity.Document getLatestDocumentOfType(typekey.DocumentType docType) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLatestDocumentOfType(docType);
  }
  
  /**
   * Goes through the PolicyPeriods for the associated Policy and returns the PolicyPeriod that is
   * promoted, has the same PeriodID and is the most recent (has the highest model number)
   * @return the latest promoted PolicyPeriod with the same PeriodId as this PolicyPeriod
   */
  public entity.PolicyPeriod getLatestPeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLatestPeriod();
  }
  
  /**
   * Returns the {@link PolicyLine} matching the given {@link PolicyLinePattern} if such a line exists, null if
   * no PolicyLine has the given PolicyLinePattern
   * @param linePattern 
   * @return The PolicyLine on the PolicyPeriod matching the given PolicyLinePattern, null if there is no match
   */
  public entity.PolicyLine getLine(gw.api.productmodel.PolicyLinePattern linePattern) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLine(linePattern);
  }
  
  /**
   * Returns true if a {@link PolicyLine} with the given {@link PolicyLinePattern} exists for this PolicyPeriod,
   * false otherwise
   * @param linePattern 
   * @return True if a PolicyLine exists with the given PolicyLinePattern
   */
  public boolean getLineExists(gw.api.productmodel.PolicyLinePattern linePattern) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLineExists(linePattern);
  }
  
  /**
   * Gets the value of the Lines field.
   * Lines (e.g. Auto, Property,etc.) of this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine[] getLines() {
    return (entity.PolicyLine[])__getInternalInterface().getFieldValue(LINES_PROP.get());
  }
  
  /**
   * Get the version list for an effective dated foreign key.  You need this
   * method because it's the only way to get the version list for a foreign key
   * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
   * since you can't traverse the array and there are no methods on
   * EffDatedVersionList to access a FK (only arrays).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key
   * @return Version list for an effective dated foreign key
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
  }
  
  /**
   * Gets the value of the LocationAutoNumberSeq field.
   * Sequence to autonumber policy locations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getLocationAutoNumberSeq() {
    return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get());
  }
  
  /**
   * Gets the value of the LocationRisks field.
   * All reinsurable risks associated with policy locations on this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRisk[] getLocationRisks() {
    return (entity.LocationRisk[])__getInternalInterface().getFieldValue(LOCATIONRISKS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCKINGCOLUMN_PROP.get());
  }
  
  /**
   * Gets summary {@link LossFinancials} for this PolicyPeriod.
   * @return the LossFinancials associated with this PolicyPeriod.
   */
  public entity.LossFinancials getLossFinancials() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLossFinancials();
  }
  
  /**
   * Gets the value of the ModelDate field.
   * Date corresponding to the model number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getModelDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(MODELDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ModelNumber field.
   * Modelnumber.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getModelNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(MODELNUMBER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModelNumberIndex() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MODELNUMBERINDEX_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMostRecentModelIndex() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MOSTRECENTMODELINDEX_PROP.get());
  }
  
  /**
   * Returns all the {@link PolicyNamedInsured PolicyNamedInsureds} for this PolicyPeriod.  Includes the Primary
   * Named Insured, Secondary Named Insured and all Additional Named Insureds.
   * @return All the PolicyNamedInsureds on this period.  This includes the primary, secondary (in PA) and additional
   * named insureds.
   */
  public entity.PolicyNamedInsured[] getNamedInsureds() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getNamedInsureds();
  }
  
  /**
   * Gets the value of the NewInvoiceStream field.
   * The new invoice stream created by this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BillingInvoiceStream getNewInvoiceStream() {
    return (entity.BillingInvoiceStream)__getInternalInterface().getFieldValue(NEWINVOICESTREAM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BillingInvoiceStream[] getNewInvoiceStreamArray() {
    return (entity.BillingInvoiceStream[])__getInternalInterface().getFieldValue(NEWINVOICESTREAMARRAY_PROP.get());
  }
  
  /**
   * Returns next future Renewal period that is latest bound, renews this PolicyPeriod, and
   * is not flat cancelled.
   * @return a {@link entity.PolicyPeriod} of next future period that is the latest bound period that renew the
   * current period and is not flat cancelled. Or, null if there is none.
   */
  public entity.PolicyPeriod getNextRenewal() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getNextRenewal();
  }
  
  /**
   * Gets the value of the Notes field.
   * Notes associated with this PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes() {
    return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
  }
  
  /**
   * Return all {@link DiffItem DiffItems} comparing this PolicyPeriod to its {@link #getBasedOn() BasedOn} where the
   * DiffItem is an {@link gw.api.diff.DiffItem#isOOSChange() OOS change}
   * @return all DiffItems that are OOS changes
   */
  public java.util.List<gw.api.diff.DiffItem> getOOSChanges() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSChanges();
  }
  
  /**
   * Return all {@link DiffItem DiffItems} comparing this PolicyPeriod to its {@link #getBasedOn() BasedOn} where the DiffItem is
   * an {@link gw.api.diff.DiffItem#isOOSConflict()} () OOS Conflict}
   * @return all DiffItems that are OOS conflicts
   */
  public java.util.List<gw.api.diff.DiffItem> getOOSConflicts() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSConflicts();
  }
  
  /**
   * Returns all Slice Dates of this PolicyPeriod from the Edit Effective Date onward.
   * @return sorted array of Dates that consists of edit effective date and future slice dates in this period.
   */
  public java.util.Date[] getOOSSliceDates() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSSliceDates();
  }
  
  /**
   * Returns an array of PolicyPeriods, each one is actually this PolicyPeriod but Sliced on each date returned by
   * {@link #getOOSSliceDates()}.
   * @return an array of PolicyPeriods one for each oos slice date
   */
  public entity.PolicyPeriod[] getOOSSlices() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSSlices();
  }
  
  public entity.PolicyPeriod[] getOOSSlices(java.util.Date[] oosSliceDates) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSSlices(oosSliceDates);
  }
  
  /**
   * Returns the {@link Offering} associated with this PolicyPeriod
   * @return the Offering associated with this PolicyPeriod
   */
  public gw.api.productmodel.Offering getOffering() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOffering();
  }
  
  /**
   * Returns the periods that overlap this period using the given period start
   * and end dates.
   * @param periodStart Date to use for period start (ignored the current
   *                          period start of this branch)
   * @param periodEndOrCancel Date to use for period end (ignored the current
   *                          period end of this branch)
   * @return List of bound periods that overlap
   */
  public java.util.List<entity.EffDatedBranch> getOverlappingBoundPeriods(java.util.Date periodStart, java.util.Date periodEndOrCancel) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getOverlappingBoundPeriods(periodStart, periodEndOrCancel);
  }
  
  /**
   * Gets the value of the PATransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PATransaction[] getPATransactions() {
    return (entity.PATransaction[])__getInternalInterface().getFieldValue(PATRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the PNIContactDenorm field.
   * The primary named insured's contact on the policy. Denorm field so contact is retained when the policyperiod is archived.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getPNIContactDenorm() {
    return (entity.Contact)__getInternalInterface().getFieldValue(PNICONTACTDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PRActiveWorkflow[] getPRActiveWorkflowArray() {
    return (entity.PRActiveWorkflow[])__getInternalInterface().getFieldValue(PRACTIVEWORKFLOWARRAY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPeriod() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(PERIOD_PROP.get());
  }
  
  /**
   * Gets the value of the PeriodAnswers field.
   * Set of answers for this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PeriodAnswer[] getPeriodAnswers() {
    return (entity.PeriodAnswer[])__getInternalInterface().getFieldValue(PERIODANSWERS_PROP.get());
  }
  
  /**
   * Gets the value of the PeriodEnd field.
   * Upper bound of all expiration dates of this root
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPeriodEnd() {
    return (java.util.Date)__getInternalInterface().getFieldValue(PERIODEND_PROP.get());
  }
  
  /**
   * Every branch belongs to a period, identified by its PeriodId. When a new
   * submission or renewal is created the new branch is assigned a new PeriodId.
   * When a new branch is created in the same period as another branch (e.g. a
   * policy change) it shares the "based on" or "original" branch's PeriodId. A
   * period often has several branches associated with it, both promoted and in
   * draft, but will have only one "most recent" or "in-force" branch associated
   * with it. This in-force branch is the most recently promoted branch
   * associated with a period. The other promoted branches represent earlier
   * versions of the in-force branch in model-time. Often when we refer to the
   * "period" we're actually referring to the most recently bound branch in a
   * period, ignoring the other, "older" branches that are also associated with
   * the period.
   * <p/>
   * To find all the branches associated with a period find all branches with
   * the same PeriodId.
   * @return Period Id of this branch.
   */
  public gw.pl.persistence.core.Key getPeriodId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getPeriodId();
  }
  
  /**
   * Gets the value of the PeriodStart field.
   * Lower bound of all effective dates of this root
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPeriodStart() {
    return (java.util.Date)__getInternalInterface().getFieldValue(PERIODSTART_PROP.get());
  }
  
  public java.util.List<entity.DestructionRootPinnable> getPinnableChildren() {
    return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).getPinnableChildren();
  }
  
  public java.util.List<entity.DestructionRootPinnable> getPinnableDescendants() {
    return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).getPinnableDescendants();
  }
  
  public java.util.List<entity.DestructionRootPinnable> getPinnableParents() {
    return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).getPinnableParents();
  }
  
  public int getPlatformMajorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getPlatformMajorVersion();
  }
  
  public int getPlatformMinorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getPlatformMinorVersion();
  }
  
  /**
   * Gets the value of the Policy field.
   * The policy to which this period belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Returns the {@link entity.PolicyAddress} for this PolicyPeriod.  This is a convenience method and is equivalent to
   * PolicyPeriod.{@link entity.EffectiveDatedFields#getPolicyAddress()}
   * @return the policy address
   */
  public entity.PolicyAddress getPolicyAddress() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPolicyAddress();
  }
  
  /**
   * Returns the {@link PolicyChange} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not a PolicyChange
   * @return the PolicyChange Job associated with this PolicyPeriod, null if this is not a PolicyChange Job
   */
  public entity.PolicyChange getPolicyChange() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPolicyChange();
  }
  
  /**
   * Gets the value of the PolicyContactRoles field.
   * The policy contact roles of this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyContactRole[] getPolicyContactRoles() {
    return (entity.PolicyContactRole[])__getInternalInterface().getFieldValue(POLICYCONTACTROLES_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyFXRates field.
   * fx rates used for monetary amount conversions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyFXRate[] getPolicyFXRates() {
    return (entity.PolicyFXRate[])__getInternalInterface().getFieldValue(POLICYFXRATES_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyLocations field.
   * The period locations.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation[] getPolicyLocations() {
    return (entity.PolicyLocation[])__getInternalInterface().getFieldValue(POLICYLOCATIONS_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyNumber field.
   * The policy number for this policy period. This value may be different from the core policy number on the associated Policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyRisks field.
   * The reinsurable risk associated with this policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyRisk[] getPolicyRisks() {
    return (entity.PolicyRisk[])__getInternalInterface().getFieldValue(POLICYRISKS_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyTerm field.
   * Policy term information associated with this period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm() {
    return (entity.PolicyTerm)__getInternalInterface().getFieldValue(POLICYTERM_PROP.get());
  }
  
  /**
   * Returns an array of all the jobs that would be preempted if this PolicyPeriod were bound.
   * The array will be empty if no preemptions would occur. This is different from the
   * PreemptedPeriodsIfBoundNow property because multiple periods may be associated with a single
   * job.
   * @return jobs that will be preempted
   */
  public entity.Job[] getPreemptedJobsIfBoundNow() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPreemptedJobsIfBoundNow();
  }
  
  /**
   * Return a list of PolicyPeriods that will be preempted if this PolicyPeriod is bound
   * now.
   * @return all PolicyPeriods that will be preempted if this PolicyPeriod is bound
   */
  public entity.PolicyPeriod[] getPreemptedPeriodsIfBoundNow() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPreemptedPeriodsIfBoundNow();
  }
  
  /**
   * Returns an array of all PolicyPeriods that preempt this PolicyPeriod.
   * @return all PolicyPeriods that preempt this PolicyPeriod
   */
  public entity.PolicyPeriod[] getPreemptionsOfThisPeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPreemptionsOfThisPeriod();
  }
  
  /**
   * Gets the value of the PreferredCoverageCurrency field.
   * Preferred Coverage Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCoverageCurrency() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get());
  }
  
  /**
   * Gets the value of the PreferredSettlementCurrency field.
   * Preferred Settlement Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredSettlementCurrency() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(PREFERREDSETTLEMENTCURRENCY_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryInsuredName field.
   * The display name of the primary names insured (denormalization).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYINSUREDNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYINSUREDNAMEDENORM_PROP.get());
  }
  
  /**
   * Return the {@link entity.PolicyLocation} marked as the Primary Location, or null if there is none
   * @return the primary PolicyLocation for the PolicyPeriod
   */
  public entity.PolicyLocation getPrimaryLocation() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPrimaryLocation();
  }
  
  /**
   * Returns the {@link PolicyPriNamedInsured} for this PolicyPeriod.  This is a convenience method and is equivalent to
   * PolicyPeriod.{@link entity.EffectiveDatedFields#getPrimaryNamedInsured()}
   * @return the primary named insured
   */
  public entity.PolicyPriNamedInsured getPrimaryNamedInsured() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPrimaryNamedInsured();
  }
  
  /**
   * Gets the value of the ProducerCodeOfRecord field.
   * The producer code that created this policy in this period and should get the commissions.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfRecord() {
    return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFRECORD_PROP.get());
  }
  
  /**
   * Returns the producer organization associated with this PolicyPeriod; really just a
   * shortcut for PolicyPeriod.ProducerCodeOfRecord.Organization
   * @return the producer associated with this PolicyPeriod's producercode, or
   * null if none available
   */
  public entity.Organization getProducerOfRecord() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getProducerOfRecord();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Returns the public ID of the root.
   * @return public ID of the root.
   */
  public java.lang.String getPublicIDOfRoot() {
    return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).getPublicIDOfRoot();
  }
  
  /**
   * Recalculates question dependencies if they have been cleared (see {@link #clearQuestionDependencies}),
   * then returns all questions that are dependent on the given question's answers.
   * @param question the question to get dependencies for
   * @return the set of questions on which the given question depends
   */
  public java.util.Set<gw.api.productmodel.Question> getQuestionDependencies(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getQuestionDependencies(question);
  }
  
  public gw.api.productmodel.QuestionSet[] getQuestionSets() {
    return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getQuestionSets();
  }
  
  /**
   * Gets the value of the QuoteCloneOriginalPeriod field.
   * Soft FK to the original policy period that this policy period was cloned from.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuoteCloneOriginalPeriod() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(QUOTECLONEORIGINALPERIOD_PROP.get());
  }
  
  /**
   * Gets the value of the QuoteCloneSequenceNumber field.
   * This is only used during policy quote clone.  It is a sequence number for the cloned quote.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getQuoteCloneSequenceNumber() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(QUOTECLONESEQUENCENUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the QuoteIdentifier field.
   * If this PolicyPeriod originated from a HVQ quote, this field references that quote's ID.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getQuoteIdentifier() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(QUOTEIDENTIFIER_PROP.get());
  }
  
  /**
   * Gets the value of the QuoteMaturityLevel field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.QuoteMaturityLevel getQuoteMaturityLevel() {
    return (typekey.QuoteMaturityLevel)__getInternalInterface().getFieldValue(QUOTEMATURITYLEVEL_PROP.get());
  }
  
  /**
   * Gets the value of the RIRiskVersionLists field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVersionList[] getRIRiskVersionLists() {
    return (entity.RIRiskVersionList[])__getInternalInterface().getFieldValue(RIRISKVERSIONLISTS_PROP.get());
  }
  
  /**
   * Gets the value of the RateAsOfDate field.
   * The date the policy should be rated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRateAsOfDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(RATEASOFDATE_PROP.get());
  }
  
  /**
   * Return the Reference Date for this PolicyPeriod.  This is configurable through a call to
   * {@link gw.plugin.productmodel.IReferenceDatePlugin#getReferenceDateType(entity.PolicyPeriod, Jurisdiction)}
   * to determine the {@link typekey.ReferenceDateType}, and through a call to
   * {@link gw.plugin.productmodel.IReferenceDatePlugin#getPeriodReferenceDate(entity.PolicyPeriod, typekey.ReferenceDateType, typekey.Jurisdiction)}
   * to lookup the actual Reference Date.
   * @return the reference date for the current period
   */
  public java.util.Date getReferenceDate() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getReferenceDate();
  }
  
  /**
   * Returns the reference date that should be used for availability lookups for the given {@link Jurisdiction}.
   * This method first determines the reference date type (either effective date, written date or
   * rating period date) for the given state, the type of this product and the underwriting
   * company on the policy period. Then the {@link gw.plugin.productmodel.IReferenceDatePlugin} is
   * invoked to return the appropriate date.
   * @param baseState the Jurisdiction to return the Reference Date for
   * @return the Date that should be used for availability lookups for the given Jurisdiction
   */
  public java.util.Date getReferenceDateForCurrentJob(typekey.Jurisdiction baseState) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getReferenceDateForCurrentJob(baseState);
  }
  
  /**
   * Gets the value of the RefundCalcMethod field.
   * The method used to calculate the amount of refund due.  Once a policy is canceled, subsequent policy periods inherit this until it is reinstated, at which point this field is reset to null.  Also returns null if the cancellation cannot be found (e.g. if the cancellation was done in an external system).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalculationMethod getRefundCalcMethod() {
    return (typekey.CalculationMethod)__getInternalInterface().getFieldValue(REFUNDCALCMETHOD_PROP.get());
  }
  
  /**
   * Returns the {@link Reinstatement} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not a Reinstatement
   * @return the Reinstatement Job associated with this PolicyPeriod, null if this is not a Reinstatement Job
   */
  public entity.Reinstatement getReinstatement() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getReinstatement();
  }
  
  /**
   * Find reinsurable risk associated with reinsurable coverable
   * @return associated reinsurable risk if it exists, else null
   */
  public entity.Reinsurable[] getReinsurables() {
    return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).getReinsurables();
  }
  
  /**
   * Returns the original {@link Cancellation} {@link Job} that caused this period to be marked
   * as canceled. Returns null if this period is not canceled, or if no such
   * Cancellation can be found (e.g., if the cancellation was done in an
   * external system).
   * @return the Cancellation Job that caused this PolicyPeriod to be marked as canceled, null if
   * no Cancellation can be found
   */
  public entity.Cancellation getRelatedCancellationJob() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRelatedCancellationJob();
  }
  
  /**
   * Returns the {@link Renewal} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not a Renewal
   * @return the Renewal Job associated with this PolicyPeriod, null if this is not a Renewal Job
   */
  public entity.Renewal getRenewal() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRenewal();
  }
  
  /**
   * Returns the first versions of any {@link PolicyLine} that ever existed in this
   * period.  The lines are in window mode.
   * @return the first version of every PolicyLine that ever existed in this PolicyPeriod
   */
  public entity.PolicyLine[] getRepresentativePolicyLines() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRepresentativePolicyLines();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Returns the {@link Rewrite} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not a Rewrite
   * @return the Rewrite Job associated with this PolicyPeriod, null if this is not a Rewrite Job
   */
  public entity.Rewrite getRewrite() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRewrite();
  }
  
  /**
   * Returns the {@link RewriteNewAccount} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not a RewriteNewAccount
   * @return the RewriteNewAccount Job associated with this PolicyPeriod, null if this is not a RewriteNewAccount Job
   */
  public entity.RewriteNewAccount getRewriteNewAccount() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRewriteNewAccount();
  }
  
  /**
   * Returns the {@link PolicySecNamedInsured} for this PolicyPeriod.  This is a convenience method and is equivalent to
   * PolicyPeriod.{@link entity.EffectiveDatedFields#getSecondaryNamedInsured()}
   * @return the secondary named insured
   */
  public entity.PolicySecNamedInsured getSecondaryNamedInsured() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSecondaryNamedInsured();
  }
  
  /**
   * Gets the value of the Segment field.
   * Market segment this policy period is in.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Segment getSegment() {
    return (typekey.Segment)__getInternalInterface().getFieldValue(SEGMENT_PROP.get());
  }
  
  /**
   * Gets the value of the SelectedPaymentPlan field.
   * The selected payment plan for this period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PaymentPlanSummary getSelectedPaymentPlan() {
    return (entity.PaymentPlanSummary)__getInternalInterface().getFieldValue(SELECTEDPAYMENTPLAN_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PaymentPlanSummary[] getSelectedPaymentPlanArray() {
    return (entity.PaymentPlanSummary[])__getInternalInterface().getFieldValue(SELECTEDPAYMENTPLANARRAY_PROP.get());
  }
  
  /**
   * Gets the value of the SelectedTermType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TermType getSelectedTermType() {
    return (typekey.TermType)__getInternalInterface().getFieldValue(SELECTEDTERMTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the SeriesCheckingPatternCode field.
   * The code of the pattern to use for creating and scheduling a series of checking audits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSeriesCheckingPatternCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERIESCHECKINGPATTERNCODE_PROP.get());
  }
  
  /**
   * Gets the value of the SingleCheckingPatternCode field.
   * The code of the pattern to use for creating and scheduling single checking audits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSingleCheckingPatternCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SINGLECHECKINGPATTERNCODE_PROP.get());
  }
  
  public entity.PolicyPeriod getSlice(java.util.Date sliceDate) {
    return (entity.PolicyPeriod)getSliceUntyped(sliceDate);
  }
  
  /**
   * Date which this bean is "sliced" or viewed. If you traverse from this bean
   * to another bean or beans via a link or array, only beans that are effective
   * at this slice date will be returned. The beans that are returned will be
   * sliced at this date as well. If NULL then the bean is in "window" mode.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return Date which bean is sliced or null if in window mode.
   */
  public java.util.Date getSliceDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
  }
  
  /**
   * Returns a {@link DateRange} starting from the Most Recent EffectiveDate that is before the current EditEffectiveDate
   * (or the EditEffectiveDate itself if it's equal to an EffectiveDate), to the following EffectiveDate
   * (or the PeriodEnd if there is no following EffectiveDate).
   * <p>
   * The behavior of this method has changed from 8.0.5. We now include every EffectiveDates that we found in the graph.
   * Prior to 8.0.5, we only included the Policy bound EditEffectiveDates as possible values for the DateRange.
   * @return an EffectiveDate range where the date passed in parameters falls into.
   */
  public com.guidewire.pl.system.util.DateRange getSliceDateRange() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSliceDateRange();
  }
  
  /**
   * Returns a {@link DateRange} starting from the Most Recent EffectiveDate that is before the date passed in parameters
   * (or the date itself if it's equal to an EffectiveDate), to the following EffectiveDate
   * (or the PeriodEnd if there is no following EffectiveDate).
   * @param date the date that falls into the Slice of EffectiveDates to be returned.
   * @return an EffectiveDate range where the current EditEffectiveDate falls into.
   */
  public com.guidewire.pl.system.util.DateRange getSliceDateRange(java.util.Date date) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSliceDateRange(date);
  }
  
  /**
   * Slice this bean at a particular date. This bean can be unsliced or sliced
   * when this method is called. The slice date must be within the effective
   * range of this bean or an exception will be thrown. If you want to get at
   * the version of this "logical" bean at a date outside of this particular
   * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
   * @param sliceDate Date at which to slice this bean.
   * @return Sliced version of the bean.
   */
  public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
  }
  
  /**
   * If Solr search is in use, generate a unique key that depends on the relevant indexed fields.
   * The implementation delegates to the active implementation of ISolrSearchPlugin.
   * This is TEMPORARY, until platform provides a permanent solution.
   * @return A String representation of the unique key
   */
  public java.lang.String getSolrUniqueKey() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSolrUniqueKey();
  }
  
  /**
   * Gets the value of the SpecialHandling field.
   * special handling to be applied to the charges on a billing instruction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialHandling getSpecialHandling() {
    return (typekey.SpecialHandling)__getInternalInterface().getFieldValue(SPECIALHANDLING_PROP.get());
  }
  
  /**
   * Gets the value of the Status field.
   * The period's status. This field can only be updated via workflow methods available on the various Job entities.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyPeriodStatus getStatus() {
    return (typekey.PolicyPeriodStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  /**
   * Returns the {@link Submission} {@link Job} associated with this period, or null if there is no associated Job
   * or the associated Job is not a Submission
   * @return the Submission Job associated with this PolicyPeriod, null if this is not a Submission Job
   */
  public entity.Submission getSubmission() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSubmission();
  }
  
  /**
   * Gets the existing value of the TaxSurchargesRPT field. It also populates the value if it is null, unless the branch is locked.
   * This method uses the {@link typekey.RateAmountType} typefilter TF_TAXESANDSURCHARGES to decide which costs qualify as taxes and surcharges.
   * 
   * This method exists to populate the TaxSurchargesRPT field for pre-existing {@link entity.PolicyPeriod} when the TaxSurchargesRPT field was added.
   * @return The sum of the current tax and surcharge costs
   */
  public gw.pl.currency.MonetaryAmount getTaxAndSurchargesRPT() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getTaxAndSurchargesRPT();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTaxSurchargesRPT() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TAXSURCHARGESRPT_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTaxSurchargesRPT_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TAXSURCHARGESRPT_AMT_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTaxSurchargesRPT_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TAXSURCHARGESRPT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TemporaryCloneStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyPeriodCloneStatus getTemporaryCloneStatus() {
    return (typekey.PolicyPeriodCloneStatus)__getInternalInterface().getFieldValue(TEMPORARYCLONESTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the TermNumber field.
   * A sequence number that starts at 1 and is incremented on a renewal and rewrite, usually to distinguish between different periods of a same policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getTermNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(TERMNUMBER_PROP.get());
  }
  
  /**
   * Calculated and returns the TermType of this policy. The logic for calculating the term is in
   * {@link gw.plugin.policyperiod.IPolicyTermPlugin#calculatePolicyTerm(entity.PolicyPeriod, java.util.Date, java.util.Date)}
   * @return the TermType of this PolicyPeriod
   */
  public typekey.TermType getTermType() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getTermType();
  }
  
  /**
   * Gets the value of the TotalCostRPT field.
   * Total amount of all premium, taxes, and any other costs for the entire policy period. The total is denormalized for higher performance UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalCostRPT() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALCOSTRPT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalCostRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalCostRPT_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALCOSTRPT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalCostRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalCostRPT_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALCOSTRPT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPremiumRPT field.
   * Total amount of all premium (but not taxes or any other costs) for the entire policy period. The total is denormalized for higher performance UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPremiumRPT() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPREMIUMRPT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPremiumRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPremiumRPT_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPREMIUMRPT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPremiumRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPremiumRPT_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPREMIUMRPT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TransactionCostRPT field.
   * Total change in premium, taxes, and any other costs caused by a job. For a job that creates a new policy period (i.e. Submission, Renewal, or Rewrite), the TransactionCostRPT will be the same as the TotalCostRPT because there were no prior costs for the period. For mid-term jobs (Policy Change, Cancellation, etc.), this field represents the change in amount from the prior job. The total is denormalized for UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTransactionCostRPT() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TRANSACTIONCOSTRPT_PROP.get());
  }
  
  /**
   * Gets the value of the TransactionCostRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTransactionCostRPT_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TRANSACTIONCOSTRPT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TransactionCostRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTransactionCostRPT_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TRANSACTIONCOSTRPT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TransactionPremiumRPT field.
   * Total change in premium (but not taxes or any other costs) caused by a job. For a job that creates a new policy period (i.e. Submission, Renewal, or Rewrite), the TransactionPremiumRPT will be the same as the TotalPremiumRPT because there were no prior premiums for the period. For mid-term jobs (Policy Change, Cancellation, etc.), this field represents the change in amount from the prior job. The total is denormalized for UI display and reporting support.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTransactionPremiumRPT() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TRANSACTIONPREMIUMRPT_PROP.get());
  }
  
  /**
   * Gets the value of the TransactionPremiumRPT_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTransactionPremiumRPT_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TRANSACTIONPREMIUMRPT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TransactionPremiumRPT_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTransactionPremiumRPT_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TRANSACTIONPREMIUMRPT_CUR_PROP.get());
  }
  
  /**
   * Finds all types of {@link Transaction} that are reached by this PolicyPeriod's {@link Policy} (the EffDated
   * Container for PolicyPeriod}; that is, there is some row in the given Transaction's table that refers to this
   * PolicyPeriod's Policy.
   * @return list of all Transaction root types reached by this PolicyPeriod's Policy.
   */
  public java.util.List<gw.entity.IEntityType> getTransactionTypes() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getTransactionTypes();
  }
  
  /**
   * Returns all the UWCompanies that are available to for this PolicyPeriod's
   * states and effective date.  Does not return retired UWCompanies.
   * @param allStates if true, only return UWCompanies that are available for
   *                  *all* states.  Otherwise returns UWCompanies that are
   *                  available for *any* of the PolicyPeriod's states.
   * @return the set of UWCompanies for this PolicyPeriod
   */
  public java.util.Set<entity.UWCompany> getUWCompaniesForStates(boolean allStates) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getUWCompaniesForStates(allStates);
  }
  
  /**
   * Gets the value of the UWCompany field.
   * Underwriting company that insures this policy.  This can only change on a Cancellation or Rewrite, never mid-term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWCompany getUWCompany() {
    return (entity.UWCompany)__getInternalInterface().getFieldValue(UWCOMPANY_PROP.get());
  }
  
  /**
   * Returns the {@link UWCompanyCode} of this period's {@link UWCompany}, or null if the UWCompany is not set.
   * @return the UWCompanyCode of the UWCompany for this PolicyPeriod; or null if no UWCompany is set.
   */
  public typekey.UWCompanyCode getUWCompanyCode() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getUWCompanyCode();
  }
  
  /**
   * Gets the value of the UWIssuesIncludingSoftDeleted field.
   * Issues generated during policy evaluation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssue[] getUWIssuesIncludingSoftDeleted() {
    return (entity.UWIssue[])__getInternalInterface().getFieldValue(UWISSUESINCLUDINGSOFTDELETED_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  public entity.windowed.PolicyPeriodVersionList getVersionList() {
    return (entity.windowed.PolicyPeriodVersionList)getVersionListUntyped();
  }
  
  /**
   * Get the version list for this bean. An EffDatedVersionList is a
   * representation of a logical bean through its effective range. For example,
   * if a bean has changes at three separate effective dates then the version
   * list will comprise 3 versions of the bean, one for each of these dates.
   * <p/>
   * You can use an EffDatedVersionList to traverse from this bean to other
   * linked beans in window mode. Recall that in window mode you cannot traverse
   * links directly from the bean.
   * <p/>
   * Although an EffDatedBranch only has a single version throughout its
   * effective range you can still get its EffDatedVersionList in order to
   * navigate in window mode from the branch to its related EffDateds.
   * @return Version list for this bean
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
  }
  
  public java.lang.String getVersionString() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
  }
  
  /**
   * Gets the value of the WCTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCTransaction[] getWCTransactions() {
    return (entity.WCTransaction[])__getInternalInterface().getFieldValue(WCTRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the Workflows field.
   * Set of workflows associated with this period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriodWorkflow[] getWorkflows() {
    return (entity.PolicyPeriodWorkflow[])__getInternalInterface().getFieldValue(WORKFLOWS_PROP.get());
  }
  
  /**
   * Gets the value of the WorksheetContainer field.
   * ArchiveRoot for Worksheet data, if present
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetContainer getWorksheetContainer() {
    return (entity.WorksheetContainer)__getInternalInterface().getFieldValue(WORKSHEETCONTAINER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetContainer[] getWorksheetContainerArray() {
    return (entity.WorksheetContainer[])__getInternalInterface().getFieldValue(WORKSHEETCONTAINERARRAY_PROP.get());
  }
  
  /**
   * Gets the value of the WrittenDate field.
   * Nominally, the date this period was created. For reinstatements, it is the written date of the reinstated period. For rewrites, it can be the date of the rewrite or the date of the original period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getWrittenDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(WRITTENDATE_PROP.get());
  }
  
  /**
   * Indicates whether the ActiveWorkflow property points to an active
   * {@link PolicyPeriodWorkflow}.
   * @return True if the ActiveWorkflow property points to an active PolicyPeriodWorkflow
   */
  public boolean hasActiveWorkflow() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasActiveWorkflow();
  }
  
  /**
   * Returns true if there are any unhandled preemptions for this PolicyPeriod
   * @return True if there are any unhandled preemptions for this PolicyPeriod, false otherwise
   */
  public boolean hasAnyUnhandledPreemptions() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasAnyUnhandledPreemptions();
  }
  
  /**
   * Indicates whether or not this period has cross term links for archiving
   * Since these need to be deleted as part of pruning or purging a job, it is useful
   * to be able to check before those actions.
   * @return true if cross term links exist for archiving
   */
  public boolean hasArchiveObjectsAttached() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasArchiveObjectsAttached();
  }
  
  /**
   * True if there is at least one {@link Document} of the given {@link DocumentType} on this PolicyPeriod.
   * @param docType the DocumentType to check for
   * @return true if at least one Docuement of the given DocumentType exists on this PolicyPeriod.
   */
  public boolean hasDocument(typekey.DocumentType docType) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasDocument(docType);
  }
  
  /**
   * Returns true if there are any future {@link Renewal Renewals} for this PolicyPeriod as
   * defined by {@link #getFutureRenewals()}.
   * @return true if this period has any future renewals
   */
  public boolean hasFutureRenewals() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasFutureRenewals();
  }
  
  /**
   * Check if there would be a gap after his period using the given period start
   * and end dates and the existing bound periods.
   * @param periodStart Date to use for period start (ignored the current period
   *                    start of this branch)
   * @param periodEnd Date to use for period end (ignored the current period
   *                    end of this branch)
   * @return True if a gap exists between this period and the period after it
   */
  public boolean hasGapAfter(java.util.Date periodStart, java.util.Date periodEnd) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).hasGapAfter(periodStart, periodEnd);
  }
  
  /**
   * Check if there would be a gap before his period using the given period
   * start and end dates and the existing bound periods.
   * @param periodStart Date to use for period start (ignored the current period
   *                    start of this branch)
   * @param periodEnd Date to use for period end (ignored the current period
   *                    end of this branch)
   * @return True if a gap exists between this period and the period before it
   */
  public boolean hasGapBefore(java.util.Date periodStart, java.util.Date periodEnd) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).hasGapBefore(periodStart, periodEnd);
  }
  
  /**
   * Returns true if given date is greater than or equal to Period Start date and less than Period End date.
   * @param date Date to test
   * @return true if given date is greater than or equal to Period Start date and less than Period End date; returns false otherwise.
   */
  public boolean includes(java.util.Date date) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).includes(date);
  }
  
  /**
   * Creates a new {@link entity.AutoNumberSequence} for auto-numbering PolicyLocations on
   * this PolicyPeriod.
   * @param bundle 
   */
  public void initializeLocationAutoNumberSequence(gw.pl.persistence.core.Bundle bundle) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).initializeLocationAutoNumberSequence(bundle);
  }
  
  /**
   * Calls the ReinsuranceConfigPlugin to initialize PolicyTerm.GenerateReinsurables.
   * Must be called at least once on a new term in order to initialize reinsurance.
   * <strong>Calling this on a PolicyPeriod which is not part of a new term
   * may not work correctly and should be avoided.</strong>
   */
  public void initializeReinsuranceForTerm() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).initializeReinsuranceForTerm();
  }
  
  /**
   * Tries to invoke a workflow trigger synchronously with the given key on the
   * active workflow.
   * @param triggerKey typekey of the trigger to be invoked
   * @throws IllegalStateException if the ActiveWorkflow is not set
   */
  public void invokeTrigger(typekey.WorkflowTriggerKey triggerKey) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).invokeTrigger(triggerKey);
  }
  
  /**
   * Tries to invoke a workflow trigger with the given key on the active
   * workflow.
   * @param triggerKey typekey of the trigger to be invoked
   * @param synchronous if true, executes trigger immediately; otherwise in the
   *                    background
   * @throws IllegalStateException if the ActiveWorkflow is not set
   */
  public void invokeTrigger(typekey.WorkflowTriggerKey triggerKey, boolean synchronous) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).invokeTrigger(triggerKey, synchronous);
  }
  
  /**
   * Returns true if this PolicyPeriod is Active.  A PolicyPeriod is considered Active
   * if its Status is not null and is not in the Closed PolicyPeriodStatus filter.
   * @return True if this PolicyPeriod's Status is non-null and not in the ClosedPeriodStatusSet
   */
  public boolean isActive() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isActive();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAllowGapsBefore() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ALLOWGAPSBEFORE_PROP.get());
  }
  
  /**
   * Find out if this policy period is in fact archived.
   * @return true if the policy period has been archived.
   */
  public boolean isArchived() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isArchived();
  }
  
  /**
   * Gets the value of the AssignedRisk field.
   * Flag for policy/risk assigned by state requirement
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAssignedRisk() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ASSIGNEDRISK_PROP.get());
  }
  
  /**
   * Is this branch canceled?
   * @return True if this period is canceled (CancellationDate is non-null) or
   *         false if the period is not canceled (CancellationDate is null).
   */
  public boolean isCanceled() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isCanceled();
  }
  
  /**
   * Return whether this PolicyPeriod is cancelled as of the current Slice Date.  Can only be called in Slice Mode.
   * @return true if this is a canceled slice
   */
  public boolean isCanceledSlice() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isCanceledSlice();
  }
  
  /**
   * Returns true if the InvoicingMethod typekey is equal to "CustomBilling". False otherwise.
   */
  public java.lang.Boolean isCustomBilling() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isCustomBilling();
  }
  
  /**
   * Gets the value of the DoNotDestroy field.
   * If set then the entity should not be destroyed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotDestroy() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTDESTROY_PROP.get());
  }
  
  /**
   * Gets the value of the EditLocked field.
   * Whether the PolicyPeriod is locked from edit by users without permission to edit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEditLocked() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EDITLOCKED_PROP.get());
  }
  
  /**
   * Given a date, check whether it falls within this bean's effective window.
   * @param effDate Date to check
   * @return True if date is within this bean's effective window.
   */
  public boolean isEffective(java.util.Date effDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
  }
  
  /**
   * Gets the value of the ExcludedFromArchive field.
   * Indicate if this entity should be excluded from archiving
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExcludedFromArchive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXCLUDEDFROMARCHIVE_PROP.get());
  }
  
  /**
   * Gets the value of the FailedOOSEEvaluation field.
   * True if this is a PolicyPeriod in an OOS job that has blocking UWIssues at a later slice than the current primary slice
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFailedOOSEEvaluation() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FAILEDOOSEEVALUATION_PROP.get());
  }
  
  /**
   * Gets the value of the FailedOOSEValidation field.
   * True if this is a draft PolicyPeriod in an OOS job that has failed validation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFailedOOSEValidation() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FAILEDOOSEVALIDATION_PROP.get());
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * Gets the value of the FuturePeriods field.
   * True if when bound this branch had future bound periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFuturePeriods() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FUTUREPERIODS_PROP.get());
  }
  
  /**
   * Returns true if the given PolicyPeriod is in teh same PolicyTerm as this PolicyPeriod.  Note that
   * the "Period" in the method name refers to the general revisioning concept of a Period which we
   * call PolicyTerm in PolicyCenter.
   * @param period 
   * @return True, if this period and the given <code>period</code> are in the
   * same PolicyTerm.
   */
  public boolean isInSamePeriod(entity.PolicyPeriod period) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isInSamePeriod(period);
  }
  
  /**
   * Gets the value of the Locked field.
   * True if this row has been locked (cannot be edited)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLocked() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LOCKED_PROP.get());
  }
  
  /**
   * Gets the value of the MostRecentModel field.
   * True if this branch is the most recent model (has the highest model number)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMostRecentModel() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(MOSTRECENTMODEL_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * Returns true is this branch represents a new period that is not a new
   * submission.
   * @return True is this branch represents a new period that is not a new
   *         submission.
   */
  public boolean isNewPeriod() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isNewPeriod();
  }
  
  /**
   * Returns true if this branch represents a new submission.
   * @return True if this branch represents a new submission.
   */
  public boolean isNewSubmission() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isNewSubmission();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Returns true if this PolicyPeriod is the only active period in its {@link Job}.  This is checked
   * by calling {@link entity.Job#getActivePeriods()} to verify that this PolicyPeriod
   * is the one and only result.
   * Returns true if this PolicyPeriod is not associated with a Job.
   * @return True if this PolicyPeriod has a null Job or if it is the only Active PolicyPeriod for its Job.
   */
  public boolean isOnlyActivePeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isOnlyActivePeriod();
  }
  
  /**
   * Gets the value of the Orphaned field.
   * Whether this is an orphaned policy period that should be purged by batch process
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOrphaned() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ORPHANED_PROP.get());
  }
  
  /**
   * Checks if there would be an overlap between the existing bound periods and
   * this period using the given period start and end dates.
   * @param periodStart Date to use for period start (ignored the current period
   *                    start of this branch)
   * @param periodEnd Date to use for period end (ignored the current period
   *                    end of this branch)
   * @return True if an overlap would exist
   */
  public boolean isOverlappingBoundPeriods(java.util.Date periodStart, java.util.Date periodEnd) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isOverlappingBoundPeriods(periodStart, periodEnd);
  }
  
  /**
   * Gets the value of the OverrideBillingAllocation field.
   * @deprecated Whether to override the billing allocation for installments plan
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverrideBillingAllocation() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(OVERRIDEBILLINGALLOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the Preempted field.
   * True if when bound this branch has been preempted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPreempted() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PREEMPTED_PROP.get());
  }
  
  /**
   * Check if this bean or branch has been promoted. A promoted bean is also
   * locked and cannot be changed.
   * <p/>
   * An EffDated is never promoted independent of its related
   * EffDatedBranch, meaning if the branch is promoted every bean in the graph
   * will be promoted, and if the branch is not promoted no bean in the graph
   * can be promoted.
   * @return True if promoted.
   */
  public boolean isPromoted() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
  }
  
  public boolean isPurgeableEvenWithUnpurgeableSiblings() {
    return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).isPurgeableEvenWithUnpurgeableSiblings();
  }
  
  /**
   * Gets the value of the QuoteHidden field.
   * Whether the quote is hidden from users without permission to view quote
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isQuoteHidden() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(QUOTEHIDDEN_PROP.get());
  }
  
  /**
   * When a branch is promoted and there exists a future bound period (or
   * periods, but multiple would be rare) then this method returns true until it
   * is cleared.
   * <p/>
   * This value can then be checked later to see if you want to apply the
   * changes on this branch to that future period. Once it's cleared you will no
   * longer have that option.
   * @return True if when promoted there exited a future bound period.
   */
  public boolean isResolveWithFuturePeriods() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isResolveWithFuturePeriods();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Whether this bean is sliced. If a bean is sliced then you can navigate from
   * this bean to another bean or beans via a link or array, if it's unsliced
   * (in "window" mode) you cannot navigate from this bean.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return 
   */
  public boolean isSlice() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isTemporaryBranch() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(TEMPORARYBRANCH_PROP.get());
  }
  
  /**
   * Used to differentiate between policy periods seen by the system vs those that are not
   * @return True if this policy period is a clone
   */
  public boolean isTemporaryClone() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isTemporaryClone();
  }
  
  /**
   * Returns true if the other is the same reinsurable coverable.
   * @param other the object to compare
   * @return true if the same
   */
  public boolean isTheSame(gw.api.reinsurance.ReinsurableCoverable other) {
    return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).isTheSame(other);
  }
  
  /**
   * Indicates whether the given trigger is available on the active workflow.
   * Has the same results as calling isTriggerAvailable on the workflow, but
   * with built-in null safety in case there is no active workflow on this
   * branch.
   * @param trigger The trigger to check on the active workflow
   * @return True if the given WorkflowTriggerKey is available on the Active Workflow
   */
  public boolean isTriggerAvailable(typekey.WorkflowTriggerKey trigger) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isTriggerAvailable(trigger);
  }
  
  /**
   * Returns true if this policy has been successfully quoted by running all steps of the quoting process such as
   * validation, pricing, forms inference, underwriting issue check and reinsurance.
   * This should be set by the markValidQuote() and markInvalidQuote() domain methods.
   * @return True is this policy has been successfully quoted
   */
  public boolean isValidQuote() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isValidQuote();
  }
  
  /**
   * Returns true if this policy's pricing information is up to date and accurate.
   * This should be set by the markValidRate() and markInvalidRate() domain methods
   * @return True if this policy's pricing information is up to date and accurate
   */
  public boolean isValidRate() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isValidRate();
  }
  
  /**
   * Gets the value of the ValidReinsurance field.
   * True if reinsurables were generated sucessfully.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isValidReinsurance() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(VALIDREINSURANCE_PROP.get());
  }
  
  /**
   * Gets the value of the WaiveDepositChange field.
   * Whether to waive the deposit amount change from current policy period and the based on
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWaiveDepositChange() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(WAIVEDEPOSITCHANGE_PROP.get());
  }
  
  /**
   * Locks the branch so that it can no longer be edited.  Unlike edit locking
   * (defined in PolicyPerioBaseEnhancement#OpenForEdit), lockBranch
   * is permanent and cannot be undone once committed.  This method is called
   * when a PolicyPeriod has reached a terminal state - e.g. Promoted, Withdrawn,
   * Not Taken, Preempted, etc.
   */
  public void lockBranch() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).lockBranch();
  }
  
  /**
   * Marks this period as an invalid quote, usually due to some exceptions occurring
   * during post-rating quote process.
   * <p>
   * This has the side-effect of removing any of this period's transaction
   * information and removing all newly added forms.
   */
  public void markInvalidPostRatingQuote() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markInvalidPostRatingQuote();
  }
  
  /**
   * Marks this period as having not completed all steps of the quote process necessary for a
   * valid quote. This includes validation, pricing, forms inference, underwriting issue
   * checks and reinsurance.
   * <p>
   * This has the side-effect of removing any of this period's transaction information.
   */
  public void markInvalidQuote() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markInvalidQuote();
  }
  
  /**
   * Marks this period as having out-of-date or inaccurate cost information.
   * This has the side-effect of removing any of this period's transaction
   * information.
   */
  public void markInvalidRate() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markInvalidRate();
  }
  
  /**
   * Marks this period as having a completed all steps of the quote process necessary for a
   * valid quote. This includes validation, pricing, forms inference, underwriting issue
   * checks and reinsurance.
   */
  public void markValidQuote() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markValidQuote();
  }
  
  /**
   * Marks this period as having up-to-date and accurate cost information.
   */
  public void markValidRate() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markValidRate();
  }
  
  /**
   * {@link #changePrimaryNamedInsuredTo(entity.Contact) Sets the primary named insured} to
   * the Account Holder Contact if the primary named insured hasn't been already set.
   * @return True if the Primary Named Insured was created; false if the Primary Named Insured already existed
   */
  public boolean maybeCreatePrimaryNamedInsuredFromMainAccountContact() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).maybeCreatePrimaryNamedInsuredFromMainAccountContact();
  }
  
  /**
   * Looks in this PolicyPeriod for any added beans that are a duplicate of any
   * {@link gw.api.logicalmatch.EffDatedLogicalMatcher} beans in a future slice of the period (matches defined by
   * {@link gw.api.logicalmatch.EffDatedLogicalMatcher#isLogicalMatchUntyped(entity.KeyableBean)}).
   * When a match in a future slice is found, the matching bean is cloned into a slice for the current EditEffectiveDate,
   * the properties from the added bean are set on the clone (as defined by
   * {@link gw.api.copier.EffDatedCopyable#copyFromBeanUntyped(entity.EffDated)} if the bean
   * implements {@link gw.api.copier.EffDatedCopyable}, no copying otherwise), any references to the duplicate added
   * bean are rekeyed to the clone, and finally the duplicate add bean is discarded.  The end result is
   * that the added duplicate will be replaced by a clone where the clone has the same properties as the added bean and
   * the same FixedID as the future match.
   * @return true if at least one bean was merged, false otherwise.
   */
  public boolean mergeDuplicateAdds() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).mergeDuplicateAdds();
  }
  
  public void mergeOOSChanges(gw.api.diff.DiffItem[] resolvedConflicts) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).mergeOOSChanges(resolvedConflicts);
  }
  
  /**
   * Create a new {@link entity.PolicyLocation} on this PolicyPeriod with an associated new {@link AccountLocation} on
   * the {@link entity.Account}
   */
  public entity.PolicyLocation newLocation() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).newLocation();
  }
  
  /**
   * Creates a new {@link entity.PolicyLocation} associated with the passed-in {@link AccountLocation}.  Throws a
   * {@link com.guidewire.pl.web.controller.UserDisplayableException} if the given AccountLocation is already
   * a PolicyLocation.  Throws a {@link RuntimeException} if the given AccountLocation is not on the same
   * Account as this {@link Policy}.
   * @param accLocation the AccountLocation to create a PolicyLocation for
   * @return the newly created PolicyLocation
   */
  public entity.PolicyLocation newLocation(entity.AccountLocation accLocation) {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).newLocation(accLocation);
  }
  
  /**
   * Creates a new {@link Note} on this PolicyPeriod.
   * @return the newly created Note.
   */
  public entity.Note newNote() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).newNote();
  }
  
  /**
   * Promotes this PolicyPeriod as the now official and contractually binding version for the
   * time period defined by PeriodStart to PeriodEnd.  Promotion of the PolicyPeriod follows
   * these general steps in order:
   * <p>
   * <ol>
   * <li>Calls {@link gw.plugin.policyperiod.IPolicyPeriodPlugin#prePromote(entity.PolicyPeriod)}</li>
   * <li>Calls the super method, {@link com.guidewire.pl.system.entity.proxy.EffDatedBranchProxy#promoteBranch()},
   * which runs some checks and then marks the branch as promoted and locked</li>
   * <li>Updates the NextRenewalCheckDate on the {@link entity.PolicyTerm} by calling
   * {@link gw.plugin.job.IPolicyRenewalPlugin#getRenewalStartDate(entity.PolicyPeriod)}</li>
   * <li>Clears the MostRecentBoundPeriod bit for the BasedOn PolicyPeriod if it is in the same PolicyTerm</li>
   * <li>Sets the MostRecentBoundPeriod bit for this PolicyPeriod</li>
   * <li>If Reinsurance is enabled, Enqueues this PolicyPeriod for Reinsurance Premium Ceding Calculation</li>
   * <li>Commits all these changes in this PolicyPeriod's {@link gw.pl.persistence.core.Bundle}</li>
   * </ol>
   * <p/> NOTE: there is the chance
   * that a ConcurrentDataChangeException will be thrown when this Policy is
   * committed, if another version of this Policy has already been bound with
   * the same BasedOnPeriod.
   * @param applyToFutureBoundPeriods If true and there are future bound periods
   *                                  then mark that this branch needs to be
   *                                  resolved with those future periods (either
   *                                  applied or skipped)
   */
  public void promoteBranch(boolean applyToFutureBoundPeriods) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).promoteBranch(applyToFutureBoundPeriods);
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the answer, if any, to the specified question.
   * @param question the question to remove the answer for
   */
  public void removeAnswer(gw.api.productmodel.Question question) {
    ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).removeAnswer(question);
  }
  
  /**
   * Removes the given element from the APDTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromAPDTransactions(entity.APDTransaction element) {
    __getInternalInterface().removeArrayElement(APDTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the APDTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAPDTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(APDTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the AsyncQuoteIssues array. This is achieved by marking the element for removal.
   */
  public void removeFromAsyncQuoteIssues(entity.AsyncQuoteIssue element) {
    __getInternalInterface().removeArrayElement(ASYNCQUOTEISSUES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AsyncQuoteIssues array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAsyncQuoteIssues(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ASYNCQUOTEISSUES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the BATransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromBATransactions(entity.BATransaction element) {
    __getInternalInterface().removeArrayElement(BATRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BATransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBATransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BATRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the BOPTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPTransactions(entity.BOPTransaction element) {
    __getInternalInterface().removeArrayElement(BOPTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the BOPTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BOPTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the CPTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromCPTransactions(entity.CPTransaction element) {
    __getInternalInterface().removeArrayElement(CPTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CPTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCPTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(CPTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
   */
  public void removeFromContingencies(entity.Contingency element) {
    __getInternalInterface().removeArrayElement(CONTINGENCIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContingencies(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(CONTINGENCIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Forms array. This is achieved by marking the element for removal.
   */
  public void removeFromForms(entity.Form element) {
    __getInternalInterface().removeArrayElement(FORMS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Forms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromForms(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the GLTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromGLTransactions(entity.GLTransaction element) {
    __getInternalInterface().removeArrayElement(GLTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the GLTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGLTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(GLTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the HOPTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPTransactions(entity.HOPTransaction element) {
    __getInternalInterface().removeArrayElement(HOPTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the HOPTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(HOPTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the IMTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromIMTransactions(entity.IMTransaction element) {
    __getInternalInterface().removeArrayElement(IMTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the IMTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(IMTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Lines array. This is achieved by marking the element for removal.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void removeFromLines(entity.PolicyLine value) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeFromLines(value);
  }
  
  /**
   * Removes the given element from the Lines array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLines(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LINES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationRisks(entity.LocationRisk element) {
    __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationRisks(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   */
  public void removeFromNotes(entity.Note element) {
    __getInternalInterface().removeArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(NOTES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PATransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromPATransactions(entity.PATransaction element) {
    __getInternalInterface().removeArrayElement(PATRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PATransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPATransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PATRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PeriodAnswers array. This is achieved by marking the element for removal.
   */
  public void removeFromPeriodAnswers(entity.PeriodAnswer element) {
    __getInternalInterface().removeArrayElement(PERIODANSWERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PeriodAnswers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPeriodAnswers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PERIODANSWERS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyContactRoles array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyContactRoles(entity.PolicyContactRole element) {
    __getInternalInterface().removeArrayElement(POLICYCONTACTROLES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyContactRoles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyContactRoles(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYCONTACTROLES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyFXRates array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyFXRates(entity.PolicyFXRate element) {
    __getInternalInterface().removeArrayElement(POLICYFXRATES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyFXRates array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyFXRates(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYFXRATES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyLocations array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyLocations(entity.PolicyLocation element) {
    __getInternalInterface().removeArrayElement(POLICYLOCATIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyLocations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyLocations(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYLOCATIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyRisks array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyRisks(entity.PolicyRisk element) {
    __getInternalInterface().removeArrayElement(POLICYRISKS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyRisks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyRisks(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYRISKS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RIRiskVersionLists array. This is achieved by marking the element for removal.
   */
  public void removeFromRIRiskVersionLists(entity.RIRiskVersionList element) {
    __getInternalInterface().removeArrayElement(RIRISKVERSIONLISTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RIRiskVersionLists array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRIRiskVersionLists(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RIRISKVERSIONLISTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the UWIssuesIncludingSoftDeleted array. This is achieved by marking the element for removal.
   */
  public void removeFromUWIssuesIncludingSoftDeleted(entity.UWIssue element) {
    __getInternalInterface().removeArrayElement(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the UWIssuesIncludingSoftDeleted array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUWIssuesIncludingSoftDeleted(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the WCTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromWCTransactions(entity.WCTransaction element) {
    __getInternalInterface().removeArrayElement(WCTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the WCTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWCTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(WCTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Workflows array. This is achieved by marking the element for removal.
   */
  public void removeFromWorkflows(entity.PolicyPeriodWorkflow element) {
    __getInternalInterface().removeArrayElement(WORKFLOWS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Workflows array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWorkflows(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(WORKFLOWS_PROP.get(), elementID);
  }
  
  /**
   * Remove a {@link entity.PolicyLocation} from this period or throw an UserDisplayableException (typically because the
   * location is in use somewhere in the policy).  If a remove is allowed, then it calls the
   * {@link gw.api.policy.PolicyLineJavaMethods#preLocationDelete(entity.PolicyLocation) pre location delete callback}
   * in each line on the policy prior to removal, and then renumbers the locations after the removal.
   * @param location the PolicyLocation to remove
   */
  public void removeLocation(entity.PolicyLocation location) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeLocation(location);
  }
  
  /**
   * Removes all merge bases attached to this branch.
   */
  public void removeMergeBases() {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).removeMergeBases();
  }
  
  /**
   * Inspects a PolicyPeriod looking for EffDateds in its graph that are orphaned on any date ranges, removing those
   * orphaned date ranges.  An EffDated is orphaned for a date range if and only if it has a non-nullable foreign key
   * reference to another FixedId that is not effective during that date range.
   * <p>
   * <em>Note:<em/> Since {@link #getDiffItems(DiffReason) getDiffItems("ExpirationDateCheck")} will be called to get a
   * set of EffDateds to use as starting points for the PolicyPeriod graph traversal, any DiffItems filtered for the
   * "ExpirationDateCheck" DiffReason may cause their associated EffDateds and any reachable EffDateds to not be checked
   * for orphaned date range removal.  Additionally, the PolicyPeriod's EffectiveDatedFields will be explicitly omitted
   * from orphaned date range removal as it must be present for the duration of the PolicyPeriod.
   * @return A set of version lists that had date ranges removed.
   */
  public java.util.Set<gw.pl.persistence.core.effdate.EffDatedVersionList> removeOrphanedEffDatedDateRanges() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeOrphanedEffDatedDateRanges();
  }
  
  /**
   * Removes the line specified by line pattern
   * @param linePattern 
   */
  public void removePolicyLine(gw.api.productmodel.PolicyLinePattern linePattern) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removePolicyLine(linePattern);
  }
  
  /**
   * Removes all {@link entity.PolicyLocation PolicyLocations} that
   * {@link entity.PolicyLocation#isInUse()}  are not in use}.
   */
  public void removeUnusedLocations() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeUnusedLocations();
  }
  
  /**
   * Report an issue that prevents this item from being archived. Usually called by a rule when it has determined that the item is not
   * ready to be archived yet. Unlike skipFromArchiving(), this method does not return immediately and subsequent rules are processed.
   * @param message The reason for skipping.
   */
  public void reportArchiveProblem(java.lang.String message) {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).reportArchiveProblem(message);
  }
  
  /**
   * Reset flag that marks the graph as excluded for archiving
   */
  public void resetToPreArchivedState() {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).resetToPreArchivedState();
  }
  
  /**
   * Retrieve filtered PaymentPlanData instances from the billing system.
   * <p>
   * This method also calls {@link #updateBillingAmountsOnInstallmentsPlans(gw.plugin.billing.PaymentPlanData[])} to set
   * billing preview fields on retrieved installments plans. This can be a very expensive method
   * as it calls the Billing system at least once for each retrieved payment plan.
   * <p>
   * If possible, please use {@link #retrievePaymentPlansWithoutSettingBillingAmounts()} and then selectively
   * call {@link #updateBillingAmountsOnInstallmentsPlans(gw.plugin.billing.PaymentPlanData[])} on only the plan(s) of interest.
   * @return Available filtered PaymentPlanData instances retrieved from the billing system.
   */
  public gw.plugin.billing.PaymentPlanData[] retrievePaymentPlans() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).retrievePaymentPlans();
  }
  
  /**
   * Retrieve filtered PaymentPlanData instances from the billing system.
   * <p>
   * NOTE: This method will not set the Downpayment, Installment and Total fields on the retrieved
   * InstallmentsPlanDatas. If you need these all to be set, use the #retrievePaymentPlansAndSetBillingPreviewFields method.
   * @return Available filtered PaymentPlanData instances retrieved from the billing system.
   */
  public gw.plugin.billing.PaymentPlanData[] retrievePaymentPlansWithoutSettingBillingAmounts() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).retrievePaymentPlansWithoutSettingBillingAmounts();
  }
  
  /**
   * Schedule this item for archival
   */
  public void scheduleForArchive() {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).scheduleForArchive();
  }
  
  /**
   * Sets the value of the APDTransactions field.
   */
  public void setAPDTransactions(entity.APDTransaction[] value) {
    __getInternalInterface().setFieldValue(APDTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActiveWorkflow field.
   */
  public void setActiveWorkflow(entity.PolicyPeriodWorkflow value) {
    __getInternalInterface().setFieldValue(ACTIVEWORKFLOW_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AllocationOfRemainder field.
   * @deprecated The method to allocate the remainder of cost if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  public void setAllocationOfRemainder(typekey.BillingRemainderAllocate value) {
    __getInternalInterface().setFieldValue(ALLOCATIONOFREMAINDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AllowGapsBefore field.
   */
  private void setAllowGapsBefore(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ALLOWGAPSBEFORE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AltBillingAccountNumber field.
   */
  public void setAltBillingAccountNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ALTBILLINGACCOUNTNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveDate field.
   */
  private void setArchiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ARCHIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveFailure field.
   */
  private void setArchiveFailure(entity.ArchiveFailure value) {
    __getInternalInterface().setFieldValue(ARCHIVEFAILURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveFailureDetails field.
   */
  private void setArchiveFailureDetails(entity.ArchiveFailureDetails value) {
    __getInternalInterface().setFieldValue(ARCHIVEFAILUREDETAILS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveSchemaInfo field.
   */
  private void setArchiveSchemaInfo(entity.UpgradeDatamodelInfo value) {
    __getInternalInterface().setFieldValue(ARCHIVESCHEMAINFO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveState field.
   */
  private void setArchiveState(typekey.ArchiveState value) {
    __getInternalInterface().setFieldValue(ARCHIVESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignedRisk field.
   */
  public void setAssignedRisk(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ASSIGNEDRISK_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AsyncQuoteIssues field.
   */
  public void setAsyncQuoteIssues(entity.AsyncQuoteIssue[] value) {
    __getInternalInterface().setFieldValue(ASYNCQUOTEISSUES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BATransactions field.
   */
  public void setBATransactions(entity.BATransaction[] value) {
    __getInternalInterface().setFieldValue(BATRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BOPTransactions field.
   */
  public void setBOPTransactions(entity.BOPTransaction[] value) {
    __getInternalInterface().setFieldValue(BOPTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BaseState field.
   */
  public void setBaseState(typekey.Jurisdiction value) {
    __getInternalInterface().setFieldValue(BASESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnDate field.
   */
  private void setBasedOnDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(BASEDONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BillImmediatelyPercentage field.
   * @deprecated The percentage to bill immediately if overriding billing allocation for installments plan
   */
  @java.lang.Deprecated
  public void setBillImmediatelyPercentage(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(BILLIMMEDIATELYPERCENTAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BillingMethod field.
   */
  public void setBillingMethod(typekey.BillingMethod value) {
    __getInternalInterface().setFieldValue(BILLINGMETHOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchName field.
   */
  public void setBranchName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BRANCHNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchNumber field.
   */
  public void setBranchNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BRANCHNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CPTransactions field.
   */
  public void setCPTransactions(entity.CPTransaction[] value) {
    __getInternalInterface().setFieldValue(CPTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CancellationDate field.
   */
  private void setCancellationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CANCELLATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Contingencies field.
   */
  public void setContingencies(entity.Contingency[] value) {
    __getInternalInterface().setFieldValue(CONTINGENCIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  public void setDenormalizedFK() {
    ((gw.api.domain.DenormalizedFKOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.DenormalizedFKOutOfDomainGraph")).setDenormalizedFK();
  }
  
  /**
   * Sets the value of the DepositAmount field.
   */
  public void setDepositAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(DEPOSITAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DepositAmount_amt field.
   */
  private void setDepositAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEPOSITAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DepositAmount_cur field.
   */
  private void setDepositAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(DEPOSITAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DepositCollected field.
   * @deprecated The deposit amount collected
   */
  @java.lang.Deprecated
  public void setDepositCollected(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(DEPOSITCOLLECTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DepositCollected_amt field.
   * @deprecated 
   */
  @java.lang.Deprecated
  private void setDepositCollected_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEPOSITCOLLECTED_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DepositCollected_cur field.
   * @deprecated 
   */
  @java.lang.Deprecated
  private void setDepositCollected_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(DEPOSITCOLLECTED_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DepositOverridePct field.
   */
  public void setDepositOverridePct(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEPOSITOVERRIDEPCT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DoNotDestroy field.
   */
  private void setDoNotDestroy(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DONOTDESTROY_PROP.get(), value);
  }
  
  public void setDoNotDestroy(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setDoNotDestroy(value, getDescription);
  }
  
  @java.lang.Deprecated
  public void setDoNotPurge(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setDoNotPurge(value, getDescription);
  }
  
  /**
   * Sets the value of the EditEffectiveDate field.
   */
  public void setEditEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EDITEFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EditLocked field.
   */
  public void setEditLocked(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(EDITLOCKED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EffectiveDatedFields field.
   */
  public void setEffectiveDatedFields(entity.EffectiveDatedFields value) {
    __getInternalInterface().setFieldValue(EFFECTIVEDATEDFIELDS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EffectiveDatedFieldsArray field.
   */
  private void setEffectiveDatedFieldsArray(entity.EffectiveDatedFields[] value) {
    __getInternalInterface().setFieldValue(EFFECTIVEDATEDFIELDSARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EstimatedPremium field.
   */
  public void setEstimatedPremium(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(ESTIMATEDPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EstimatedPremium_amt field.
   */
  private void setEstimatedPremium_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ESTIMATEDPREMIUM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EstimatedPremium_cur field.
   */
  private void setEstimatedPremium_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(ESTIMATEDPREMIUM_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExcludeReason field.
   */
  private void setExcludeReason(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXCLUDEREASON_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExcludedFromArchive field.
   */
  private void setExcludedFromArchive(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(EXCLUDEDFROMARCHIVE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FailedOOSEEvaluation field.
   */
  public void setFailedOOSEEvaluation(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FAILEDOOSEEVALUATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FailedOOSEValidation field.
   */
  public void setFailedOOSEValidation(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FAILEDOOSEVALIDATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Forms field.
   */
  public void setForms(entity.Form[] value) {
    __getInternalInterface().setFieldValue(FORMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FuturePeriods field.
   */
  private void setFuturePeriods(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FUTUREPERIODS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GLTransactions field.
   */
  public void setGLTransactions(entity.GLTransaction[] value) {
    __getInternalInterface().setFieldValue(GLTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HOPTransactions field.
   */
  public void setHOPTransactions(entity.HOPTransaction[] value) {
    __getInternalInterface().setFieldValue(HOPTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IMTransactions field.
   */
  public void setIMTransactions(entity.IMTransaction[] value) {
    __getInternalInterface().setFieldValue(IMTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InvoiceStreamCode field.
   */
  public void setInvoiceStreamCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INVOICESTREAMCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InvoiceStreamOverrides field.
   */
  public void setInvoiceStreamOverrides(entity.InvoiceStreamOverrides value) {
    __getInternalInterface().setFieldValue(INVOICESTREAMOVERRIDES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InvoiceStreamOverridesArray field.
   */
  private void setInvoiceStreamOverridesArray(entity.InvoiceStreamOverrides[] value) {
    __getInternalInterface().setFieldValue(INVOICESTREAMOVERRIDESARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InvoicingMethod field.
   */
  public void setInvoicingMethod(typekey.InvoicingMethod value) {
    __getInternalInterface().setFieldValue(INVOICINGMETHOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Job field.
   */
  private void setJob(entity.Job value) {
    __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Lines field.
   */
  public void setLines(entity.PolicyLine[] value) {
    __getInternalInterface().setFieldValue(LINES_PROP.get(), value);
  }
  
  /**
   * Set a foreign key by passing in an EFfDatedKey (effectively the
   * EffDatedVersionList or FixedId of the bean). You need this method because
   * it's the only way to set a foreign key given a FixedId (and no context for
   * when that FixeId might be effective).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key to set
   * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
   *             FixedId of the bean)
   */
  public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
  }
  
  /**
   * Sets the value of the LocationAutoNumberSeq field.
   */
  public void setLocationAutoNumberSeq(entity.AutoNumberSequence value) {
    __getInternalInterface().setFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationRisks field.
   */
  public void setLocationRisks(entity.LocationRisk[] value) {
    __getInternalInterface().setFieldValue(LOCATIONRISKS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Locked field.
   */
  private void setLocked(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LOCKED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LockingColumn field.
   */
  private void setLockingColumn(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ModelDate field.
   */
  private void setModelDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(MODELDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ModelNumber field.
   */
  private void setModelNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(MODELNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ModelNumberIndex field.
   */
  private void setModelNumberIndex(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MODELNUMBERINDEX_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MostRecentModel field.
   */
  private void setMostRecentModel(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(MOSTRECENTMODEL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MostRecentModelIndex field.
   */
  private void setMostRecentModelIndex(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MOSTRECENTMODELINDEX_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewInvoiceStream field.
   */
  public void setNewInvoiceStream(entity.BillingInvoiceStream value) {
    __getInternalInterface().setFieldValue(NEWINVOICESTREAM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewInvoiceStreamArray field.
   */
  private void setNewInvoiceStreamArray(entity.BillingInvoiceStream[] value) {
    __getInternalInterface().setFieldValue(NEWINVOICESTREAMARRAY_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value) {
    __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the {@link Offering} for this PolicyPeriod
   * @param offering the Offering to set as the Offering for this PolicyPeriod
   */
  public void setOffering(gw.api.productmodel.Offering offering) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setOffering(offering);
  }
  
  /**
   * Sets the value of the Orphaned field.
   */
  private void setOrphaned(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ORPHANED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideBillingAllocation field.
   * @deprecated Whether to override the billing allocation for installments plan
   */
  @java.lang.Deprecated
  public void setOverrideBillingAllocation(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(OVERRIDEBILLINGALLOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PATransactions field.
   */
  public void setPATransactions(entity.PATransaction[] value) {
    __getInternalInterface().setFieldValue(PATRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PNIContactDenorm field.
   */
  private void setPNIContactDenorm(entity.Contact value) {
    __getInternalInterface().setFieldValue(PNICONTACTDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PRActiveWorkflowArray field.
   */
  private void setPRActiveWorkflowArray(entity.PRActiveWorkflow[] value) {
    __getInternalInterface().setFieldValue(PRACTIVEWORKFLOWARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Period field.
   */
  private void setPeriod(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(PERIOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PeriodAnswers field.
   */
  public void setPeriodAnswers(entity.PeriodAnswer[] value) {
    __getInternalInterface().setFieldValue(PERIODANSWERS_PROP.get(), value);
  }
  
  /**
   * Set the end date of this branch's period. Equivalent to calling
   * setPeriodWindow(getPeriodStart(), endDate).
   * @param endDate New end date of this branch's period.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPeriodEnd(java.util.Date endDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).setPeriodEnd(endDate);
  }
  
  /**
   * Set the start date of this branch's period. Equivalent to calling
   * setPeriodWindow(startDate, getPeriodEnd()).
   * @param startDate New start date of this branch's period.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPeriodStart(java.util.Date startDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).setPeriodStart(startDate);
  }
  
  /**
   * Set this branch's period dates. There are several restrictions to setting
   * the period dates:
   * @param newStart New start date of this branch's period.
   * @param newEnd New end date of this branch's period.
   */
  public void setPeriodWindow(java.util.Date newStart, java.util.Date newEnd) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).setPeriodWindow(newStart, newEnd);
  }
  
  /**
   * Sets the value of the Policy field.
   */
  private void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  /**
   * Sets the {@link entity.PolicyAddress} for this PolicyPeriod.  This is a convenience method and is equivalent to
   * PolicyPeriod.{@link entity.EffectiveDatedFields#setPolicyAddress(entity.PolicyAddress)}
   * @param address the policy address
   */
  public void setPolicyAddress(entity.PolicyAddress address) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setPolicyAddress(address);
  }
  
  /**
   * Sets the value of the PolicyContactRoles field.
   */
  public void setPolicyContactRoles(entity.PolicyContactRole[] value) {
    __getInternalInterface().setFieldValue(POLICYCONTACTROLES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyFXRates field.
   */
  public void setPolicyFXRates(entity.PolicyFXRate[] value) {
    __getInternalInterface().setFieldValue(POLICYFXRATES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyLocations field.
   */
  public void setPolicyLocations(entity.PolicyLocation[] value) {
    __getInternalInterface().setFieldValue(POLICYLOCATIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyRisks field.
   */
  public void setPolicyRisks(entity.PolicyRisk[] value) {
    __getInternalInterface().setFieldValue(POLICYRISKS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  private void setPolicyTerm(entity.PolicyTerm value) {
    __getInternalInterface().setFieldValue(POLICYTERM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Preempted field.
   */
  private void setPreempted(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PREEMPTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredSettlementCurrency field.
   */
  public void setPreferredSettlementCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PREFERREDSETTLEMENTCURRENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryInsuredName field.
   */
  public void setPrimaryInsuredName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYINSUREDNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryInsuredNameDenorm field.
   */
  private void setPrimaryInsuredNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYINSUREDNAMEDENORM_PROP.get(), value);
  }
  
  /**
   * Set the given {@link entity.PolicyLocation} as primary for this PolicyPeriod. The location must already be on
   * the policy period.
   * @param location to be set as the primary location of the policy period
   */
  public void setPrimaryLocation(entity.PolicyLocation location) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setPrimaryLocation(location);
  }
  
  /**
   * Sets the value of the ProducerCodeOfRecord field.
   */
  public void setProducerCodeOfRecord(entity.ProducerCode value) {
    __getInternalInterface().setFieldValue(PRODUCERCODEOFRECORD_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the root public ID to the passed value.
   * @param value value for the root public ID.
   */
  public void setPublicIDOfRoot(java.lang.String value) {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).setPublicIDOfRoot(value);
  }
  
  /**
   * Sets the value of the QuoteCloneOriginalPeriod field.
   */
  private void setQuoteCloneOriginalPeriod(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(QUOTECLONEORIGINALPERIOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the QuoteCloneSequenceNumber field.
   */
  private void setQuoteCloneSequenceNumber(java.lang.Long value) {
    __getInternalInterface().setFieldValue(QUOTECLONESEQUENCENUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the QuoteHidden field.
   */
  public void setQuoteHidden(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(QUOTEHIDDEN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the QuoteIdentifier field.
   */
  public void setQuoteIdentifier(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(QUOTEIDENTIFIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the QuoteMaturityLevel field.
   */
  private void setQuoteMaturityLevel(typekey.QuoteMaturityLevel value) {
    __getInternalInterface().setFieldValue(QUOTEMATURITYLEVEL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RIRiskVersionLists field.
   */
  public void setRIRiskVersionLists(entity.RIRiskVersionList[] value) {
    __getInternalInterface().setFieldValue(RIRISKVERSIONLISTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RateAsOfDate field.
   */
  public void setRateAsOfDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(RATEASOFDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RefundCalcMethod field.
   */
  public void setRefundCalcMethod(typekey.CalculationMethod value) {
    __getInternalInterface().setFieldValue(REFUNDCALCMETHOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Segment field.
   */
  public void setSegment(typekey.Segment value) {
    __getInternalInterface().setFieldValue(SEGMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SelectedPaymentPlan field.
   */
  public void setSelectedPaymentPlan(entity.PaymentPlanSummary value) {
    __getInternalInterface().setFieldValue(SELECTEDPAYMENTPLAN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SelectedPaymentPlanArray field.
   */
  private void setSelectedPaymentPlanArray(entity.PaymentPlanSummary[] value) {
    __getInternalInterface().setFieldValue(SELECTEDPAYMENTPLANARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SelectedTermType field.
   */
  public void setSelectedTermType(typekey.TermType value) {
    __getInternalInterface().setFieldValue(SELECTEDTERMTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SeriesCheckingPatternCode field.
   */
  public void setSeriesCheckingPatternCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SERIESCHECKINGPATTERNCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SingleCheckingPatternCode field.
   */
  public void setSingleCheckingPatternCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SINGLECHECKINGPATTERNCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SpecialHandling field.
   */
  public void setSpecialHandling(typekey.SpecialHandling value) {
    __getInternalInterface().setFieldValue(SPECIALHANDLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.PolicyPeriodStatus value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TaxSurchargesRPT field.
   */
  public void setTaxSurchargesRPT(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TAXSURCHARGESRPT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TaxSurchargesRPT_amt field.
   */
  private void setTaxSurchargesRPT_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TAXSURCHARGESRPT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TaxSurchargesRPT_cur field.
   */
  private void setTaxSurchargesRPT_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TAXSURCHARGESRPT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TemporaryBranch field.
   */
  private void setTemporaryBranch(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(TEMPORARYBRANCH_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TemporaryCloneStatus field.
   */
  public void setTemporaryCloneStatus(typekey.PolicyPeriodCloneStatus value) {
    __getInternalInterface().setFieldValue(TEMPORARYCLONESTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TermNumber field.
   */
  public void setTermNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(TERMNUMBER_PROP.get(), value);
  }
  
  /**
   * Changes the {@link TermType} of this PolicyPeriod, then recalculates and changes the
   * PeriodEnd date. The logic for calculating PeriodEnd is in
   * {@link PolicyPeriodInternalMethods#calculatePeriodEnd(java.util.Date, typekey.TermType)}
   * @param termType 
   */
  public void setTermType(typekey.TermType termType) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setTermType(termType);
  }
  
  /**
   * Sets the value of the TotalCostRPT field.
   */
  public void setTotalCostRPT(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALCOSTRPT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalCostRPT_amt field.
   */
  private void setTotalCostRPT_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALCOSTRPT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalCostRPT_cur field.
   */
  private void setTotalCostRPT_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALCOSTRPT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPremiumRPT field.
   */
  public void setTotalPremiumRPT(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALPREMIUMRPT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPremiumRPT_amt field.
   */
  private void setTotalPremiumRPT_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALPREMIUMRPT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPremiumRPT_cur field.
   */
  private void setTotalPremiumRPT_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALPREMIUMRPT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TransactionCostRPT field.
   */
  public void setTransactionCostRPT(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TRANSACTIONCOSTRPT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TransactionCostRPT_amt field.
   */
  private void setTransactionCostRPT_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TRANSACTIONCOSTRPT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TransactionCostRPT_cur field.
   */
  private void setTransactionCostRPT_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TRANSACTIONCOSTRPT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TransactionPremiumRPT field.
   */
  public void setTransactionPremiumRPT(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TRANSACTIONPREMIUMRPT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TransactionPremiumRPT_amt field.
   */
  private void setTransactionPremiumRPT_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TRANSACTIONPREMIUMRPT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TransactionPremiumRPT_cur field.
   */
  private void setTransactionPremiumRPT_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TRANSACTIONPREMIUMRPT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UWCompany field.
   */
  public void setUWCompany(entity.UWCompany value) {
    __getInternalInterface().setFieldValue(UWCOMPANY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UWIssuesIncludingSoftDeleted field.
   */
  public void setUWIssuesIncludingSoftDeleted(entity.UWIssue[] value) {
    __getInternalInterface().setFieldValue(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ValidReinsurance field.
   */
  public void setValidReinsurance(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(VALIDREINSURANCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WCTransactions field.
   */
  public void setWCTransactions(entity.WCTransaction[] value) {
    __getInternalInterface().setFieldValue(WCTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WaiveDepositChange field.
   */
  public void setWaiveDepositChange(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(WAIVEDEPOSITCHANGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Workflows field.
   */
  public void setWorkflows(entity.PolicyPeriodWorkflow[] value) {
    __getInternalInterface().setFieldValue(WORKFLOWS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WorksheetContainer field.
   */
  public void setWorksheetContainer(entity.WorksheetContainer value) {
    __getInternalInterface().setFieldValue(WORKSHEETCONTAINER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WorksheetContainerArray field.
   */
  private void setWorksheetContainerArray(entity.WorksheetContainer[] value) {
    __getInternalInterface().setFieldValue(WORKSHEETCONTAINERARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WrittenDate field.
   */
  public void setWrittenDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(WRITTENDATE_PROP.get(), value);
  }
  
  /**
   * Skip archival of this item. Usually called by a rule when it has determined that the item is not ready to be archived yet.
   * Unlike reportArchiveProblem(), this method returns immediately and no more rules are processed.
   * @param message The reason for skipping.
   */
  public void skipFromArchiving(java.lang.String message) {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).skipFromArchiving(message);
  }
  
  /**
   * Enters this PolicyPeriod in the QUOTING status and enables the Quoting Commit token,
   * blocking other instances of this period from committing changes until the Quoting Commit
   * token is released by {@link entity.PolicyPeriod#finishQuoting()}
   * or {@link entity.PolicyPeriod#unlockFromQuoting()}}.
   */
  public void startQuoting() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).startQuoting();
  }
  
  /**
   * Calls the syncComputedValues method on each line, used to allow the line to update
   * computed things like the set of covered jurisdictions or to re-split exposure bases.
   * This method will also update official IDs on all named insureds.  This method is intended
   * to be called generally as part of the quote process or when starting a job in a new
   * term; from other places (like the UI) it's generally more prudent to call the appropriate
   * methods to update more specific values, rather than calling this generic method.
   */
  public void syncComputedValues() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).syncComputedValues();
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  /**
   * Marks this PolicyPeriod as uncanceled.
   */
  public void uncancel() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).uncancel();
  }
  
  /**
   * Unlocks a Period in the QUOTING status by resetting the status to DRAFT - this will allow other instances
   * of the PolicyPeriod to commit to the database again.  Requires the "resetquotinglock"
   * permission to execute. This method is intended to be used as an emergency reset when a PolicyPeriod
   * has become stuck in a QUOTING state and cannot be unlocked on by other means.
   */
  public void unlockFromQuoting() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).unlockFromQuoting();
  }
  
  public void updateBillingAmountsOnInstallmentsPlans(gw.plugin.billing.PaymentPlanData[] paymentPlans) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateBillingAmountsOnInstallmentsPlans(paymentPlans);
  }
  
  /**
   * Updates denormalized fields related to Contacts.  This includes the
   * {@link entity.PolicyPeriod#getPrimaryInsuredName() denormalized name} of the {@link #getPrimaryNamedInsured() PrimaryNamedInsured}
   * stored on the PolicyPeriod as well as same
   * {@link entity.Job#getPrimaryInsuredName() Primary Named Insured Name} denormalized on the Job.
   */
  public void updateContactDenorms() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateContactDenorms();
  }
  
  /**
   * Updates denormalized fields related to Contacts when the PolicyPeriod is archived.  This includes the
   * {@link entity.PolicyPeriod#getPrimaryInsuredName() denormalized name} of the {@link #getPrimaryNamedInsured() PrimaryNamedInsured}
   * stored on the PolicyPeriod.
   * @param contact the contact to update the denorms
   */
  public void updateContactDenormsWhenArchived(entity.Contact contact) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateContactDenormsWhenArchived(contact);
  }
  
  /**
   * Goes through all {@link PolicyNamedInsured} for this Policy and calls
   * {@link entity.PolicyNamedInsured#updateOfficialIDs()} on each one.
   */
  public void updateOfficialIDs() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateOfficialIDs();
  }
  
  /**
   * TemporaryCloneStatus can only be changed if it is currently not null.
   * @param status PolicyPeriodCloneStatus typelist
   */
  public void updateTemporaryCloneStatus(typekey.PolicyPeriodCloneStatus status) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateTemporaryCloneStatus(status);
  }
  
  /**
   * Calculate and set the TermNumber for this PolicyPeriod.  The TermNumber is set to
   * the maximum found TermNumber for the Policy + 1, or set to 1 in the case that no
   * prior TermNumber is found.
   */
  public void updateTermNumber() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateTermNumber();
  }
  
  /**
   * Update territory codes on all policy locations of this policy period according to
   * which lines exist in this period. We usually have to do this when adding/removing lines
   * from Package (multi-line) policies.
   */
  public void updateTerritoryCodes() {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateTerritoryCodes();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PolicyPeriodInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PolicyPeriod.this.__getDelegateManager();
    }
    
    public void accept(gw.api.domain.PinnableVisitor pinnableVisitor) {
      ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).accept(pinnableVisitor);
    }
    
    public void acquireQuotingToken() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).acquireQuotingToken();
    }
    
    /**
     * Adds the given {@link entity.PolicyLocation} to the PolicyPeriod and auto-numbers it.
     * @param location the PolicyLocation to add to this PolicyPeriod
     */
    public void addAndNumberLocation(entity.PolicyLocation location) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addAndNumberLocation(location);
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
    }
    
    /**
     * Associates an event with the bean, which will be fired when the bean is
     * committed. A bean with an event is considered changed.
     * @param strEventId The event id.
     */
    public void addEvent(java.lang.String strEventId) {
      ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
    }
    
    /**
     * Add a new {@link PolicyContactRole} of the given type to this PolicyPeriod ultimately connected to the given
     * {@link Contact}.  If the {@link entity.AccountContact} for this contact does not already
     * exist on the Account for this PolicyPeriod, the AccountContact is created.
     * If the {@link entity.AccountContactRole} appropriate for the given PolicyContactRole does
     * not exist on the AccountContact, it is created.
     * The PolicyContactRole is created in this PolicyPeriod's bundle.
     * @param contact The Contact that the PolicyNamedInsured ultimately refers to
     * @param role The Role to create for the given Contact on this PolicyPeriod
     *                given role on this Period
     * @return the created PolicyContactRole
     */
    public entity.PolicyContactRole addNewPolicyContactRoleForContact(entity.Contact contact, typekey.PolicyContactRole role) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addNewPolicyContactRoleForContact(contact, role);
    }
    
    public entity.PolicyContactRole addNewPolicyContactRoleForContactWithCheckProperties(entity.Contact contact, typekey.PolicyContactRole role, java.util.Map<gw.entity.IEntityPropertyInfo, java.lang.Object> preInsertCheckProperties) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addNewPolicyContactRoleForContactWithCheckProperties(contact, role, preInsertCheckProperties);
    }
    
    public void addSlice(entity.EffDatedBase slice, java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).addSlice(slice, sliceDate);
    }
    
    /**
     * Adds the given element to the APDTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAPDTransactions(entity.APDTransaction element) {
      __getInternalInterface().addArrayElement(APDTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Addes given answer to answers stored on this AnswerContainer.
     * @param answer answer to add
     */
    public void addToAnswers(entity.PCAnswerDelegate answer) {
      ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).addToAnswers(answer);
    }
    
    /**
     * Adds the given element to the AsyncQuoteIssues array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAsyncQuoteIssues(entity.AsyncQuoteIssue element) {
      __getInternalInterface().addArrayElement(ASYNCQUOTEISSUES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BATransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBATransactions(entity.BATransaction element) {
      __getInternalInterface().addArrayElement(BATRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BOPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBOPTransactions(entity.BOPTransaction element) {
      __getInternalInterface().addArrayElement(BOPTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the CPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCPTransactions(entity.CPTransaction element) {
      __getInternalInterface().addArrayElement(CPTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Contingencies array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToContingencies(entity.Contingency element) {
      __getInternalInterface().addArrayElement(CONTINGENCIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the EffectiveDatedFieldsArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToEffectiveDatedFieldsArray(entity.EffectiveDatedFields element) {
      __getInternalInterface().addArrayElement(EFFECTIVEDATEDFIELDSARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Forms array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToForms(entity.Form element) {
      __getInternalInterface().addArrayElement(FORMS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the GLTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToGLTransactions(entity.GLTransaction element) {
      __getInternalInterface().addArrayElement(GLTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the HOPTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToHOPTransactions(entity.HOPTransaction element) {
      __getInternalInterface().addArrayElement(HOPTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the IMTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToIMTransactions(entity.IMTransaction element) {
      __getInternalInterface().addArrayElement(IMTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the InvoiceStreamOverridesArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToInvoiceStreamOverridesArray(entity.InvoiceStreamOverrides element) {
      __getInternalInterface().addArrayElement(INVOICESTREAMOVERRIDESARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Lines array. This is achieved by setting the parent foreign key to this entity instance.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void addToLines(entity.PolicyLine value) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addToLines(value);
    }
    
    /**
     * Adds the given element to the LocationRisks array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLocationRisks(entity.LocationRisk element) {
      __getInternalInterface().addArrayElement(LOCATIONRISKS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the NewInvoiceStreamArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToNewInvoiceStreamArray(entity.BillingInvoiceStream element) {
      __getInternalInterface().addArrayElement(NEWINVOICESTREAMARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToNotes(entity.Note element) {
      __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PATransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPATransactions(entity.PATransaction element) {
      __getInternalInterface().addArrayElement(PATRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PRActiveWorkflowArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPRActiveWorkflowArray(entity.PRActiveWorkflow element) {
      __getInternalInterface().addArrayElement(PRACTIVEWORKFLOWARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PeriodAnswers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPeriodAnswers(entity.PeriodAnswer element) {
      __getInternalInterface().addArrayElement(PERIODANSWERS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PolicyContactRoles array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPolicyContactRoles(entity.PolicyContactRole element) {
      __getInternalInterface().addArrayElement(POLICYCONTACTROLES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PolicyFXRates array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPolicyFXRates(entity.PolicyFXRate element) {
      __getInternalInterface().addArrayElement(POLICYFXRATES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PolicyLocations array. This is achieved by setting the parent foreign key to this entity instance.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void addToPolicyLocations(entity.PolicyLocation value) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).addToPolicyLocations(value);
    }
    
    /**
     * Adds the given element to the PolicyRisks array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPolicyRisks(entity.PolicyRisk element) {
      __getInternalInterface().addArrayElement(POLICYRISKS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RIRiskVersionLists array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRIRiskVersionLists(entity.RIRiskVersionList element) {
      __getInternalInterface().addArrayElement(RIRISKVERSIONLISTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the SelectedPaymentPlanArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToSelectedPaymentPlanArray(entity.PaymentPlanSummary element) {
      __getInternalInterface().addArrayElement(SELECTEDPAYMENTPLANARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the UWIssuesIncludingSoftDeleted array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToUWIssuesIncludingSoftDeleted(entity.UWIssue element) {
      __getInternalInterface().addArrayElement(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the WCTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToWCTransactions(entity.WCTransaction element) {
      __getInternalInterface().addArrayElement(WCTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Workflows array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToWorkflows(entity.PolicyPeriodWorkflow element) {
      __getInternalInterface().addArrayElement(WORKFLOWS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the WorksheetContainerArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToWorksheetContainerArray(entity.WorksheetContainer element) {
      __getInternalInterface().addArrayElement(WORKSHEETCONTAINERARRAY_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    /**
     * Applies changes from the sourcePeriod into this PolicyPeriod.  This is done by generating a list of diffs from the
     * sourcePeriod to its BasedOn period, then applying any applicable diffs to this branch, and finally doing some
     * cleanup
     * @param sourcePeriod the original branch to generate diffs from
     */
    public void applyChangesFromBranch(entity.PolicyPeriod sourcePeriod) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).applyChangesFromBranch(sourcePeriod);
    }
    
    /**
     * Applies changes from the sourcePeriod into this PolicyPeriod.  This is done by generating a list of diffs from the
     * sourcePeriod to its BasedOn period.  Currently there is no support for directly applying diffs as of a different
     * effective date, so an equivalent set of actions are taken to simulated applying these diffs, and finally doing some
     * cleanup
     * @param sourcePeriod the original branch to generate diffs from
     * @param effectiveDate the new effective date
     */
    public void applyChangesFromBranchForDate(entity.PolicyPeriod sourcePeriod, java.util.Date effectiveDate) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).applyChangesFromBranchForDate(sourcePeriod, effectiveDate);
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
    }
    
    public void beforeUpdate() {
      ((com.guidewire.pl.system.bundle.UpdateCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.UpdateCallback")).beforeUpdate();
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.Date calculatePeriodEnd(java.util.Date periodStart, typekey.TermType termType) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).calculatePeriodEnd(periodStart, termType);
    }
    
    /**
     * Can this location be safely removed?  This is determined by the customer-defined implementation of
     * {@link gw.api.policy.PolicyLineJavaMethods#canSafelyDeleteLocation(entity.PolicyLocation)}
     * @param location - the PolicyLocation to be checked
     * @return false if the location is associated with data that will be broken by its removal
     */
    public boolean canRemoveLocation(entity.PolicyLocation location) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).canRemoveLocation(location);
    }
    
    /**
     * This method will return true if this object can be restored at this time.  There are two possible reason why this
     * would be false.  1.  the object was not archived in the first place; 2.  The archive source is not currently available
     * @return true if okay to restore
     */
    public boolean canRestore() {
      return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).canRestore();
    }
    
    /**
     * Marks this PolicyPeriod as canceled as of the given cancellationDate
     * @param cancellationDate the date this PolicyPeriod is (or will be) canceled
     */
    public void cancel(java.util.Date cancellationDate) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).cancel(cancellationDate);
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public void changeEdgeForeignKey(gw.entity.IEdgeLinkPropertyInfo edgeProp, gw.pl.persistence.core.Key newId) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeEdgeForeignKey(edgeProp, newId);
    }
    
    public void changeNonDefaultLocaleValue(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo localizedProperty, java.lang.Object value) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeNonDefaultLocaleValue(localizedProperty, value);
    }
    
    /**
     * Sets the given {@link Address} as the {@link entity.PolicyAddress} for this PolicyPeriod.  The supplied Address must
     * be an Address (Primary or other) of the {@link entity.PolicyPeriod#getPrimaryNamedInsured() PrimaryNamedInsured}.
     * This has the side effect of creating the PolicyAddress if it does not yet exist.
     * @param address the Address to set as the PolicyAddress for this PolicyPeriod.
     */
    public void changePolicyAddressTo(entity.Address address) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).changePolicyAddressTo(address);
    }
    
    /**
     * Set the <code>contact</code> as the primary named insured on this policy if it isn't already.
     * This has the side-effect of<ul>
     * <li>creating the AccountContact for the contact if one does already exist
     * <li>making the account contact a NamedInsured if it isn't already one
     * <li>making the account contact a PolicyPriNamedInsured if it isn't already one
     * <li>removing the PolicyPriNamedInsured role from the previous primary named insured
     * <li>removing any LocationNamedInsureds on acctContact; the primary named insured is the default named insured for all locations
     * <li>denormalizing the primary insured name
     * <li>calling <code>changePolicyAddressTo(address)</code> with the primary address of the contact of the primary named insured
     * </ul>
     * @param contact the Contact to set as the Primary Named Insured for this PolicyPeriod.
     */
    public void changePrimaryNamedInsuredTo(entity.Contact contact) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).changePrimaryNamedInsuredTo(contact);
    }
    
    /**
     * Set the <code>contact</code> as the secondary named insured on this policy period if it isn't already.
     * This has the side-effect of<ul>
     * <li>creating the AccountContact for the contact if one does already exist
     * <li>making the account contact a NamedInsured if it isn't already one
     * <li>making the account contact a PolicySecNamedInsured if it isn't already one
     * <li>removing the PolicySecNamedInsured role from the previous secondary named insured
     * </ul>
     * It throws an exception if the account contact is the primary named insured.
     * @param contact the Contact to set as Secondary Named Insured for this PolicyPeriod.
     */
    public void changeSecondaryNamedInsuredTo(entity.Contact contact) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).changeSecondaryNamedInsuredTo(contact);
    }
    
    public void changeSlice(java.util.Date oldSliceDate, java.util.Date newSliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeSlice(oldSliceDate, newSliceDate);
    }
    
    /**
     * Checks all answers stored on this container against the availability of the questions defined in
     * the product model.
     * @return a list of issues encountered
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel() {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel(gw.api.productmodel.QuestionSet[] questionSetsToSync) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel(questionSetsToSync);
    }
    
    public void checkArchiveEligibility() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).checkArchiveEligibility();
    }
    
    public void checkBranchVersionMostRecent() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).checkBranchVersionMostRecent();
    }
    
    /**
     * Checks for any Overlaps or disallowed Gaps in Bound PolicyPeriods on this Policy. <em>DO NOT<em/>call this
     * method, it should only be used by internal calls to verify Policy Effective Dates.
     */
    public void checkForOverlapsAndGaps() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).checkForOverlapsAndGaps();
    }
    
    /**
     * Returns all issues involving the selected {@link Offering} on this period.  None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @return the ProductModelSyncIssues involving which Offering is selected for this PolicyPeriod.
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkOfferingAgainstProductModel() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).checkOfferingAgainstProductModel();
    }
    
    /**
     * Returns all {@link ProductModelSyncIssue} involving the availability of {@link PolicyLine PolicyLines} due
     * to the selected offering on this period.  None of the actions involved will be taken at this point; this
     * will just return information about any potential lines being unavailable.
     * @return the ProductModelSyncIssues involving which PolicyLines are available for this PolicyPeriod based
     * on which Offering is selected.
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkPolicyLinesAgainstProductModel() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).checkPolicyLinesAgainstProductModel();
    }
    
    /**
     * Removes all the {@link Transaction Transactions} in the PolicyPeriod.
     */
    public void clearAllTransactions() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).clearAllTransactions();
    }
    
    public void clearCommitContext() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).clearCommitContext();
    }
    
    public void clearDiffItemCache() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).clearDiffItemCache();
    }
    
    public void clearOOSDateCache() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).clearOOSDateCache();
    }
    
    public void clearOOSDateCacheIfNeeded(java.util.Date newEff, java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).clearOOSDateCacheIfNeeded(newEff, newExp);
    }
    
    /**
     * Clears any Question/QuestionFilter dependencies that have been cached. Should be
     * called before displaying a question set in the app.
     */
    public void clearQuestionDependencies() {
      ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).clearQuestionDependencies();
    }
    
    /**
     * Clear notification that a future bound period existed when this branch was
     * promoted.
     */
    public void clearResolveWithFuturePeriods() {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).clearResolveWithFuturePeriods();
    }
    
    public void clearTemporaryBranch() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).clearTemporaryBranch();
    }
    
    public void clearTraceDetails() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).clearTraceDetails();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * Clones the given {@link EffDated} into this branch with the given effective and expiration dates. The given dates
     * must be within the effective range of this period.
     * @param bean the EffDated bean to clone
     * @param effectiveDate the new Effective Date for the cloned bean
     * @param expirationDate the new Expiration Date for the cloned bean
     * @return the cloned bean in Slice mode
     */
    public entity.EffDated cloneBeanIntoSlice(entity.EffDated bean, java.util.Date effectiveDate, java.util.Date expirationDate) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).cloneBeanIntoSlice(bean, effectiveDate, expirationDate);
    }
    
    public entity.EffDatedBranch cloneBranch(boolean newPeriod) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).cloneBranch(newPeriod);
    }
    
    /**
     * Clone this policy period to edit the effective date.
     * <ol>
     * <li>Creates a new PolicyPeriod from the {@link #getBasedOn()}</li>
     * <li>Modify the job to be associated with the cloned policy period this policy period.</li>
     * <li>Links this PolicyPeriod to the same PolicyTerm as this PolicyPeriod.</li>
     * </ol>
     * @return the newly cloned PolicyPeriod
     */
    public entity.PolicyPeriod cloneBranchForEditingEffectiveDate() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).cloneBranchForEditingEffectiveDate();
    }
    
    /**
     * Generates the differences between this PolicyPeriod and the passed in PolicyPeriod for the given
     * {@link DiffReason}.  The PolicyPeriods are compared as of their given {@link entity.PolicyPeriod#getSliceDate() Slice Dates};
     * if either PolicyPeriod is not sliced, then it is sliced as of its {@link entity.PolicyPeriod#getEditEffectiveDate() Edit Effective Date}.
     * The base PolicyPeriod is the PolicyPeriod with the later Slice Date, or this PolicyPeriod if the Slice Dates
     * are equal.  The Differences are generated by calling
     * {@link gw.plugin.diff.IPolicyPeriodDiffPlugin#compareBranches(typekey.DiffReason, entity.PolicyPeriod, entity.PolicyPeriod)}
     * @param diffReason The DiffReason to use when generating and filtering differences
     * @param p1 the PolicyPeriod to compare this one to
     * @return the set of DiffItems representing the differences between this PolicyPeriod and the passed in one for the given DiffReason
     */
    public java.util.List<gw.api.diff.DiffItem> compareTo(typekey.DiffReason diffReason, entity.PolicyPeriod p1) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).compareTo(diffReason, p1);
    }
    
    /**
     * Mark the current Active Workflow into a complete status and delete the associated work item
     */
    public void completeActiveWorkflow() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).completeActiveWorkflow();
    }
    
    public boolean considerForTotalCostCalculations() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).considerForTotalCostCalculations();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.EffDatedBranch copyBranchIntoNewContainer(entity.EffDatedContainer newContainer) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).copyBranchIntoNewContainer(newContainer);
    }
    
    /**
     * Creates a copy of this PolicyPeriod into a new PolicyPeriod in the given {@link Policy}.  Creates
     * a new {@link entity.PolicyTerm} in the target Policy to hold the new PolicyPeriod.  The caller of this method
     * is responsible for creating a suitable {@link Job} to hold the new PolicyPeriod.  This method is intended
     * to be used for functionality such as Copy New Submission.
     * @param policy the Policy to create the draft PolicyPeriod in
     * @return a new PolicyPeriod in Draft status in the given Policy
     */
    public entity.PolicyPeriod copyBranchIntoNewPolicy(entity.Policy policy) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).copyBranchIntoNewPolicy(policy);
    }
    
    /**
     * Creates a copy of this PolicyPeriod into a new PolicyPeriod in a different {@link Policy}.  The
     * BasedOn linke for the new PolicyPeriod is determeind by the passed in {@link BasedOnHandling}.  Creates
     * a new {@link entity.PolicyTerm} in the target Policy to hold the new PolicyPeriod.  The caller of this method is
     * responsible for creating a suitable {@link Job} to hold the new PolicyPeriod.  This method is intended
     * to be sued for functionality such as Rewrite New Account.
     * @param policy the new policy we are going to copy the branch into
     * @param basedOnHandling How to associate the new branch with this branch through the BasedOn link
     * @return New PolicyPeriod in Draft Status in the given Policy
     */
    public entity.PolicyPeriod copyBranchIntoNewPolicy(entity.Policy policy, com.guidewire.pl.system.entity.proxy.BasedOnHandling basedOnHandling) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).copyBranchIntoNewPolicy(policy, basedOnHandling);
    }
    
    /**
     * Creates an instance of {@link PolicyPeriodWorkflow} of the given workflow subtype.
     * The new workflow will displace any previously established active workflows, but all
     * workflows started this way will be available on the Workflows array unless
     * they are explicitly removed.
     * <p>
     * NOTE: This method does not start the workflow.
     * @param workflowSubtype type of workflow to create for this period
     * @throws IllegalArgumentException if the specified version for the workflow
     *                                  does not exist.
     * @return the newly created PolicyPeriodWorkflow
     */
    public entity.PolicyPeriodWorkflow createActiveWorkflow(typekey.Workflow workflowSubtype) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createActiveWorkflow(workflowSubtype);
    }
    
    public void createAndAddLines() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).createAndAddLines();
    }
    
    /**
     * Creates an answer for the given question and sets its value to the question's
     * default answer value, if any.
     * @param question the question to create an answer for
     * @throws IllegalStateException if an answer has already been allocated for the
     * question.
     * @return the created answer
     */
    public entity.PCAnswerDelegate createAnswer(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).createAnswer(question);
    }
    
    public entity.PolicyPeriod createCloneForQuoteStorage() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).createCloneForQuoteStorage();
    }
    
    /**
     * Creates a contingency with the proper foreign keys set
     * @return Contingency
     */
    public entity.Contingency createContingency() {
      return ((gw.api.contingency.ContingencyCreator)__getDelegateManager().getImplementation("gw.api.contingency.ContingencyCreator")).createContingency();
    }
    
    public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description) {
      return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description);
    }
    
    public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description, java.lang.String originalValue, java.lang.String newValue) {
      return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description, originalValue, newValue);
    }
    
    /**
     * Like {@link #createDraftBranchInSamePeriod(Date)}, but creates the new PolicyPeriod
     * in a brand new {@link entity.PolicyTerm} based on the passed-in effective date and
     * {@link TermType}.
     * @param effDate the effective date of the new PolicyPeriod
     * @param expDate expiration date of the new PolicyPeriod. IF NULL, will be
     *                calculated from the eff date & term type. IF NON-NULL, will be
     *                constrained within the allowed values for the eff date &
     *                term type
     * @return a new PolicyPeriod based on this PolicyPeriod, with the new period's status set to
     * Draft in a newly created PolicyTerm with effective and expiration dates as specified
     */
    public entity.PolicyPeriod createDraftBranchInNewPeriod(java.util.Date effDate, java.util.Date expDate) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createDraftBranchInNewPeriod(effDate, expDate);
    }
    
    public entity.PolicyPeriod createDraftBranchInNewPeriodWithHistory(java.util.Date effDate, java.util.Date expDate) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).createDraftBranchInNewPeriodWithHistory(effDate, expDate);
    }
    
    /**
     * Creates and returns a new draft PolicyPeriod based on this PolicyPeriod (which is not
     * necessarily bound; consider the case of multi-quote).
     * <p>
     * Also adds the newly created PolicyPeriod to the {@link Policy}. Futhermore, if the new
     * PolicyPeriod does not have a primary named insured, a new one is created
     * and added from the associated Account (see {@link #maybeCreatePrimaryNamedInsuredFromMainAccountContact()}).
     * <p>
     * Creates the draft PolicyPeriod in the same {@link entity.PolicyTerm} as this PolicyPeriod
     * @param editEffectiveDate the EditEffectiveDate for the newly created PolicyPeriod
     * @return a draft PolicyPeriod (i.e. new BranchID) with its status set to Draft and
     * in the same PolicyTerm as this PolicyPeriod.
     */
    public entity.PolicyPeriod createDraftBranchInSamePeriod(java.util.Date editEffectiveDate) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createDraftBranchInSamePeriod(editEffectiveDate);
    }
    
    /**
     * Creates a new PolicyPeriod from this PolicyPeriod in the same {@link entity.PolicyTerm} and {@link Job}
     * for Multi-Quote.
     * @return a new PolicyPeriod with status set to Draft copied from this PolicyPeriod in the
     * same PolicyTerm and Job as this PolicyPeriod.
     */
    public entity.PolicyPeriod createDraftMultiVersionJobBranch() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createDraftMultiVersionJobBranch();
    }
    
    public entity.EffDatedBranch createNewBranch() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).createNewBranch();
    }
    
    public entity.EffDatedBranch createNewBranch(boolean allowMultipleNonPromotedBranches, boolean resetBasedOn) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).createNewBranch(allowMultipleNonPromotedBranches, resetBasedOn);
    }
    
    /**
     * Handles all unhandled preemptions associated with this period. In
     * particular, if this period has no unhandled preemptions, this method is a
     * no-op. Otherwise, this method: <ol> <li>marks all preemptions as
     * handled;</li> <li>in the case of a normal internal preemption, sets the
     * "BasedOn" period of the head period to point to the new most recent prior
     * bound period stored in PolicyCenter;</li> <li>in the case of a future
     * preemption where PolicyCenter is the system-of-record (SOR) for the policy,
     * sets this period's "OOSJob" bit to indicate this period is out-of-sequence
     * (if it was not so marked already); and</li> <li>deletes any superseding
     * periods that may have existed; and</li> <li>sets this period's "Canceled"
     * bit to match the "Canceled" bit of the normal preempting period that was
     * bound most recently.</li> <li>synchronizes changes to the main branch's
     * EUBasis data</li> </ol><p>
     * <p>
     * All modified entities are loaded into this period's bundle, but this method
     * does not commit that bundle. On the other hand, the superseding periods (if
     * any) are deleted using a separate bundle, which <em>is</em> committed.<p>
     * <p>
     * The changes made to any normally preempting period must still be folded
     * into this preempted period manually by the user.
     * @return the newly created PolicyPeriod with the correct BasedOn and preemptions marked
     * as handled.
     */
    public entity.PolicyPeriod createNewBranchForPreemption() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createNewBranchForPreemption();
    }
    
    public entity.EffDatedBranch createNewBranchFromUnlocked() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).createNewBranchFromUnlocked();
    }
    
    public entity.EffDatedBranch createNewPeriod(java.util.Date startDate, java.util.Date endDate, boolean allowGapBefore) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).createNewPeriod(startDate, endDate, allowGapBefore);
    }
    
    public entity.EffDatedBranch createNewPeriod(java.util.Date startDate, java.util.Date endDate, java.util.Date copyAsOf, boolean allowGapBefore) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).createNewPeriod(startDate, endDate, copyAsOf, allowGapBefore);
    }
    
    public entity.EffDatedBranch createNewPeriodWithHistory(java.util.Date startDate, java.util.Date endDate, boolean allowGapsBefore) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).createNewPeriodWithHistory(startDate, endDate, allowGapsBefore);
    }
    
    /**
     * Creates a {@link PolicyLine} based on the given {@link PolicyLinePattern} and adds it to this Period's
     * array of PolicyLines.  The entity type must be a valid entity type defined in metadata and must have a
     * defined PolicyLinePattern.
     * @param linePattern 
     */
    public void createPolicyLine(gw.api.productmodel.PolicyLinePattern linePattern) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createPolicyLine(linePattern);
    }
    
    /**
     * Creates and returns an answer of the type associated with this AnswerContainer.
     * @return newly created answer of the type associated with this AnswerContainer
     */
    public entity.PCAnswerDelegate createRawAnswer() {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).createRawAnswer();
    }
    
    /**
     * Create the reinsurable risk from this reinsurable coverable.
     * @return the applicable reinsurable risk
     */
    public entity.Reinsurable createReinsurableRisk() {
      return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).createReinsurableRisk();
    }
    
    /**
     * Creates an instance of {@link PolicyPeriodWorkflow}of the given workflow subtype,
     * and associates it with this PolicyPeriod. The workflow will not be considered
     * the active workflow.
     * <p>
     * NOTE: This method does not start the workflow.
     * @param workflowSubtype type of workflow to create for this period
     * @throws IllegalArgumentException if the specified version for the workflow
     *                                  does not exist.
     * @return the newly created PolicyPeriodWorkflow
     */
    public entity.PolicyPeriodWorkflow createWorkflow(typekey.Workflow workflowSubtype) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).createWorkflow(workflowSubtype);
    }
    
    public void denormalizePrimaryInsuredName() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).denormalizePrimaryInsuredName();
    }
    
    public boolean denormalizedFKIsCorrect() {
      return ((gw.api.domain.DenormalizedFKOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.DenormalizedFKOutOfDomainGraph")).denormalizedFKIsCorrect();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    /**
     * Queue this PolicyPeriod for Ceding Premium for Reinsurance.  The PolicyPeriod will not be queued if Reinsurance
     * is not enabled.
     * @param reason the RIRecalcReason for queuing this PolicyPeriod for premium ceding
     * @param comment an optional comment
     */
    public void enqueueForCededPremiumCalculation(typekey.RIRecalcReason reason, java.lang.String comment) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).enqueueForCededPremiumCalculation(reason, comment);
    }
    
    public void ensureTemporaryClearedAfterError() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).ensureTemporaryClearedAfterError();
    }
    
    public void excludeFromArchiveBecauseOfFailure(java.lang.Exception e) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).excludeFromArchiveBecauseOfFailure(e);
    }
    
    public void excludeFromArchiveBecauseOfRules(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).excludeFromArchiveBecauseOfRules(message);
    }
    
    /**
     * Wraps up the post-rating process and releases the Quoting Commit token.  If the PolicyPeriod is still stuck in a
     * QUOTING status, (meaning that the post-rating quote itself did not complete), it is put back to RATED status; otherwise
     * it remains in the current status.
     */
    public void finishPostRatingQuoting() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).finishPostRatingQuoting();
    }
    
    /**
     * Wraps up the quoting process and releases the Quoting Commit token.  If the PolicyPeriod is still stuck in a
     * QUOTING status, (meaning that the quote itself did not complete), it is put back to DRAFT status; otherwise
     * it remains in the current status.
     */
    public void finishQuoting() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).finishQuoting();
    }
    
    /**
     * Wraps up the rating process and releases the Quoting Commit token.  If the PolicyPeriod is still stuck in a
     * QUOTING status, (meaning that the rate itself did not complete), it is put back to DRAFT status; otherwise
     * it remains in the current status.
     */
    public void finishRating() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).finishRating();
    }
    
    /**
     * Executes the custom plugin for generating the current period policy number
     * for a period of a policy. This policy period is passed as the sole argument
     * to the function.<p>
     * <p>
     * Unlike the core policy number associated with the root Policy object and
     * shared by all periods of the policy, the current period policy number is
     * associated with each PolicyPeriod instance and may vary from period to
     * period. This method is invoked on the initial period of a policy (as part
     * of a new submission) and on policy renewal.
     * @return the new policy number to set on the PolicyPeriod.
     */
    public java.lang.String genNewPeriodPolicyNumber() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).genNewPeriodPolicyNumber();
    }
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the APDTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDTransaction[] getAPDTransactions() {
      return (entity.APDTransaction[])__getInternalInterface().getFieldValue(APDTRANSACTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the ActiveWorkflow field.
     * The workflow that is active from the perspective of the UI. This workflow will be polled when the UI is waiting for results.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriodWorkflow getActiveWorkflow() {
      return (entity.PolicyPeriodWorkflow)__getInternalInterface().getFieldValue(ACTIVEWORKFLOW_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getActiveWorkflowID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACTIVEWORKFLOW_PROP.get());
    }
    
    /**
     * Returns all the {@link AccountSyncable AccountSyncables} in the current and all future OOS slices (as future OOS
     * slices are edited at the same time, we have to perform AccountSyncable operations on them at the same time as well)
     * @return all AccountSyncables for this PolicyPeriod, including any from future OOS slices
     */
    public gw.api.domain.account.AccountSyncable[] getAllAccountSyncables() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllAccountSyncables();
    }
    
    /**
     * Return all Costs across the term, in window mode.  This is basically an
     * aggregate of the window costs from each line that ever existed on the
     * period.
     * @return All Costs in window mode across the Effective Dates of the PolicyPeriod
     */
    public java.util.Set<entity.Cost> getAllCosts() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllCosts();
    }
    
    /**
     * Returns all Covered {@link Jurisdiction Jurisdictions} on all {@link PolicyLine PolicyLines} in this PolicyPeriod.
     * @return The union of all covered states on all lines in this period.
     */
    public java.util.Set<typekey.Jurisdiction> getAllCoveredStates() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllCoveredStates();
    }
    
    /**
     * Returns a sorted list of distinct effective and expiration dates that
     * exist on EffDated beans in the branch.
     * <p/>
     * Looking at every effective and expiration date of every bean in the branch to build
     * this list is expensive. Call this once then cache the result if you know
     * that the beans won't change while you use this information.
     * @return A sorted list of distinct effective and expiration dates that
     *         exists in the branch.
     */
    public java.util.List<java.util.Date> getAllEffectiveDates() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getAllEffectiveDates();
    }
    
    public java.util.Date[] getAllOOSDates() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).getAllOOSDates();
    }
    
    /**
     * Return all the {@link Transaction Transactions} in the PolicyPeriod.
     * @return all Transactions in the PolicyPeriod
     */
    public java.util.Set<entity.Transaction> getAllTransactions() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAllTransactions();
    }
    
    /**
     * Gets the value of the AllocationOfRemainder field.
     * @deprecated The method to allocate the remainder of cost if overriding billing allocation for installments plan
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BillingRemainderAllocate getAllocationOfRemainder() {
      return (typekey.BillingRemainderAllocate)__getInternalInterface().getFieldValue(ALLOCATIONOFREMAINDER_PROP.get());
    }
    
    /**
     * Gets the value of the AltBillingAccountNumber field.
     * The number of the billing account which may only exist in billing system.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAltBillingAccountNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ALTBILLINGACCOUNTNUMBER_PROP.get());
    }
    
    /**
     * Returns the answer to the given question, or null if none has been allocated
     * yet.
     * @param question the question to get the answer for
     * @return the answer for the given question
     */
    public entity.PCAnswerDelegate getAnswer(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswer(question);
    }
    
    /**
     * Gets the actual value of the answer. If the answer is undefined on this
     * entity, use the default answer if there is one, else null.
     * @param question the question to get the answer value for
     * @return the answer value
     */
    public java.lang.Object getAnswerValue(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswerValue(question);
    }
    
    public entity.PCAnswerDelegate[] getAnswers() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAnswers();
    }
    
    public int getApplicationMajorVersion() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getApplicationMajorVersion();
    }
    
    public int getApplicationMinorVersion() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getApplicationMinorVersion();
    }
    
    /**
     * Gets the value of the ArchiveDate field.
     * When archiving was attempted on the root. Null if we never attempted to archive it.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getArchiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ARCHIVEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveFailure field.
     * Short version of the reason for a failure to archive
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ArchiveFailure getArchiveFailure() {
      return (entity.ArchiveFailure)__getInternalInterface().getFieldValue(ARCHIVEFAILURE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveFailureDetails field.
     * Full details of archive failure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ArchiveFailureDetails getArchiveFailureDetails() {
      return (entity.ArchiveFailureDetails)__getInternalInterface().getFieldValue(ARCHIVEFAILUREDETAILS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getArchiveFailureDetailsID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ARCHIVEFAILUREDETAILS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getArchiveFailureID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ARCHIVEFAILURE_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveSchemaInfo field.
     * Schema version at which the root was archived or null if it was not archived
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UpgradeDatamodelInfo getArchiveSchemaInfo() {
      return (entity.UpgradeDatamodelInfo)__getInternalInterface().getFieldValue(ARCHIVESCHEMAINFO_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getArchiveSchemaInfoID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ARCHIVESCHEMAINFO_PROP.get());
    }
    
    /**
     * Gets the value of the ArchiveState field.
     * The archive state of the graph
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ArchiveState getArchiveState() {
      return (typekey.ArchiveState)__getInternalInterface().getFieldValue(ARCHIVESTATE_PROP.get());
    }
    
    public entity.PolicyPeriod getAssociatedPolicyPeriod() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAssociatedPolicyPeriod();
    }
    
    /**
     * Gets the value of the AsyncQuoteIssues field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AsyncQuoteIssue[] getAsyncQuoteIssues() {
      return (entity.AsyncQuoteIssue[])__getInternalInterface().getFieldValue(ASYNCQUOTEISSUES_PROP.get());
    }
    
    /**
     * Returns the {@link Audit} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not an Audit
     * @return the Audit Job associated with this PolicyPeriod, null if this is not an Audit Job
     */
    public entity.Audit getAudit() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAudit();
    }
    
    /**
     * Return the AuditInformations associated with this PolicyPeriod.
     * @return all AuditInformations associated with this PolicyPeriod
     */
    public entity.AuditInformation[] getAuditInformations() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getAuditInformations();
    }
    
    /**
     * Gets the value of the BATransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BATransaction[] getBATransactions() {
      return (entity.BATransaction[])__getInternalInterface().getFieldValue(BATRANSACTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the BOPTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BOPTransaction[] getBOPTransactions() {
      return (entity.BOPTransaction[])__getInternalInterface().getFieldValue(BOPTRANSACTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the BaseState field.
     * State the policy period is based in.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Jurisdiction getBaseState() {
      return (typekey.Jurisdiction)__getInternalInterface().getFieldValue(BASESTATE_PROP.get());
    }
    
    /**
     * Returns the PolicyPeriod that this PolicyPeriod is based on, if any.  Note that initial PolicyPeriods (Submissions,
     * original from Conversion On Renewal) will not have a Based On.
     * @return the based on PolicyPeriod for this PolicyPeriod, or null if there is no Based On
     */
    public entity.PolicyPeriod getBasedOn() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getBasedOn();
    }
    
    /**
     * Gets the value of the BasedOnDate field.
     * If this is a renewal, date it was based on
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getBasedOnDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(BASEDONDATE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBasedOnId();
    }
    
    public entity.EffDatedBranch getBasedOnUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getBasedOnUntyped();
    }
    
    /**
     * Gets the value of the BasedOnValue field.
     * Link to the row on which this row is based; or null if new to branch
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getBasedOnValue() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BASEDONVALUE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    public java.util.List<entity.EffDated> getBeansInBundle() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getBeansInBundle();
    }
    
    /**
     * Gets the value of the BillImmediatelyPercentage field.
     * @deprecated The percentage to bill immediately if overriding billing allocation for installments plan
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getBillImmediatelyPercentage() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(BILLIMMEDIATELYPERCENTAGE_PROP.get());
    }
    
    /**
     * Gets the value of the BillingMethod field.
     * Billing Method (Agency Bill, Direct Bill, etc)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BillingMethod getBillingMethod() {
      return (typekey.BillingMethod)__getInternalInterface().getFieldValue(BILLINGMETHOD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBranchId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBranchId();
    }
    
    /**
     * Gets the value of the BranchName field.
     * The reference name of this branch of the job
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBranchName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BRANCHNAME_PROP.get());
    }
    
    /**
     * Gets the value of the BranchNumber field.
     * The number of this branch of the job
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBranchNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(BRANCHNUMBER_PROP.get());
    }
    
    public java.util.Set<entity.EffDatedBranch> getBranchesToLock() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getBranchesToLock();
    }
    
    /**
     * Gets the value of the CPTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.CPTransaction[] getCPTransactions() {
      return (entity.CPTransaction[])__getInternalInterface().getFieldValue(CPTRANSACTIONS_PROP.get());
    }
    
    /**
     * Returns the {@link Cancellation} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not a Cancellation
     * @return the Cancellation Job associated with this PolicyPeriod, null if this is not a Cancellation Job
     */
    public entity.Cancellation getCancellation() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getCancellation();
    }
    
    /**
     * Gets the value of the CancellationDate field.
     * Date this period was canceled, or null if still active
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCancellationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CANCELLATIONDATE_PROP.get());
    }
    
    public java.util.List<gw.pl.persistence.core.effdate.EffDatedVersionList> getChangedBeansWithGaps() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getChangedBeansWithGaps();
    }
    
    public java.util.List<gw.pl.persistence.core.effdate.EffDatedVersionList> getChangedBeansWithOverlaps() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getChangedBeansWithOverlaps();
    }
    
    public com.guidewire.pl.system.entity.proxy.EffDatedCommitContext getCommitContext() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getCommitContext();
    }
    
    /**
     * Gets the ID of the container to which this branch belongs.
     */
    public gw.pl.persistence.core.Key getContainerId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getContainerId();
    }
    
    /**
     * Gets the container to which this branch belongs.
     */
    public entity.EffDatedContainer getContainerUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getContainerUntyped();
    }
    
    /**
     * Gets the value of the Contingencies field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contingency[] getContingencies() {
      return (entity.Contingency[])__getInternalInterface().getFieldValue(CONTINGENCIES_PROP.get());
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    public java.util.Iterator<entity.CrossTermLink> getCrossTermLinksIterator() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).getCrossTermLinksIterator();
    }
    
    /**
     * Returns all {@link entity.PolicyLocation PolicyLocations} from the current slice date and any added to the PolicyPeriod
     * after the current slice date.
     * @return an array of Policy Locations from current and future slices.
     */
    public entity.PolicyLocation[] getCurrentAndFutureLocations() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getCurrentAndFutureLocations();
    }
    
    /**
     * Gets the value of the DepositAmount field.
     * Deposit amount calculated from the deposit % and total cost subject to reporting
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getDepositAmount() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DEPOSITAMOUNT_PROP.get());
    }
    
    /**
     * Gets the value of the DepositAmount_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDepositAmount_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEPOSITAMOUNT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the DepositAmount_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getDepositAmount_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(DEPOSITAMOUNT_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the DepositCollected field.
     * @deprecated The deposit amount collected
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getDepositCollected() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DEPOSITCOLLECTED_PROP.get());
    }
    
    /**
     * Gets the value of the DepositCollected_amt field.
     * @deprecated 
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDepositCollected_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEPOSITCOLLECTED_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the DepositCollected_cur field.
     * @deprecated 
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getDepositCollected_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(DEPOSITCOLLECTED_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the DepositOverridePct field.
     * Override of the default reporting deposit % of the reporting pattern chosen
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDepositOverridePct() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEPOSITOVERRIDEPCT_PROP.get());
    }
    
    public java.util.List<com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedDiffItem> getDiffItemCache() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getDiffItemCache();
    }
    
    public java.util.List<com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedDiffItem> getDiffItems() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getDiffItems();
    }
    
    /**
     * Generates the differences between this PolicyPeriod and its {@link #getBasedOn() Based On PolicyPeriod} for the
     * given {@link DiffReason}.  If there is no BasedOn for this PolicyPeriod, an empty List of {@link DiffItem DiffItems}
     * is returned.  {@link gw.api.domain.account.AccountSyncable#prepareForDiff()} is called for each
     * {@link AccountSyncable} on this PolicyPeriod prior to generating the DiffItems.
     * @param diffReason the DiffReason to use when generating and filtering differences
     * @return the set of DiffItems representing the changes in this PolicyPeriod from its BasedOn for the given DiffReason
     */
    public java.util.List<gw.api.diff.DiffItem> getDiffItems(typekey.DiffReason diffReason) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDiffItems(diffReason);
    }
    
    /**
     * Generates the differences between this PolicyPeriod and its {@link #getBasedOn() Based On PolicyPeriod} for the
     * given {@link DiffReason}.  If there is no BasedOn for this PolicyPeriod, an empty List of {@link DiffItem DiffItems}
     * is returned.  {@link gw.api.domain.account.AccountSyncable#prepareForDiff()} is called for each
     * {@link AccountSyncable} on this PolicyPeriod prior to generating the DiffItems.
     * @param diffReason the DiffReason to use when generating and filtering differences
     * @param useMergeBases True if BasedOns should be calculated using merge bases if available
     * @return the set of DiffItems representing the changes in this PolicyPeriod from its BasedOn for the given DiffReason
     */
    public java.util.List<gw.api.diff.DiffItem> getDiffItems(typekey.DiffReason diffReason, boolean useMergeBases) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDiffItems(diffReason, useMergeBases);
    }
    
    /**
     * Returns all documents linked to this period
     * @return the set of documents linked to this period
     */
    public gw.api.database.IQueryBeanResult<entity.Document> getDocuments() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDocuments();
    }
    
    /**
     * Gets all {@link Document Documents} of the given {@link DocumentType} on this period
     * @param docType the DocumentType to return
     * @return All Docuements of the given DocuementType found on this PolicyPeriod
     */
    public entity.Document[] getDocuments(typekey.DocumentType docType) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getDocuments(docType);
    }
    
    /**
     * Gets the value of the EditEffectiveDate field.
     * Dates edits are effective
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEditEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EDITEFFECTIVEDATE_PROP.get());
    }
    
    /**
     * Returns a DateRange that starts on this PolicyPeriod's {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate} and
     * ends at this PolicyPeriod's {@link entity.PolicyPeriod#getPeriodEnd() PeriodEnd}.
     * @return the date range between the edit effective date and the period end
     */
    public com.guidewire.pl.system.util.DateRange getEditEffectiveDateRange() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getEditEffectiveDateRange();
    }
    
    public entity.EffDatedBranch getEditSlice() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getEditSlice();
    }
    
    public entity.EffDatedContainer getEffDatedContainer() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getEffDatedContainer();
    }
    
    /**
     * Get an effective date independent key for this bean. This key will include
     * the BranchId and the FixedId. This is the key for the "logical" bean.
     * <p/>
     * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
     * the same throughout its effective range (or its period range) so there is
     * no difference between the "logical" bean and the actual bean.
     */
    public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
    }
    
    public java.util.Map<java.util.Date, java.lang.Boolean> getEffectiveCache() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getEffectiveCache();
    }
    
    /**
     * Gets the value of the EffectiveDatedFields field.
     * Stores fields that change in effective time but do not fit in any policy line.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.EffectiveDatedFields getEffectiveDatedFields() {
      return (entity.EffectiveDatedFields)__getInternalInterface().getFieldValue(EFFECTIVEDATEDFIELDS_PROP.get());
    }
    
    /**
     * Gets the value of the EffectiveDatedFieldsArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.EffectiveDatedFields[] getEffectiveDatedFieldsArray() {
      return (entity.EffectiveDatedFields[])__getInternalInterface().getFieldValue(EFFECTIVEDATEDFIELDSARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getEffectiveDatedFieldsID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(EFFECTIVEDATEDFIELDS_PROP.get());
    }
    
    /**
     * Return the cancellation date if it is defined; otherwise, return the period end date.
     * @return the date coverage ends for this PolicyPeriod
     */
    public java.util.Date getEndOfCoverageDate() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getEndOfCoverageDate();
    }
    
    /**
     * Get factory used to produce branch related error messages.
     * @return Factory used to produce branch related error messages.
     */
    public com.guidewire.commons.entity.effdate.EffDatedErrorMessageFactory getErrorMessageFactory() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getErrorMessageFactory();
    }
    
    /**
     * Gets the value of the EstimatedPremium field.
     * User estimate of total premium amount
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getEstimatedPremium() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(ESTIMATEDPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the EstimatedPremium_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getEstimatedPremium_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ESTIMATEDPREMIUM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the EstimatedPremium_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getEstimatedPremium_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(ESTIMATEDPREMIUM_CUR_PROP.get());
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the ExcludeReason field.
     * Reason for excluding or skipping the entity from archiving. If the ExcludeFromArchive bit is set, this gives the reason for excluding. Else, if this is not null, it is the reason for skipping.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExcludeReason() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLUDEREASON_PROP.get());
    }
    
    public int getExtensionsVersion() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getExtensionsVersion();
    }
    
    /**
     * Returns the first issued PolicyPeriod with the same PeriodId as this PolicyPeriod. In other
     * words, returns the PolicyPeriod from the original Submission, Renewal or Rewrite that created
     * this {@link entity.PolicyTerm}, unless an Issuance Job exists - in that case we will not return
     * the Submission PolicyPeriod but instead the Issuance PolicyPeriod. The returned PolicyPeriod may not be the most
     * recent period.
     * @return the PolicyPeriod that initially created or issued this PolicyTerm.
     */
    public entity.PolicyPeriod getFirstIssuedPeriodInTerm() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFirstIssuedPeriodInTerm();
    }
    
    /**
     * Returns a {@link DateRange} starting at the {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate} of
     * this PolicyPeriod and ending at the next slice.  If there is no future slice, the end date of the DateRange will be
     * the {@link entity.PolicyPeriod#getPeriodEnd() PeriodEnd}
     * @return the date range of the edit effective date of this period and the end of the next slice
     */
    public com.guidewire.pl.system.util.DateRange getFirstOOSSliceDateRange() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFirstOOSSliceDateRange();
    }
    
    /**
     * Returns the first created PolicyPeriod with the same PeriodId as this PolicyPeriod. In other
     * words, returns the PolicyPeriod from the original Submission, Renewal or Rewrite that started
     * this {@link entity.PolicyTerm}. The returned PolicyPeriod may not be the most recent period.
     * @return the PolicyPeriod that initially created this PolicyTerm.
     */
    public entity.PolicyPeriod getFirstPeriodInTerm() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFirstPeriodInTerm();
    }
    
    /**
     * Gets the value of the Forms field.
     * Forms associated with this policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Form[] getForms() {
      return (entity.Form[])__getInternalInterface().getFieldValue(FORMS_PROP.get());
    }
    
    /**
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
    }
    
    /**
     * Returns all edit effective dates for the periods of the given policy that were bound before this PolicyPeriod was
     * bound and have a later {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate} than this PolicyPeriod's.
     * @param policy to get bound edit effective dates for
     * @return sorted array of all the qualified edit effective dates for the given policy.
     */
    public java.util.Date[] getFutureBoundDate(entity.Policy policy) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureBoundDate(policy);
    }
    
    /**
     * Returns a sorted array of bound edit effective dates in this period after the
     * {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate}.
     * @return sorted array of bound edit effective dates in this period.
     */
    public java.util.Date[] getFutureBoundDatesInPeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureBoundDatesInPeriod();
    }
    
    /**
     * Returns a sorted array of bound edit effective dates corresponding to a rewritten policy that falls within this period.
     * @return sorted array of bound edit effective dates corresponding for rewritten policy that fall within this period.
     */
    public java.util.Date[] getFutureBoundDatesInRewriteSourcePeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureBoundDatesInRewriteSourcePeriod();
    }
    
    public java.util.List<? extends entity.EffDatedBranch> getFuturePeriodsList() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getFuturePeriodsList();
    }
    
    public java.util.List<entity.EffDatedBranch> getFuturePeriodsListInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getFuturePeriodsListInternal();
    }
    
    /**
     * Returns all future Renewal periods that are latest bound, renews this PolicyPeriod, and
     * are not flat cancelled, plus all Future Renewals for those PolicyPeriods.
     * 
     * To get the next future Renewal period, call {@link #getNextRenewal()} instead.
     * @return a {@link java.util.List}<{@link entity.PolicyPeriod}> of all periods
     * that are the latest bound periods that renew the current period and
     * are not flat cancelled.
     */
    public java.util.List<entity.PolicyPeriod> getFutureRenewals() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureRenewals();
    }
    
    /**
     * Returns the slice dates in this period after the {@link entity.PolicyPeriod#getEditEffectiveDate() EditEffectiveDate}.
     * @return sorted array of future slice dates in this period.
     */
    public java.util.Date[] getFutureSliceDatesInPeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getFutureSliceDatesInPeriod();
    }
    
    /**
     * Gets the value of the GLTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GLTransaction[] getGLTransactions() {
      return (entity.GLTransaction[])__getInternalInterface().getFieldValue(GLTRANSACTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the HOPTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPTransaction[] getHOPTransactions() {
      return (entity.HOPTransaction[])__getInternalInterface().getFieldValue(HOPTRANSACTIONS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    /**
     * Gets the value of the IMTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.IMTransaction[] getIMTransactions() {
      return (entity.IMTransaction[])__getInternalInterface().getFieldValue(IMTRANSACTIONS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the InvoiceStreamCode field.
     * The public id of the invoice stream in billing system.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInvoiceStreamCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INVOICESTREAMCODE_PROP.get());
    }
    
    /**
     * Gets the value of the InvoiceStreamOverrides field.
     * Fields which override the default fields of an InvoiceStream.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.InvoiceStreamOverrides getInvoiceStreamOverrides() {
      return (entity.InvoiceStreamOverrides)__getInternalInterface().getFieldValue(INVOICESTREAMOVERRIDES_PROP.get());
    }
    
    /**
     * Gets the value of the InvoiceStreamOverridesArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.InvoiceStreamOverrides[] getInvoiceStreamOverridesArray() {
      return (entity.InvoiceStreamOverrides[])__getInternalInterface().getFieldValue(INVOICESTREAMOVERRIDESARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getInvoiceStreamOverridesID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(INVOICESTREAMOVERRIDES_PROP.get());
    }
    
    /**
     * Gets the value of the InvoicingMethod field.
     * The invoicing method for this PolicyPeriod
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.InvoicingMethod getInvoicingMethod() {
      return (typekey.InvoicingMethod)__getInternalInterface().getFieldValue(INVOICINGMETHOD_PROP.get());
    }
    
    /**
     * Returns the {@link Issuance} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not an Issuance
     * @return the Rewrite Issuance associated with this PolicyPeriod, null if this is not an Issuance Job
     */
    public entity.Issuance getIssuance() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getIssuance();
    }
    
    /**
     * Gets the value of the Job field.
     * The job this policy period is part of.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job getJob() {
      return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public gw.pl.persistence.core.Key getJobID() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).getJobID();
    }
    
    /**
     * Get the {@link IJobProcess} associated with this PolicyPeriod
     * @return returns the JobProcess associated with this PolicyPeriod
     */
    public gw.api.job.IJobProcess getJobProcessInternal() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getJobProcessInternal();
    }
    
    /**
     * Gets the most recent (highest {@link Document#getID() ID}) {@link Document} of the
     * given {@link DocumentType} on this period, or null if none was found of the given DocumentType
     * @param docType the DocumentType to return
     * @return The most recent Document of the given DocumentType found on this PolicyPeriod; null if none found
     */
    public entity.Document getLatestDocumentOfType(typekey.DocumentType docType) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLatestDocumentOfType(docType);
    }
    
    /**
     * Goes through the PolicyPeriods for the associated Policy and returns the PolicyPeriod that is
     * promoted, has the same PeriodID and is the most recent (has the highest model number)
     * @return the latest promoted PolicyPeriod with the same PeriodId as this PolicyPeriod
     */
    public entity.PolicyPeriod getLatestPeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLatestPeriod();
    }
    
    /**
     * Returns the {@link PolicyLine} matching the given {@link PolicyLinePattern} if such a line exists, null if
     * no PolicyLine has the given PolicyLinePattern
     * @param linePattern 
     * @return The PolicyLine on the PolicyPeriod matching the given PolicyLinePattern, null if there is no match
     */
    public entity.PolicyLine getLine(gw.api.productmodel.PolicyLinePattern linePattern) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLine(linePattern);
    }
    
    /**
     * Returns true if a {@link PolicyLine} with the given {@link PolicyLinePattern} exists for this PolicyPeriod,
     * false otherwise
     * @param linePattern 
     * @return True if a PolicyLine exists with the given PolicyLinePattern
     */
    public boolean getLineExists(gw.api.productmodel.PolicyLinePattern linePattern) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLineExists(linePattern);
    }
    
    /**
     * Gets the value of the Lines field.
     * Lines (e.g. Auto, Property,etc.) of this policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLine[] getLines() {
      return (entity.PolicyLine[])__getInternalInterface().getFieldValue(LINES_PROP.get());
    }
    
    /**
     * Get the version list for an effective dated foreign key.  You need this
     * method because it's the only way to get the version list for a foreign key
     * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
     * since you can't traverse the array and there are no methods on
     * EffDatedVersionList to access a FK (only arrays).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key
     * @return Version list for an effective dated foreign key
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
    }
    
    /**
     * Gets the value of the LocationAutoNumberSeq field.
     * Sequence to autonumber policy locations
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AutoNumberSequence getLocationAutoNumberSeq() {
      return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLocationAutoNumberSeqID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get());
    }
    
    /**
     * Gets the value of the LocationRisks field.
     * All reinsurable risks associated with policy locations on this policy period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LocationRisk[] getLocationRisks() {
      return (entity.LocationRisk[])__getInternalInterface().getFieldValue(LOCATIONRISKS_PROP.get());
    }
    
    /**
     * Gets the value of the LockingColumn field.
     * Meaningless column for locking
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getLockingColumn() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCKINGCOLUMN_PROP.get());
    }
    
    /**
     * Gets summary {@link LossFinancials} for this PolicyPeriod.
     * @return the LossFinancials associated with this PolicyPeriod.
     */
    public entity.LossFinancials getLossFinancials() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getLossFinancials();
    }
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
    }
    
    /**
     * Gets the value of the ModelDate field.
     * Date corresponding to the model number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getModelDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(MODELDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ModelNumber field.
     * Modelnumber.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getModelNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(MODELNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the ModelNumberIndex field.
     * Used as non-null unique index with PeriodId.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getModelNumberIndex() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MODELNUMBERINDEX_PROP.get());
    }
    
    /**
     * Gets the value of the MostRecentModelIndex field.
     * Used as non-null unique index with PeriodId.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMostRecentModelIndex() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MOSTRECENTMODELINDEX_PROP.get());
    }
    
    /**
     * Returns all the {@link PolicyNamedInsured PolicyNamedInsureds} for this PolicyPeriod.  Includes the Primary
     * Named Insured, Secondary Named Insured and all Additional Named Insureds.
     * @return All the PolicyNamedInsureds on this period.  This includes the primary, secondary (in PA) and additional
     * named insureds.
     */
    public entity.PolicyNamedInsured[] getNamedInsureds() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getNamedInsureds();
    }
    
    /**
     * Gets the value of the NewInvoiceStream field.
     * The new invoice stream created by this policy period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BillingInvoiceStream getNewInvoiceStream() {
      return (entity.BillingInvoiceStream)__getInternalInterface().getFieldValue(NEWINVOICESTREAM_PROP.get());
    }
    
    /**
     * Gets the value of the NewInvoiceStreamArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BillingInvoiceStream[] getNewInvoiceStreamArray() {
      return (entity.BillingInvoiceStream[])__getInternalInterface().getFieldValue(NEWINVOICESTREAMARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getNewInvoiceStreamID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(NEWINVOICESTREAM_PROP.get());
    }
    
    /**
     * Returns next future Renewal period that is latest bound, renews this PolicyPeriod, and
     * is not flat cancelled.
     * @return a {@link entity.PolicyPeriod} of next future period that is the latest bound period that renew the
     * current period and is not flat cancelled. Or, null if there is none.
     */
    public entity.PolicyPeriod getNextRenewal() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getNextRenewal();
    }
    
    /**
     * Gets the value of the Notes field.
     * Notes associated with this PolicyPeriod.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Note[] getNotes() {
      return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
    }
    
    /**
     * Return all {@link DiffItem DiffItems} comparing this PolicyPeriod to its {@link #getBasedOn() BasedOn} where the
     * DiffItem is an {@link gw.api.diff.DiffItem#isOOSChange() OOS change}
     * @return all DiffItems that are OOS changes
     */
    public java.util.List<gw.api.diff.DiffItem> getOOSChanges() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSChanges();
    }
    
    /**
     * Return all {@link DiffItem DiffItems} comparing this PolicyPeriod to its {@link #getBasedOn() BasedOn} where the DiffItem is
     * an {@link gw.api.diff.DiffItem#isOOSConflict()} () OOS Conflict}
     * @return all DiffItems that are OOS conflicts
     */
    public java.util.List<gw.api.diff.DiffItem> getOOSConflicts() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSConflicts();
    }
    
    /**
     * Returns all Slice Dates of this PolicyPeriod from the Edit Effective Date onward.
     * @return sorted array of Dates that consists of edit effective date and future slice dates in this period.
     */
    public java.util.Date[] getOOSSliceDates() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSSliceDates();
    }
    
    /**
     * Returns an array of PolicyPeriods, each one is actually this PolicyPeriod but Sliced on each date returned by
     * {@link #getOOSSliceDates()}.
     * @return an array of PolicyPeriods one for each oos slice date
     */
    public entity.PolicyPeriod[] getOOSSlices() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSSlices();
    }
    
    public entity.PolicyPeriod[] getOOSSlices(java.util.Date[] oosSliceDates) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOOSSlices(oosSliceDates);
    }
    
    /**
     * Returns the {@link Offering} associated with this PolicyPeriod
     * @return the Offering associated with this PolicyPeriod
     */
    public gw.api.productmodel.Offering getOffering() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getOffering();
    }
    
    public com.guidewire.pl.system.util.DateRange getOriginalPeriodRange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getOriginalPeriodRange();
    }
    
    /**
     * Returns the periods that overlap this period using the given period start
     * and end dates.
     * @param periodStart Date to use for period start (ignored the current
     *                          period start of this branch)
     * @param periodEndOrCancel Date to use for period end (ignored the current
     *                          period end of this branch)
     * @return List of bound periods that overlap
     */
    public java.util.List<entity.EffDatedBranch> getOverlappingBoundPeriods(java.util.Date periodStart, java.util.Date periodEndOrCancel) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getOverlappingBoundPeriods(periodStart, periodEndOrCancel);
    }
    
    /**
     * Gets the value of the PATransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PATransaction[] getPATransactions() {
      return (entity.PATransaction[])__getInternalInterface().getFieldValue(PATRANSACTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the PNIContactDenorm field.
     * The primary named insured's contact on the policy. Denorm field so contact is retained when the policyperiod is archived.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contact getPNIContactDenorm() {
      return (entity.Contact)__getInternalInterface().getFieldValue(PNICONTACTDENORM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPNIContactDenormID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PNICONTACTDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the PRActiveWorkflowArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PRActiveWorkflow[] getPRActiveWorkflowArray() {
      return (entity.PRActiveWorkflow[])__getInternalInterface().getFieldValue(PRACTIVEWORKFLOWARRAY_PROP.get());
    }
    
    /**
     * Gets the value of the Period field.
     * Branches with the same PeriodID are in the same period
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getPeriod() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(PERIOD_PROP.get());
    }
    
    /**
     * Gets the value of the PeriodAnswers field.
     * Set of answers for this policy period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PeriodAnswer[] getPeriodAnswers() {
      return (entity.PeriodAnswer[])__getInternalInterface().getFieldValue(PERIODANSWERS_PROP.get());
    }
    
    /**
     * Gets the value of the PeriodEnd field.
     * Upper bound of all expiration dates of this root
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getPeriodEnd() {
      return (java.util.Date)__getInternalInterface().getFieldValue(PERIODEND_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPeriodID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PERIOD_PROP.get());
    }
    
    /**
     * Every branch belongs to a period, identified by its PeriodId. When a new
     * submission or renewal is created the new branch is assigned a new PeriodId.
     * When a new branch is created in the same period as another branch (e.g. a
     * policy change) it shares the "based on" or "original" branch's PeriodId. A
     * period often has several branches associated with it, both promoted and in
     * draft, but will have only one "most recent" or "in-force" branch associated
     * with it. This in-force branch is the most recently promoted branch
     * associated with a period. The other promoted branches represent earlier
     * versions of the in-force branch in model-time. Often when we refer to the
     * "period" we're actually referring to the most recently bound branch in a
     * period, ignoring the other, "older" branches that are also associated with
     * the period.
     * <p/>
     * To find all the branches associated with a period find all branches with
     * the same PeriodId.
     * @return Period Id of this branch.
     */
    public gw.pl.persistence.core.Key getPeriodId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).getPeriodId();
    }
    
    public com.guidewire.pl.system.util.DateRange getPeriodRange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getPeriodRange();
    }
    
    /**
     * Gets the value of the PeriodStart field.
     * Lower bound of all effective dates of this root
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getPeriodStart() {
      return (java.util.Date)__getInternalInterface().getFieldValue(PERIODSTART_PROP.get());
    }
    
    public java.util.List<entity.DestructionRootPinnable> getPinnableChildren() {
      return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).getPinnableChildren();
    }
    
    public java.util.List<entity.DestructionRootPinnable> getPinnableDescendants() {
      return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).getPinnableDescendants();
    }
    
    public java.util.List<entity.DestructionRootPinnable> getPinnableParents() {
      return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).getPinnableParents();
    }
    
    public int getPlatformMajorVersion() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getPlatformMajorVersion();
    }
    
    public int getPlatformMinorVersion() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getPlatformMinorVersion();
    }
    
    /**
     * Gets the value of the Policy field.
     * The policy to which this period belongs
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Policy getPolicy() {
      return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
    }
    
    /**
     * Returns the {@link entity.PolicyAddress} for this PolicyPeriod.  This is a convenience method and is equivalent to
     * PolicyPeriod.{@link entity.EffectiveDatedFields#getPolicyAddress()}
     * @return the policy address
     */
    public entity.PolicyAddress getPolicyAddress() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPolicyAddress();
    }
    
    /**
     * Returns the {@link PolicyChange} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not a PolicyChange
     * @return the PolicyChange Job associated with this PolicyPeriod, null if this is not a PolicyChange Job
     */
    public entity.PolicyChange getPolicyChange() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPolicyChange();
    }
    
    /**
     * Gets the value of the PolicyContactRoles field.
     * The policy contact roles of this policy period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyContactRole[] getPolicyContactRoles() {
      return (entity.PolicyContactRole[])__getInternalInterface().getFieldValue(POLICYCONTACTROLES_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyFXRates field.
     * fx rates used for monetary amount conversions
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyFXRate[] getPolicyFXRates() {
      return (entity.PolicyFXRate[])__getInternalInterface().getFieldValue(POLICYFXRATES_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICY_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyLocations field.
     * The period locations.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLocation[] getPolicyLocations() {
      return (entity.PolicyLocation[])__getInternalInterface().getFieldValue(POLICYLOCATIONS_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyNumber field.
     * The policy number for this policy period. This value may be different from the core policy number on the associated Policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyRisks field.
     * The reinsurable risk associated with this policy period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyRisk[] getPolicyRisks() {
      return (entity.PolicyRisk[])__getInternalInterface().getFieldValue(POLICYRISKS_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyTerm field.
     * Policy term information associated with this period
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyTerm getPolicyTerm() {
      return (entity.PolicyTerm)__getInternalInterface().getFieldValue(POLICYTERM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyTermID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYTERM_PROP.get());
    }
    
    public java.util.List<? extends entity.EffDatedBranch> getPreemptedBranches() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getPreemptedBranches();
    }
    
    /**
     * Returns an array of all the jobs that would be preempted if this PolicyPeriod were bound.
     * The array will be empty if no preemptions would occur. This is different from the
     * PreemptedPeriodsIfBoundNow property because multiple periods may be associated with a single
     * job.
     * @return jobs that will be preempted
     */
    public entity.Job[] getPreemptedJobsIfBoundNow() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPreemptedJobsIfBoundNow();
    }
    
    /**
     * Return a list of PolicyPeriods that will be preempted if this PolicyPeriod is bound
     * now.
     * @return all PolicyPeriods that will be preempted if this PolicyPeriod is bound
     */
    public entity.PolicyPeriod[] getPreemptedPeriodsIfBoundNow() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPreemptedPeriodsIfBoundNow();
    }
    
    public java.util.List<? extends entity.EffDatedBranch> getPreemptingBranches() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getPreemptingBranches();
    }
    
    /**
     * Returns an array of all PolicyPeriods that preempt this PolicyPeriod.
     * @return all PolicyPeriods that preempt this PolicyPeriod
     */
    public entity.PolicyPeriod[] getPreemptionsOfThisPeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPreemptionsOfThisPeriod();
    }
    
    /**
     * Gets the value of the PreferredCoverageCurrency field.
     * Preferred Coverage Currency
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPreferredCoverageCurrency() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get());
    }
    
    /**
     * Gets the value of the PreferredSettlementCurrency field.
     * Preferred Settlement Currency
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPreferredSettlementCurrency() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(PREFERREDSETTLEMENTCURRENCY_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryInsuredName field.
     * The display name of the primary names insured (denormalization).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryInsuredName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYINSUREDNAME_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryInsuredNameDenorm field.
     * denorm field for PrimaryInsuredName
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryInsuredNameDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYINSUREDNAMEDENORM_PROP.get());
    }
    
    /**
     * Return the {@link entity.PolicyLocation} marked as the Primary Location, or null if there is none
     * @return the primary PolicyLocation for the PolicyPeriod
     */
    public entity.PolicyLocation getPrimaryLocation() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPrimaryLocation();
    }
    
    /**
     * Returns the {@link PolicyPriNamedInsured} for this PolicyPeriod.  This is a convenience method and is equivalent to
     * PolicyPeriod.{@link entity.EffectiveDatedFields#getPrimaryNamedInsured()}
     * @return the primary named insured
     */
    public entity.PolicyPriNamedInsured getPrimaryNamedInsured() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getPrimaryNamedInsured();
    }
    
    /**
     * Gets the value of the ProducerCodeOfRecord field.
     * The producer code that created this policy in this period and should get the commissions.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProducerCode getProducerCodeOfRecord() {
      return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFRECORD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getProducerCodeOfRecordID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PRODUCERCODEOFRECORD_PROP.get());
    }
    
    /**
     * Returns the producer organization associated with this PolicyPeriod; really just a
     * shortcut for PolicyPeriod.ProducerCodeOfRecord.Organization
     * @return the producer associated with this PolicyPeriod's producercode, or
     * null if none available
     */
    public entity.Organization getProducerOfRecord() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getProducerOfRecord();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Returns the public ID of the root.
     * @return public ID of the root.
     */
    public java.lang.String getPublicIDOfRoot() {
      return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).getPublicIDOfRoot();
    }
    
    /**
     * Recalculates question dependencies if they have been cleared (see {@link #clearQuestionDependencies}),
     * then returns all questions that are dependent on the given question's answers.
     * @param question the question to get dependencies for
     * @return the set of questions on which the given question depends
     */
    public java.util.Set<gw.api.productmodel.Question> getQuestionDependencies(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getQuestionDependencies(question);
    }
    
    /**
     * Returns reference date to use for question set availability lookup based on question set type.
     * @param questionSetType question set type that reference date is requested for
     * @return reference date to use for availability lookup of question sets of given type.
     */
    public java.util.Date getQuestionSetLookupReferenceDate(typekey.QuestionSetType questionSetType) {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).getQuestionSetLookupReferenceDate(questionSetType);
    }
    
    public gw.api.productmodel.QuestionSet[] getQuestionSets() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getQuestionSets();
    }
    
    /**
     * Gets the value of the QuoteCloneOriginalPeriod field.
     * Soft FK to the original policy period that this policy period was cloned from.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getQuoteCloneOriginalPeriod() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(QUOTECLONEORIGINALPERIOD_PROP.get());
    }
    
    /**
     * Gets the value of the QuoteCloneSequenceNumber field.
     * This is only used during policy quote clone.  It is a sequence number for the cloned quote.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getQuoteCloneSequenceNumber() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(QUOTECLONESEQUENCENUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the QuoteIdentifier field.
     * If this PolicyPeriod originated from a HVQ quote, this field references that quote's ID.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getQuoteIdentifier() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(QUOTEIDENTIFIER_PROP.get());
    }
    
    /**
     * Gets the value of the QuoteMaturityLevel field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.QuoteMaturityLevel getQuoteMaturityLevel() {
      return (typekey.QuoteMaturityLevel)__getInternalInterface().getFieldValue(QUOTEMATURITYLEVEL_PROP.get());
    }
    
    /**
     * Gets the value of the RIRiskVersionLists field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIRiskVersionList[] getRIRiskVersionLists() {
      return (entity.RIRiskVersionList[])__getInternalInterface().getFieldValue(RIRISKVERSIONLISTS_PROP.get());
    }
    
    /**
     * Gets the value of the RateAsOfDate field.
     * The date the policy should be rated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getRateAsOfDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(RATEASOFDATE_PROP.get());
    }
    
    /**
     * Return the Reference Date for this PolicyPeriod.  This is configurable through a call to
     * {@link gw.plugin.productmodel.IReferenceDatePlugin#getReferenceDateType(entity.PolicyPeriod, Jurisdiction)}
     * to determine the {@link typekey.ReferenceDateType}, and through a call to
     * {@link gw.plugin.productmodel.IReferenceDatePlugin#getPeriodReferenceDate(entity.PolicyPeriod, typekey.ReferenceDateType, typekey.Jurisdiction)}
     * to lookup the actual Reference Date.
     * @return the reference date for the current period
     */
    public java.util.Date getReferenceDate() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getReferenceDate();
    }
    
    /**
     * Returns the reference date that should be used for availability lookups for the given {@link Jurisdiction}.
     * This method first determines the reference date type (either effective date, written date or
     * rating period date) for the given state, the type of this product and the underwriting
     * company on the policy period. Then the {@link gw.plugin.productmodel.IReferenceDatePlugin} is
     * invoked to return the appropriate date.
     * @param baseState the Jurisdiction to return the Reference Date for
     * @return the Date that should be used for availability lookups for the given Jurisdiction
     */
    public java.util.Date getReferenceDateForCurrentJob(typekey.Jurisdiction baseState) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getReferenceDateForCurrentJob(baseState);
    }
    
    public java.lang.Iterable<gw.entity.IEntityType> getReferencingTypes() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getReferencingTypes();
    }
    
    public java.lang.Iterable<gw.entity.IEntityType> getReferencingTypesInDB() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getReferencingTypesInDB();
    }
    
    /**
     * Gets the value of the RefundCalcMethod field.
     * The method used to calculate the amount of refund due.  Once a policy is canceled, subsequent policy periods inherit this until it is reinstated, at which point this field is reset to null.  Also returns null if the cancellation cannot be found (e.g. if the cancellation was done in an external system).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.CalculationMethod getRefundCalcMethod() {
      return (typekey.CalculationMethod)__getInternalInterface().getFieldValue(REFUNDCALCMETHOD_PROP.get());
    }
    
    /**
     * Returns the {@link Reinstatement} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not a Reinstatement
     * @return the Reinstatement Job associated with this PolicyPeriod, null if this is not a Reinstatement Job
     */
    public entity.Reinstatement getReinstatement() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getReinstatement();
    }
    
    /**
     * Find reinsurable risk associated with reinsurable coverable
     * @return associated reinsurable risk if it exists, else null
     */
    public entity.Reinsurable[] getReinsurables() {
      return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).getReinsurables();
    }
    
    /**
     * Returns the original {@link Cancellation} {@link Job} that caused this period to be marked
     * as canceled. Returns null if this period is not canceled, or if no such
     * Cancellation can be found (e.g., if the cancellation was done in an
     * external system).
     * @return the Cancellation Job that caused this PolicyPeriod to be marked as canceled, null if
     * no Cancellation can be found
     */
    public entity.Cancellation getRelatedCancellationJob() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRelatedCancellationJob();
    }
    
    /**
     * Returns the {@link Renewal} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not a Renewal
     * @return the Renewal Job associated with this PolicyPeriod, null if this is not a Renewal Job
     */
    public entity.Renewal getRenewal() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRenewal();
    }
    
    /**
     * Returns the first versions of any {@link PolicyLine} that ever existed in this
     * period.  The lines are in window mode.
     * @return the first version of every PolicyLine that ever existed in this PolicyPeriod
     */
    public entity.PolicyLine[] getRepresentativePolicyLines() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRepresentativePolicyLines();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Returns the {@link Rewrite} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not a Rewrite
     * @return the Rewrite Job associated with this PolicyPeriod, null if this is not a Rewrite Job
     */
    public entity.Rewrite getRewrite() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRewrite();
    }
    
    /**
     * Returns the {@link RewriteNewAccount} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not a RewriteNewAccount
     * @return the RewriteNewAccount Job associated with this PolicyPeriod, null if this is not a RewriteNewAccount Job
     */
    public entity.RewriteNewAccount getRewriteNewAccount() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getRewriteNewAccount();
    }
    
    public entity.Extractable getRoot() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getRoot();
    }
    
    /**
     * Returns the {@link PolicySecNamedInsured} for this PolicyPeriod.  This is a convenience method and is equivalent to
     * PolicyPeriod.{@link entity.EffectiveDatedFields#getSecondaryNamedInsured()}
     * @return the secondary named insured
     */
    public entity.PolicySecNamedInsured getSecondaryNamedInsured() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSecondaryNamedInsured();
    }
    
    /**
     * Gets the value of the Segment field.
     * Market segment this policy period is in.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Segment getSegment() {
      return (typekey.Segment)__getInternalInterface().getFieldValue(SEGMENT_PROP.get());
    }
    
    /**
     * Gets the value of the SelectedPaymentPlan field.
     * The selected payment plan for this period
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PaymentPlanSummary getSelectedPaymentPlan() {
      return (entity.PaymentPlanSummary)__getInternalInterface().getFieldValue(SELECTEDPAYMENTPLAN_PROP.get());
    }
    
    /**
     * Gets the value of the SelectedPaymentPlanArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PaymentPlanSummary[] getSelectedPaymentPlanArray() {
      return (entity.PaymentPlanSummary[])__getInternalInterface().getFieldValue(SELECTEDPAYMENTPLANARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getSelectedPaymentPlanID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SELECTEDPAYMENTPLAN_PROP.get());
    }
    
    /**
     * Gets the value of the SelectedTermType field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.TermType getSelectedTermType() {
      return (typekey.TermType)__getInternalInterface().getFieldValue(SELECTEDTERMTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the SeriesCheckingPatternCode field.
     * The code of the pattern to use for creating and scheduling a series of checking audits
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSeriesCheckingPatternCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERIESCHECKINGPATTERNCODE_PROP.get());
    }
    
    /**
     * Gets the value of the SingleCheckingPatternCode field.
     * The code of the pattern to use for creating and scheduling single checking audits
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSingleCheckingPatternCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SINGLECHECKINGPATTERNCODE_PROP.get());
    }
    
    /**
     * Date which this bean is "sliced" or viewed. If you traverse from this bean
     * to another bean or beans via a link or array, only beans that are effective
     * at this slice date will be returned. The beans that are returned will be
     * sliced at this date as well. If NULL then the bean is in "window" mode.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return Date which bean is sliced or null if in window mode.
     */
    public java.util.Date getSliceDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
    }
    
    /**
     * Returns a {@link DateRange} starting from the Most Recent EffectiveDate that is before the current EditEffectiveDate
     * (or the EditEffectiveDate itself if it's equal to an EffectiveDate), to the following EffectiveDate
     * (or the PeriodEnd if there is no following EffectiveDate).
     * <p>
     * The behavior of this method has changed from 8.0.5. We now include every EffectiveDates that we found in the graph.
     * Prior to 8.0.5, we only included the Policy bound EditEffectiveDates as possible values for the DateRange.
     * @return an EffectiveDate range where the date passed in parameters falls into.
     */
    public com.guidewire.pl.system.util.DateRange getSliceDateRange() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSliceDateRange();
    }
    
    /**
     * Returns a {@link DateRange} starting from the Most Recent EffectiveDate that is before the date passed in parameters
     * (or the date itself if it's equal to an EffectiveDate), to the following EffectiveDate
     * (or the PeriodEnd if there is no following EffectiveDate).
     * @param date the date that falls into the Slice of EffectiveDates to be returned.
     * @return an EffectiveDate range where the current EditEffectiveDate falls into.
     */
    public com.guidewire.pl.system.util.DateRange getSliceDateRange(java.util.Date date) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSliceDateRange(date);
    }
    
    /**
     * Slice this bean at a particular date. This bean can be unsliced or sliced
     * when this method is called. The slice date must be within the effective
     * range of this bean or an exception will be thrown. If you want to get at
     * the version of this "logical" bean at a date outside of this particular
     * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
     * @param sliceDate Date at which to slice this bean.
     * @return Sliced version of the bean.
     */
    public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
    }
    
    public java.util.Collection<entity.EffDatedBase> getSlices() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlices();
    }
    
    public java.util.Map<java.util.Date, entity.EffDatedBase> getSlicesMap() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlicesMap();
    }
    
    /**
     * If Solr search is in use, generate a unique key that depends on the relevant indexed fields.
     * The implementation delegates to the active implementation of ISolrSearchPlugin.
     * This is TEMPORARY, until platform provides a permanent solution.
     * @return A String representation of the unique key
     */
    public java.lang.String getSolrUniqueKey() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSolrUniqueKey();
    }
    
    /**
     * Gets the value of the SpecialHandling field.
     * special handling to be applied to the charges on a billing instruction
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.SpecialHandling getSpecialHandling() {
      return (typekey.SpecialHandling)__getInternalInterface().getFieldValue(SPECIALHANDLING_PROP.get());
    }
    
    /**
     * Gets the value of the Status field.
     * The period's status. This field can only be updated via workflow methods available on the various Job entities.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PolicyPeriodStatus getStatus() {
      return (typekey.PolicyPeriodStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    /**
     * Returns the {@link Submission} {@link Job} associated with this period, or null if there is no associated Job
     * or the associated Job is not a Submission
     * @return the Submission Job associated with this PolicyPeriod, null if this is not a Submission Job
     */
    public entity.Submission getSubmission() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getSubmission();
    }
    
    /**
     * Gets the existing value of the TaxSurchargesRPT field. It also populates the value if it is null, unless the branch is locked.
     * This method uses the {@link typekey.RateAmountType} typefilter TF_TAXESANDSURCHARGES to decide which costs qualify as taxes and surcharges.
     * 
     * This method exists to populate the TaxSurchargesRPT field for pre-existing {@link entity.PolicyPeriod} when the TaxSurchargesRPT field was added.
     * @return The sum of the current tax and surcharge costs
     */
    public gw.pl.currency.MonetaryAmount getTaxAndSurchargesRPT() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getTaxAndSurchargesRPT();
    }
    
    /**
     * Gets the value of the TaxSurchargesRPT field.
     * Total amount of tax and surcharges on the policy period. The total is denormalized for higher performance UI display and reporting support.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTaxSurchargesRPT() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TAXSURCHARGESRPT_PROP.get());
    }
    
    /**
     * Gets the value of the TaxSurchargesRPT_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTaxSurchargesRPT_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TAXSURCHARGESRPT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TaxSurchargesRPT_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTaxSurchargesRPT_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TAXSURCHARGESRPT_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the TemporaryCloneStatus field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PolicyPeriodCloneStatus getTemporaryCloneStatus() {
      return (typekey.PolicyPeriodCloneStatus)__getInternalInterface().getFieldValue(TEMPORARYCLONESTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the TermNumber field.
     * A sequence number that starts at 1 and is incremented on a renewal and rewrite, usually to distinguish between different periods of a same policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getTermNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(TERMNUMBER_PROP.get());
    }
    
    /**
     * Calculated and returns the TermType of this policy. The logic for calculating the term is in
     * {@link gw.plugin.policyperiod.IPolicyTermPlugin#calculatePolicyTerm(entity.PolicyPeriod, java.util.Date, java.util.Date)}
     * @return the TermType of this PolicyPeriod
     */
    public typekey.TermType getTermType() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getTermType();
    }
    
    public java.util.Date getTerminationDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).getTerminationDate();
    }
    
    /**
     * Gets the value of the TotalCostRPT field.
     * Total amount of all premium, taxes, and any other costs for the entire policy period. The total is denormalized for higher performance UI display and reporting support.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalCostRPT() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALCOSTRPT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalCostRPT_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalCostRPT_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALCOSTRPT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalCostRPT_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalCostRPT_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALCOSTRPT_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPremiumRPT field.
     * Total amount of all premium (but not taxes or any other costs) for the entire policy period. The total is denormalized for higher performance UI display and reporting support.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalPremiumRPT() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPREMIUMRPT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPremiumRPT_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalPremiumRPT_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPREMIUMRPT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPremiumRPT_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalPremiumRPT_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPREMIUMRPT_CUR_PROP.get());
    }
    
    public java.lang.String getTraceDetails() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getTraceDetails();
    }
    
    /**
     * Gets the value of the TransactionCostRPT field.
     * Total change in premium, taxes, and any other costs caused by a job. For a job that creates a new policy period (i.e. Submission, Renewal, or Rewrite), the TransactionCostRPT will be the same as the TotalCostRPT because there were no prior costs for the period. For mid-term jobs (Policy Change, Cancellation, etc.), this field represents the change in amount from the prior job. The total is denormalized for UI display and reporting support.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTransactionCostRPT() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TRANSACTIONCOSTRPT_PROP.get());
    }
    
    /**
     * Gets the value of the TransactionCostRPT_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTransactionCostRPT_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TRANSACTIONCOSTRPT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TransactionCostRPT_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTransactionCostRPT_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TRANSACTIONCOSTRPT_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the TransactionPremiumRPT field.
     * Total change in premium (but not taxes or any other costs) caused by a job. For a job that creates a new policy period (i.e. Submission, Renewal, or Rewrite), the TransactionPremiumRPT will be the same as the TotalPremiumRPT because there were no prior premiums for the period. For mid-term jobs (Policy Change, Cancellation, etc.), this field represents the change in amount from the prior job. The total is denormalized for UI display and reporting support.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTransactionPremiumRPT() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TRANSACTIONPREMIUMRPT_PROP.get());
    }
    
    /**
     * Gets the value of the TransactionPremiumRPT_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTransactionPremiumRPT_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TRANSACTIONPREMIUMRPT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TransactionPremiumRPT_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTransactionPremiumRPT_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TRANSACTIONPREMIUMRPT_CUR_PROP.get());
    }
    
    /**
     * Finds all types of {@link Transaction} that are reached by this PolicyPeriod's {@link Policy} (the EffDated
     * Container for PolicyPeriod}; that is, there is some row in the given Transaction's table that refers to this
     * PolicyPeriod's Policy.
     * @return list of all Transaction root types reached by this PolicyPeriod's Policy.
     */
    public java.util.List<gw.entity.IEntityType> getTransactionTypes() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getTransactionTypes();
    }
    
    public java.util.Date getTraversalDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getTraversalDate();
    }
    
    /**
     * Returns all the UWCompanies that are available to for this PolicyPeriod's
     * states and effective date.  Does not return retired UWCompanies.
     * @param allStates if true, only return UWCompanies that are available for
     *                  *all* states.  Otherwise returns UWCompanies that are
     *                  available for *any* of the PolicyPeriod's states.
     * @return the set of UWCompanies for this PolicyPeriod
     */
    public java.util.Set<entity.UWCompany> getUWCompaniesForStates(boolean allStates) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getUWCompaniesForStates(allStates);
    }
    
    /**
     * Gets the value of the UWCompany field.
     * Underwriting company that insures this policy.  This can only change on a Cancellation or Rewrite, never mid-term.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UWCompany getUWCompany() {
      return (entity.UWCompany)__getInternalInterface().getFieldValue(UWCOMPANY_PROP.get());
    }
    
    /**
     * Returns the {@link UWCompanyCode} of this period's {@link UWCompany}, or null if the UWCompany is not set.
     * @return the UWCompanyCode of the UWCompany for this PolicyPeriod; or null if no UWCompany is set.
     */
    public typekey.UWCompanyCode getUWCompanyCode() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).getUWCompanyCode();
    }
    
    public gw.pl.persistence.core.Key getUWCompanyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UWCOMPANY_PROP.get());
    }
    
    /**
     * Gets the value of the UWIssuesIncludingSoftDeleted field.
     * Issues generated during policy evaluation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UWIssue[] getUWIssuesIncludingSoftDeleted() {
      return (entity.UWIssue[])__getInternalInterface().getFieldValue(UWISSUESINCLUDINGSOFTDELETED_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * Get the version list for this bean. An EffDatedVersionList is a
     * representation of a logical bean through its effective range. For example,
     * if a bean has changes at three separate effective dates then the version
     * list will comprise 3 versions of the bean, one for each of these dates.
     * <p/>
     * You can use an EffDatedVersionList to traverse from this bean to other
     * linked beans in window mode. Recall that in window mode you cannot traverse
     * links directly from the bean.
     * <p/>
     * Although an EffDatedBranch only has a single version throughout its
     * effective range you can still get its EffDatedVersionList in order to
     * navigate in window mode from the branch to its related EffDateds.
     * @return Version list for this bean
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
    }
    
    public java.lang.String getVersionString() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
    }
    
    /**
     * Gets the value of the WCTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.WCTransaction[] getWCTransactions() {
      return (entity.WCTransaction[])__getInternalInterface().getFieldValue(WCTRANSACTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the Workflows field.
     * Set of workflows associated with this period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriodWorkflow[] getWorkflows() {
      return (entity.PolicyPeriodWorkflow[])__getInternalInterface().getFieldValue(WORKFLOWS_PROP.get());
    }
    
    /**
     * Gets the value of the WorksheetContainer field.
     * ArchiveRoot for Worksheet data, if present
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.WorksheetContainer getWorksheetContainer() {
      return (entity.WorksheetContainer)__getInternalInterface().getFieldValue(WORKSHEETCONTAINER_PROP.get());
    }
    
    /**
     * Gets the value of the WorksheetContainerArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.WorksheetContainer[] getWorksheetContainerArray() {
      return (entity.WorksheetContainer[])__getInternalInterface().getFieldValue(WORKSHEETCONTAINERARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getWorksheetContainerID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(WORKSHEETCONTAINER_PROP.get());
    }
    
    /**
     * Gets the value of the WrittenDate field.
     * Nominally, the date this period was created. For reinstatements, it is the written date of the reinstated period. For rewrites, it can be the date of the rewrite or the date of the original period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getWrittenDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(WRITTENDATE_PROP.get());
    }
    
    public void handleBranchChange() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).handleBranchChange();
    }
    
    /**
     * Indicates whether the ActiveWorkflow property points to an active
     * {@link PolicyPeriodWorkflow}.
     * @return True if the ActiveWorkflow property points to an active PolicyPeriodWorkflow
     */
    public boolean hasActiveWorkflow() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasActiveWorkflow();
    }
    
    /**
     * Returns true if there are any unhandled preemptions for this PolicyPeriod
     * @return True if there are any unhandled preemptions for this PolicyPeriod, false otherwise
     */
    public boolean hasAnyUnhandledPreemptions() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasAnyUnhandledPreemptions();
    }
    
    /**
     * Indicates whether or not this period has cross term links for archiving
     * Since these need to be deleted as part of pruning or purging a job, it is useful
     * to be able to check before those actions.
     * @return true if cross term links exist for archiving
     */
    public boolean hasArchiveObjectsAttached() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasArchiveObjectsAttached();
    }
    
    public boolean hasCommitContext() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).hasCommitContext();
    }
    
    public boolean hasCrossTermLinks() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).hasCrossTermLinks();
    }
    
    /**
     * True if there is at least one {@link Document} of the given {@link DocumentType} on this PolicyPeriod.
     * @param docType the DocumentType to check for
     * @return true if at least one Docuement of the given DocumentType exists on this PolicyPeriod.
     */
    public boolean hasDocument(typekey.DocumentType docType) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasDocument(docType);
    }
    
    /**
     * Returns true if there are any future {@link Renewal Renewals} for this PolicyPeriod as
     * defined by {@link #getFutureRenewals()}.
     * @return true if this period has any future renewals
     */
    public boolean hasFutureRenewals() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).hasFutureRenewals();
    }
    
    /**
     * Check if there would be a gap after his period using the given period start
     * and end dates and the existing bound periods.
     * @param periodStart Date to use for period start (ignored the current period
     *                    start of this branch)
     * @param periodEnd Date to use for period end (ignored the current period
     *                    end of this branch)
     * @return True if a gap exists between this period and the period after it
     */
    public boolean hasGapAfter(java.util.Date periodStart, java.util.Date periodEnd) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).hasGapAfter(periodStart, periodEnd);
    }
    
    /**
     * Check if there would be a gap before his period using the given period
     * start and end dates and the existing bound periods.
     * @param periodStart Date to use for period start (ignored the current period
     *                    start of this branch)
     * @param periodEnd Date to use for period end (ignored the current period
     *                    end of this branch)
     * @return True if a gap exists between this period and the period before it
     */
    public boolean hasGapBefore(java.util.Date periodStart, java.util.Date periodEnd) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).hasGapBefore(periodStart, periodEnd);
    }
    
    public boolean hasQuotingToken() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).hasQuotingToken();
    }
    
    public boolean hasReportedArchiveProblem() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).hasReportedArchiveProblem();
    }
    
    public boolean hasTraceDetails() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).hasTraceDetails();
    }
    
    public boolean hasWorkersComp() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).hasWorkersComp();
    }
    
    public boolean inSamePeriod(entity.EffDatedBranch branch) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).inSamePeriod(branch);
    }
    
    /**
     * Returns true if given date is greater than or equal to Period Start date and less than Period End date.
     * @param date Date to test
     * @return true if given date is greater than or equal to Period Start date and less than Period End date; returns false otherwise.
     */
    public boolean includes(java.util.Date date) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).includes(date);
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public void initNewBeanInstance(entity.EffDated emptySlice, java.util.List<? extends java.lang.Object> requiredValues) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).initNewBeanInstance(emptySlice, requiredValues);
    }
    
    public void initPolicyTerm() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).initPolicyTerm();
    }
    
    public void initUnslicedBeanInstance(entity.EffDated emptyBean, java.util.Date effDate, java.util.Date expDate, java.util.List<? extends java.lang.Object> requiredValues) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).initUnslicedBeanInstance(emptyBean, effDate, expDate, requiredValues);
    }
    
    /**
     * Creates a new {@link entity.AutoNumberSequence} for auto-numbering PolicyLocations on
     * this PolicyPeriod.
     * @param bundle 
     */
    public void initializeLocationAutoNumberSequence(gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).initializeLocationAutoNumberSequence(bundle);
    }
    
    /**
     * Calls the ReinsuranceConfigPlugin to initialize PolicyTerm.GenerateReinsurables.
     * Must be called at least once on a new term in order to initialize reinsurance.
     * <strong>Calling this on a PolicyPeriod which is not part of a new term
     * may not work correctly and should be avoided.</strong>
     */
    public void initializeReinsuranceForTerm() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).initializeReinsuranceForTerm();
    }
    
    /**
     * Tries to invoke a workflow trigger synchronously with the given key on the
     * active workflow.
     * @param triggerKey typekey of the trigger to be invoked
     * @throws IllegalStateException if the ActiveWorkflow is not set
     */
    public void invokeTrigger(typekey.WorkflowTriggerKey triggerKey) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).invokeTrigger(triggerKey);
    }
    
    /**
     * Tries to invoke a workflow trigger with the given key on the active
     * workflow.
     * @param triggerKey typekey of the trigger to be invoked
     * @param synchronous if true, executes trigger immediately; otherwise in the
     *                    background
     * @throws IllegalStateException if the ActiveWorkflow is not set
     */
    public void invokeTrigger(typekey.WorkflowTriggerKey triggerKey, boolean synchronous) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).invokeTrigger(triggerKey, synchronous);
    }
    
    /**
     * Returns true if this PolicyPeriod is Active.  A PolicyPeriod is considered Active
     * if its Status is not null and is not in the Closed PolicyPeriodStatus filter.
     * @return True if this PolicyPeriod's Status is non-null and not in the ClosedPeriodStatusSet
     */
    public boolean isActive() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isActive();
    }
    
    /**
     * Gets the value of the AllowGapsBefore field.
     * True if a gap is allowed between this period and its previous period (if one exists)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAllowGapsBefore() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ALLOWGAPSBEFORE_PROP.get());
    }
    
    /**
     * Find out if this policy period is in fact archived.
     * @return true if the policy period has been archived.
     */
    public boolean isArchived() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isArchived();
    }
    
    /**
     * Gets the value of the AssignedRisk field.
     * Flag for policy/risk assigned by state requirement
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAssignedRisk() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ASSIGNEDRISK_PROP.get());
    }
    
    public boolean isBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isBasedOn();
    }
    
    public boolean isBranchEdited() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).isBranchEdited();
    }
    
    /**
     * Is this branch canceled?
     * @return True if this period is canceled (CancellationDate is non-null) or
     *         false if the period is not canceled (CancellationDate is null).
     */
    public boolean isCanceled() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isCanceled();
    }
    
    /**
     * Return whether this PolicyPeriod is cancelled as of the current Slice Date.  Can only be called in Slice Mode.
     * @return true if this is a canceled slice
     */
    public boolean isCanceledSlice() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isCanceledSlice();
    }
    
    /**
     * Returns true if AnswerContainer is locked and false otherwise.
     * @return true if AnswerContainer is locked and false otherwise.
     */
    public boolean isContainerLocked() {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).isContainerLocked();
    }
    
    /**
     * Returns true if the InvoicingMethod typekey is equal to "CustomBilling". False otherwise.
     */
    public java.lang.Boolean isCustomBilling() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isCustomBilling();
    }
    
    /**
     * Gets the value of the DoNotDestroy field.
     * If set then the entity should not be destroyed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDoNotDestroy() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTDESTROY_PROP.get());
    }
    
    /**
     * Gets the value of the EditLocked field.
     * Whether the PolicyPeriod is locked from edit by users without permission to edit
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isEditLocked() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EDITLOCKED_PROP.get());
    }
    
    /**
     * Given a date, check whether it falls within this bean's effective window.
     * @param effDate Date to check
     * @return True if date is within this bean's effective window.
     */
    public boolean isEffective(java.util.Date effDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
    }
    
    public boolean isEntirelyCanceled() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).isEntirelyCanceled();
    }
    
    /**
     * Gets the value of the ExcludedFromArchive field.
     * Indicate if this entity should be excluded from archiving
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isExcludedFromArchive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXCLUDEDFROMARCHIVE_PROP.get());
    }
    
    /**
     * Gets the value of the FailedOOSEEvaluation field.
     * True if this is a PolicyPeriod in an OOS job that has blocking UWIssues at a later slice than the current primary slice
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFailedOOSEEvaluation() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FAILEDOOSEEVALUATION_PROP.get());
    }
    
    /**
     * Gets the value of the FailedOOSEValidation field.
     * True if this is a draft PolicyPeriod in an OOS job that has failed validation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFailedOOSEValidation() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FAILEDOOSEVALIDATION_PROP.get());
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    public boolean isFuturePeriod(entity.EffDatedBranch potentialFuturePeriod) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).isFuturePeriod(potentialFuturePeriod);
    }
    
    /**
     * Gets the value of the FuturePeriods field.
     * True if when bound this branch had future bound periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFuturePeriods() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FUTUREPERIODS_PROP.get());
    }
    
    /**
     * Returns true if the given PolicyPeriod is in teh same PolicyTerm as this PolicyPeriod.  Note that
     * the "Period" in the method name refers to the general revisioning concept of a Period which we
     * call PolicyTerm in PolicyCenter.
     * @param period 
     * @return True, if this period and the given <code>period</code> are in the
     * same PolicyTerm.
     */
    public boolean isInSamePeriod(entity.PolicyPeriod period) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isInSamePeriod(period);
    }
    
    /**
     * Gets the value of the Locked field.
     * True if this row has been locked (cannot be edited)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLocked() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LOCKED_PROP.get());
    }
    
    /**
     * Gets the value of the MostRecentModel field.
     * True if this branch is the most recent model (has the highest model number)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isMostRecentModel() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(MOSTRECENTMODEL_PROP.get());
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * Returns true is this branch represents a new period that is not a new
     * submission.
     * @return True is this branch represents a new period that is not a new
     *         submission.
     */
    public boolean isNewPeriod() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isNewPeriod();
    }
    
    public boolean isNewPeriodWithHistory() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).isNewPeriodWithHistory();
    }
    
    /**
     * Returns true if this branch represents a new submission.
     * @return True if this branch represents a new submission.
     */
    public boolean isNewSubmission() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isNewSubmission();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Returns true if this PolicyPeriod is the only active period in its {@link Job}.  This is checked
     * by calling {@link entity.Job#getActivePeriods()} to verify that this PolicyPeriod
     * is the one and only result.
     * Returns true if this PolicyPeriod is not associated with a Job.
     * @return True if this PolicyPeriod has a null Job or if it is the only Active PolicyPeriod for its Job.
     */
    public boolean isOnlyActivePeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isOnlyActivePeriod();
    }
    
    /**
     * Gets the value of the Orphaned field.
     * Whether this is an orphaned policy period that should be purged by batch process
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isOrphaned() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ORPHANED_PROP.get());
    }
    
    /**
     * Checks if there would be an overlap between the existing bound periods and
     * this period using the given period start and end dates.
     * @param periodStart Date to use for period start (ignored the current period
     *                    start of this branch)
     * @param periodEnd Date to use for period end (ignored the current period
     *                    end of this branch)
     * @return True if an overlap would exist
     */
    public boolean isOverlappingBoundPeriods(java.util.Date periodStart, java.util.Date periodEnd) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isOverlappingBoundPeriods(periodStart, periodEnd);
    }
    
    /**
     * Gets the value of the OverrideBillingAllocation field.
     * @deprecated Whether to override the billing allocation for installments plan
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isOverrideBillingAllocation() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(OVERRIDEBILLINGALLOCATION_PROP.get());
    }
    
    /**
     * Gets the value of the Preempted field.
     * True if when bound this branch has been preempted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPreempted() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PREEMPTED_PROP.get());
    }
    
    /**
     * Check if this bean or branch has been promoted. A promoted bean is also
     * locked and cannot be changed.
     * <p/>
     * An EffDated is never promoted independent of its related
     * EffDatedBranch, meaning if the branch is promoted every bean in the graph
     * will be promoted, and if the branch is not promoted no bean in the graph
     * can be promoted.
     * @return True if promoted.
     */
    public boolean isPromoted() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
    }
    
    public boolean isPurgeableEvenWithUnpurgeableSiblings() {
      return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).isPurgeableEvenWithUnpurgeableSiblings();
    }
    
    /**
     * Gets the value of the QuoteHidden field.
     * Whether the quote is hidden from users without permission to view quote
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isQuoteHidden() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(QUOTEHIDDEN_PROP.get());
    }
    
    /**
     * When a branch is promoted and there exists a future bound period (or
     * periods, but multiple would be rare) then this method returns true until it
     * is cleared.
     * <p/>
     * This value can then be checked later to see if you want to apply the
     * changes on this branch to that future period. Once it's cleared you will no
     * longer have that option.
     * @return True if when promoted there exited a future bound period.
     */
    public boolean isResolveWithFuturePeriods() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).isResolveWithFuturePeriods();
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    /**
     * Whether this bean is sliced. If a bean is sliced then you can navigate from
     * this bean to another bean or beans via a link or array, if it's unsliced
     * (in "window" mode) you cannot navigate from this bean.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return 
     */
    public boolean isSlice() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Gets the value of the TemporaryBranch field.
     * True if this row has committed (if false branch is temporary)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isTemporaryBranch() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(TEMPORARYBRANCH_PROP.get());
    }
    
    /**
     * Used to differentiate between policy periods seen by the system vs those that are not
     * @return True if this policy period is a clone
     */
    public boolean isTemporaryClone() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isTemporaryClone();
    }
    
    /**
     * Returns true if the other is the same reinsurable coverable.
     * @param other the object to compare
     * @return true if the same
     */
    public boolean isTheSame(gw.api.reinsurance.ReinsurableCoverable other) {
      return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).isTheSame(other);
    }
    
    /**
     * Indicates whether the given trigger is available on the active workflow.
     * Has the same results as calling isTriggerAvailable on the workflow, but
     * with built-in null safety in case there is no active workflow on this
     * branch.
     * @param trigger The trigger to check on the active workflow
     * @return True if the given WorkflowTriggerKey is available on the Active Workflow
     */
    public boolean isTriggerAvailable(typekey.WorkflowTriggerKey trigger) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isTriggerAvailable(trigger);
    }
    
    /**
     * Returns true if this policy has been successfully quoted by running all steps of the quoting process such as
     * validation, pricing, forms inference, underwriting issue check and reinsurance.
     * This should be set by the markValidQuote() and markInvalidQuote() domain methods.
     * @return True is this policy has been successfully quoted
     */
    public boolean isValidQuote() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isValidQuote();
    }
    
    /**
     * Returns true if this policy's pricing information is up to date and accurate.
     * This should be set by the markValidRate() and markInvalidRate() domain methods
     * @return True if this policy's pricing information is up to date and accurate
     */
    public boolean isValidRate() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).isValidRate();
    }
    
    /**
     * Gets the value of the ValidReinsurance field.
     * True if reinsurables were generated sucessfully.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isValidReinsurance() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(VALIDREINSURANCE_PROP.get());
    }
    
    /**
     * Gets the value of the WaiveDepositChange field.
     * Whether to waive the deposit amount change from current policy period and the based on
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isWaiveDepositChange() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(WAIVEDEPOSITCHANGE_PROP.get());
    }
    
    /**
     * Locks the branch so that it can no longer be edited.  Unlike edit locking
     * (defined in PolicyPerioBaseEnhancement#OpenForEdit), lockBranch
     * is permanent and cannot be undone once committed.  This method is called
     * when a PolicyPeriod has reached a terminal state - e.g. Promoted, Withdrawn,
     * Not Taken, Preempted, etc.
     */
    public void lockBranch() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).lockBranch();
    }
    
    public void markArchived() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).markArchived();
    }
    
    /**
     * Marks this period as an invalid quote, usually due to some exceptions occurring
     * during post-rating quote process.
     * <p>
     * This has the side-effect of removing any of this period's transaction
     * information and removing all newly added forms.
     */
    public void markInvalidPostRatingQuote() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markInvalidPostRatingQuote();
    }
    
    /**
     * Marks this period as having not completed all steps of the quote process necessary for a
     * valid quote. This includes validation, pricing, forms inference, underwriting issue
     * checks and reinsurance.
     * <p>
     * This has the side-effect of removing any of this period's transaction information.
     */
    public void markInvalidQuote() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markInvalidQuote();
    }
    
    /**
     * Marks this period as having out-of-date or inaccurate cost information.
     * This has the side-effect of removing any of this period's transaction
     * information.
     */
    public void markInvalidRate() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markInvalidRate();
    }
    
    public void markOrphaned() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).markOrphaned();
    }
    
    /**
     * Marks this period as having a completed all steps of the quote process necessary for a
     * valid quote. This includes validation, pricing, forms inference, underwriting issue
     * checks and reinsurance.
     */
    public void markValidQuote() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markValidQuote();
    }
    
    /**
     * Marks this period as having up-to-date and accurate cost information.
     */
    public void markValidRate() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).markValidRate();
    }
    
    public boolean maybeCreatePrimaryLocationFromPrimaryAccountLocation() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).maybeCreatePrimaryLocationFromPrimaryAccountLocation();
    }
    
    /**
     * {@link #changePrimaryNamedInsuredTo(entity.Contact) Sets the primary named insured} to
     * the Account Holder Contact if the primary named insured hasn't been already set.
     * @return True if the Primary Named Insured was created; false if the Primary Named Insured already existed
     */
    public boolean maybeCreatePrimaryNamedInsuredFromMainAccountContact() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).maybeCreatePrimaryNamedInsuredFromMainAccountContact();
    }
    
    /**
     * Looks in this PolicyPeriod for any added beans that are a duplicate of any
     * {@link gw.api.logicalmatch.EffDatedLogicalMatcher} beans in a future slice of the period (matches defined by
     * {@link gw.api.logicalmatch.EffDatedLogicalMatcher#isLogicalMatchUntyped(entity.KeyableBean)}).
     * When a match in a future slice is found, the matching bean is cloned into a slice for the current EditEffectiveDate,
     * the properties from the added bean are set on the clone (as defined by
     * {@link gw.api.copier.EffDatedCopyable#copyFromBeanUntyped(entity.EffDated)} if the bean
     * implements {@link gw.api.copier.EffDatedCopyable}, no copying otherwise), any references to the duplicate added
     * bean are rekeyed to the clone, and finally the duplicate add bean is discarded.  The end result is
     * that the added duplicate will be replaced by a clone where the clone has the same properties as the added bean and
     * the same FixedID as the future match.
     * @return true if at least one bean was merged, false otherwise.
     */
    public boolean mergeDuplicateAdds() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).mergeDuplicateAdds();
    }
    
    public void mergeOOSChanges(gw.api.diff.DiffItem[] resolvedConflicts) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).mergeOOSChanges(resolvedConflicts);
    }
    
    public entity.EffDated newBeanInstance(gw.entity.IEntityType type, java.util.List<? extends java.lang.Object> requiredValues) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).newBeanInstance(type, requiredValues);
    }
    
    /**
     * Create a new {@link entity.PolicyLocation} on this PolicyPeriod with an associated new {@link AccountLocation} on
     * the {@link entity.Account}
     */
    public entity.PolicyLocation newLocation() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).newLocation();
    }
    
    /**
     * Creates a new {@link entity.PolicyLocation} associated with the passed-in {@link AccountLocation}.  Throws a
     * {@link com.guidewire.pl.web.controller.UserDisplayableException} if the given AccountLocation is already
     * a PolicyLocation.  Throws a {@link RuntimeException} if the given AccountLocation is not on the same
     * Account as this {@link Policy}.
     * @param accLocation the AccountLocation to create a PolicyLocation for
     * @return the newly created PolicyLocation
     */
    public entity.PolicyLocation newLocation(entity.AccountLocation accLocation) {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).newLocation(accLocation);
    }
    
    /**
     * Creates a new {@link Note} on this PolicyPeriod.
     * @return the newly created Note.
     */
    public entity.Note newNote() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).newNote();
    }
    
    public entity.EffDated newUnslicedBeanInstance(gw.entity.IEntityType type, java.util.Date effDate, java.util.Date expDate, java.util.List<? extends java.lang.Object> requiredValues) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).newUnslicedBeanInstance(type, effDate, expDate, requiredValues);
    }
    
    public entity.EffDated newUnslicedBeanInstance(gw.entity.IEntityType type, long fixedId, java.util.List<? extends java.lang.Object> requiredValues) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).newUnslicedBeanInstance(type, fixedId, requiredValues);
    }
    
    public void onArchiveReferenceTracking(gw.pl.persistence.core.BundleProvider bundleProvider, gw.api.importing.graph.Graph archiveGraph) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).onArchiveReferenceTracking(bundleProvider, archiveGraph);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void promoteBranch() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).promoteBranch();
    }
    
    /**
     * Promotes this PolicyPeriod as the now official and contractually binding version for the
     * time period defined by PeriodStart to PeriodEnd.  Promotion of the PolicyPeriod follows
     * these general steps in order:
     * <p>
     * <ol>
     * <li>Calls {@link gw.plugin.policyperiod.IPolicyPeriodPlugin#prePromote(entity.PolicyPeriod)}</li>
     * <li>Calls the super method, {@link com.guidewire.pl.system.entity.proxy.EffDatedBranchProxy#promoteBranch()},
     * which runs some checks and then marks the branch as promoted and locked</li>
     * <li>Updates the NextRenewalCheckDate on the {@link entity.PolicyTerm} by calling
     * {@link gw.plugin.job.IPolicyRenewalPlugin#getRenewalStartDate(entity.PolicyPeriod)}</li>
     * <li>Clears the MostRecentBoundPeriod bit for the BasedOn PolicyPeriod if it is in the same PolicyTerm</li>
     * <li>Sets the MostRecentBoundPeriod bit for this PolicyPeriod</li>
     * <li>If Reinsurance is enabled, Enqueues this PolicyPeriod for Reinsurance Premium Ceding Calculation</li>
     * <li>Commits all these changes in this PolicyPeriod's {@link gw.pl.persistence.core.Bundle}</li>
     * </ol>
     * <p/> NOTE: there is the chance
     * that a ConcurrentDataChangeException will be thrown when this Policy is
     * committed, if another version of this Policy has already been bound with
     * the same BasedOnPeriod.
     * @param applyToFutureBoundPeriods If true and there are future bound periods
     *                                  then mark that this branch needs to be
     *                                  resolved with those future periods (either
     *                                  applied or skipped)
     */
    public void promoteBranch(boolean applyToFutureBoundPeriods) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).promoteBranch(applyToFutureBoundPeriods);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    public void recordAndDeleteOutgoingBasedOnLinks() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).recordAndDeleteOutgoingBasedOnLinks();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public void releaseQuotingToken() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).releaseQuotingToken();
    }
    
    public void relinkOutgoingBasedOnLinksIfPresent() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).relinkOutgoingBasedOnLinksIfPresent();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the answer, if any, to the specified question.
     * @param question the question to remove the answer for
     */
    public void removeAnswer(gw.api.productmodel.Question question) {
      ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).removeAnswer(question);
    }
    
    /**
     * Removes the given element from the APDTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromAPDTransactions(entity.APDTransaction element) {
      __getInternalInterface().removeArrayElement(APDTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the APDTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAPDTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(APDTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes given answer from answers stored on this AnswerContainer.
     * @param answer answer to remove
     */
    public void removeFromAnswers(entity.PCAnswerDelegate answer) {
      ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).removeFromAnswers(answer);
    }
    
    /**
     * Removes the given element from the AsyncQuoteIssues array. This is achieved by marking the element for removal.
     */
    public void removeFromAsyncQuoteIssues(entity.AsyncQuoteIssue element) {
      __getInternalInterface().removeArrayElement(ASYNCQUOTEISSUES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AsyncQuoteIssues array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAsyncQuoteIssues(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ASYNCQUOTEISSUES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BATransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromBATransactions(entity.BATransaction element) {
      __getInternalInterface().removeArrayElement(BATRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BATransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBATransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BATRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BOPTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromBOPTransactions(entity.BOPTransaction element) {
      __getInternalInterface().removeArrayElement(BOPTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BOPTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBOPTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BOPTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the CPTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromCPTransactions(entity.CPTransaction element) {
      __getInternalInterface().removeArrayElement(CPTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CPTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCPTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CPTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
     */
    public void removeFromContingencies(entity.Contingency element) {
      __getInternalInterface().removeArrayElement(CONTINGENCIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Contingencies array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromContingencies(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CONTINGENCIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the EffectiveDatedFieldsArray array. This is achieved by marking the element for removal.
     */
    public void removeFromEffectiveDatedFieldsArray(entity.EffectiveDatedFields element) {
      __getInternalInterface().removeArrayElement(EFFECTIVEDATEDFIELDSARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the EffectiveDatedFieldsArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromEffectiveDatedFieldsArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(EFFECTIVEDATEDFIELDSARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Forms array. This is achieved by marking the element for removal.
     */
    public void removeFromForms(entity.Form element) {
      __getInternalInterface().removeArrayElement(FORMS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Forms array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromForms(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the GLTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromGLTransactions(entity.GLTransaction element) {
      __getInternalInterface().removeArrayElement(GLTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the GLTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromGLTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(GLTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the HOPTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromHOPTransactions(entity.HOPTransaction element) {
      __getInternalInterface().removeArrayElement(HOPTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the HOPTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromHOPTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(HOPTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the IMTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromIMTransactions(entity.IMTransaction element) {
      __getInternalInterface().removeArrayElement(IMTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the IMTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromIMTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(IMTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the InvoiceStreamOverridesArray array. This is achieved by marking the element for removal.
     */
    public void removeFromInvoiceStreamOverridesArray(entity.InvoiceStreamOverrides element) {
      __getInternalInterface().removeArrayElement(INVOICESTREAMOVERRIDESARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the InvoiceStreamOverridesArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromInvoiceStreamOverridesArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(INVOICESTREAMOVERRIDESARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Lines array. This is achieved by marking the element for removal.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void removeFromLines(entity.PolicyLine value) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeFromLines(value);
    }
    
    /**
     * Removes the given element from the Lines array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLines(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LINES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
     */
    public void removeFromLocationRisks(entity.LocationRisk element) {
      __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLocationRisks(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the NewInvoiceStreamArray array. This is achieved by marking the element for removal.
     */
    public void removeFromNewInvoiceStreamArray(entity.BillingInvoiceStream element) {
      __getInternalInterface().removeArrayElement(NEWINVOICESTREAMARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the NewInvoiceStreamArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromNewInvoiceStreamArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(NEWINVOICESTREAMARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Notes array. This is achieved by marking the element for removal.
     */
    public void removeFromNotes(entity.Note element) {
      __getInternalInterface().removeArrayElement(NOTES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Notes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromNotes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(NOTES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PATransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromPATransactions(entity.PATransaction element) {
      __getInternalInterface().removeArrayElement(PATRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PATransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPATransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PATRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PRActiveWorkflowArray array. This is achieved by marking the element for removal.
     */
    public void removeFromPRActiveWorkflowArray(entity.PRActiveWorkflow element) {
      __getInternalInterface().removeArrayElement(PRACTIVEWORKFLOWARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PRActiveWorkflowArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPRActiveWorkflowArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRACTIVEWORKFLOWARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PeriodAnswers array. This is achieved by marking the element for removal.
     */
    public void removeFromPeriodAnswers(entity.PeriodAnswer element) {
      __getInternalInterface().removeArrayElement(PERIODANSWERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PeriodAnswers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPeriodAnswers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PERIODANSWERS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PolicyContactRoles array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyContactRoles(entity.PolicyContactRole element) {
      __getInternalInterface().removeArrayElement(POLICYCONTACTROLES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyContactRoles array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyContactRoles(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYCONTACTROLES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PolicyFXRates array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyFXRates(entity.PolicyFXRate element) {
      __getInternalInterface().removeArrayElement(POLICYFXRATES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyFXRates array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyFXRates(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYFXRATES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PolicyLocations array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyLocations(entity.PolicyLocation element) {
      __getInternalInterface().removeArrayElement(POLICYLOCATIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyLocations array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyLocations(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYLOCATIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PolicyRisks array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyRisks(entity.PolicyRisk element) {
      __getInternalInterface().removeArrayElement(POLICYRISKS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyRisks array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyRisks(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYRISKS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RIRiskVersionLists array. This is achieved by marking the element for removal.
     */
    public void removeFromRIRiskVersionLists(entity.RIRiskVersionList element) {
      __getInternalInterface().removeArrayElement(RIRISKVERSIONLISTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RIRiskVersionLists array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRIRiskVersionLists(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RIRISKVERSIONLISTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the SelectedPaymentPlanArray array. This is achieved by marking the element for removal.
     */
    public void removeFromSelectedPaymentPlanArray(entity.PaymentPlanSummary element) {
      __getInternalInterface().removeArrayElement(SELECTEDPAYMENTPLANARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the SelectedPaymentPlanArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromSelectedPaymentPlanArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SELECTEDPAYMENTPLANARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the UWIssuesIncludingSoftDeleted array. This is achieved by marking the element for removal.
     */
    public void removeFromUWIssuesIncludingSoftDeleted(entity.UWIssue element) {
      __getInternalInterface().removeArrayElement(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the UWIssuesIncludingSoftDeleted array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromUWIssuesIncludingSoftDeleted(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the WCTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromWCTransactions(entity.WCTransaction element) {
      __getInternalInterface().removeArrayElement(WCTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the WCTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromWCTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(WCTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Workflows array. This is achieved by marking the element for removal.
     */
    public void removeFromWorkflows(entity.PolicyPeriodWorkflow element) {
      __getInternalInterface().removeArrayElement(WORKFLOWS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Workflows array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromWorkflows(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(WORKFLOWS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the WorksheetContainerArray array. This is achieved by marking the element for removal.
     */
    public void removeFromWorksheetContainerArray(entity.WorksheetContainer element) {
      __getInternalInterface().removeArrayElement(WORKSHEETCONTAINERARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the WorksheetContainerArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromWorksheetContainerArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(WORKSHEETCONTAINERARRAY_PROP.get(), elementID);
    }
    
    /**
     * Remove a {@link entity.PolicyLocation} from this period or throw an UserDisplayableException (typically because the
     * location is in use somewhere in the policy).  If a remove is allowed, then it calls the
     * {@link gw.api.policy.PolicyLineJavaMethods#preLocationDelete(entity.PolicyLocation) pre location delete callback}
     * in each line on the policy prior to removal, and then renumbers the locations after the removal.
     * @param location the PolicyLocation to remove
     */
    public void removeLocation(entity.PolicyLocation location) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeLocation(location);
    }
    
    /**
     * Removes all merge bases attached to this branch.
     */
    public void removeMergeBases() {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).removeMergeBases();
    }
    
    /**
     * Inspects a PolicyPeriod looking for EffDateds in its graph that are orphaned on any date ranges, removing those
     * orphaned date ranges.  An EffDated is orphaned for a date range if and only if it has a non-nullable foreign key
     * reference to another FixedId that is not effective during that date range.
     * <p>
     * <em>Note:<em/> Since {@link #getDiffItems(DiffReason) getDiffItems("ExpirationDateCheck")} will be called to get a
     * set of EffDateds to use as starting points for the PolicyPeriod graph traversal, any DiffItems filtered for the
     * "ExpirationDateCheck" DiffReason may cause their associated EffDateds and any reachable EffDateds to not be checked
     * for orphaned date range removal.  Additionally, the PolicyPeriod's EffectiveDatedFields will be explicitly omitted
     * from orphaned date range removal as it must be present for the duration of the PolicyPeriod.
     * @return A set of version lists that had date ranges removed.
     */
    public java.util.Set<gw.pl.persistence.core.effdate.EffDatedVersionList> removeOrphanedEffDatedDateRanges() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeOrphanedEffDatedDateRanges();
    }
    
    /**
     * Removes the line specified by line pattern
     * @param linePattern 
     */
    public void removePolicyLine(gw.api.productmodel.PolicyLinePattern linePattern) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removePolicyLine(linePattern);
    }
    
    /**
     * Removes all {@link entity.PolicyLocation PolicyLocations} that
     * {@link entity.PolicyLocation#isInUse()}  are not in use}.
     */
    public void removeUnusedLocations() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).removeUnusedLocations();
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Report an issue that prevents this item from being archived. Usually called by a rule when it has determined that the item is not
     * ready to be archived yet. Unlike skipFromArchiving(), this method does not return immediately and subsequent rules are processed.
     * @param message The reason for skipping.
     */
    public void reportArchiveProblem(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).reportArchiveProblem(message);
    }
    
    /**
     * Reset flag that marks the graph as excluded for archiving
     */
    public void resetToPreArchivedState() {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).resetToPreArchivedState();
    }
    
    /**
     * Retrieve filtered PaymentPlanData instances from the billing system.
     * <p>
     * This method also calls {@link #updateBillingAmountsOnInstallmentsPlans(gw.plugin.billing.PaymentPlanData[])} to set
     * billing preview fields on retrieved installments plans. This can be a very expensive method
     * as it calls the Billing system at least once for each retrieved payment plan.
     * <p>
     * If possible, please use {@link #retrievePaymentPlansWithoutSettingBillingAmounts()} and then selectively
     * call {@link #updateBillingAmountsOnInstallmentsPlans(gw.plugin.billing.PaymentPlanData[])} on only the plan(s) of interest.
     * @return Available filtered PaymentPlanData instances retrieved from the billing system.
     */
    public gw.plugin.billing.PaymentPlanData[] retrievePaymentPlans() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).retrievePaymentPlans();
    }
    
    /**
     * Retrieve filtered PaymentPlanData instances from the billing system.
     * <p>
     * NOTE: This method will not set the Downpayment, Installment and Total fields on the retrieved
     * InstallmentsPlanDatas. If you need these all to be set, use the #retrievePaymentPlansAndSetBillingPreviewFields method.
     * @return Available filtered PaymentPlanData instances retrieved from the billing system.
     */
    public gw.plugin.billing.PaymentPlanData[] retrievePaymentPlansWithoutSettingBillingAmounts() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).retrievePaymentPlansWithoutSettingBillingAmounts();
    }
    
    public void runArchiveWithTrace() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).runArchiveWithTrace();
    }
    
    public void runCommonArchiveEligibilityRules() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).runCommonArchiveEligibilityRules();
    }
    
    public void runCommonRequiredArchiveEligibilityChecks() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).runCommonRequiredArchiveEligibilityChecks();
    }
    
    /**
     * Schedule this item for archival
     */
    public void scheduleForArchive() {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).scheduleForArchive();
    }
    
    /**
     * Sets the value of the APDTransactions field.
     */
    public void setAPDTransactions(entity.APDTransaction[] value) {
      __getInternalInterface().setFieldValue(APDTRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ActiveWorkflow field.
     */
    public void setActiveWorkflow(entity.PolicyPeriodWorkflow value) {
      __getInternalInterface().setFieldValue(ACTIVEWORKFLOW_PROP.get(), value);
    }
    
    public void setActiveWorkflowID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACTIVEWORKFLOW_PROP.get(), value);
    }
    
    public void setAllOOSDates(java.util.Date[] dates) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods")).setAllOOSDates(dates);
    }
    
    /**
     * Sets the value of the AllocationOfRemainder field.
     * @deprecated The method to allocate the remainder of cost if overriding billing allocation for installments plan
     */
    @java.lang.Deprecated
    public void setAllocationOfRemainder(typekey.BillingRemainderAllocate value) {
      __getInternalInterface().setFieldValue(ALLOCATIONOFREMAINDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AllowGapsBefore field.
     */
    public void setAllowGapsBefore(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ALLOWGAPSBEFORE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AltBillingAccountNumber field.
     */
    public void setAltBillingAccountNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ALTBILLINGACCOUNTNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveDate field.
     */
    public void setArchiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ARCHIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveFailure field.
     */
    public void setArchiveFailure(entity.ArchiveFailure value) {
      __getInternalInterface().setFieldValue(ARCHIVEFAILURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveFailureDetails field.
     */
    public void setArchiveFailureDetails(entity.ArchiveFailureDetails value) {
      __getInternalInterface().setFieldValue(ARCHIVEFAILUREDETAILS_PROP.get(), value);
    }
    
    public void setArchiveFailureDetailsID(gw.pl.persistence.core.Key value) {
      setFieldValue(ARCHIVEFAILUREDETAILS_PROP.get(), value);
    }
    
    public void setArchiveFailureID(gw.pl.persistence.core.Key value) {
      setFieldValue(ARCHIVEFAILURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveSchemaInfo field.
     */
    public void setArchiveSchemaInfo(entity.UpgradeDatamodelInfo value) {
      __getInternalInterface().setFieldValue(ARCHIVESCHEMAINFO_PROP.get(), value);
    }
    
    public void setArchiveSchemaInfoID(gw.pl.persistence.core.Key value) {
      setFieldValue(ARCHIVESCHEMAINFO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchiveState field.
     */
    public void setArchiveState(typekey.ArchiveState value) {
      __getInternalInterface().setFieldValue(ARCHIVESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignedRisk field.
     */
    public void setAssignedRisk(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ASSIGNEDRISK_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AsyncQuoteIssues field.
     */
    public void setAsyncQuoteIssues(entity.AsyncQuoteIssue[] value) {
      __getInternalInterface().setFieldValue(ASYNCQUOTEISSUES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BATransactions field.
     */
    public void setBATransactions(entity.BATransaction[] value) {
      __getInternalInterface().setFieldValue(BATRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BOPTransactions field.
     */
    public void setBOPTransactions(entity.BOPTransaction[] value) {
      __getInternalInterface().setFieldValue(BOPTRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BaseState field.
     */
    public void setBaseState(typekey.Jurisdiction value) {
      __getInternalInterface().setFieldValue(BASESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BasedOnDate field.
     */
    public void setBasedOnDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(BASEDONDATE_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    public void setBasedOnValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BillImmediatelyPercentage field.
     * @deprecated The percentage to bill immediately if overriding billing allocation for installments plan
     */
    @java.lang.Deprecated
    public void setBillImmediatelyPercentage(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(BILLIMMEDIATELYPERCENTAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BillingMethod field.
     */
    public void setBillingMethod(typekey.BillingMethod value) {
      __getInternalInterface().setFieldValue(BILLINGMETHOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchName field.
     */
    public void setBranchName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BRANCHNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchNumber field.
     */
    public void setBranchNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BRANCHNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CPTransactions field.
     */
    public void setCPTransactions(entity.CPTransaction[] value) {
      __getInternalInterface().setFieldValue(CPTRANSACTIONS_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setCancellationDate(java.util.Date value) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).setCancellationDate(value);
    }
    
    public void setCommitContext(com.guidewire.pl.system.entity.proxy.EffDatedCommitContext context) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).setCommitContext(context);
    }
    
    public void setContainerId(gw.pl.persistence.core.Key containerId) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).setContainerId(containerId);
    }
    
    /**
     * Sets the value of the Contingencies field.
     */
    public void setContingencies(entity.Contingency[] value) {
      __getInternalInterface().setFieldValue(CONTINGENCIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setDenormalizedFK() {
      ((gw.api.domain.DenormalizedFKOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.DenormalizedFKOutOfDomainGraph")).setDenormalizedFK();
    }
    
    /**
     * Sets the value of the DepositAmount field.
     */
    public void setDepositAmount(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(DEPOSITAMOUNT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DepositAmount_amt field.
     */
    public void setDepositAmount_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEPOSITAMOUNT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DepositAmount_cur field.
     */
    public void setDepositAmount_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(DEPOSITAMOUNT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DepositCollected field.
     * @deprecated The deposit amount collected
     */
    @java.lang.Deprecated
    public void setDepositCollected(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(DEPOSITCOLLECTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DepositCollected_amt field.
     * @deprecated 
     */
    @java.lang.Deprecated
    public void setDepositCollected_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEPOSITCOLLECTED_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DepositCollected_cur field.
     * @deprecated 
     */
    @java.lang.Deprecated
    public void setDepositCollected_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(DEPOSITCOLLECTED_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DepositOverridePct field.
     */
    public void setDepositOverridePct(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEPOSITOVERRIDEPCT_PROP.get(), value);
    }
    
    public void setDiffItemCache(java.util.List<com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedDiffItem> changes) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).setDiffItemCache(changes);
    }
    
    /**
     * Sets the value of the DoNotDestroy field.
     */
    public void setDoNotDestroy(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DONOTDESTROY_PROP.get(), value);
    }
    
    public void setDoNotDestroy(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setDoNotDestroy(value, getDescription);
    }
    
    @java.lang.Deprecated
    public void setDoNotPurge(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setDoNotPurge(value, getDescription);
    }
    
    /**
     * Sets the value of the EditEffectiveDate field.
     */
    public void setEditEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EDITEFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EditLocked field.
     */
    public void setEditLocked(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(EDITLOCKED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EffectiveDatedFields field.
     */
    public void setEffectiveDatedFields(entity.EffectiveDatedFields value) {
      __getInternalInterface().setFieldValue(EFFECTIVEDATEDFIELDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EffectiveDatedFieldsArray field.
     */
    public void setEffectiveDatedFieldsArray(entity.EffectiveDatedFields[] value) {
      __getInternalInterface().setFieldValue(EFFECTIVEDATEDFIELDSARRAY_PROP.get(), value);
    }
    
    public void setEffectiveDatedFieldsID(gw.pl.persistence.core.Key value) {
      setFieldValue(EFFECTIVEDATEDFIELDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EstimatedPremium field.
     */
    public void setEstimatedPremium(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(ESTIMATEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EstimatedPremium_amt field.
     */
    public void setEstimatedPremium_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(ESTIMATEDPREMIUM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EstimatedPremium_cur field.
     */
    public void setEstimatedPremium_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(ESTIMATEDPREMIUM_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExcludeReason field.
     */
    public void setExcludeReason(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXCLUDEREASON_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExcludedFromArchive field.
     */
    public void setExcludedFromArchive(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(EXCLUDEDFROMARCHIVE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FailedOOSEEvaluation field.
     */
    public void setFailedOOSEEvaluation(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(FAILEDOOSEEVALUATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FailedOOSEValidation field.
     */
    public void setFailedOOSEValidation(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(FAILEDOOSEVALIDATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Forms field.
     */
    public void setForms(entity.Form[] value) {
      __getInternalInterface().setFieldValue(FORMS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FuturePeriods field.
     */
    public void setFuturePeriods(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(FUTUREPERIODS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GLTransactions field.
     */
    public void setGLTransactions(entity.GLTransaction[] value) {
      __getInternalInterface().setFieldValue(GLTRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HOPTransactions field.
     */
    public void setHOPTransactions(entity.HOPTransaction[] value) {
      __getInternalInterface().setFieldValue(HOPTRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IMTransactions field.
     */
    public void setIMTransactions(entity.IMTransaction[] value) {
      __getInternalInterface().setFieldValue(IMTRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InvoiceStreamCode field.
     */
    public void setInvoiceStreamCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INVOICESTREAMCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InvoiceStreamOverrides field.
     */
    public void setInvoiceStreamOverrides(entity.InvoiceStreamOverrides value) {
      __getInternalInterface().setFieldValue(INVOICESTREAMOVERRIDES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InvoiceStreamOverridesArray field.
     */
    public void setInvoiceStreamOverridesArray(entity.InvoiceStreamOverrides[] value) {
      __getInternalInterface().setFieldValue(INVOICESTREAMOVERRIDESARRAY_PROP.get(), value);
    }
    
    public void setInvoiceStreamOverridesID(gw.pl.persistence.core.Key value) {
      setFieldValue(INVOICESTREAMOVERRIDES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InvoicingMethod field.
     */
    public void setInvoicingMethod(typekey.InvoicingMethod value) {
      __getInternalInterface().setFieldValue(INVOICINGMETHOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Job field.
     */
    public void setJob(entity.Job value) {
      __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setJobID(gw.pl.persistence.core.Key value) {
      setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Lines field.
     */
    public void setLines(entity.PolicyLine[] value) {
      __getInternalInterface().setFieldValue(LINES_PROP.get(), value);
    }
    
    /**
     * Set a foreign key by passing in an EFfDatedKey (effectively the
     * EffDatedVersionList or FixedId of the bean). You need this method because
     * it's the only way to set a foreign key given a FixedId (and no context for
     * when that FixeId might be effective).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key to set
     * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
     *             FixedId of the bean)
     */
    public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
    }
    
    /**
     * Sets the value of the LocationAutoNumberSeq field.
     */
    public void setLocationAutoNumberSeq(entity.AutoNumberSequence value) {
      __getInternalInterface().setFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get(), value);
    }
    
    public void setLocationAutoNumberSeqID(gw.pl.persistence.core.Key value) {
      setFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LocationRisks field.
     */
    public void setLocationRisks(entity.LocationRisk[] value) {
      __getInternalInterface().setFieldValue(LOCATIONRISKS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Locked field.
     */
    public void setLocked(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LOCKED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LockingColumn field.
     */
    public void setLockingColumn(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
    }
    
    public void setMaster(entity.EffDatedBase master) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setMaster(master);
    }
    
    /**
     * Sets the value of the ModelDate field.
     */
    public void setModelDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(MODELDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ModelNumber field.
     */
    public void setModelNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(MODELNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ModelNumberIndex field.
     */
    public void setModelNumberIndex(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MODELNUMBERINDEX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MostRecentModel field.
     */
    public void setMostRecentModel(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(MOSTRECENTMODEL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MostRecentModelIndex field.
     */
    public void setMostRecentModelIndex(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MOSTRECENTMODELINDEX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewInvoiceStream field.
     */
    public void setNewInvoiceStream(entity.BillingInvoiceStream value) {
      __getInternalInterface().setFieldValue(NEWINVOICESTREAM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewInvoiceStreamArray field.
     */
    public void setNewInvoiceStreamArray(entity.BillingInvoiceStream[] value) {
      __getInternalInterface().setFieldValue(NEWINVOICESTREAMARRAY_PROP.get(), value);
    }
    
    public void setNewInvoiceStreamID(gw.pl.persistence.core.Key value) {
      setFieldValue(NEWINVOICESTREAM_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the Notes field.
     */
    public void setNotes(entity.Note[] value) {
      __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
    }
    
    /**
     * Sets the {@link Offering} for this PolicyPeriod
     * @param offering the Offering to set as the Offering for this PolicyPeriod
     */
    public void setOffering(gw.api.productmodel.Offering offering) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setOffering(offering);
    }
    
    /**
     * Sets the value of the Orphaned field.
     */
    public void setOrphaned(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ORPHANED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OverrideBillingAllocation field.
     * @deprecated Whether to override the billing allocation for installments plan
     */
    @java.lang.Deprecated
    public void setOverrideBillingAllocation(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(OVERRIDEBILLINGALLOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PATransactions field.
     */
    public void setPATransactions(entity.PATransaction[] value) {
      __getInternalInterface().setFieldValue(PATRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PNIContactDenorm field.
     */
    public void setPNIContactDenorm(entity.Contact value) {
      __getInternalInterface().setFieldValue(PNICONTACTDENORM_PROP.get(), value);
    }
    
    public void setPNIContactDenormID(gw.pl.persistence.core.Key value) {
      setFieldValue(PNICONTACTDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PRActiveWorkflowArray field.
     */
    public void setPRActiveWorkflowArray(entity.PRActiveWorkflow[] value) {
      __getInternalInterface().setFieldValue(PRACTIVEWORKFLOWARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Period field.
     */
    public void setPeriod(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(PERIOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PeriodAnswers field.
     */
    public void setPeriodAnswers(entity.PeriodAnswer[] value) {
      __getInternalInterface().setFieldValue(PERIODANSWERS_PROP.get(), value);
    }
    
    /**
     * Set the end date of this branch's period. Equivalent to calling
     * setPeriodWindow(getPeriodStart(), endDate).
     * @param endDate New end date of this branch's period.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPeriodEnd(java.util.Date endDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).setPeriodEnd(endDate);
    }
    
    public void setPeriodID(gw.pl.persistence.core.Key value) {
      setFieldValue(PERIOD_PROP.get(), value);
    }
    
    /**
     * Set the start date of this branch's period. Equivalent to calling
     * setPeriodWindow(startDate, getPeriodEnd()).
     * @param startDate New start date of this branch's period.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPeriodStart(java.util.Date startDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).setPeriodStart(startDate);
    }
    
    /**
     * Set this branch's period dates. There are several restrictions to setting
     * the period dates:
     * @param newStart New start date of this branch's period.
     * @param newEnd New end date of this branch's period.
     */
    public void setPeriodWindow(java.util.Date newStart, java.util.Date newEnd) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch")).setPeriodWindow(newStart, newEnd);
    }
    
    /**
     * Sets the value of the Policy field.
     */
    public void setPolicy(entity.Policy value) {
      __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
    }
    
    /**
     * Sets the {@link entity.PolicyAddress} for this PolicyPeriod.  This is a convenience method and is equivalent to
     * PolicyPeriod.{@link entity.EffectiveDatedFields#setPolicyAddress(entity.PolicyAddress)}
     * @param address the policy address
     */
    public void setPolicyAddress(entity.PolicyAddress address) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setPolicyAddress(address);
    }
    
    /**
     * Sets the value of the PolicyContactRoles field.
     */
    public void setPolicyContactRoles(entity.PolicyContactRole[] value) {
      __getInternalInterface().setFieldValue(POLICYCONTACTROLES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyFXRates field.
     */
    public void setPolicyFXRates(entity.PolicyFXRate[] value) {
      __getInternalInterface().setFieldValue(POLICYFXRATES_PROP.get(), value);
    }
    
    public void setPolicyID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyLocations field.
     */
    public void setPolicyLocations(entity.PolicyLocation[] value) {
      __getInternalInterface().setFieldValue(POLICYLOCATIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyNumber field.
     */
    public void setPolicyNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyRisks field.
     */
    public void setPolicyRisks(entity.PolicyRisk[] value) {
      __getInternalInterface().setFieldValue(POLICYRISKS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyTerm field.
     */
    public void setPolicyTerm(entity.PolicyTerm value) {
      __getInternalInterface().setFieldValue(POLICYTERM_PROP.get(), value);
    }
    
    public void setPolicyTermID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYTERM_PROP.get(), value);
    }
    
    public void setPreempted() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).setPreempted();
    }
    
    /**
     * Sets the value of the Preempted field.
     */
    public void setPreempted(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PREEMPTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredCoverageCurrency field.
     */
    public void setPreferredCoverageCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredSettlementCurrency field.
     */
    public void setPreferredSettlementCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PREFERREDSETTLEMENTCURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryInsuredName field.
     */
    public void setPrimaryInsuredName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYINSUREDNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryInsuredNameDenorm field.
     */
    public void setPrimaryInsuredNameDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYINSUREDNAMEDENORM_PROP.get(), value);
    }
    
    /**
     * Set the given {@link entity.PolicyLocation} as primary for this PolicyPeriod. The location must already be on
     * the policy period.
     * @param location to be set as the primary location of the policy period
     */
    public void setPrimaryLocation(entity.PolicyLocation location) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setPrimaryLocation(location);
    }
    
    /**
     * Sets the value of the ProducerCodeOfRecord field.
     */
    public void setProducerCodeOfRecord(entity.ProducerCode value) {
      __getInternalInterface().setFieldValue(PRODUCERCODEOFRECORD_PROP.get(), value);
    }
    
    public void setProducerCodeOfRecordID(gw.pl.persistence.core.Key value) {
      setFieldValue(PRODUCERCODEOFRECORD_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the root public ID to the passed value.
     * @param value value for the root public ID.
     */
    public void setPublicIDOfRoot(java.lang.String value) {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).setPublicIDOfRoot(value);
    }
    
    /**
     * Sets the value of the QuoteCloneOriginalPeriod field.
     */
    public void setQuoteCloneOriginalPeriod(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(QUOTECLONEORIGINALPERIOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the QuoteCloneSequenceNumber field.
     */
    public void setQuoteCloneSequenceNumber(java.lang.Long value) {
      __getInternalInterface().setFieldValue(QUOTECLONESEQUENCENUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the QuoteHidden field.
     */
    public void setQuoteHidden(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(QUOTEHIDDEN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the QuoteIdentifier field.
     */
    public void setQuoteIdentifier(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(QUOTEIDENTIFIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the QuoteMaturityLevel field.
     */
    public void setQuoteMaturityLevel(typekey.QuoteMaturityLevel value) {
      __getInternalInterface().setFieldValue(QUOTEMATURITYLEVEL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RIRiskVersionLists field.
     */
    public void setRIRiskVersionLists(entity.RIRiskVersionList[] value) {
      __getInternalInterface().setFieldValue(RIRISKVERSIONLISTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RateAsOfDate field.
     */
    public void setRateAsOfDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(RATEASOFDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RefundCalcMethod field.
     */
    public void setRefundCalcMethod(typekey.CalculationMethod value) {
      __getInternalInterface().setFieldValue(REFUNDCALCMETHOD_PROP.get(), value);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    public void setRoot(entity.KeyableBean root) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).setRoot(root);
    }
    
    /**
     * Sets the value of the Segment field.
     */
    public void setSegment(typekey.Segment value) {
      __getInternalInterface().setFieldValue(SEGMENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SelectedPaymentPlan field.
     */
    public void setSelectedPaymentPlan(entity.PaymentPlanSummary value) {
      __getInternalInterface().setFieldValue(SELECTEDPAYMENTPLAN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SelectedPaymentPlanArray field.
     */
    public void setSelectedPaymentPlanArray(entity.PaymentPlanSummary[] value) {
      __getInternalInterface().setFieldValue(SELECTEDPAYMENTPLANARRAY_PROP.get(), value);
    }
    
    public void setSelectedPaymentPlanID(gw.pl.persistence.core.Key value) {
      setFieldValue(SELECTEDPAYMENTPLAN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SelectedTermType field.
     */
    public void setSelectedTermType(typekey.TermType value) {
      __getInternalInterface().setFieldValue(SELECTEDTERMTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SeriesCheckingPatternCode field.
     */
    public void setSeriesCheckingPatternCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SERIESCHECKINGPATTERNCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SingleCheckingPatternCode field.
     */
    public void setSingleCheckingPatternCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SINGLECHECKINGPATTERNCODE_PROP.get(), value);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the SpecialHandling field.
     */
    public void setSpecialHandling(typekey.SpecialHandling value) {
      __getInternalInterface().setFieldValue(SPECIALHANDLING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.PolicyPeriodStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TaxSurchargesRPT field.
     */
    public void setTaxSurchargesRPT(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TAXSURCHARGESRPT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TaxSurchargesRPT_amt field.
     */
    public void setTaxSurchargesRPT_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TAXSURCHARGESRPT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TaxSurchargesRPT_cur field.
     */
    public void setTaxSurchargesRPT_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TAXSURCHARGESRPT_CUR_PROP.get(), value);
    }
    
    public void setTemporaryBranch() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).setTemporaryBranch();
    }
    
    /**
     * Sets the value of the TemporaryBranch field.
     */
    public void setTemporaryBranch(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(TEMPORARYBRANCH_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TemporaryCloneStatus field.
     */
    public void setTemporaryCloneStatus(typekey.PolicyPeriodCloneStatus value) {
      __getInternalInterface().setFieldValue(TEMPORARYCLONESTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TermNumber field.
     */
    public void setTermNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(TERMNUMBER_PROP.get(), value);
    }
    
    /**
     * Changes the {@link TermType} of this PolicyPeriod, then recalculates and changes the
     * PeriodEnd date. The logic for calculating PeriodEnd is in
     * {@link PolicyPeriodInternalMethods#calculatePeriodEnd(java.util.Date, typekey.TermType)}
     * @param termType 
     */
    public void setTermType(typekey.TermType termType) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).setTermType(termType);
    }
    
    /**
     * Sets the value of the TotalCostRPT field.
     */
    public void setTotalCostRPT(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALCOSTRPT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalCostRPT_amt field.
     */
    public void setTotalCostRPT_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALCOSTRPT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalCostRPT_cur field.
     */
    public void setTotalCostRPT_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALCOSTRPT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPremiumRPT field.
     */
    public void setTotalPremiumRPT(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALPREMIUMRPT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPremiumRPT_amt field.
     */
    public void setTotalPremiumRPT_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALPREMIUMRPT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPremiumRPT_cur field.
     */
    public void setTotalPremiumRPT_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALPREMIUMRPT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TransactionCostRPT field.
     */
    public void setTransactionCostRPT(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TRANSACTIONCOSTRPT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TransactionCostRPT_amt field.
     */
    public void setTransactionCostRPT_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TRANSACTIONCOSTRPT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TransactionCostRPT_cur field.
     */
    public void setTransactionCostRPT_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TRANSACTIONCOSTRPT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TransactionPremiumRPT field.
     */
    public void setTransactionPremiumRPT(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TRANSACTIONPREMIUMRPT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TransactionPremiumRPT_amt field.
     */
    public void setTransactionPremiumRPT_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TRANSACTIONPREMIUMRPT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TransactionPremiumRPT_cur field.
     */
    public void setTransactionPremiumRPT_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TRANSACTIONPREMIUMRPT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UWCompany field.
     */
    public void setUWCompany(entity.UWCompany value) {
      __getInternalInterface().setFieldValue(UWCOMPANY_PROP.get(), value);
    }
    
    public void setUWCompanyID(gw.pl.persistence.core.Key value) {
      setFieldValue(UWCOMPANY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UWIssuesIncludingSoftDeleted field.
     */
    public void setUWIssuesIncludingSoftDeleted(entity.UWIssue[] value) {
      __getInternalInterface().setFieldValue(UWISSUESINCLUDINGSOFTDELETED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ValidReinsurance field.
     */
    public void setValidReinsurance(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(VALIDREINSURANCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WCTransactions field.
     */
    public void setWCTransactions(entity.WCTransaction[] value) {
      __getInternalInterface().setFieldValue(WCTRANSACTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WaiveDepositChange field.
     */
    public void setWaiveDepositChange(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(WAIVEDEPOSITCHANGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Workflows field.
     */
    public void setWorkflows(entity.PolicyPeriodWorkflow[] value) {
      __getInternalInterface().setFieldValue(WORKFLOWS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WorksheetContainer field.
     */
    public void setWorksheetContainer(entity.WorksheetContainer value) {
      __getInternalInterface().setFieldValue(WORKSHEETCONTAINER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WorksheetContainerArray field.
     */
    public void setWorksheetContainerArray(entity.WorksheetContainer[] value) {
      __getInternalInterface().setFieldValue(WORKSHEETCONTAINERARRAY_PROP.get(), value);
    }
    
    public void setWorksheetContainerID(gw.pl.persistence.core.Key value) {
      setFieldValue(WORKSHEETCONTAINER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WrittenDate field.
     */
    public void setWrittenDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(WRITTENDATE_PROP.get(), value);
    }
    
    public boolean shouldExcludeFromAllEffectiveDates(gw.entity.IEntityType entityType) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).shouldExcludeFromAllEffectiveDates(entityType);
    }
    
    public void skipArchivingThisTime(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).skipArchivingThisTime(message);
    }
    
    /**
     * Skip archival of this item. Usually called by a rule when it has determined that the item is not ready to be archived yet.
     * Unlike reportArchiveProblem(), this method returns immediately and no more rules are processed.
     * @param message The reason for skipping.
     */
    public void skipFromArchiving(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).skipFromArchiving(message);
    }
    
    /**
     * Enters this PolicyPeriod in the QUOTING status and enables the Quoting Commit token,
     * blocking other instances of this period from committing changes until the Quoting Commit
     * token is released by {@link entity.PolicyPeriod#finishQuoting()}
     * or {@link entity.PolicyPeriod#unlockFromQuoting()}}.
     */
    public void startQuoting() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).startQuoting();
    }
    
    /**
     * Calls the syncComputedValues method on each line, used to allow the line to update
     * computed things like the set of covered jurisdictions or to re-split exposure bases.
     * This method will also update official IDs on all named insureds.  This method is intended
     * to be called generally as part of the quote process or when starting a job in a new
     * term; from other places (like the UI) it's generally more prudent to call the appropriate
     * methods to update more specific values, rather than calling this generic method.
     */
    public void syncComputedValues() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).syncComputedValues();
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    /**
     * Marks this PolicyPeriod as uncanceled.
     */
    public void uncancel() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).uncancel();
    }
    
    /**
     * Unlocks a Period in the QUOTING status by resetting the status to DRAFT - this will allow other instances
     * of the PolicyPeriod to commit to the database again.  Requires the "resetquotinglock"
     * permission to execute. This method is intended to be used as an emergency reset when a PolicyPeriod
     * has become stuck in a QUOTING state and cannot be unlocked on by other means.
     */
    public void unlockFromQuoting() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).unlockFromQuoting();
    }
    
    public void updateBillingAmountsOnInstallmentsPlans(gw.plugin.billing.PaymentPlanData[] paymentPlans) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateBillingAmountsOnInstallmentsPlans(paymentPlans);
    }
    
    /**
     * Updates denormalized fields related to Contacts.  This includes the
     * {@link entity.PolicyPeriod#getPrimaryInsuredName() denormalized name} of the {@link #getPrimaryNamedInsured() PrimaryNamedInsured}
     * stored on the PolicyPeriod as well as same
     * {@link entity.Job#getPrimaryInsuredName() Primary Named Insured Name} denormalized on the Job.
     */
    public void updateContactDenorms() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateContactDenorms();
    }
    
    /**
     * Updates denormalized fields related to Contacts when the PolicyPeriod is archived.  This includes the
     * {@link entity.PolicyPeriod#getPrimaryInsuredName() denormalized name} of the {@link #getPrimaryNamedInsured() PrimaryNamedInsured}
     * stored on the PolicyPeriod.
     * @param contact the contact to update the denorms
     */
    public void updateContactDenormsWhenArchived(entity.Contact contact) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateContactDenormsWhenArchived(contact);
    }
    
    public void updateInfoOnArchive() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).updateInfoOnArchive();
    }
    
    /**
     * Goes through all {@link PolicyNamedInsured} for this Policy and calls
     * {@link entity.PolicyNamedInsured#updateOfficialIDs()} on each one.
     */
    public void updateOfficialIDs() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateOfficialIDs();
    }
    
    /**
     * TemporaryCloneStatus can only be changed if it is currently not null.
     * @param status PolicyPeriodCloneStatus typelist
     */
    public void updateTemporaryCloneStatus(typekey.PolicyPeriodCloneStatus status) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateTemporaryCloneStatus(status);
    }
    
    /**
     * Calculate and set the TermNumber for this PolicyPeriod.  The TermNumber is set to
     * the maximum found TermNumber for the Policy + 1, or set to 1 in the case that no
     * prior TermNumber is found.
     */
    public void updateTermNumber() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateTermNumber();
    }
    
    /**
     * Update territory codes on all policy locations of this policy period according to
     * which lines exist in this period. We usually have to do this when adding/removing lines
     * from Package (multi-line) policies.
     */
    public void updateTerritoryCodes() {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods")).updateTerritoryCodes();
    }
    
    public boolean wasPeriodChanged() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal")).wasPeriodChanged();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pc.domain.note.NoteContainer", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pc.domain.personaldata.PinnableDomainMethods", "com.guidewire.pc.domain.personaldata.PolicyPeriodPinnableAdapter");
    config.put("com.guidewire.pc.domain.policy.period.PolicyPeriodInternalMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pc.domain.policy.period.PolicyPeriodPublicMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pc.domain.question.AnswerContainerPublicMethods", "com.guidewire.pc.domain.question.impl.AnswerContainerImpl");
    config.put("com.guidewire.pc.domain.question.impl.AnswerContainerInternalMethods", "com.guidewire.pc.domain.question.impl.AnswerContainerImpl");
    config.put("com.guidewire.pl.domain.extract.RootInfoPublicMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBranchProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBranchProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBranch", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBranchProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBranchInternal", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBranchProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("gw.api.contingency.ContingencyCreator", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("gw.api.domain.AnswerContainerAbstractDomainMethods", "gw.question.PolicyPeriodAnswerContainerAdapter");
    config.put("gw.api.domain.AnswerContainerAdapter", "gw.question.PolicyPeriodAnswerContainerAdapter");
    config.put("gw.api.domain.DenormalizedFKOutOfDomainGraph", "gw.contact.PolicyPeriodDenormalizedFKImpl");
    config.put("gw.api.domain.document.DocumentContainer", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("gw.api.domain.linkedobject.LinkedObjectContainer", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodImpl");
    config.put("gw.api.history.CustomHistory", "gw.api.history.PolicyPeriodCustomHistoryImpl");
    config.put("gw.api.reinsurance.ReinsurableCoverable", "gw.reinsurance.risk.PolicyReinsurableCoverableAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PolicyPeriod.class, config);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PolicyPeriod, com.guidewire._generated.entity.PolicyPeriodInternal>() {
      public java.lang.Object getImplementation(entity.PolicyPeriod bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyPeriodInternal getInternalInterface(entity.PolicyPeriod bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PolicyPeriod newEmptyInstance() {
        return new entity.PolicyPeriod((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}