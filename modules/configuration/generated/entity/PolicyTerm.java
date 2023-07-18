package entity;

/**
 * PolicyTerm
 * Contains data that varies by contractual period but not in effective time or real time.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyTerm.eti;PolicyTerm.eix;PolicyTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PolicyTerm")
public class PolicyTerm extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.RootInfo, entity.FrozenSetMember, entity.DestructionRootPinnable, entity.EventAware, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, gw.api.history.CustomHistory {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PolicyTerm> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PolicyTerm>("entity.PolicyTerm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> AFFINITYGROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AffinityGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILURE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILUREDETAILS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailureDetails");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVESCHEMAINFO_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveSchemaInfo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ARCHIVESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ArchiveState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> AUDITINFORMATIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AuditInformations");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOUND_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Bound");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CLAIMSYSTEMTOTALINCURRED_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "ClaimSystemTotalIncurred");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAIMSYSTEMTOTALINCURRED_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClaimSystemTotalIncurred_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CLAIMSYSTEMTOTALINCURRED_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ClaimSystemTotalIncurred_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DAYSREPORTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DaysReported");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> DEPOSITAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "DepositAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEPOSITAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DepositAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DEPOSITAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DepositAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEPOSITRELEASED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DepositReleased");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTDESTROY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DoNotDestroy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludeReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEDFROMARCHIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludedFromArchive");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> FINALAUDITOPTION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "FinalAuditOption");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> GENERATEREINSURABLES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "GenerateReinsurables");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> HUMANTOUCHEDISSUES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "HumanTouchedIssues");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JOBS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Jobs");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTRESTOREDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastRestoreDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOSSRATIOCALCULATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LossRatioCalculationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> LOSSRATIOEARNEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "LossRatioEarnedPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOSSRATIOEARNEDPREMIUM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LossRatioEarnedPremium_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LOSSRATIOEARNEDPREMIUM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LossRatioEarnedPremium_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MOSTRECENTTERM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MostRecentTerm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEXTARCHIVECHECKDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NextArchiveCheckDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEXTRENEWALCHECKDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NextRenewalCheckDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NONRENEWADDEXPLANATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NonRenewAddExplanation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> NONRENEWREASON_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "NonRenewReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NONRENEWALEXPLANATIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "NonRenewalExplanations");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> POLICYTERMARCHIVESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PolicyTermArchiveState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRERENEWALDIRECTION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreRenewalDirection");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RESTOREREQUESTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RestoreRequests");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALESTIMATEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalEstimatedPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALESTIMATEDPREMIUM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalEstimatedPremium_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALESTIMATEDPREMIUM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalEstimatedPremium_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALREPORTEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalReportedPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALREPORTEDPREMIUM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalReportedPremium_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALREPORTEDPREMIUM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalReportedPremium_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> WORKSHEETCONTAINERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "WorksheetContainers");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PolicyTermInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final java.lang.String POLICYTERMADDED_EVENT = "PolicyTermAdded";
  
  public static final java.lang.String POLICYTERMCHANGED_EVENT = "PolicyTermChanged";
  
  public static final java.lang.String POLICYTERMREMOVED_EVENT = "PolicyTermRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PolicyTerm()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PolicyTerm(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected PolicyTerm(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PolicyTermInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.PolicyTermInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public void accept(gw.api.domain.PinnableVisitor pinnableVisitor) {
    ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).accept(pinnableVisitor);
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
   * Adds a NonRenewalExplanation to this policy by minting from the given NonRenewalExplanationPattern
   * @param pattern The NonRenewalExplanationPattern to mint from
   * @param period PolicyPeriod to give to evaluate the NonRenewalExplanationPattern template
   * @return The NonRenewalExplanation that was added
   */
  public entity.NonRenewalExplanation addNonRenewalExplanation(entity.NonRenewalExplanationPattern pattern, entity.PolicyPeriod period) {
    return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).addNonRenewalExplanation(pattern, period);
  }
  
  /**
   * Adds the given element to the AuditInformations array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToAuditInformations(entity.AuditInformation element) {
    __getInternalInterface().addArrayElement(AUDITINFORMATIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the HumanTouchedIssues array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHumanTouchedIssues(entity.UWIssueUniqueID element) {
    __getInternalInterface().addArrayElement(HUMANTOUCHEDISSUES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Jobs array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToJobs(entity.Job element) {
    __getInternalInterface().addArrayElement(JOBS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the NonRenewalExplanations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNonRenewalExplanations(entity.NonRenewalExplanation element) {
    __getInternalInterface().addArrayElement(NONRENEWALEXPLANATIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the RestoreRequests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRestoreRequests(entity.PolicyTermRestoreRequest element) {
    __getInternalInterface().addArrayElement(RESTOREREQUESTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the WorksheetContainers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWorksheetContainers(entity.WorksheetContainer element) {
    __getInternalInterface().addArrayElement(WORKSHEETCONTAINERS_PROP.get(), element);
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
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description);
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description, java.lang.String originalValue, java.lang.String newValue) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description, originalValue, newValue);
  }
  
  /**
   * Creates a request to restore this Period from the Archive
   * @param requestingUser the user requesting this restore
   * @param reason the reason to restore this Term from the Archive
   * @param shouldCreateActivity flag to indicate whether an activity should be created when this request is processed
   * @return the newly created PolicyTermRestoreRequest
   */
  public entity.PolicyTermRestoreRequest createRestoreRequest(entity.User requestingUser, java.lang.String reason, boolean shouldCreateActivity) {
    return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).createRestoreRequest(requestingUser, reason, shouldCreateActivity);
  }
  
  /**
   * Queries <code>PolicyPeriod</code>s in this term to find the <code>TermNumber</code>.  <code>TermNumber</code> may be
   * <code>null</code> if there is no promoted <code>PolicyPeriod</code>, e.g. the term only has an open submission or
   * only a renewal that is withdrawn.
   * @return <code>TermNumber</code> or <code>null</code>
   */
  public java.lang.Integer findTermNumber() {
    return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).findTermNumber();
  }
  
  /**
   * Gets the value of the AffinityGroup field.
   * The affinity group assigned to this term
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroup getAffinityGroup() {
    return (entity.AffinityGroup)__getInternalInterface().getFieldValue(AFFINITYGROUP_PROP.get());
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
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AuditInformation[] getAuditInformations() {
    return (entity.AuditInformation[])__getInternalInterface().getFieldValue(AUDITINFORMATIONS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the ClaimSystemTotalIncurred field.
   * Total Incurred Amount retrieved from Claim system for Loss Ratio calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getClaimSystemTotalIncurred() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CLAIMSYSTEMTOTALINCURRED_PROP.get());
  }
  
  /**
   * Gets the value of the ClaimSystemTotalIncurred_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getClaimSystemTotalIncurred_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CLAIMSYSTEMTOTALINCURRED_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the ClaimSystemTotalIncurred_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getClaimSystemTotalIncurred_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CLAIMSYSTEMTOTALINCURRED_CUR_PROP.get());
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
   * Gets the value of the DaysReported field.
   * The number of days for which the total reported premium applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDaysReported() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(DAYSREPORTED_PROP.get());
  }
  
  /**
   * Gets the value of the DepositAmount field.
   * The current deposit amount of the policy
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
   * Gets the value of the FinalAuditOption field.
   * When false, final audit not scheduled; when true, the underwriter forces the audit to be scheduled and started; otherwise, final audit is scheduled, and rules determine whether to start it.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FinalAuditOption getFinalAuditOption() {
    return (typekey.FinalAuditOption)__getInternalInterface().getFieldValue(FINALAUDITOPTION_PROP.get());
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Gets the value of the HumanTouchedIssues field.
   * The issues on which have had manual actions have been performed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueUniqueID[] getHumanTouchedIssues() {
    return (entity.UWIssueUniqueID[])__getInternalInterface().getFieldValue(HUMANTOUCHEDISSUES_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Jobs field.
   * Jobs that are part of this PolicyTerm
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job[] getJobs() {
    return (entity.Job[])__getInternalInterface().getFieldValue(JOBS_PROP.get());
  }
  
  /**
   * Gets the value of the LastRestoreDate field.
   * The date when one or more PolicyPeriod from this PolicyTerm was last retrieved from the archive
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastRestoreDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LASTRESTOREDATE_PROP.get());
  }
  
  /**
   * Gets the value of the LossRatioCalculationDate field.
   * Date of the most recent Loss Ratio calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLossRatioCalculationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LOSSRATIOCALCULATIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the LossRatioEarnedPremium field.
   * Earned Premium used for Loss Ratio calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getLossRatioEarnedPremium() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(LOSSRATIOEARNEDPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the LossRatioEarnedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLossRatioEarnedPremium_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LOSSRATIOEARNEDPREMIUM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the LossRatioEarnedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getLossRatioEarnedPremium_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(LOSSRATIOEARNEDPREMIUM_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the NextArchiveCheckDate field.
   * The date to next evaluate this PolicyTerm for archiving or null if archiving should be checked at the next opportunity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextArchiveCheckDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(NEXTARCHIVECHECKDATE_PROP.get());
  }
  
  /**
   * Gets the value of the NextRenewalCheckDate field.
   * The date to next evaluate this PolicyTerm for renewal, null indicates to check at the next opportunity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextRenewalCheckDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(NEXTRENEWALCHECKDATE_PROP.get());
  }
  
  /**
   * Gets the value of the NonRenewAddExplanation field.
   * Additional explanation why this policy marked for non renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNonRenewAddExplanation() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NONRENEWADDEXPLANATION_PROP.get());
  }
  
  /**
   * Gets the value of the NonRenewReason field.
   * Classifies the reason that the policy is marked as non-renew
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NonRenewalCode getNonRenewReason() {
    return (typekey.NonRenewalCode)__getInternalInterface().getFieldValue(NONRENEWREASON_PROP.get());
  }
  
  /**
   * Gets the value of the NonRenewalExplanations field.
   * Non-renewal explanations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.NonRenewalExplanation[] getNonRenewalExplanations() {
    return (entity.NonRenewalExplanation[])__getInternalInterface().getFieldValue(NONRENEWALEXPLANATIONS_PROP.get());
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
   * The policy that this term applies to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyTermArchiveState field.
   * Combined archive state of the policy periods in the policy term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyTermArchiveState getPolicyTermArchiveState() {
    return (typekey.PolicyTermArchiveState)__getInternalInterface().getFieldValue(POLICYTERMARCHIVESTATE_PROP.get());
  }
  
  /**
   * Gets the value of the PreRenewalDirection field.
   * Indicates the pre-renewal direction,if any, of this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PreRenewalDirection getPreRenewalDirection() {
    return (typekey.PreRenewalDirection)__getInternalInterface().getFieldValue(PRERENEWALDIRECTION_PROP.get());
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
   * Gets the value of the RestoreRequests field.
   * Requests that have been made to retrieve this term from the Archive
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTermRestoreRequest[] getRestoreRequests() {
    return (entity.PolicyTermRestoreRequest[])__getInternalInterface().getFieldValue(RESTOREREQUESTS_PROP.get());
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
   * Gets the value of the TotalEstimatedPremium field.
   * The amount of premium estimated for this policy period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalEstimatedPremium() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALESTIMATEDPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the TotalEstimatedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalEstimatedPremium_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALESTIMATEDPREMIUM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalEstimatedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalEstimatedPremium_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALESTIMATEDPREMIUM_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TotalReportedPremium field.
   * The amount of premium reported for this policy period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalReportedPremium() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALREPORTEDPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the TotalReportedPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalReportedPremium_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALREPORTEDPREMIUM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalReportedPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalReportedPremium_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALREPORTEDPREMIUM_CUR_PROP.get());
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
  
  public java.lang.String getVersionString() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
  }
  
  /**
   * Gets the value of the WorksheetContainers field.
   * WorksheetContainer objects on each period in the PolicyTerm
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetContainer[] getWorksheetContainers() {
    return (entity.WorksheetContainer[])__getInternalInterface().getFieldValue(WORKSHEETCONTAINERS_PROP.get());
  }
  
  /**
   * Returns whether this PolicyTerm is considered to be archived.
   * Calculated by looking at this#PolicyTermArchiveState. If
   * this#PolicyTermArchiveState != PolicyTermArchiveState.TC_NotArchived,
   * then one or more PolicyPeriods with a non-null ArchiveState have
   * a ForeignKey to this PolicyTerm. As such PolicyPeriods are considered
   * to be archived, this PolicyTerm is considered to be archived as well.
   * @return If the PolicyTerm is considered to be archived.
   */
  public boolean hasArchivedPolicyPeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).hasArchivedPolicyPeriod();
  }
  
  /**
   * Queries to determine if any <code>PolicyPeriod</code> in this term has been promoted.  This is true if any
   * <code>PolicyPeriod</code> has a non-null <code>ModelNumber</code>.
   * @return <code>true</code> if any <code>PolicyPeriod</code> has been promoted
   */
  public boolean hasPromotedPeriod() {
    return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).hasPromotedPeriod();
  }
  
  /**
   * Queries to determine if all <code>PolicyPeriod</code>s in this term are locked.
   * @return <code>true</code> if every <code>PolicyPeriod</code> is locked
   */
  public boolean isAllPeriodsLocked() {
    return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).isAllPeriodsLocked();
  }
  
  /**
   * Gets the value of the Bound field.
   * True on promoting Submission, Rewrite and for Renewal if current mode is not 'Confirm Renewals'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBound() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOUND_PROP.get());
  }
  
  /**
   * Gets the value of the DepositReleased field.
   * True if the deposit amount has been released
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDepositReleased() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEPOSITRELEASED_PROP.get());
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
   * Gets the value of the ExcludedFromArchive field.
   * Indicate if this entity should be excluded from archiving
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExcludedFromArchive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXCLUDEDFROMARCHIVE_PROP.get());
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * Gets the value of the GenerateReinsurables field.
   * Flag for generating reinsurables for reinsurance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isGenerateReinsurables() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(GENERATEREINSURABLES_PROP.get());
  }
  
  /**
   * Gets the value of the MostRecentTerm field.
   * Flags the future-most term for a policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMostRecentTerm() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(MOSTRECENTTERM_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
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
  
  public boolean isPurgeableEvenWithUnpurgeableSiblings() {
    return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).isPurgeableEvenWithUnpurgeableSiblings();
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
   * Removes the given element from the AuditInformations array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromAuditInformations(entity.AuditInformation element) {
    __getInternalInterface().removeArrayElement(AUDITINFORMATIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AuditInformations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAuditInformations(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(AUDITINFORMATIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the HumanTouchedIssues array. This is achieved by marking the element for removal.
   */
  public void removeFromHumanTouchedIssues(entity.UWIssueUniqueID element) {
    __getInternalInterface().removeArrayElement(HUMANTOUCHEDISSUES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the HumanTouchedIssues array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHumanTouchedIssues(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(HUMANTOUCHEDISSUES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Jobs array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromJobs(entity.Job element) {
    __getInternalInterface().removeArrayElement(JOBS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Jobs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJobs(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(JOBS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the NonRenewalExplanations array. This is achieved by marking the element for removal.
   */
  public void removeFromNonRenewalExplanations(entity.NonRenewalExplanation element) {
    __getInternalInterface().removeArrayElement(NONRENEWALEXPLANATIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the NonRenewalExplanations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNonRenewalExplanations(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(NONRENEWALEXPLANATIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RestoreRequests array. This is achieved by marking the element for removal.
   */
  public void removeFromRestoreRequests(entity.PolicyTermRestoreRequest element) {
    __getInternalInterface().removeArrayElement(RESTOREREQUESTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RestoreRequests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRestoreRequests(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RESTOREREQUESTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the WorksheetContainers array. This is achieved by marking the element for removal.
   */
  public void removeFromWorksheetContainers(entity.WorksheetContainer element) {
    __getInternalInterface().removeArrayElement(WORKSHEETCONTAINERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the WorksheetContainers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWorksheetContainers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(WORKSHEETCONTAINERS_PROP.get(), elementID);
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
   * Schedule this item for archival
   */
  public void scheduleForArchive() {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).scheduleForArchive();
  }
  
  /**
   * Sets the value of the AffinityGroup field.
   */
  public void setAffinityGroup(entity.AffinityGroup value) {
    __getInternalInterface().setFieldValue(AFFINITYGROUP_PROP.get(), value);
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
   * Sets the value of the AuditInformations field.
   */
  private void setAuditInformations(entity.AuditInformation[] value) {
    __getInternalInterface().setFieldValue(AUDITINFORMATIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Bound field.
   */
  public void setBound(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(BOUND_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimSystemTotalIncurred field.
   */
  public void setClaimSystemTotalIncurred(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(CLAIMSYSTEMTOTALINCURRED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimSystemTotalIncurred_amt field.
   */
  private void setClaimSystemTotalIncurred_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(CLAIMSYSTEMTOTALINCURRED_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimSystemTotalIncurred_cur field.
   */
  private void setClaimSystemTotalIncurred_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(CLAIMSYSTEMTOTALINCURRED_CUR_PROP.get(), value);
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
  
  /**
   * Sets the value of the DaysReported field.
   */
  public void setDaysReported(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(DAYSREPORTED_PROP.get(), value);
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
   * Sets the value of the DepositReleased field.
   */
  public void setDepositReleased(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DEPOSITRELEASED_PROP.get(), value);
  }
  
  public void setDoNotDestroy(boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
    ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).setDoNotDestroy(value, getDescription);
  }
  
  /**
   * Sets the value of the DoNotDestroy field.
   */
  private void setDoNotDestroy(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DONOTDESTROY_PROP.get(), value);
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
   * Sets the value of the FinalAuditOption field.
   */
  public void setFinalAuditOption(typekey.FinalAuditOption value) {
    __getInternalInterface().setFieldValue(FINALAUDITOPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GenerateReinsurables field.
   */
  private void setGenerateReinsurables(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(GENERATEREINSURABLES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HumanTouchedIssues field.
   */
  public void setHumanTouchedIssues(entity.UWIssueUniqueID[] value) {
    __getInternalInterface().setFieldValue(HUMANTOUCHEDISSUES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Jobs field.
   */
  private void setJobs(entity.Job[] value) {
    __getInternalInterface().setFieldValue(JOBS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastRestoreDate field.
   */
  public void setLastRestoreDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(LASTRESTOREDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossRatioCalculationDate field.
   */
  public void setLossRatioCalculationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(LOSSRATIOCALCULATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossRatioEarnedPremium field.
   */
  public void setLossRatioEarnedPremium(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(LOSSRATIOEARNEDPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossRatioEarnedPremium_amt field.
   */
  private void setLossRatioEarnedPremium_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(LOSSRATIOEARNEDPREMIUM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossRatioEarnedPremium_cur field.
   */
  private void setLossRatioEarnedPremium_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(LOSSRATIOEARNEDPREMIUM_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MostRecentTerm field.
   */
  private void setMostRecentTerm(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(MOSTRECENTTERM_PROP.get(), value);
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
   * Sets the value of the NextArchiveCheckDate field.
   */
  public void setNextArchiveCheckDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(NEXTARCHIVECHECKDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NextRenewalCheckDate field.
   */
  public void setNextRenewalCheckDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(NEXTRENEWALCHECKDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NonRenewAddExplanation field.
   */
  public void setNonRenewAddExplanation(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NONRENEWADDEXPLANATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NonRenewReason field.
   */
  public void setNonRenewReason(typekey.NonRenewalCode value) {
    __getInternalInterface().setFieldValue(NONRENEWREASON_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NonRenewalExplanations field.
   */
  public void setNonRenewalExplanations(entity.NonRenewalExplanation[] value) {
    __getInternalInterface().setFieldValue(NONRENEWALEXPLANATIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Policy field.
   */
  private void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyTermArchiveState field.
   */
  private void setPolicyTermArchiveState(typekey.PolicyTermArchiveState value) {
    __getInternalInterface().setFieldValue(POLICYTERMARCHIVESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreRenewalDirection field.
   */
  public void setPreRenewalDirection(typekey.PreRenewalDirection value) {
    __getInternalInterface().setFieldValue(PRERENEWALDIRECTION_PROP.get(), value);
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
   * Sets the value of the RestoreRequests field.
   */
  public void setRestoreRequests(entity.PolicyTermRestoreRequest[] value) {
    __getInternalInterface().setFieldValue(RESTOREREQUESTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalEstimatedPremium field.
   */
  public void setTotalEstimatedPremium(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALESTIMATEDPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalEstimatedPremium_amt field.
   */
  private void setTotalEstimatedPremium_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALESTIMATEDPREMIUM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalEstimatedPremium_cur field.
   */
  private void setTotalEstimatedPremium_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALESTIMATEDPREMIUM_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalReportedPremium field.
   */
  public void setTotalReportedPremium(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALREPORTEDPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalReportedPremium_amt field.
   */
  private void setTotalReportedPremium_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALREPORTEDPREMIUM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalReportedPremium_cur field.
   */
  private void setTotalReportedPremium_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALREPORTEDPREMIUM_CUR_PROP.get(), value);
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
   * Sets the value of the WorksheetContainers field.
   */
  public void setWorksheetContainers(entity.WorksheetContainer[] value) {
    __getInternalInterface().setFieldValue(WORKSHEETCONTAINERS_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PolicyTermInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PolicyTerm.this.__getDelegateManager();
    }
    
    public void accept(gw.api.domain.PinnableVisitor pinnableVisitor) {
      ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).accept(pinnableVisitor);
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
     * Adds a NonRenewalExplanation to this policy by minting from the given NonRenewalExplanationPattern
     * @param pattern The NonRenewalExplanationPattern to mint from
     * @param period PolicyPeriod to give to evaluate the NonRenewalExplanationPattern template
     * @return The NonRenewalExplanation that was added
     */
    public entity.NonRenewalExplanation addNonRenewalExplanation(entity.NonRenewalExplanationPattern pattern, entity.PolicyPeriod period) {
      return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).addNonRenewalExplanation(pattern, period);
    }
    
    /**
     * Adds the given element to the AuditInformations array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAuditInformations(entity.AuditInformation element) {
      __getInternalInterface().addArrayElement(AUDITINFORMATIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the HumanTouchedIssues array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToHumanTouchedIssues(entity.UWIssueUniqueID element) {
      __getInternalInterface().addArrayElement(HUMANTOUCHEDISSUES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Jobs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToJobs(entity.Job element) {
      __getInternalInterface().addArrayElement(JOBS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the NonRenewalExplanations array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToNonRenewalExplanations(entity.NonRenewalExplanation element) {
      __getInternalInterface().addArrayElement(NONRENEWALEXPLANATIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RestoreRequests array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRestoreRequests(entity.PolicyTermRestoreRequest element) {
      __getInternalInterface().addArrayElement(RESTOREREQUESTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the WorksheetContainers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToWorksheetContainers(entity.WorksheetContainer element) {
      __getInternalInterface().addArrayElement(WORKSHEETCONTAINERS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    /**
     * This method will return true if this object can be restored at this time.  There are two possible reason why this
     * would be false.  1.  the object was not archived in the first place; 2.  The archive source is not currently available
     * @return true if okay to restore
     */
    public boolean canRestore() {
      return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).canRestore();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public void checkArchiveEligibility() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).checkArchiveEligibility();
    }
    
    public void clearTraceDetails() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).clearTraceDetails();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description) {
      return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description);
    }
    
    public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description, java.lang.String originalValue, java.lang.String newValue) {
      return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description, originalValue, newValue);
    }
    
    /**
     * Creates a request to restore this Period from the Archive
     * @param requestingUser the user requesting this restore
     * @param reason the reason to restore this Term from the Archive
     * @param shouldCreateActivity flag to indicate whether an activity should be created when this request is processed
     * @return the newly created PolicyTermRestoreRequest
     */
    public entity.PolicyTermRestoreRequest createRestoreRequest(entity.User requestingUser, java.lang.String reason, boolean shouldCreateActivity) {
      return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).createRestoreRequest(requestingUser, reason, shouldCreateActivity);
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public void excludeFromArchiveBecauseOfFailure(java.lang.Exception e) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).excludeFromArchiveBecauseOfFailure(e);
    }
    
    public void excludeFromArchiveBecauseOfRules(java.lang.String message) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).excludeFromArchiveBecauseOfRules(message);
    }
    
    /**
     * Queries <code>PolicyPeriod</code>s in this term to find the <code>TermNumber</code>.  <code>TermNumber</code> may be
     * <code>null</code> if there is no promoted <code>PolicyPeriod</code>, e.g. the term only has an open submission or
     * only a renewal that is withdrawn.
     * @return <code>TermNumber</code> or <code>null</code>
     */
    public java.lang.Integer findTermNumber() {
      return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).findTermNumber();
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
     * Gets the value of the AffinityGroup field.
     * The affinity group assigned to this term
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AffinityGroup getAffinityGroup() {
      return (entity.AffinityGroup)__getInternalInterface().getFieldValue(AFFINITYGROUP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAffinityGroupID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(AFFINITYGROUP_PROP.get());
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
    
    /**
     * Gets the value of the AuditInformations field.
     * The audits for this policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AuditInformation[] getAuditInformations() {
      return (entity.AuditInformation[])__getInternalInterface().getFieldValue(AUDITINFORMATIONS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the ClaimSystemTotalIncurred field.
     * Total Incurred Amount retrieved from Claim system for Loss Ratio calculation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getClaimSystemTotalIncurred() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CLAIMSYSTEMTOTALINCURRED_PROP.get());
    }
    
    /**
     * Gets the value of the ClaimSystemTotalIncurred_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getClaimSystemTotalIncurred_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CLAIMSYSTEMTOTALINCURRED_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the ClaimSystemTotalIncurred_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getClaimSystemTotalIncurred_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CLAIMSYSTEMTOTALINCURRED_CUR_PROP.get());
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
    
    /**
     * Gets the value of the DaysReported field.
     * The number of days for which the total reported premium applies
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getDaysReported() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(DAYSREPORTED_PROP.get());
    }
    
    /**
     * Gets the value of the DepositAmount field.
     * The current deposit amount of the policy
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
     * Gets the value of the FinalAuditOption field.
     * When false, final audit not scheduled; when true, the underwriter forces the audit to be scheduled and started; otherwise, final audit is scheduled, and rules determine whether to start it.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FinalAuditOption getFinalAuditOption() {
      return (typekey.FinalAuditOption)__getInternalInterface().getFieldValue(FINALAUDITOPTION_PROP.get());
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
     * Gets the value of the HumanTouchedIssues field.
     * The issues on which have had manual actions have been performed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UWIssueUniqueID[] getHumanTouchedIssues() {
      return (entity.UWIssueUniqueID[])__getInternalInterface().getFieldValue(HUMANTOUCHEDISSUES_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the Jobs field.
     * Jobs that are part of this PolicyTerm
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job[] getJobs() {
      return (entity.Job[])__getInternalInterface().getFieldValue(JOBS_PROP.get());
    }
    
    /**
     * Gets the value of the LastRestoreDate field.
     * The date when one or more PolicyPeriod from this PolicyTerm was last retrieved from the archive
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLastRestoreDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LASTRESTOREDATE_PROP.get());
    }
    
    /**
     * Gets the value of the LossRatioCalculationDate field.
     * Date of the most recent Loss Ratio calculation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLossRatioCalculationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LOSSRATIOCALCULATIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the LossRatioEarnedPremium field.
     * Earned Premium used for Loss Ratio calculation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getLossRatioEarnedPremium() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(LOSSRATIOEARNEDPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the LossRatioEarnedPremium_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getLossRatioEarnedPremium_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LOSSRATIOEARNEDPREMIUM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the LossRatioEarnedPremium_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getLossRatioEarnedPremium_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(LOSSRATIOEARNEDPREMIUM_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the NextArchiveCheckDate field.
     * The date to next evaluate this PolicyTerm for archiving or null if archiving should be checked at the next opportunity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getNextArchiveCheckDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(NEXTARCHIVECHECKDATE_PROP.get());
    }
    
    /**
     * Gets the value of the NextRenewalCheckDate field.
     * The date to next evaluate this PolicyTerm for renewal, null indicates to check at the next opportunity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getNextRenewalCheckDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(NEXTRENEWALCHECKDATE_PROP.get());
    }
    
    /**
     * Gets the value of the NonRenewAddExplanation field.
     * Additional explanation why this policy marked for non renewal
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNonRenewAddExplanation() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NONRENEWADDEXPLANATION_PROP.get());
    }
    
    /**
     * Gets the value of the NonRenewReason field.
     * Classifies the reason that the policy is marked as non-renew
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.NonRenewalCode getNonRenewReason() {
      return (typekey.NonRenewalCode)__getInternalInterface().getFieldValue(NONRENEWREASON_PROP.get());
    }
    
    /**
     * Gets the value of the NonRenewalExplanations field.
     * Non-renewal explanations
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.NonRenewalExplanation[] getNonRenewalExplanations() {
      return (entity.NonRenewalExplanation[])__getInternalInterface().getFieldValue(NONRENEWALEXPLANATIONS_PROP.get());
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
     * The policy that this term applies to
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Policy getPolicy() {
      return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICY_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyTermArchiveState field.
     * Combined archive state of the policy periods in the policy term.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PolicyTermArchiveState getPolicyTermArchiveState() {
      return (typekey.PolicyTermArchiveState)__getInternalInterface().getFieldValue(POLICYTERMARCHIVESTATE_PROP.get());
    }
    
    /**
     * Gets the value of the PreRenewalDirection field.
     * Indicates the pre-renewal direction,if any, of this policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PreRenewalDirection getPreRenewalDirection() {
      return (typekey.PreRenewalDirection)__getInternalInterface().getFieldValue(PRERENEWALDIRECTION_PROP.get());
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
     * Gets the value of the RestoreRequests field.
     * Requests that have been made to retrieve this term from the Archive
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyTermRestoreRequest[] getRestoreRequests() {
      return (entity.PolicyTermRestoreRequest[])__getInternalInterface().getFieldValue(RESTOREREQUESTS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    public entity.Extractable getRoot() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getRoot();
    }
    
    /**
     * Gets the value of the TotalEstimatedPremium field.
     * The amount of premium estimated for this policy period
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalEstimatedPremium() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALESTIMATEDPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the TotalEstimatedPremium_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalEstimatedPremium_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALESTIMATEDPREMIUM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalEstimatedPremium_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalEstimatedPremium_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALESTIMATEDPREMIUM_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the TotalReportedPremium field.
     * The amount of premium reported for this policy period
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalReportedPremium() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALREPORTEDPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the TotalReportedPremium_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalReportedPremium_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALREPORTEDPREMIUM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalReportedPremium_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalReportedPremium_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALREPORTEDPREMIUM_CUR_PROP.get());
    }
    
    public java.lang.String getTraceDetails() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getTraceDetails();
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
    
    public java.lang.String getVersionString() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
    }
    
    /**
     * Gets the value of the WorksheetContainers field.
     * WorksheetContainer objects on each period in the PolicyTerm
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.WorksheetContainer[] getWorksheetContainers() {
      return (entity.WorksheetContainer[])__getInternalInterface().getFieldValue(WORKSHEETCONTAINERS_PROP.get());
    }
    
    /**
     * Returns whether this PolicyTerm is considered to be archived.
     * Calculated by looking at this#PolicyTermArchiveState. If
     * this#PolicyTermArchiveState != PolicyTermArchiveState.TC_NotArchived,
     * then one or more PolicyPeriods with a non-null ArchiveState have
     * a ForeignKey to this PolicyTerm. As such PolicyPeriods are considered
     * to be archived, this PolicyTerm is considered to be archived as well.
     * @return If the PolicyTerm is considered to be archived.
     */
    public boolean hasArchivedPolicyPeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).hasArchivedPolicyPeriod();
    }
    
    /**
     * Queries to determine if any <code>PolicyPeriod</code> in this term has been promoted.  This is true if any
     * <code>PolicyPeriod</code> has a non-null <code>ModelNumber</code>.
     * @return <code>true</code> if any <code>PolicyPeriod</code> has been promoted
     */
    public boolean hasPromotedPeriod() {
      return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).hasPromotedPeriod();
    }
    
    public boolean hasReportedArchiveProblem() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).hasReportedArchiveProblem();
    }
    
    public boolean hasTraceDetails() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).hasTraceDetails();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Queries to determine if all <code>PolicyPeriod</code>s in this term are locked.
     * @return <code>true</code> if every <code>PolicyPeriod</code> is locked
     */
    public boolean isAllPeriodsLocked() {
      return ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).isAllPeriodsLocked();
    }
    
    public boolean isArchived() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).isArchived();
    }
    
    /**
     * Gets the value of the Bound field.
     * True on promoting Submission, Rewrite and for Renewal if current mode is not 'Confirm Renewals'.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBound() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOUND_PROP.get());
    }
    
    /**
     * Gets the value of the DepositReleased field.
     * True if the deposit amount has been released
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDepositReleased() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEPOSITRELEASED_PROP.get());
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
     * Gets the value of the ExcludedFromArchive field.
     * Indicate if this entity should be excluded from archiving
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isExcludedFromArchive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXCLUDEDFROMARCHIVE_PROP.get());
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    /**
     * Gets the value of the GenerateReinsurables field.
     * Flag for generating reinsurables for reinsurance
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isGenerateReinsurables() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(GENERATEREINSURABLES_PROP.get());
    }
    
    /**
     * Gets the value of the MostRecentTerm field.
     * Flags the future-most term for a policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isMostRecentTerm() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(MOSTRECENTTERM_PROP.get());
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
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
    
    public boolean isPurgeableEvenWithUnpurgeableSiblings() {
      return ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).isPurgeableEvenWithUnpurgeableSiblings();
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public void markArchived() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).markArchived();
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
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
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
     * Removes the given element from the AuditInformations array. This is achieved by marking the element for removal.
     */
    public void removeFromAuditInformations(entity.AuditInformation element) {
      __getInternalInterface().removeArrayElement(AUDITINFORMATIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AuditInformations array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAuditInformations(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(AUDITINFORMATIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the HumanTouchedIssues array. This is achieved by marking the element for removal.
     */
    public void removeFromHumanTouchedIssues(entity.UWIssueUniqueID element) {
      __getInternalInterface().removeArrayElement(HUMANTOUCHEDISSUES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the HumanTouchedIssues array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromHumanTouchedIssues(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(HUMANTOUCHEDISSUES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Jobs array. This is achieved by marking the element for removal.
     */
    public void removeFromJobs(entity.Job element) {
      __getInternalInterface().removeArrayElement(JOBS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Jobs array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromJobs(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(JOBS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the NonRenewalExplanations array. This is achieved by marking the element for removal.
     */
    public void removeFromNonRenewalExplanations(entity.NonRenewalExplanation element) {
      __getInternalInterface().removeArrayElement(NONRENEWALEXPLANATIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the NonRenewalExplanations array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromNonRenewalExplanations(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(NONRENEWALEXPLANATIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RestoreRequests array. This is achieved by marking the element for removal.
     */
    public void removeFromRestoreRequests(entity.PolicyTermRestoreRequest element) {
      __getInternalInterface().removeArrayElement(RESTOREREQUESTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RestoreRequests array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRestoreRequests(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RESTOREREQUESTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the WorksheetContainers array. This is achieved by marking the element for removal.
     */
    public void removeFromWorksheetContainers(entity.WorksheetContainer element) {
      __getInternalInterface().removeArrayElement(WORKSHEETCONTAINERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the WorksheetContainers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromWorksheetContainers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(WORKSHEETCONTAINERS_PROP.get(), elementID);
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
     * Sets the value of the AffinityGroup field.
     */
    public void setAffinityGroup(entity.AffinityGroup value) {
      __getInternalInterface().setFieldValue(AFFINITYGROUP_PROP.get(), value);
    }
    
    public void setAffinityGroupID(gw.pl.persistence.core.Key value) {
      setFieldValue(AFFINITYGROUP_PROP.get(), value);
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
     * Sets the value of the AuditInformations field.
     */
    public void setAuditInformations(entity.AuditInformation[] value) {
      __getInternalInterface().setFieldValue(AUDITINFORMATIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Bound field.
     */
    public void setBound(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOUND_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimSystemTotalIncurred field.
     */
    public void setClaimSystemTotalIncurred(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(CLAIMSYSTEMTOTALINCURRED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimSystemTotalIncurred_amt field.
     */
    public void setClaimSystemTotalIncurred_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(CLAIMSYSTEMTOTALINCURRED_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimSystemTotalIncurred_cur field.
     */
    public void setClaimSystemTotalIncurred_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CLAIMSYSTEMTOTALINCURRED_CUR_PROP.get(), value);
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
    
    /**
     * Sets the value of the DaysReported field.
     */
    public void setDaysReported(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(DAYSREPORTED_PROP.get(), value);
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
     * Sets the value of the DepositReleased field.
     */
    public void setDepositReleased(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DEPOSITRELEASED_PROP.get(), value);
    }
    
    public void setDoNotDestroy(boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
      ((com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods")).setDoNotDestroy(value, getDescription);
    }
    
    /**
     * Sets the value of the DoNotDestroy field.
     */
    public void setDoNotDestroy(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DONOTDESTROY_PROP.get(), value);
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
     * Sets the value of the FinalAuditOption field.
     */
    public void setFinalAuditOption(typekey.FinalAuditOption value) {
      __getInternalInterface().setFieldValue(FINALAUDITOPTION_PROP.get(), value);
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
     * Sets the value of the GenerateReinsurables field.
     */
    public void setGenerateReinsurables(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(GENERATEREINSURABLES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HumanTouchedIssues field.
     */
    public void setHumanTouchedIssues(entity.UWIssueUniqueID[] value) {
      __getInternalInterface().setFieldValue(HUMANTOUCHEDISSUES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Jobs field.
     */
    public void setJobs(entity.Job[] value) {
      __getInternalInterface().setFieldValue(JOBS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastRestoreDate field.
     */
    public void setLastRestoreDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(LASTRESTOREDATE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LossRatioCalculationDate field.
     */
    public void setLossRatioCalculationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(LOSSRATIOCALCULATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossRatioEarnedPremium field.
     */
    public void setLossRatioEarnedPremium(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(LOSSRATIOEARNEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossRatioEarnedPremium_amt field.
     */
    public void setLossRatioEarnedPremium_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(LOSSRATIOEARNEDPREMIUM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossRatioEarnedPremium_cur field.
     */
    public void setLossRatioEarnedPremium_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(LOSSRATIOEARNEDPREMIUM_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MostRecentTerm field.
     */
    public void setMostRecentTerm(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(MOSTRECENTTERM_PROP.get(), value);
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
     * Sets the value of the NextArchiveCheckDate field.
     */
    public void setNextArchiveCheckDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(NEXTARCHIVECHECKDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NextRenewalCheckDate field.
     */
    public void setNextRenewalCheckDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(NEXTRENEWALCHECKDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NonRenewAddExplanation field.
     */
    public void setNonRenewAddExplanation(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NONRENEWADDEXPLANATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NonRenewReason field.
     */
    public void setNonRenewReason(typekey.NonRenewalCode value) {
      __getInternalInterface().setFieldValue(NONRENEWREASON_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NonRenewalExplanations field.
     */
    public void setNonRenewalExplanations(entity.NonRenewalExplanation[] value) {
      __getInternalInterface().setFieldValue(NONRENEWALEXPLANATIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Policy field.
     */
    public void setPolicy(entity.Policy value) {
      __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
    }
    
    public void setPolicyID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyTermArchiveState field.
     */
    public void setPolicyTermArchiveState(typekey.PolicyTermArchiveState value) {
      __getInternalInterface().setFieldValue(POLICYTERMARCHIVESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreRenewalDirection field.
     */
    public void setPreRenewalDirection(typekey.PreRenewalDirection value) {
      __getInternalInterface().setFieldValue(PRERENEWALDIRECTION_PROP.get(), value);
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
     * Sets the value of the RestoreRequests field.
     */
    public void setRestoreRequests(entity.PolicyTermRestoreRequest[] value) {
      __getInternalInterface().setFieldValue(RESTOREREQUESTS_PROP.get(), value);
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
     * Sets the value of the TotalEstimatedPremium field.
     */
    public void setTotalEstimatedPremium(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALESTIMATEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalEstimatedPremium_amt field.
     */
    public void setTotalEstimatedPremium_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALESTIMATEDPREMIUM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalEstimatedPremium_cur field.
     */
    public void setTotalEstimatedPremium_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALESTIMATEDPREMIUM_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalReportedPremium field.
     */
    public void setTotalReportedPremium(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALREPORTEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalReportedPremium_amt field.
     */
    public void setTotalReportedPremium_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALREPORTEDPREMIUM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalReportedPremium_cur field.
     */
    public void setTotalReportedPremium_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALREPORTEDPREMIUM_CUR_PROP.get(), value);
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
     * Sets the value of the WorksheetContainers field.
     */
    public void setWorksheetContainers(entity.WorksheetContainer[] value) {
      __getInternalInterface().setFieldValue(WORKSHEETCONTAINERS_PROP.get(), value);
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
    
    public void updateInfoOnArchive() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).updateInfoOnArchive();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider", "com.guidewire.pc.domain.policy.period.impl.PolicyTermImpl");
    config.put("com.guidewire.pc.domain.personaldata.PinnableDomainMethods", "com.guidewire.pc.domain.personaldata.PolicyTermPinnableAdapter");
    config.put("com.guidewire.pc.domain.policy.period.PolicyTermPublicMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyTermImpl");
    config.put("com.guidewire.pl.domain.extract.RootInfoPublicMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyTermImpl");
    config.put("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyTermImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.api.history.CustomHistory", "gw.api.history.PolicyTermCustomHistoryImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PolicyTerm.class, config);
    com.guidewire._generated.entity.PolicyTermInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PolicyTerm, com.guidewire._generated.entity.PolicyTermInternal>() {
      public java.lang.Object getImplementation(entity.PolicyTerm bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyTermInternal getInternalInterface(entity.PolicyTerm bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PolicyTerm newEmptyInstance() {
        return new entity.PolicyTerm((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}