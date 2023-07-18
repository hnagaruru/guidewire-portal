package entity;

/**
 * Policy
 * Policy attributes including account, group and user assignment, product and policy type
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Policy.eti;Policy.eix;Policy.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Policy")
public class Policy extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDatedContainer, entity.UserRoleOwner, entity.Extractable, entity.RootInfo, entity.FrozenSetMember, entity.DestructionRootPinnable, entity.EventAware, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, com.guidewire.pc.system.debug.Debuggable, gw.api.assignment.UserRoleOwner, gw.api.contingency.ContingencyCreator, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Policy> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Policy>("entity.Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> APDPRODUCT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "APDProduct");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Account");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILURE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILUREDETAILS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailureDetails");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVESCHEMAINFO_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveSchemaInfo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ARCHIVESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ArchiveState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> AUDITINFORMATIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AuditInformations");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CONTINGENCIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Contingencies");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> DIVIDEDTONEWACCOUNTSOURCEJOIN_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "DividedToNewAccountSourceJoin");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "DividedToNewAccountSourceJoinArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTARCHIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DoNotArchive");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTDESTROY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DoNotDestroy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> EFFDATEDREGISTRY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "EffDatedRegistry");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludeReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEDFROMARCHIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludedFromArchive");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ISSUEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IssueDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ISSUEHISTORIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "IssueHistories");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JOBS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Jobs");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LOSSHISTORYTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LossHistoryType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> MOVEDPOLICYSOURCEACCOUNT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "MovedPolicySourceAccount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MOVEDPOLICYSOURCEACCOUNTPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MovedPolicySourceAccountPublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMPRIORLOSSES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumPriorLosses");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORIGINALEFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OriginalEffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PACKAGERISK_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PackageRisk");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PERIODS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Periods");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYLANGUAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryLanguage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYLOCALE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryLocale");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRIORLOSSES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PriorLosses");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRIORPOLICIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PriorPolicies");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> PRIORPREMIUMS_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "PriorPremiums");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIORPREMIUMS_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PriorPremiums_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIORPREMIUMS_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PriorPremiums_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> PRIORTOTALINCURRED_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "PriorTotalIncurred");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIORTOTALINCURRED_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PriorTotalIncurred_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIORTOTALINCURRED_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PriorTotalIncurred_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PRODUCERCODEOFSERVICE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProducerCodeOfService");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RIRISKVLCONTAINERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RIRiskVLContainers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> REWRITTENTONEWACCOUNTDESTINATIONJOIN_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RewrittenToNewAccountDestinationJoin");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RewrittenToNewAccountDestinationJoinArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> REWRITTENTONEWACCOUNTSOURCEJOIN_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RewrittenToNewAccountSourceJoin");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RewrittenToNewAccountSourceJoinArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ROLEASSIGNMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RoleAssignments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> UWREFERRALREASONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "UWReferralReasons");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PolicyInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.api.domain.policy.PolicyFinder finder = com.guidewire.pc.domain.policy.PolicyPublicMethods.finder;
  
  public static final java.lang.String POLICYADDED_EVENT = "PolicyAdded";
  
  public static final java.lang.String POLICYCHANGED_EVENT = "PolicyChanged";
  
  public static final java.lang.String POLICYPURGED_EVENT = "PolicyPurged";
  
  public static final java.lang.String POLICYREMOVED_EVENT = "PolicyRemoved";
  
  public static final java.lang.String TRANSFERPOLICY_EVENT = "TransferPolicy";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public Policy()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public Policy(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected Policy(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PolicyInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.PolicyInternal __getInternalInterface() {
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
   * Adds the given element to the AuditInformations array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToAuditInformations(entity.AuditInformation element) {
    __getInternalInterface().addArrayElement(AUDITINFORMATIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Contingencies array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContingencies(entity.Contingency element) {
    __getInternalInterface().addArrayElement(CONTINGENCIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the IssueHistories array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIssueHistories(entity.UWIssueHistory element) {
    __getInternalInterface().addArrayElement(ISSUEHISTORIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Jobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJobs(entity.Job element) {
    __getInternalInterface().addArrayElement(JOBS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToNotes(entity.Note element) {
    __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Periods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPeriods(entity.PolicyPeriod element) {
    __getInternalInterface().addArrayElement(PERIODS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PriorLosses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPriorLosses(entity.LossHistoryEntry element) {
    __getInternalInterface().addArrayElement(PRIORLOSSES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PriorPolicies array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPriorPolicies(entity.PriorPolicy element) {
    __getInternalInterface().addArrayElement(PRIORPOLICIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the RIRiskVLContainers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRIRiskVLContainers(entity.RIRiskVLContainer element) {
    __getInternalInterface().addArrayElement(RIRISKVLCONTAINERS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoleAssignments(entity.PolicyUserRoleAssignment element) {
    __getInternalInterface().addArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the UWReferralReasons array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUWReferralReasons(entity.UWReferralReason element) {
    __getInternalInterface().addArrayElement(UWREFERRALREASONS_PROP.get(), element);
  }
  
  /**
   * Assigns the given User/Group pair to the given role on this assignable object.
   * If the role is exclusive, replaces the existing assignment. Otherwise, adds a
   * new assignment for the given User/Group pair, if none already exists for that
   * role.
   * @param user 
   * @param group 
   * @param role 
   */
  public entity.PolicyUserRoleAssignment assignUserRole(entity.User user, entity.Group group, typekey.UserRole role) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).assignUserRole(user, group, role);
  }
  
  /**
   * Assigns the UserRole for this assignable item.
   * This uses rules to find the right assignment
   * @param role The role to assign
   */
  public boolean autoAssignRole(typekey.UserRole role) {
    return ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).autoAssignRole(role);
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
   * Return whether or not we can start an audit on this policy.
   * @param effectiveDate An effective date within the audit term
   * @return Null if an audit can be started on this policy, or an error message
   * explaining why an audit cannot be started.
   */
  public java.lang.String canStartAudit(java.util.Date effectiveDate) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartAudit(effectiveDate);
  }
  
  /**
   * Returns whether or not this Policy can be canceled.
   * @param effectiveDate The effective date at which the job is to be started
   * @return Null if a cancellation can be started on this policy as of the given
   * date, or an error message explaining why a cancellation cannot be started.
   */
  public java.lang.String canStartCancellation(java.util.Date effectiveDate) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartCancellation(effectiveDate);
  }
  
  /**
   * Returns whether or not an Issuance job can be started for this policy.
   * @return Null if an issuance can be started on this policy, or an error message
   * explaining why an issuance cannot be started.
   */
  public java.lang.String canStartIssuance() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartIssuance();
  }
  
  /**
   * Returns whether or not this policy can be changed.
   * @param effectiveDate The effective date at which the job is to be started
   * @return Null if a policy change can be started on this policy as of the given
   * date, or an error message explaining why a change cannot be started.
   */
  public java.lang.String canStartPolicyChange(java.util.Date effectiveDate) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartPolicyChange(effectiveDate);
  }
  
  /**
   * Returns whether or not this policy can be renewed.
   * @return Null if a renewal can be started on this policy as of the given
   * date, or an error message explaining why a renewal cannot be started.
   */
  public java.lang.String canStartRenewal() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartRenewal();
  }
  
  /**
   * Returns whether or not this policy can be rewritten.
   * @param effDate The effective date of the rewrite period
   * @param expDate The expiration date of the rewrite period
   * @return Null if a rewrite can be started on this policy as of the given
   * date, or an error message explaining why a rewrite cannot be started.
   */
  public java.lang.String canStartRewrite(java.util.Date effDate, java.util.Date expDate) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartRewrite(effDate, expDate);
  }
  
  /**
   * 
   * @return true if we can view notes for the policy.
   * Will return false if this is an external policy
   * for which notes have not been retrieved.
   */
  public boolean canViewNotes() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canViewNotes();
  }
  
  /**
   * Reset rewrite new account policy links
   */
  public void clearPolicyLinksForRewriteNewAccount() {
    ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).clearPolicyLinksForRewriteNewAccount();
  }
  
  /**
   * Clone this Policy, copying internal fields.
   * @return Clone of policy with internal fields copied
   */
  public entity.Policy clonePolicy() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).clonePolicy();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Creates a new assignment and adds it to the policy.
   * @return The new assignment. All fields are initially empty.
   */
  public entity.PolicyUserRoleAssignment createAndAddRoleAssignment() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).createAndAddRoleAssignment();
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
   * Creates a draft PolicyPeriod instance.  Only to be used to "seed" the PolicyPeriod chain - will check that
   * there aren't any PolicyPeriods on this Policy.  After there are PolicyPeriods on the Policy, then
   * PolicyPeriod.createDraftPeriod should be used.
   * @param policyPeriodEffectiveDate initial effective date.  If null, assumes today.
   * @return draft PolicyPeriod
   */
  public entity.PolicyPeriod createDraftPeriod(java.util.Date policyPeriodEffectiveDate) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).createDraftPeriod(policyPeriodEffectiveDate);
  }
  
  /**
   * Creates a new PolicyPeriod instance which represents a policy period from an external system that
   * undergoes a renewal conversion into PolicyCenter. Used to "seed" the PolicyPeriod chain - will check
   * that there aren't any PolicyPeriods on this Policy. This PolicyPeriod will be set to have the status
   * <code>TC_LEGACYCONVERSION</code> and will have the term type <code>TC_OTHER</code>.
   * @param effectiveDate effective date of the external period. If null, throw IllegalStateException.
   * @param expirationDate expiration date external period.  If null, throw IllegalStateException.
   * @param policyNumber the policy number for the legacy period.
   * @return legacy PolicyPeriod
   */
  public entity.PolicyPeriod createLegacyPeriod(java.util.Date effectiveDate, java.util.Date expirationDate, java.lang.String policyNumber) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).createLegacyPeriod(effectiveDate, expirationDate, policyNumber);
  }
  
  public java.lang.String debug(int level) {
    return ((com.guidewire.pc.system.debug.Debuggable)__getDelegateManager().getImplementation("com.guidewire.pc.system.debug.Debuggable")).debug(level);
  }
  
  /**
   * Returns the most recent non-cancelled promoted <code>PolicyPeriod</code> belonging to the policy
   * between the given start and end dates.
   * @param rangeStart the start of the date range
   * @param rangeEnd the end of the date range
   * @return the most recent non-cancelled promoted policy period within the date range
   */
  public entity.PolicyPeriod findMostRecentNoncancelledBoundPeriodWithinDateRange(java.util.Date rangeStart, java.util.Date rangeEnd) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).findMostRecentNoncancelledBoundPeriodWithinDateRange(rangeStart, rangeEnd);
  }
  
  /**
   * Returns all unique policy numbers for any most recently bound PolicyPeriods on this policy,
   * for which the effective date range of the PolicyPeriod overlaps at least a portion of the
   * supplied date range.  The date ranges overlap if the end date of the date range is on or after
   * the period start date, and the start date of the date range is on or before the period end date.
   * Only the policy periods that the user has permission to view are returned
   * @param dateRange The range to search
   * @return unique policy numbers for all periods overlapping the supplied date range that the user
   * has view permission for
   */
  public java.util.Set<java.lang.String> findUniquePolicyNumbers(gw.api.database.DBDateRange dateRange) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).findUniquePolicyNumbers(dateRange);
  }
  
  /**
   * Gets the value of the APDProduct field.
   * Advanced product development product
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProduct getAPDProduct() {
    return (entity.APDProduct)__getInternalInterface().getFieldValue(APDPRODUCT_PROP.get());
  }
  
  /**
   * Gets the value of the Account field.
   * The Account to which this policy belongs.  Note that getting the value of this foreign key may result in the Account being re-retrieved if it is a non-SOR account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount() {
    return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
  }
  
  /**
   * Gets the active assignments to the given role.
   * @param userRole 
   * @return 
   */
  public entity.PolicyUserRoleAssignment[] getActiveUserRoleAssignments(typekey.UserRole userRole) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getActiveUserRoleAssignments(userRole);
  }
  
  /**
   * Return all audit informations associated with this policy.
   * @return an array of audit informations
   */
  public entity.AuditInformation[] getAllAuditInformations() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getAllAuditInformations();
  }
  
  /**
   * Gets all the notes for the policy. It does filter out the notes which
   * the current user is not allowed to view.
   * @return a list of the most recent Notes
   */
  public java.util.List<entity.Note> getAllNotesForView() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getAllNotesForView();
  }
  
  /**
   * 
   * @return all open activities on the policy
   */
  public gw.api.database.IQueryBeanResult<entity.Activity> getAllOpenActivities() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getAllOpenActivities();
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
   * Returns an array with the edit effective dates of all periods on this
   * policy. The array will be sorted in increasing date order, and no date
   * will appear more than once.
   * @return sorted array of bound edif effective dates
   */
  public java.util.Date[] getBoundEditEffectiveDates() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getBoundEditEffectiveDates();
  }
  
  public entity.EffDatedBranch[] getBranchesUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedContainerPublicMethods")).getBranchesUntyped();
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
   * Returns the user role assignment for the current rule execution
   */
  public entity.PolicyUserRoleAssignment getCurrentRoleAssignment() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getCurrentRoleAssignment();
  }
  
  /**
   * Return the QueryProcessor of policies which split/spin from it.
   * @return A QueryProcessor of policies
   */
  public gw.api.database.IQueryBeanResult<entity.Policy> getDividedPoliciesQryResult() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getDividedPoliciesQryResult();
  }
  
  /**
   * Return the source policy it split/spin from
   * @return a Policy
   */
  public entity.Policy getDividedSourcePolicy() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getDividedSourcePolicy();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyDivide getDividedToNewAccountSourceJoin() {
    return (entity.PolicyPolicyDivide)__getInternalInterface().getFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOIN_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyDivide[] getDividedToNewAccountSourceJoinArray() {
    return (entity.PolicyPolicyDivide[])__getInternalInterface().getFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyEffDatedRegistry[] getEffDatedRegistry() {
    return (entity.PolicyEffDatedRegistry[])__getInternalInterface().getFieldValue(EFFDATEDREGISTRY_PROP.get());
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
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IssueDate field.
   * The date on which this policy was issued by the issuing job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getIssueDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ISSUEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the IssueHistories field.
   * History of changes to all UW issues associated with this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueHistory[] getIssueHistories() {
    return (entity.UWIssueHistory[])__getInternalInterface().getFieldValue(ISSUEHISTORIES_PROP.get());
  }
  
  /**
   * Gets the value of the Jobs field.
   * Jobs of this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job[] getJobs() {
    return (entity.Job[])__getInternalInterface().getFieldValue(JOBS_PROP.get());
  }
  
  /**
   * Gets the value of the LossHistoryType field.
   * How the loss history is described for this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LossHistoryType getLossHistoryType() {
    return (typekey.LossHistoryType)__getInternalInterface().getFieldValue(LOSSHISTORYTYPE_PROP.get());
  }
  
  /**
   * Returns the most recent bound period on the most recent term of this policy, i.e.
   * returns the {@link entity.PolicyPeriod#getLatestPeriod() PolicyPeriod.getLatestPeriod()}
   * on a period from the term whose {@link entity.PolicyTerm#isMostRecentTerm() PolicyTerm.isMostRecentTerm()}
   * returns <code>true</code>
   */
  public entity.PolicyPeriod getMostRecentBoundPeriodOnMostRecentTerm() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getMostRecentBoundPeriodOnMostRecentTerm();
  }
  
  /**
   * Gets the most recent notes for the policy. This should not
   * be used to get a very large number of notes: since it returns
   * a list, all notes are immediately loaded into memory.
   * @param numNotes the number of notes to get
   * @return a list of the most recent Notes
   */
  public java.util.List<entity.Note> getMostRecentNotesForView(int numNotes) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getMostRecentNotesForView(numNotes);
  }
  
  /**
   * Gets the value of the MovedPolicySourceAccount field.
   * The Account to which this policy comes from.  This field is populated if the policy is moved from other account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getMovedPolicySourceAccount() {
    return (entity.Account)__getInternalInterface().getFieldValue(MOVEDPOLICYSOURCEACCOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the MovedPolicySourceAccountPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMovedPolicySourceAccountPublicID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MOVEDPOLICYSOURCEACCOUNTPUBLICID_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes() {
    return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
  }
  
  /**
   * Get notes that are of the given topic
   * @param topic Topic by which to filter notes. May be null in which case notes of any topic
   *              are returned.
   * @return list of notes with the specified topic
   */
  public gw.api.database.IQueryBeanResult<entity.Note> getNotes(typekey.NoteTopicType topic) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getNotes(topic);
  }
  
  /**
   * Gets the value of the NumPriorLosses field.
   * The number of losses. Only applicable for a loss history type of 'attached'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumPriorLosses() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMPRIORLOSSES_PROP.get());
  }
  
  /**
   * Find all open work orders for this policy.
   * @return All open (i.e., non-completed) work orders for this policy.
   */
  public entity.Job[] getOpenJobs() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getOpenJobs();
  }
  
  /**
   * 
   * @return the in progress renewal job on this Policy if one exists; otherwise
   * returns null.
   */
  public entity.Renewal getOpenRenewalJob() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getOpenRenewalJob();
  }
  
  /**
   * Gets the user role assignment for that role
   * If there's no assignment for that role, creates a new one.
   * If there is more than one assignment for that role, then the first role will be returned no matter
   * whether the role is exclusive or not.
   * @param role The role for the assignment
   * @return the existing user role assignment if found, or a new one if not found
   */
  public entity.PolicyUserRoleAssignment getOrCreateUserRoleAssignmentByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getOrCreateUserRoleAssignmentByRole(role);
  }
  
  /**
   * Gets the value of the OriginalEffectiveDate field.
   * The date on which this policy was originally issued or bound.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getOriginalEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ORIGINALEFFECTIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the PackageRisk field.
   * Package Risk Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PackageRisk getPackageRisk() {
    return (typekey.PackageRisk)__getInternalInterface().getFieldValue(PACKAGERISK_PROP.get());
  }
  
  /**
   * Gets the value of the Periods field.
   * Periods of this policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod[] getPeriods() {
    return (entity.PolicyPeriod[])__getInternalInterface().getFieldValue(PERIODS_PROP.get());
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
   * Gets the value of the PrimaryLanguage field.
   * The policy's preferred language
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getPrimaryLanguage() {
    return (typekey.LanguageType)__getInternalInterface().getFieldValue(PRIMARYLANGUAGE_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryLocale field.
   * The policy's preferred locale
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LocaleType getPrimaryLocale() {
    return (typekey.LocaleType)__getInternalInterface().getFieldValue(PRIMARYLOCALE_PROP.get());
  }
  
  /**
   * Gets the value of the PriorLosses field.
   * Loss history detail entries. Only applicable for a loss history type of 'manually entered'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LossHistoryEntry[] getPriorLosses() {
    return (entity.LossHistoryEntry[])__getInternalInterface().getFieldValue(PRIORLOSSES_PROP.get());
  }
  
  /**
   * Gets the value of the PriorPolicies field.
   * Prior policy information for this policyholder.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PriorPolicy[] getPriorPolicies() {
    return (entity.PriorPolicy[])__getInternalInterface().getFieldValue(PRIORPOLICIES_PROP.get());
  }
  
  /**
   * Gets the value of the PriorPremiums field.
   * Premiums for policy terms prior to PC conversion. This value can be set during conversion on renewal.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getPriorPremiums() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(PRIORPREMIUMS_PROP.get());
  }
  
  /**
   * Gets the value of the PriorPremiums_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPriorPremiums_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRIORPREMIUMS_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the PriorPremiums_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPriorPremiums_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(PRIORPREMIUMS_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the PriorTotalIncurred field.
   * The total incurred. Only applicable for a loss history type of 'attached'.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getPriorTotalIncurred() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(PRIORTOTALINCURRED_PROP.get());
  }
  
  /**
   * Gets the value of the PriorTotalIncurred_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPriorTotalIncurred_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRIORTOTALINCURRED_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the PriorTotalIncurred_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPriorTotalIncurred_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(PRIORTOTALINCURRED_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerCodeOfService field.
   * The producer code that manages this policy and can modify it.  If external user use producer code security, the user must have this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfService() {
    return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFSERVICE_PROP.get());
  }
  
  /**
   * 
   * @return The product associated with this policy.
   */
  public gw.api.productmodel.Product getProduct() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getProduct();
  }
  
  /**
   * Gets the value of the ProductCode field.
   * The Product defining what kind of Policy this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTCODE_PROP.get());
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
   * Gets the value of the RIRiskVLContainers field.
   * All RI Risk VL Containers for any period on this policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVLContainer[] getRIRiskVLContainers() {
    return (entity.RIRiskVLContainer[])__getInternalInterface().getFieldValue(RIRISKVLCONTAINERS_PROP.get());
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
   * If this policy has been rewritten into an new Account, find the resulting policy, otherwise return null.
   * @return policy that this policy was rewritten to if any
   */
  public entity.Policy getRewrittenToNewAccountDestination() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getRewrittenToNewAccountDestination();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite getRewrittenToNewAccountDestinationJoin() {
    return (entity.PolicyPolicyRewrite)__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOIN_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite[] getRewrittenToNewAccountDestinationJoinArray() {
    return (entity.PolicyPolicyRewrite[])__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP.get());
  }
  
  /**
   * If this policy has been rewritten into an new Account, find the resulting policy, otherwise return null.
   * @return policy that this policy was rewritten to if any
   */
  public entity.Policy getRewrittenToNewAccountSource() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getRewrittenToNewAccountSource();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite getRewrittenToNewAccountSourceJoin() {
    return (entity.PolicyPolicyRewrite)__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTSOURCEJOIN_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPolicyRewrite[] getRewrittenToNewAccountSourceJoinArray() {
    return (entity.PolicyPolicyRewrite[])__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP.get());
  }
  
  /**
   * Gets the value of the RoleAssignments field.
   * Role Assignments for this bean.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyUserRoleAssignment[] getRoleAssignments() {
    return (entity.PolicyUserRoleAssignment[])__getInternalInterface().getFieldValue(ROLEASSIGNMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the UWReferralReasons field.
   * Referral reasons of the policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWReferralReason[] getUWReferralReasons() {
    return (entity.UWReferralReason[])__getInternalInterface().getFieldValue(UWREFERRALREASONS_PROP.get());
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
  
  /**
   * Gets the assignment that corresponds to the given user and role, or null
   * if none matches.
   * @param user 
   * @param userRole 
   * @return 
   */
  public entity.PolicyUserRoleAssignment getUserRoleAssignment(entity.User user, typekey.UserRole userRole) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getUserRoleAssignment(user, userRole);
  }
  
  /**
   * Gets the user role assignment for that role
   * If there's no assignment for that role, returns null.
   * If there is more than one assignment for that role, then the first role will be returned.
   * Note: getUserRoleAssignmentsByRole(UserRole) should be called if multiple assignments are expected to return.
   * @param role The role for the assignment
   */
  public entity.PolicyUserRoleAssignment getUserRoleAssignmentByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getUserRoleAssignmentByRole(role);
  }
  
  /**
   * Get the user role assignments for that role. If no assignment for that role,
   * then an empty array is returned.
   * @param role The role for the assignment
   * @return an array of user role assignments for the given role. The array is empty if no such user role assignment.
   */
  public entity.PolicyUserRoleAssignment[] getUserRoleAssignmentsByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getUserRoleAssignmentsByRole(role);
  }
  
  public java.lang.String getVersionString() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
  }
  
  /**
   * Determines whether or not this policy has an open cancellation.
   * @return true if there is an open cancellation job on the policy
   */
  public boolean hasOpenCancellationJob() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenCancellationJob();
  }
  
  /**
   * 
   * @return true if an issuance job is in progress for this policy.
   */
  public boolean hasOpenIssuanceJob() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenIssuanceJob();
  }
  
  public <T extends entity.Job> boolean hasOpenJobOfType(java.lang.Class<T> jobClass) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenJobOfType(jobClass);
  }
  
  /**
   * 
   * @return true if and only if this policy has an associated
   * in progress PolicyChange job whose policy period
   * contains <code>effectiveDate</code>. A job is considered
   * "in progress" if the job is not complete and at least one
   * of its periods is active (i.e., at least one has not been
   * withdrawn or declined).
   */
  public boolean hasOpenPolicyChangeJob() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenPolicyChangeJob();
  }
  
  /**
   * 
   * @param period PolicyPeriod representing a logical policy term
   * @return true if there is an open Reinstatement job in the same term as "period"
   */
  public boolean hasOpenReinstateJobForPeriod(entity.PolicyPeriod period) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenReinstateJobForPeriod(period);
  }
  
  /**
   * Determines whether or not this policy has an open rewrite job.
   * @return True if this policy has an open rewrite <i>or</i> an open cancellation
   * whose ReasonCode is "rewrite".
   */
  public boolean hasOpenRewriteJob() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenRewriteJob();
  }
  
  /**
   * Gets the value of the DoNotArchive field.
   * Do not archive any of the terms for this Policy. Terms that are already archived will not be automatically retrieved.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotArchive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTARCHIVE_PROP.get());
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
  
  /**
   * Determines whether the given role is exclusive for this type of assignable object.
   * @param userRole 
   * @return 
   */
  public boolean isExclusive(typekey.UserRole userRole) {
    return ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).isExclusive(userRole);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
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
  
  /**
   * Indicates if a new version of a policy on the supplied effective date
   * would be out-of-sequence or not. A policy version is out of sequence
   * if there is a bound version of that policy in the same period with a
   * later effective date. (By definition, handling OOS changes is an
   * "intra-branch" operation, meaning we are only ever operating on a
   * single branch, the current branch with OOS changes.)
   * @param periodEffectiveDate Effective date which is checked to see if
   *                            it would result in an out-of-sequence change.
   * @return True if a change on "periodEffectiveDate" would be out-of-sequence,
   * and false otherwise.
   */
  public boolean isOOSChange(java.util.Date periodEffectiveDate) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).isOOSChange(periodEffectiveDate);
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
   * Marks the policy as issued by setting the issue date on it. The date must be non-null.
   * If the issue date is already non-null the method will throw.
   * @param issueDate The date on which this policy is issued.
   */
  public void markIssued(java.util.Date issueDate) {
    ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).markIssued(issueDate);
  }
  
  /**
   * Creates a new note on this policy.
   * @return the new Note.
   */
  public entity.Note newNote() {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).newNote();
  }
  
  /**
   * Creates a new note on this policy and sets the topic
   * @param topic Topic for the new note. May be null.
   * @return the new note
   */
  public entity.Note newNote(typekey.NoteTopicType topic) {
    return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).newNote(topic);
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
   * Removes the given element from the IssueHistories array. This is achieved by marking the element for removal.
   */
  public void removeFromIssueHistories(entity.UWIssueHistory element) {
    __getInternalInterface().removeArrayElement(ISSUEHISTORIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the IssueHistories array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIssueHistories(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ISSUEHISTORIES_PROP.get(), elementID);
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
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
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
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   */
  public void removeFromPeriods(entity.PolicyPeriod element) {
    __getInternalInterface().removeArrayElement(PERIODS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPeriods(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PERIODS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PriorLosses array. This is achieved by marking the element for removal.
   */
  public void removeFromPriorLosses(entity.LossHistoryEntry element) {
    __getInternalInterface().removeArrayElement(PRIORLOSSES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PriorLosses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPriorLosses(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PRIORLOSSES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PriorPolicies array. This is achieved by marking the element for removal.
   */
  public void removeFromPriorPolicies(entity.PriorPolicy element) {
    __getInternalInterface().removeArrayElement(PRIORPOLICIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PriorPolicies array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPriorPolicies(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PRIORPOLICIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RIRiskVLContainers array. This is achieved by marking the element for removal.
   */
  public void removeFromRIRiskVLContainers(entity.RIRiskVLContainer element) {
    __getInternalInterface().removeArrayElement(RIRISKVLCONTAINERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RIRiskVLContainers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRIRiskVLContainers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RIRISKVLCONTAINERS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   */
  public void removeFromRoleAssignments(entity.PolicyUserRoleAssignment element) {
    __getInternalInterface().removeArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoleAssignments(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ROLEASSIGNMENTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the UWReferralReasons array. This is achieved by marking the element for removal.
   */
  public void removeFromUWReferralReasons(entity.UWReferralReason element) {
    __getInternalInterface().removeArrayElement(UWREFERRALREASONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the UWReferralReasons array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUWReferralReasons(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(UWREFERRALREASONS_PROP.get(), elementID);
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
   * Sets the value of the APDProduct field.
   */
  public void setAPDProduct(entity.APDProduct value) {
    __getInternalInterface().setFieldValue(APDPRODUCT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value) {
    __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
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
  
  /**
   * If this policy is split/spin from other policy, set the Source policy of this split/spin policy.
   * @param sourcePolicy The policy from which this one was split or spun
   */
  public void setDividedSourcePolicy(entity.Policy sourcePolicy) {
    ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDividedSourcePolicy(sourcePolicy);
  }
  
  /**
   * Sets the value of the DividedToNewAccountSourceJoin field.
   */
  private void setDividedToNewAccountSourceJoin(entity.PolicyPolicyDivide value) {
    __getInternalInterface().setFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOIN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DividedToNewAccountSourceJoinArray field.
   */
  private void setDividedToNewAccountSourceJoinArray(entity.PolicyPolicyDivide[] value) {
    __getInternalInterface().setFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DoNotArchive field.
   */
  private void setDoNotArchive(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DONOTARCHIVE_PROP.get(), value);
  }
  
  public void setDoNotArchive(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
    ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDoNotArchive(value, getDescription);
  }
  
  /**
   * Sets the value of the DoNotDestroy field.
   */
  private void setDoNotDestroy(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DONOTDESTROY_PROP.get(), value);
  }
  
  public void setDoNotDestroy(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
    ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDoNotDestroy(value, getDescription);
  }
  
  @java.lang.Deprecated
  public void setDoNotPurge(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
    ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDoNotPurge(value, getDescription);
  }
  
  /**
   * Sets the value of the EffDatedRegistry field.
   */
  private void setEffDatedRegistry(entity.PolicyEffDatedRegistry[] value) {
    __getInternalInterface().setFieldValue(EFFDATEDREGISTRY_PROP.get(), value);
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
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IssueDate field.
   */
  private void setIssueDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ISSUEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IssueHistories field.
   */
  public void setIssueHistories(entity.UWIssueHistory[] value) {
    __getInternalInterface().setFieldValue(ISSUEHISTORIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Jobs field.
   */
  public void setJobs(entity.Job[] value) {
    __getInternalInterface().setFieldValue(JOBS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossHistoryType field.
   */
  public void setLossHistoryType(typekey.LossHistoryType value) {
    __getInternalInterface().setFieldValue(LOSSHISTORYTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MovedPolicySourceAccount field.
   */
  public void setMovedPolicySourceAccount(entity.Account value) {
    __getInternalInterface().setFieldValue(MOVEDPOLICYSOURCEACCOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MovedPolicySourceAccountPublicID field.
   */
  public void setMovedPolicySourceAccountPublicID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MOVEDPOLICYSOURCEACCOUNTPUBLICID_PROP.get(), value);
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
  private void setNotes(entity.Note[] value) {
    __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NumPriorLosses field.
   */
  public void setNumPriorLosses(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMPRIORLOSSES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OriginalEffectiveDate field.
   */
  public void setOriginalEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ORIGINALEFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PackageRisk field.
   */
  public void setPackageRisk(typekey.PackageRisk value) {
    __getInternalInterface().setFieldValue(PACKAGERISK_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Periods field.
   */
  public void setPeriods(entity.PolicyPeriod[] value) {
    __getInternalInterface().setFieldValue(PERIODS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryLanguage field.
   */
  public void setPrimaryLanguage(typekey.LanguageType value) {
    __getInternalInterface().setFieldValue(PRIMARYLANGUAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryLocale field.
   */
  public void setPrimaryLocale(typekey.LocaleType value) {
    __getInternalInterface().setFieldValue(PRIMARYLOCALE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorLosses field.
   */
  public void setPriorLosses(entity.LossHistoryEntry[] value) {
    __getInternalInterface().setFieldValue(PRIORLOSSES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorPolicies field.
   */
  public void setPriorPolicies(entity.PriorPolicy[] value) {
    __getInternalInterface().setFieldValue(PRIORPOLICIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorPremiums field.
   */
  public void setPriorPremiums(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(PRIORPREMIUMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorPremiums_amt field.
   */
  private void setPriorPremiums_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRIORPREMIUMS_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorPremiums_cur field.
   */
  private void setPriorPremiums_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PRIORPREMIUMS_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorTotalIncurred field.
   */
  public void setPriorTotalIncurred(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(PRIORTOTALINCURRED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorTotalIncurred_amt field.
   */
  private void setPriorTotalIncurred_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRIORTOTALINCURRED_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PriorTotalIncurred_cur field.
   */
  private void setPriorTotalIncurred_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PRIORTOTALINCURRED_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerCodeOfService field.
   */
  public void setProducerCodeOfService(entity.ProducerCode value) {
    __getInternalInterface().setFieldValue(PRODUCERCODEOFSERVICE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductCode field.
   */
  private void setProductCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTCODE_PROP.get(), value);
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
   * Sets the value of the RIRiskVLContainers field.
   */
  public void setRIRiskVLContainers(entity.RIRiskVLContainer[] value) {
    __getInternalInterface().setFieldValue(RIRISKVLCONTAINERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RewrittenToNewAccountDestinationJoin field.
   */
  private void setRewrittenToNewAccountDestinationJoin(entity.PolicyPolicyRewrite value) {
    __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOIN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RewrittenToNewAccountDestinationJoinArray field.
   */
  private void setRewrittenToNewAccountDestinationJoinArray(entity.PolicyPolicyRewrite[] value) {
    __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RewrittenToNewAccountSourceJoin field.
   */
  private void setRewrittenToNewAccountSourceJoin(entity.PolicyPolicyRewrite value) {
    __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTSOURCEJOIN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RewrittenToNewAccountSourceJoinArray field.
   */
  private void setRewrittenToNewAccountSourceJoinArray(entity.PolicyPolicyRewrite[] value) {
    __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoleAssignments field.
   */
  public void setRoleAssignments(entity.PolicyUserRoleAssignment[] value) {
    __getInternalInterface().setFieldValue(ROLEASSIGNMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UWReferralReasons field.
   */
  public void setUWReferralReasons(entity.UWReferralReason[] value) {
    __getInternalInterface().setFieldValue(UWREFERRALREASONS_PROP.get(), value);
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
  
  /**
   * Removes the role from the given User on this assignable object.
   * @param user 
   * @param role 
   */
  public void unassignUserRole(entity.User user, typekey.UserRole role) {
    ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).unassignUserRole(user, role);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PolicyInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Policy.this.__getDelegateManager();
    }
    
    public void accept(gw.api.domain.PinnableVisitor pinnableVisitor) {
      ((com.guidewire.pc.domain.personaldata.PinnableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.personaldata.PinnableDomainMethods")).accept(pinnableVisitor);
    }
    
    public void addEffDatedRegistry(entity.EffDatedContainer container) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).addEffDatedRegistry(container);
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
    
    public void addExpiringPeriodsRestrictions(gw.api.database.IQueryBuilder periodQuery, int numDays, java.util.Date dateNow, java.util.Map<gw.entity.ILinkPropertyInfo, gw.api.database.Table<entity.PolicyPeriod>> joins) {
      ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).addExpiringPeriodsRestrictions(periodQuery, numDays, dateNow, joins);
    }
    
    /**
     * Adds the given element to the AuditInformations array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAuditInformations(entity.AuditInformation element) {
      __getInternalInterface().addArrayElement(AUDITINFORMATIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Contingencies array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToContingencies(entity.Contingency element) {
      __getInternalInterface().addArrayElement(CONTINGENCIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the DividedToNewAccountSourceJoinArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDividedToNewAccountSourceJoinArray(entity.PolicyPolicyDivide element) {
      __getInternalInterface().addArrayElement(DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the EffDatedRegistry array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToEffDatedRegistry(entity.PolicyEffDatedRegistry element) {
      __getInternalInterface().addArrayElement(EFFDATEDREGISTRY_PROP.get(), element);
    }
    
    public void addToEffDatedRegistry(gw.entity.IEntityType type) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).addToEffDatedRegistry(type);
    }
    
    /**
     * Adds the given element to the IssueHistories array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToIssueHistories(entity.UWIssueHistory element) {
      __getInternalInterface().addArrayElement(ISSUEHISTORIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Jobs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToJobs(entity.Job element) {
      __getInternalInterface().addArrayElement(JOBS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToNotes(entity.Note element) {
      __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Periods array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPeriods(entity.PolicyPeriod element) {
      __getInternalInterface().addArrayElement(PERIODS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PriorLosses array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPriorLosses(entity.LossHistoryEntry element) {
      __getInternalInterface().addArrayElement(PRIORLOSSES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PriorPolicies array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPriorPolicies(entity.PriorPolicy element) {
      __getInternalInterface().addArrayElement(PRIORPOLICIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RIRiskVLContainers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRIRiskVLContainers(entity.RIRiskVLContainer element) {
      __getInternalInterface().addArrayElement(RIRISKVLCONTAINERS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RewrittenToNewAccountDestinationJoinArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRewrittenToNewAccountDestinationJoinArray(entity.PolicyPolicyRewrite element) {
      __getInternalInterface().addArrayElement(REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RewrittenToNewAccountSourceJoinArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRewrittenToNewAccountSourceJoinArray(entity.PolicyPolicyRewrite element) {
      __getInternalInterface().addArrayElement(REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRoleAssignments(entity.PolicyUserRoleAssignment element) {
      __getInternalInterface().addArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
    }
    
    public void addToRoleAssignments(entity.UserRoleAssignmentDelegate element) {
      ((com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods")).addToRoleAssignments(element);
    }
    
    /**
     * Adds the given element to the UWReferralReasons array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToUWReferralReasons(entity.UWReferralReason element) {
      __getInternalInterface().addArrayElement(UWREFERRALREASONS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    /**
     * Assigns the given User/Group pair to the given role on this assignable object.
     * If the role is exclusive, replaces the existing assignment. Otherwise, adds a
     * new assignment for the given User/Group pair, if none already exists for that
     * role.
     * @param user 
     * @param group 
     * @param role 
     */
    public entity.PolicyUserRoleAssignment assignUserRole(entity.User user, entity.Group group, typekey.UserRole role) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).assignUserRole(user, group, role);
    }
    
    /**
     * Assigns the UserRole for this assignable item.
     * This uses rules to find the right assignment
     * @param role The role to assign
     */
    public boolean autoAssignRole(typekey.UserRole role) {
      return ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).autoAssignRole(role);
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
    
    /**
     * Return whether or not we can start an audit on this policy.
     * @param effectiveDate An effective date within the audit term
     * @return Null if an audit can be started on this policy, or an error message
     * explaining why an audit cannot be started.
     */
    public java.lang.String canStartAudit(java.util.Date effectiveDate) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartAudit(effectiveDate);
    }
    
    /**
     * Returns whether or not this Policy can be canceled.
     * @param effectiveDate The effective date at which the job is to be started
     * @return Null if a cancellation can be started on this policy as of the given
     * date, or an error message explaining why a cancellation cannot be started.
     */
    public java.lang.String canStartCancellation(java.util.Date effectiveDate) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartCancellation(effectiveDate);
    }
    
    /**
     * Returns whether or not an Issuance job can be started for this policy.
     * @return Null if an issuance can be started on this policy, or an error message
     * explaining why an issuance cannot be started.
     */
    public java.lang.String canStartIssuance() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartIssuance();
    }
    
    /**
     * Returns whether or not this policy can be changed.
     * @param effectiveDate The effective date at which the job is to be started
     * @return Null if a policy change can be started on this policy as of the given
     * date, or an error message explaining why a change cannot be started.
     */
    public java.lang.String canStartPolicyChange(java.util.Date effectiveDate) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartPolicyChange(effectiveDate);
    }
    
    /**
     * Returns whether or not this policy can be renewed.
     * @return Null if a renewal can be started on this policy as of the given
     * date, or an error message explaining why a renewal cannot be started.
     */
    public java.lang.String canStartRenewal() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartRenewal();
    }
    
    /**
     * Returns whether or not this policy can be rewritten.
     * @param effDate The effective date of the rewrite period
     * @param expDate The expiration date of the rewrite period
     * @return Null if a rewrite can be started on this policy as of the given
     * date, or an error message explaining why a rewrite cannot be started.
     */
    public java.lang.String canStartRewrite(java.util.Date effDate, java.util.Date expDate) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canStartRewrite(effDate, expDate);
    }
    
    /**
     * 
     * @return true if we can view notes for the policy.
     * Will return false if this is an external policy
     * for which notes have not been retrieved.
     */
    public boolean canViewNotes() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).canViewNotes();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public void checkArchiveEligibility() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).checkArchiveEligibility();
    }
    
    public void cleanEffDatedRegistry() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).cleanEffDatedRegistry();
    }
    
    /**
     * Reset rewrite new account policy links
     */
    public void clearPolicyLinksForRewriteNewAccount() {
      ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).clearPolicyLinksForRewriteNewAccount();
    }
    
    public void clearTraceDetails() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).clearTraceDetails();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * Clone this Policy, copying internal fields.
     * @return Clone of policy with internal fields copied
     */
    public entity.Policy clonePolicy() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).clonePolicy();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.Renewal createAndAddRenewal() {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).createAndAddRenewal();
    }
    
    /**
     * Creates a new assignment and adds it to the policy.
     * @return The new assignment. All fields are initially empty.
     */
    public entity.PolicyUserRoleAssignment createAndAddRoleAssignment() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).createAndAddRoleAssignment();
    }
    
    public entity.Submission createAndAddSubmission() {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).createAndAddSubmission();
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
     * Creates a draft PolicyPeriod instance.  Only to be used to "seed" the PolicyPeriod chain - will check that
     * there aren't any PolicyPeriods on this Policy.  After there are PolicyPeriods on the Policy, then
     * PolicyPeriod.createDraftPeriod should be used.
     * @param policyPeriodEffectiveDate initial effective date.  If null, assumes today.
     * @return draft PolicyPeriod
     */
    public entity.PolicyPeriod createDraftPeriod(java.util.Date policyPeriodEffectiveDate) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).createDraftPeriod(policyPeriodEffectiveDate);
    }
    
    /**
     * Creates a new PolicyPeriod instance which represents a policy period from an external system that
     * undergoes a renewal conversion into PolicyCenter. Used to "seed" the PolicyPeriod chain - will check
     * that there aren't any PolicyPeriods on this Policy. This PolicyPeriod will be set to have the status
     * <code>TC_LEGACYCONVERSION</code> and will have the term type <code>TC_OTHER</code>.
     * @param effectiveDate effective date of the external period. If null, throw IllegalStateException.
     * @param expirationDate expiration date external period.  If null, throw IllegalStateException.
     * @param policyNumber the policy number for the legacy period.
     * @return legacy PolicyPeriod
     */
    public entity.PolicyPeriod createLegacyPeriod(java.util.Date effectiveDate, java.util.Date expirationDate, java.lang.String policyNumber) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).createLegacyPeriod(effectiveDate, expirationDate, policyNumber);
    }
    
    public java.lang.String debug(int level) {
      return ((com.guidewire.pc.system.debug.Debuggable)__getDelegateManager().getImplementation("com.guidewire.pc.system.debug.Debuggable")).debug(level);
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
     * Returns the most recent non-cancelled promoted <code>PolicyPeriod</code> belonging to the policy
     * between the given start and end dates.
     * @param rangeStart the start of the date range
     * @param rangeEnd the end of the date range
     * @return the most recent non-cancelled promoted policy period within the date range
     */
    public entity.PolicyPeriod findMostRecentNoncancelledBoundPeriodWithinDateRange(java.util.Date rangeStart, java.util.Date rangeEnd) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).findMostRecentNoncancelledBoundPeriodWithinDateRange(rangeStart, rangeEnd);
    }
    
    /**
     * Returns all unique policy numbers for any most recently bound PolicyPeriods on this policy,
     * for which the effective date range of the PolicyPeriod overlaps at least a portion of the
     * supplied date range.  The date ranges overlap if the end date of the date range is on or after
     * the period start date, and the start date of the date range is on or before the period end date.
     * Only the policy periods that the user has permission to view are returned
     * @param dateRange The range to search
     * @return unique policy numbers for all periods overlapping the supplied date range that the user
     * has view permission for
     */
    public java.util.Set<java.lang.String> findUniquePolicyNumbers(gw.api.database.DBDateRange dateRange) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).findUniquePolicyNumbers(dateRange);
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
     * Gets the value of the APDProduct field.
     * Advanced product development product
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDProduct getAPDProduct() {
      return (entity.APDProduct)__getInternalInterface().getFieldValue(APDPRODUCT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAPDProductID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(APDPRODUCT_PROP.get());
    }
    
    /**
     * Gets the value of the Account field.
     * The Account to which this policy belongs.  Note that getting the value of this foreign key may result in the Account being re-retrieved if it is a non-SOR account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Account getAccount() {
      return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAccountID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNT_PROP.get());
    }
    
    /**
     * Gets the active assignments to the given role.
     * @param userRole 
     * @return 
     */
    public entity.PolicyUserRoleAssignment[] getActiveUserRoleAssignments(typekey.UserRole userRole) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getActiveUserRoleAssignments(userRole);
    }
    
    /**
     * Return all audit informations associated with this policy.
     * @return an array of audit informations
     */
    public entity.AuditInformation[] getAllAuditInformations() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getAllAuditInformations();
    }
    
    public java.util.List<entity.EffDatedBranch> getAllMostRecentBoundPeriods() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getAllMostRecentBoundPeriods();
    }
    
    /**
     * Gets all the notes for the policy. It does filter out the notes which
     * the current user is not allowed to view.
     * @return a list of the most recent Notes
     */
    public java.util.List<entity.Note> getAllNotesForView() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getAllNotesForView();
    }
    
    /**
     * 
     * @return all open activities on the policy
     */
    public gw.api.database.IQueryBeanResult<entity.Activity> getAllOpenActivities() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getAllOpenActivities();
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
     * Returns an array with the edit effective dates of all periods on this
     * policy. The array will be sorted in increasing date order, and no date
     * will appear more than once.
     * @return sorted array of bound edif effective dates
     */
    public java.util.Date[] getBoundEditEffectiveDates() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getBoundEditEffectiveDates();
    }
    
    public java.util.stream.Stream<entity.PolicyPeriod> getBoundPeriodsForCalculatingBoundEditEffectiveDates() {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).getBoundPeriodsForCalculatingBoundEditEffectiveDates();
    }
    
    public entity.EffDatedBranch[] getBranchesUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedContainerPublicMethods")).getBranchesUntyped();
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
    
    /**
     * Returns the user role assignment for the current rule execution
     */
    public entity.PolicyUserRoleAssignment getCurrentRoleAssignment() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getCurrentRoleAssignment();
    }
    
    /**
     * Return the QueryProcessor of policies which split/spin from it.
     * @return A QueryProcessor of policies
     */
    public gw.api.database.IQueryBeanResult<entity.Policy> getDividedPoliciesQryResult() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getDividedPoliciesQryResult();
    }
    
    /**
     * Return the source policy it split/spin from
     * @return a Policy
     */
    public entity.Policy getDividedSourcePolicy() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getDividedSourcePolicy();
    }
    
    /**
     * Gets the value of the DividedToNewAccountSourceJoin field.
     * Points to the join table of divided policies.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPolicyDivide getDividedToNewAccountSourceJoin() {
      return (entity.PolicyPolicyDivide)__getInternalInterface().getFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOIN_PROP.get());
    }
    
    /**
     * Gets the value of the DividedToNewAccountSourceJoinArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPolicyDivide[] getDividedToNewAccountSourceJoinArray() {
      return (entity.PolicyPolicyDivide[])__getInternalInterface().getFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getDividedToNewAccountSourceJoinID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOIN_PROP.get());
    }
    
    /**
     * Gets the value of the EffDatedRegistry field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyEffDatedRegistry[] getEffDatedRegistry() {
      return (entity.PolicyEffDatedRegistry[])__getInternalInterface().getFieldValue(EFFDATEDREGISTRY_PROP.get());
    }
    
    public java.util.Set<java.lang.String> getEffDatedRegistryTableNamesInDB() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getEffDatedRegistryTableNamesInDB();
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
    
    public void getExclusiveLock() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getExclusiveLock();
    }
    
    public gw.api.database.Query getExpiringPeriodsQuery(int numDays, java.util.Date dateNow) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getExpiringPeriodsQuery(numDays, dateNow);
    }
    
    public int getExtensionsVersion() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getExtensionsVersion();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the IssueDate field.
     * The date on which this policy was issued by the issuing job.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getIssueDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ISSUEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the IssueHistories field.
     * History of changes to all UW issues associated with this policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UWIssueHistory[] getIssueHistories() {
      return (entity.UWIssueHistory[])__getInternalInterface().getFieldValue(ISSUEHISTORIES_PROP.get());
    }
    
    /**
     * Gets the value of the Jobs field.
     * Jobs of this policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job[] getJobs() {
      return (entity.Job[])__getInternalInterface().getFieldValue(JOBS_PROP.get());
    }
    
    public entity.EffDatedBranch getLatestPeriodInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getLatestPeriodInternal();
    }
    
    /**
     * Gets the value of the LossHistoryType field.
     * How the loss history is described for this policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LossHistoryType getLossHistoryType() {
      return (typekey.LossHistoryType)__getInternalInterface().getFieldValue(LOSSHISTORYTYPE_PROP.get());
    }
    
    /**
     * Returns the most recent bound period on the most recent term of this policy, i.e.
     * returns the {@link entity.PolicyPeriod#getLatestPeriod() PolicyPeriod.getLatestPeriod()}
     * on a period from the term whose {@link entity.PolicyTerm#isMostRecentTerm() PolicyTerm.isMostRecentTerm()}
     * returns <code>true</code>
     */
    public entity.PolicyPeriod getMostRecentBoundPeriodOnMostRecentTerm() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getMostRecentBoundPeriodOnMostRecentTerm();
    }
    
    /**
     * Gets the most recent notes for the policy. This should not
     * be used to get a very large number of notes: since it returns
     * a list, all notes are immediately loaded into memory.
     * @param numNotes the number of notes to get
     * @return a list of the most recent Notes
     */
    public java.util.List<entity.Note> getMostRecentNotesForView(int numNotes) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getMostRecentNotesForView(numNotes);
    }
    
    /**
     * Gets the value of the MovedPolicySourceAccount field.
     * The Account to which this policy comes from.  This field is populated if the policy is moved from other account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Account getMovedPolicySourceAccount() {
      return (entity.Account)__getInternalInterface().getFieldValue(MOVEDPOLICYSOURCEACCOUNT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getMovedPolicySourceAccountID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(MOVEDPOLICYSOURCEACCOUNT_PROP.get());
    }
    
    /**
     * Gets the value of the MovedPolicySourceAccountPublicID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMovedPolicySourceAccountPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MOVEDPOLICYSOURCEACCOUNTPUBLICID_PROP.get());
    }
    
    public entity.EffDatedBranch getNextPeriod(gw.pl.persistence.core.effdate.EffDatedKey key, com.guidewire.pl.system.util.DateRange range) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getNextPeriod(key, range);
    }
    
    /**
     * Gets the value of the Notes field.
     * Notes associated with this Policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Note[] getNotes() {
      return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
    }
    
    /**
     * Get notes that are of the given topic
     * @param topic Topic by which to filter notes. May be null in which case notes of any topic
     *              are returned.
     * @return list of notes with the specified topic
     */
    public gw.api.database.IQueryBeanResult<entity.Note> getNotes(typekey.NoteTopicType topic) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getNotes(topic);
    }
    
    public gw.api.database.IQueryBeanResult<entity.Note> getNotesIgnoringPermissions() {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).getNotesIgnoringPermissions();
    }
    
    /**
     * Gets the value of the NumPriorLosses field.
     * The number of losses. Only applicable for a loss history type of 'attached'.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumPriorLosses() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMPRIORLOSSES_PROP.get());
    }
    
    /**
     * Find all open work orders for this policy.
     * @return All open (i.e., non-completed) work orders for this policy.
     */
    public entity.Job[] getOpenJobs() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getOpenJobs();
    }
    
    /**
     * 
     * @return the in progress renewal job on this Policy if one exists; otherwise
     * returns null.
     */
    public entity.Renewal getOpenRenewalJob() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getOpenRenewalJob();
    }
    
    /**
     * Gets the user role assignment for that role
     * If there's no assignment for that role, creates a new one.
     * If there is more than one assignment for that role, then the first role will be returned no matter
     * whether the role is exclusive or not.
     * @param role The role for the assignment
     * @return the existing user role assignment if found, or a new one if not found
     */
    public entity.PolicyUserRoleAssignment getOrCreateUserRoleAssignmentByRole(typekey.UserRole role) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getOrCreateUserRoleAssignmentByRole(role);
    }
    
    /**
     * Gets the value of the OriginalEffectiveDate field.
     * The date on which this policy was originally issued or bound.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getOriginalEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ORIGINALEFFECTIVEDATE_PROP.get());
    }
    
    public java.util.List<entity.EffDatedBranch> getOverlaps(gw.pl.persistence.core.effdate.EffDatedKey key, com.guidewire.pl.system.util.DateRange range) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getOverlaps(key, range);
    }
    
    /**
     * Gets the value of the PackageRisk field.
     * Package Risk Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PackageRisk getPackageRisk() {
      return (typekey.PackageRisk)__getInternalInterface().getFieldValue(PACKAGERISK_PROP.get());
    }
    
    /**
     * Gets the value of the Periods field.
     * Periods of this policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod[] getPeriods() {
      return (entity.PolicyPeriod[])__getInternalInterface().getFieldValue(PERIODS_PROP.get());
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
     * Gets the value of the PrimaryLanguage field.
     * The policy's preferred language
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LanguageType getPrimaryLanguage() {
      return (typekey.LanguageType)__getInternalInterface().getFieldValue(PRIMARYLANGUAGE_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryLocale field.
     * The policy's preferred locale
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LocaleType getPrimaryLocale() {
      return (typekey.LocaleType)__getInternalInterface().getFieldValue(PRIMARYLOCALE_PROP.get());
    }
    
    /**
     * Gets the value of the PriorLosses field.
     * Loss history detail entries. Only applicable for a loss history type of 'manually entered'.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LossHistoryEntry[] getPriorLosses() {
      return (entity.LossHistoryEntry[])__getInternalInterface().getFieldValue(PRIORLOSSES_PROP.get());
    }
    
    /**
     * Gets the value of the PriorPolicies field.
     * Prior policy information for this policyholder.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PriorPolicy[] getPriorPolicies() {
      return (entity.PriorPolicy[])__getInternalInterface().getFieldValue(PRIORPOLICIES_PROP.get());
    }
    
    /**
     * Gets the value of the PriorPremiums field.
     * Premiums for policy terms prior to PC conversion. This value can be set during conversion on renewal.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getPriorPremiums() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(PRIORPREMIUMS_PROP.get());
    }
    
    /**
     * Gets the value of the PriorPremiums_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getPriorPremiums_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRIORPREMIUMS_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the PriorPremiums_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPriorPremiums_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(PRIORPREMIUMS_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the PriorTotalIncurred field.
     * The total incurred. Only applicable for a loss history type of 'attached'.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getPriorTotalIncurred() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(PRIORTOTALINCURRED_PROP.get());
    }
    
    /**
     * Gets the value of the PriorTotalIncurred_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getPriorTotalIncurred_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRIORTOTALINCURRED_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the PriorTotalIncurred_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPriorTotalIncurred_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(PRIORTOTALINCURRED_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerCodeOfService field.
     * The producer code that manages this policy and can modify it.  If external user use producer code security, the user must have this producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProducerCode getProducerCodeOfService() {
      return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFSERVICE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getProducerCodeOfServiceID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PRODUCERCODEOFSERVICE_PROP.get());
    }
    
    /**
     * 
     * @return The product associated with this policy.
     */
    public gw.api.productmodel.Product getProduct() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getProduct();
    }
    
    /**
     * Gets the value of the ProductCode field.
     * The Product defining what kind of Policy this is
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTCODE_PROP.get());
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
     * Gets the value of the RIRiskVLContainers field.
     * All RI Risk VL Containers for any period on this policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIRiskVLContainer[] getRIRiskVLContainers() {
      return (entity.RIRiskVLContainer[])__getInternalInterface().getFieldValue(RIRISKVLCONTAINERS_PROP.get());
    }
    
    public com.guidewire.commons.metadata.collections.BeanArraySet<java.lang.String> getReferencingTableNames() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).getReferencingTableNames();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * If this policy has been rewritten into an new Account, find the resulting policy, otherwise return null.
     * @return policy that this policy was rewritten to if any
     */
    public entity.Policy getRewrittenToNewAccountDestination() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getRewrittenToNewAccountDestination();
    }
    
    /**
     * Gets the value of the RewrittenToNewAccountDestinationJoin field.
     * Points to the destination policy part of the join table if the policy has a source policy which has been rewritten
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPolicyRewrite getRewrittenToNewAccountDestinationJoin() {
      return (entity.PolicyPolicyRewrite)__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOIN_PROP.get());
    }
    
    /**
     * Gets the value of the RewrittenToNewAccountDestinationJoinArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPolicyRewrite[] getRewrittenToNewAccountDestinationJoinArray() {
      return (entity.PolicyPolicyRewrite[])__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRewrittenToNewAccountDestinationJoinID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOIN_PROP.get());
    }
    
    /**
     * If this policy has been rewritten into an new Account, find the resulting policy, otherwise return null.
     * @return policy that this policy was rewritten to if any
     */
    public entity.Policy getRewrittenToNewAccountSource() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getRewrittenToNewAccountSource();
    }
    
    /**
     * Gets the value of the RewrittenToNewAccountSourceJoin field.
     * Points to the source policy part of the join table if the policy has been rewritten
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPolicyRewrite getRewrittenToNewAccountSourceJoin() {
      return (entity.PolicyPolicyRewrite)__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTSOURCEJOIN_PROP.get());
    }
    
    /**
     * Gets the value of the RewrittenToNewAccountSourceJoinArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPolicyRewrite[] getRewrittenToNewAccountSourceJoinArray() {
      return (entity.PolicyPolicyRewrite[])__getInternalInterface().getFieldValue(REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRewrittenToNewAccountSourceJoinID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(REWRITTENTONEWACCOUNTSOURCEJOIN_PROP.get());
    }
    
    /**
     * Gets the value of the RoleAssignments field.
     * Role Assignments for this bean.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyUserRoleAssignment[] getRoleAssignments() {
      return (entity.PolicyUserRoleAssignment[])__getInternalInterface().getFieldValue(ROLEASSIGNMENTS_PROP.get());
    }
    
    public entity.Extractable getRoot() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getRoot();
    }
    
    public java.lang.String getTraceDetails() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getTraceDetails();
    }
    
    /**
     * Gets the value of the UWReferralReasons field.
     * Referral reasons of the policy
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UWReferralReason[] getUWReferralReasons() {
      return (entity.UWReferralReason[])__getInternalInterface().getFieldValue(UWREFERRALREASONS_PROP.get());
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
     * Gets the assignment that corresponds to the given user and role, or null
     * if none matches.
     * @param user 
     * @param userRole 
     * @return 
     */
    public entity.PolicyUserRoleAssignment getUserRoleAssignment(entity.User user, typekey.UserRole userRole) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getUserRoleAssignment(user, userRole);
    }
    
    /**
     * Gets the user role assignment for that role
     * If there's no assignment for that role, returns null.
     * If there is more than one assignment for that role, then the first role will be returned.
     * Note: getUserRoleAssignmentsByRole(UserRole) should be called if multiple assignments are expected to return.
     * @param role The role for the assignment
     */
    public entity.PolicyUserRoleAssignment getUserRoleAssignmentByRole(typekey.UserRole role) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getUserRoleAssignmentByRole(role);
    }
    
    /**
     * Get the user role assignments for that role. If no assignment for that role,
     * then an empty array is returned.
     * @param role The role for the assignment
     * @return an array of user role assignments for the given role. The array is empty if no such user role assignment.
     */
    public entity.PolicyUserRoleAssignment[] getUserRoleAssignmentsByRole(typekey.UserRole role) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).getUserRoleAssignmentsByRole(role);
    }
    
    public java.lang.String getVersionString() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
    }
    
    public boolean hasGapAfter(gw.pl.persistence.core.effdate.EffDatedKey key, com.guidewire.pl.system.util.DateRange range) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).hasGapAfter(key, range);
    }
    
    public boolean hasGapBefore(gw.pl.persistence.core.effdate.EffDatedKey key, com.guidewire.pl.system.util.DateRange range) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).hasGapBefore(key, range);
    }
    
    /**
     * Determines whether or not this policy has an open cancellation.
     * @return true if there is an open cancellation job on the policy
     */
    public boolean hasOpenCancellationJob() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenCancellationJob();
    }
    
    public boolean hasOpenCancellationJobBefore(java.util.Date date) {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).hasOpenCancellationJobBefore(date);
    }
    
    /**
     * 
     * @return true if an issuance job is in progress for this policy.
     */
    public boolean hasOpenIssuanceJob() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenIssuanceJob();
    }
    
    public <T extends entity.Job> boolean hasOpenJobOfType(java.lang.Class<T> jobClass) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenJobOfType(jobClass);
    }
    
    /**
     * 
     * @return true if and only if this policy has an associated
     * in progress PolicyChange job whose policy period
     * contains <code>effectiveDate</code>. A job is considered
     * "in progress" if the job is not complete and at least one
     * of its periods is active (i.e., at least one has not been
     * withdrawn or declined).
     */
    public boolean hasOpenPolicyChangeJob() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenPolicyChangeJob();
    }
    
    /**
     * 
     * @param period PolicyPeriod representing a logical policy term
     * @return true if there is an open Reinstatement job in the same term as "period"
     */
    public boolean hasOpenReinstateJobForPeriod(entity.PolicyPeriod period) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenReinstateJobForPeriod(period);
    }
    
    /**
     * Determines whether or not this policy has an open rewrite job.
     * @return True if this policy has an open rewrite <i>or</i> an open cancellation
     * whose ReasonCode is "rewrite".
     */
    public boolean hasOpenRewriteJob() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).hasOpenRewriteJob();
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
    
    public boolean isArchived() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).isArchived();
    }
    
    /**
     * Gets the value of the DoNotArchive field.
     * Do not archive any of the terms for this Policy. Terms that are already archived will not be automatically retrieved.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDoNotArchive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTARCHIVE_PROP.get());
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
    
    /**
     * Determines whether the given role is exclusive for this type of assignable object.
     * @param userRole 
     * @return 
     */
    public boolean isExclusive(typekey.UserRole userRole) {
      return ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).isExclusive(userRole);
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    public boolean isLockable() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods")).isLockable();
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
    
    /**
     * Indicates if a new version of a policy on the supplied effective date
     * would be out-of-sequence or not. A policy version is out of sequence
     * if there is a bound version of that policy in the same period with a
     * later effective date. (By definition, handling OOS changes is an
     * "intra-branch" operation, meaning we are only ever operating on a
     * single branch, the current branch with OOS changes.)
     * @param periodEffectiveDate Effective date which is checked to see if
     *                            it would result in an out-of-sequence change.
     * @return True if a change on "periodEffectiveDate" would be out-of-sequence,
     * and false otherwise.
     */
    public boolean isOOSChange(java.util.Date periodEffectiveDate) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).isOOSChange(periodEffectiveDate);
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
    
    /**
     * Marks the policy as issued by setting the issue date on it. The date must be non-null.
     * If the issue date is already non-null the method will throw.
     * @param issueDate The date on which this policy is issued.
     */
    public void markIssued(java.util.Date issueDate) {
      ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).markIssued(issueDate);
    }
    
    /**
     * Creates a new note on this policy.
     * @return the new Note.
     */
    public entity.Note newNote() {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).newNote();
    }
    
    /**
     * Creates a new note on this policy and sets the topic
     * @param topic Topic for the new note. May be null.
     * @return the new note
     */
    public entity.Note newNote(typekey.NoteTopicType topic) {
      return ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).newNote(topic);
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
     * Removes the given element from the DividedToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
     */
    public void removeFromDividedToNewAccountSourceJoinArray(entity.PolicyPolicyDivide element) {
      __getInternalInterface().removeArrayElement(DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the DividedToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDividedToNewAccountSourceJoinArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the EffDatedRegistry array. This is achieved by marking the element for removal.
     */
    public void removeFromEffDatedRegistry(entity.PolicyEffDatedRegistry element) {
      __getInternalInterface().removeArrayElement(EFFDATEDREGISTRY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the EffDatedRegistry array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromEffDatedRegistry(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(EFFDATEDREGISTRY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the IssueHistories array. This is achieved by marking the element for removal.
     */
    public void removeFromIssueHistories(entity.UWIssueHistory element) {
      __getInternalInterface().removeArrayElement(ISSUEHISTORIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the IssueHistories array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromIssueHistories(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ISSUEHISTORIES_PROP.get(), elementID);
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
     * Removes the given element from the Periods array. This is achieved by marking the element for removal.
     */
    public void removeFromPeriods(entity.PolicyPeriod element) {
      __getInternalInterface().removeArrayElement(PERIODS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Periods array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPeriods(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PERIODS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PriorLosses array. This is achieved by marking the element for removal.
     */
    public void removeFromPriorLosses(entity.LossHistoryEntry element) {
      __getInternalInterface().removeArrayElement(PRIORLOSSES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PriorLosses array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPriorLosses(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRIORLOSSES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PriorPolicies array. This is achieved by marking the element for removal.
     */
    public void removeFromPriorPolicies(entity.PriorPolicy element) {
      __getInternalInterface().removeArrayElement(PRIORPOLICIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PriorPolicies array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPriorPolicies(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRIORPOLICIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RIRiskVLContainers array. This is achieved by marking the element for removal.
     */
    public void removeFromRIRiskVLContainers(entity.RIRiskVLContainer element) {
      __getInternalInterface().removeArrayElement(RIRISKVLCONTAINERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RIRiskVLContainers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRIRiskVLContainers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RIRISKVLCONTAINERS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RewrittenToNewAccountDestinationJoinArray array. This is achieved by marking the element for removal.
     */
    public void removeFromRewrittenToNewAccountDestinationJoinArray(entity.PolicyPolicyRewrite element) {
      __getInternalInterface().removeArrayElement(REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RewrittenToNewAccountDestinationJoinArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRewrittenToNewAccountDestinationJoinArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RewrittenToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
     */
    public void removeFromRewrittenToNewAccountSourceJoinArray(entity.PolicyPolicyRewrite element) {
      __getInternalInterface().removeArrayElement(REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RewrittenToNewAccountSourceJoinArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRewrittenToNewAccountSourceJoinArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
     */
    public void removeFromRoleAssignments(entity.PolicyUserRoleAssignment element) {
      __getInternalInterface().removeArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRoleAssignments(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ROLEASSIGNMENTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the UWReferralReasons array. This is achieved by marking the element for removal.
     */
    public void removeFromUWReferralReasons(entity.UWReferralReason element) {
      __getInternalInterface().removeArrayElement(UWREFERRALREASONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the UWReferralReasons array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromUWReferralReasons(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(UWREFERRALREASONS_PROP.get(), elementID);
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
     * Sets the value of the APDProduct field.
     */
    public void setAPDProduct(entity.APDProduct value) {
      __getInternalInterface().setFieldValue(APDPRODUCT_PROP.get(), value);
    }
    
    public void setAPDProductID(gw.pl.persistence.core.Key value) {
      setFieldValue(APDPRODUCT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Account field.
     */
    public void setAccount(entity.Account value) {
      __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
    }
    
    public void setAccountID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACCOUNT_PROP.get(), value);
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
    
    /**
     * If this policy is split/spin from other policy, set the Source policy of this split/spin policy.
     * @param sourcePolicy The policy from which this one was split or spun
     */
    public void setDividedSourcePolicy(entity.Policy sourcePolicy) {
      ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDividedSourcePolicy(sourcePolicy);
    }
    
    /**
     * Sets the value of the DividedToNewAccountSourceJoin field.
     */
    public void setDividedToNewAccountSourceJoin(entity.PolicyPolicyDivide value) {
      __getInternalInterface().setFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DividedToNewAccountSourceJoinArray field.
     */
    public void setDividedToNewAccountSourceJoinArray(entity.PolicyPolicyDivide[] value) {
      __getInternalInterface().setFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), value);
    }
    
    public void setDividedToNewAccountSourceJoinID(gw.pl.persistence.core.Key value) {
      setFieldValue(DIVIDEDTONEWACCOUNTSOURCEJOIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DoNotArchive field.
     */
    public void setDoNotArchive(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DONOTARCHIVE_PROP.get(), value);
    }
    
    public void setDoNotArchive(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
      ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDoNotArchive(value, getDescription);
    }
    
    /**
     * Sets the value of the DoNotDestroy field.
     */
    public void setDoNotDestroy(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DONOTDESTROY_PROP.get(), value);
    }
    
    public void setDoNotDestroy(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
      ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDoNotDestroy(value, getDescription);
    }
    
    @java.lang.Deprecated
    public void setDoNotPurge(java.lang.Boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
      ((com.guidewire.pc.domain.policy.PolicyPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyPublicMethods")).setDoNotPurge(value, getDescription);
    }
    
    /**
     * Sets the value of the EffDatedRegistry field.
     */
    public void setEffDatedRegistry(entity.PolicyEffDatedRegistry[] value) {
      __getInternalInterface().setFieldValue(EFFDATEDREGISTRY_PROP.get(), value);
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
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IssueDate field.
     */
    public void setIssueDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ISSUEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IssueHistories field.
     */
    public void setIssueHistories(entity.UWIssueHistory[] value) {
      __getInternalInterface().setFieldValue(ISSUEHISTORIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Jobs field.
     */
    public void setJobs(entity.Job[] value) {
      __getInternalInterface().setFieldValue(JOBS_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LossHistoryType field.
     */
    public void setLossHistoryType(typekey.LossHistoryType value) {
      __getInternalInterface().setFieldValue(LOSSHISTORYTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MovedPolicySourceAccount field.
     */
    public void setMovedPolicySourceAccount(entity.Account value) {
      __getInternalInterface().setFieldValue(MOVEDPOLICYSOURCEACCOUNT_PROP.get(), value);
    }
    
    public void setMovedPolicySourceAccountID(gw.pl.persistence.core.Key value) {
      setFieldValue(MOVEDPOLICYSOURCEACCOUNT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MovedPolicySourceAccountPublicID field.
     */
    public void setMovedPolicySourceAccountPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MOVEDPOLICYSOURCEACCOUNTPUBLICID_PROP.get(), value);
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
     * Sets the value of the NumPriorLosses field.
     */
    public void setNumPriorLosses(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMPRIORLOSSES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OriginalEffectiveDate field.
     */
    public void setOriginalEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ORIGINALEFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PackageRisk field.
     */
    public void setPackageRisk(typekey.PackageRisk value) {
      __getInternalInterface().setFieldValue(PACKAGERISK_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Periods field.
     */
    public void setPeriods(entity.PolicyPeriod[] value) {
      __getInternalInterface().setFieldValue(PERIODS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryLanguage field.
     */
    public void setPrimaryLanguage(typekey.LanguageType value) {
      __getInternalInterface().setFieldValue(PRIMARYLANGUAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryLocale field.
     */
    public void setPrimaryLocale(typekey.LocaleType value) {
      __getInternalInterface().setFieldValue(PRIMARYLOCALE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorLosses field.
     */
    public void setPriorLosses(entity.LossHistoryEntry[] value) {
      __getInternalInterface().setFieldValue(PRIORLOSSES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorPolicies field.
     */
    public void setPriorPolicies(entity.PriorPolicy[] value) {
      __getInternalInterface().setFieldValue(PRIORPOLICIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorPremiums field.
     */
    public void setPriorPremiums(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(PRIORPREMIUMS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorPremiums_amt field.
     */
    public void setPriorPremiums_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRIORPREMIUMS_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorPremiums_cur field.
     */
    public void setPriorPremiums_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PRIORPREMIUMS_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorTotalIncurred field.
     */
    public void setPriorTotalIncurred(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(PRIORTOTALINCURRED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorTotalIncurred_amt field.
     */
    public void setPriorTotalIncurred_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRIORTOTALINCURRED_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PriorTotalIncurred_cur field.
     */
    public void setPriorTotalIncurred_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PRIORTOTALINCURRED_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerCodeOfService field.
     */
    public void setProducerCodeOfService(entity.ProducerCode value) {
      __getInternalInterface().setFieldValue(PRODUCERCODEOFSERVICE_PROP.get(), value);
    }
    
    public void setProducerCodeOfServiceID(gw.pl.persistence.core.Key value) {
      setFieldValue(PRODUCERCODEOFSERVICE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductCode field.
     */
    public void setProductCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTCODE_PROP.get(), value);
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
     * Sets the value of the RIRiskVLContainers field.
     */
    public void setRIRiskVLContainers(entity.RIRiskVLContainer[] value) {
      __getInternalInterface().setFieldValue(RIRISKVLCONTAINERS_PROP.get(), value);
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
    
    /**
     * Sets the value of the RewrittenToNewAccountDestinationJoin field.
     */
    public void setRewrittenToNewAccountDestinationJoin(entity.PolicyPolicyRewrite value) {
      __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RewrittenToNewAccountDestinationJoinArray field.
     */
    public void setRewrittenToNewAccountDestinationJoinArray(entity.PolicyPolicyRewrite[] value) {
      __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOINARRAY_PROP.get(), value);
    }
    
    public void setRewrittenToNewAccountDestinationJoinID(gw.pl.persistence.core.Key value) {
      setFieldValue(REWRITTENTONEWACCOUNTDESTINATIONJOIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RewrittenToNewAccountSourceJoin field.
     */
    public void setRewrittenToNewAccountSourceJoin(entity.PolicyPolicyRewrite value) {
      __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTSOURCEJOIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RewrittenToNewAccountSourceJoinArray field.
     */
    public void setRewrittenToNewAccountSourceJoinArray(entity.PolicyPolicyRewrite[] value) {
      __getInternalInterface().setFieldValue(REWRITTENTONEWACCOUNTSOURCEJOINARRAY_PROP.get(), value);
    }
    
    public void setRewrittenToNewAccountSourceJoinID(gw.pl.persistence.core.Key value) {
      setFieldValue(REWRITTENTONEWACCOUNTSOURCEJOIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RoleAssignments field.
     */
    public void setRoleAssignments(entity.PolicyUserRoleAssignment[] value) {
      __getInternalInterface().setFieldValue(ROLEASSIGNMENTS_PROP.get(), value);
    }
    
    public void setRoot(entity.KeyableBean root) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).setRoot(root);
    }
    
    /**
     * Sets the value of the UWReferralReasons field.
     */
    public void setUWReferralReasons(entity.UWReferralReason[] value) {
      __getInternalInterface().setFieldValue(UWREFERRALREASONS_PROP.get(), value);
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
    
    public entity.Renewal startConversionRenewal(java.util.Date effectiveDate, entity.ProducerCode producerCode, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).startConversionRenewal(effectiveDate, producerCode, populatePeriod);
    }
    
    public entity.Renewal startConversionRenewalWithBasedOn(java.util.Date effectiveDate, java.util.Date expirationDate, entity.ProducerCode producerCode, java.lang.String policyNumber, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).startConversionRenewalWithBasedOn(effectiveDate, expirationDate, producerCode, policyNumber, populatePeriod);
    }
    
    public entity.Renewal startConversionRenewalWithBasedOn(java.util.Date effectiveDate, java.util.Date expirationDate, entity.ProducerCode producerCode, java.lang.String policyNumber, gw.api.policy.PeriodFromExternalPopulator populatePeriod, boolean rethrowExceptions) {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).startConversionRenewalWithBasedOn(effectiveDate, expirationDate, producerCode, policyNumber, populatePeriod, rethrowExceptions);
    }
    
    public entity.Submission startSubmission(java.util.Date effectiveDate, entity.ProducerCode producerCode, typekey.Jurisdiction state, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
      return ((com.guidewire.pc.domain.policy.PolicyInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.PolicyInternalMethods")).startSubmission(effectiveDate, producerCode, state, populatePeriod);
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
     * Removes the role from the given User on this assignable object.
     * @param user 
     * @param role 
     */
    public void unassignUserRole(entity.User user, typekey.UserRole role) {
      ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).unassignUserRole(user, role);
    }
    
    public void updateInfoOnArchive() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).updateInfoOnArchive();
    }
    
    public com.guidewire.pl.system.locale.UserMessage[] validateAssignments() {
      return ((com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods")).validateAssignments();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pc.domain.note.NoteContainer", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pc.domain.personaldata.PinnableDomainMethods", "com.guidewire.pc.domain.personaldata.PolicyPinnableAdapter");
    config.put("com.guidewire.pc.domain.policy.PolicyInternalMethods", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pc.domain.policy.PolicyPublicMethods", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pc.system.debug.Debuggable", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pl.domain.extract.RootInfoPublicMethods", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedContainerPublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedContainerProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedContainerInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedContainerProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.api.assignment.UserRoleOwner", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("gw.api.contingency.ContingencyCreator", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("gw.api.domain.document.DocumentContainer", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("gw.api.domain.linkedobject.LinkedObjectContainer", "com.guidewire.pc.domain.policy.impl.PolicyImpl");
    config.put("gw.api.history.CustomHistory", "gw.api.history.PolicyCustomHistoryImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Policy.class, config);
    com.guidewire._generated.entity.PolicyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Policy, com.guidewire._generated.entity.PolicyInternal>() {
      public java.lang.Object getImplementation(entity.Policy bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyInternal getInternalInterface(entity.Policy bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Policy newEmptyInstance() {
        return new entity.Policy((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}