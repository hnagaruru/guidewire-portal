package entity;

/**
 * Account
 * An account is an entity (person or company) that applies for or purchases one or more policies from the carrier. Account attributes include years in business, industry code (SIC, NAICS, etc) and nature of ops, FEIN identifier, Bureau (WC) number and business entity type (e.g. individual, corp., partenership, etc.)
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Account.eti;Account.eix;Account.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Account")
public class Account extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.UserRoleOwner, entity.RootInfo, entity.Extractable, entity.Validatable, entity.FrozenSetMember, entity.DestructionRootPinnable, entity.EventAware, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pc.domain.personaldata.PinnableDomainMethods, gw.api.assignment.UserRoleOwner, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Account> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Account>("entity.Account");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ACCOUNTCONTACTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AccountContacts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNTHOLDERCONTACT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AccountHolderContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ACCOUNTLOCATIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AccountLocations");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACCOUNTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AccountNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACCOUNTNUMBERDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AccountNumberDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACCOUNTORGTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AccountOrgType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACCOUNTSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AccountStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACCOUNTSTATUSUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AccountStatusUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ACCTHOLDEREDGEARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AcctholderedgeArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILURE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILUREDETAILS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailureDetails");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVESCHEMAINFO_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveSchemaInfo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ARCHIVESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ArchiveState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BUSOPSDESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BusOpsDesc");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTDESTROY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DoNotDestroy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludeReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEDFROMARCHIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludedFromArchive");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INDUSTRYCODE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "IndustryCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JOBGROUPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "JobGroups");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LINKCONTACTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LinkContacts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LOCATIONAUTONUMBERSEQ_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LocationAutoNumberSeq");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCKEDFROMMERGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LockedFromMerge");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCKINGCOLUMN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LockingColumn");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NICKNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Nickname");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORIGINATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OriginationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OTHERORGTYPEDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OtherOrgTypeDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDCOVERAGECURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredCoverageCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDSETTLEMENTCURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredSettlementCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRIMARYACCTLOCARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PrimaryAcctLocArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYLANGUAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryLanguage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYLOCALE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryLocale");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PRIMARYLOCATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PrimaryLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRODUCERCODES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ProducerCodes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ROLEASSIGNMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RoleAssignments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SERVICETIER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ServiceTier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SOURCERELATEDACCOUNTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "SourceRelatedAccounts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STATEBUREAUNUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StateBureauNum");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TARGETRELATEDACCOUNTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "TargetRelatedAccounts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> YEARBUSINESSSTARTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "YearBusinessStarted");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.AccountInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> VALIDATION_RESULTS_DYNPROP = com.guidewire.pl.domain.validation.ValidatablePublicMethods.VALIDATION_RESULTS_DYNPROP;
  
  public static final gw.api.domain.account.AccountFinder finder = com.guidewire.pc.domain.account.AccountPublicMethods.finder;
  
  public static final com.guidewire.pc.domain.account.AccountQueryRestrictors restrictors = com.guidewire.pc.domain.account.AccountPublicMethods.restrictors;
  
  public static final java.lang.String ACCOUNTADDED_EVENT = "AccountAdded";
  
  public static final java.lang.String ACCOUNTCHANGED_EVENT = "AccountChanged";
  
  public static final java.lang.String ACCOUNTREMOVED_EVENT = "AccountRemoved";
  
  public static final java.lang.String RESYNCACCOUNT_EVENT = "ResyncAccount";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public Account()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public Account(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected Account(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.AccountInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.AccountInternal __getInternalInterface() {
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
   * Add the contact as an AccountContact to this account and return it.
   * The AccountContact is created in this account's bundle.
   * @param contact the contact to create as an AccountContact
   * @throws IllegalStateException if the contact is already an AccountContact on this account
   * @return the AccountContact
   */
  public entity.AccountContact addNewAccountContactForContact(entity.Contact contact) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).addNewAccountContactForContact(contact);
  }
  
  /**
   * Adds a new AccountContact with a contact of <code>contactType</code> to this Account.
   * The AccountContact is created in this account's bundle.
   * @param contactType the type of contact to create
   * @return the AccountContact
   */
  public entity.AccountContact addNewAccountContactOfType(typekey.ContactType contactType) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).addNewAccountContactOfType(contactType);
  }
  
  /**
   * This will add a specific producer code the the array of AccountProducerCodes
   * @param pc the ProducerCode to add
   */
  public void addProducerCode(entity.ProducerCode pc) {
    ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).addProducerCode(pc);
  }
  
  /**
   * Adds the given element to the AccountContacts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAccountContacts(entity.AccountContact element) {
    __getInternalInterface().addArrayElement(ACCOUNTCONTACTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the AccountLocations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAccountLocations(entity.AccountLocation element) {
    __getInternalInterface().addArrayElement(ACCOUNTLOCATIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the JobGroups array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJobGroups(entity.JobGroup element) {
    __getInternalInterface().addArrayElement(JOBGROUPS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element) {
    __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the ProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducerCodes(entity.AccountProducerCode element) {
    __getInternalInterface().addArrayElement(PRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoleAssignments(entity.AccountUserRoleAssignment element) {
    __getInternalInterface().addArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the SourceRelatedAccounts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSourceRelatedAccounts(entity.AccountAccount element) {
    __getInternalInterface().addArrayElement(SOURCERELATEDACCOUNTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the TargetRelatedAccounts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTargetRelatedAccounts(entity.AccountAccount element) {
    __getInternalInterface().addArrayElement(TARGETRELATEDACCOUNTS_PROP.get(), element);
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
  public entity.UserRoleAssignment assignUserRole(entity.User user, entity.Group group, typekey.UserRole role) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).assignUserRole(user, group, role);
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
   * 
   * @param assignment the assignable to cascade
   */
  public void cascadeAssignment(entity.Assignable assignment) {
    ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).cascadeAssignment(assignment);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Creates a new assignment. All fields are initially empty
   * @return the created UserRoleAssignment
   */
  public entity.AccountUserRoleAssignment createAndAddRoleAssignment() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createAndAddRoleAssignment();
  }
  
  /**
   * Creates and starts a new {@link entity.Renewal} job representing a conversion from an
   * external legacy system.. The appropriate {@link entity.Policy},
   * {@link entity.PolicyPeriod}, and
   * {@link entity.PolicyLine} entities are initialized from the <code>account</code>. The
   * period's primary named insured and primary location are initialized from the <code>account</code>. The appropriate
   * {@link entity.PolicyLine} entities are also created via
   * {@link entity.PolicyPeriod#createPolicyLine(gw.api.productmodel.PolicyLinePattern)}.
   * <p/>
   * The new period will also be linked to new {@link entity.Policy},
   * {@link entity.PolicyTerm},
   * {@link entity.EffectiveDatedFields} and
   * {@link entity.AutoNumberSequence} entities. The policy's loss history type defaults to
   * "No loss history".
   * <p/>
   * NOTE: This method should only be called when starting renewals on policies as they are transferred from an external
   * system to PolicyCenter. When the renewal is bound, PolicyCenter will effectively become the system of record for
   * the policy.
   * @param effectiveDate The starting date for the new period. This is also used to calculate the period end date,
   *                       based on this product's default term length. If this is null, the current system date will be
   *                       used as the start date.
   * @param product the product the period is created for
   * @param producerCode the producer code of service
   * @param populatePeriod A block accepting a policy period to inject custom initializations from an external period.
   * @return The newly created {@link entity.Renewal}.
   */
  public entity.Renewal createConversionRenewal(java.util.Date effectiveDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createConversionRenewal(effectiveDate, product, producerCode, populatePeriod);
  }
  
  /**
   * Creates and starts a new {@link entity.Renewal} job representing a conversion from an
   * external legacy system.. The appropriate {@link entity.Policy},
   * {@link entity.PolicyPeriod}, and
   * {@link entity.PolicyLine} entities are initialized from the <code>account</code>. The
   * period's primary named insured and primary location are initialized from the <code>account</code>. The appropriate
   * {@link entity.PolicyLine} entities are also created via
   * {@link entity.PolicyPeriod#createPolicyLine(gw.api.productmodel.PolicyLinePattern)}.
   * <p/>
   * The new period will also be linked to new {@link entity.Policy},
   * {@link entity.PolicyTerm},
   * {@link entity.EffectiveDatedFields} and
   * {@link entity.AutoNumberSequence} entities. The policy's loss history type defaults to
   * "No loss history".
   * <p/>
   * NOTE: This method should only be called when starting renewals on policies as they are transferred from an external
   * system to PolicyCenter. When the renewal is bound, PolicyCenter will effectively become the system of record for
   * the policy.
   * @param basedOnEffectiveDate The effectiveDate for the new period's basedOn period.
   * @param basedOnExpirationDate The basedOn period's expirationDate. Due to database consistency, it is also the effectiveDate
   *                               for the new period.
   * @param product The product the period is created for
   * @param producerCode The producer code of service
   * @param policyNumber The policy number for the policy periods associated with this Renewal. If null,
   *                               generate and use a new, unique policyNumber. If policy number already exists in the system,
   *                               generate and use a new, unique policyNumber.
   * @param populatePeriod A block accepting a policy period to inject custom initializations from an external period.
   * @throws IllegalStateException If either the basedOnEffectiveDate or the basedOnExpirationDate is null
   * @return The newly created {@link entity.Renewal}.
   */
  public entity.Renewal createConversionRenewalWithBasedOn(java.util.Date basedOnEffectiveDate, java.util.Date basedOnExpirationDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, java.lang.String policyNumber, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createConversionRenewalWithBasedOn(basedOnEffectiveDate, basedOnExpirationDate, product, producerCode, policyNumber, populatePeriod);
  }
  
  /**
   * Creates and starts a new {@link entity.Renewal} job representing a conversion from an
   * external legacy system.. The appropriate {@link entity.Policy},
   * {@link entity.PolicyPeriod}, and
   * {@link entity.PolicyLine} entities are initialized from the <code>account</code>. The
   * period's primary named insured and primary location are initialized from the <code>account</code>. The appropriate
   * {@link entity.PolicyLine} entities are also created via
   * {@link entity.PolicyPeriod#createPolicyLine(gw.api.productmodel.PolicyLinePattern)}.
   * <p/>
   * The new period will also be linked to new {@link entity.Policy},
   * {@link entity.PolicyTerm},
   * {@link entity.EffectiveDatedFields} and
   * {@link entity.AutoNumberSequence} entities. The policy's loss history type defaults to
   * "No loss history".
   * <p/>
   * NOTE: This method should only be called when starting renewals on policies as they are transferred from an external
   * system to PolicyCenter. When the renewal is bound, PolicyCenter will effectively become the system of record for
   * the policy.
   * @param basedOnEffectiveDate The effectiveDate for the new period's basedOn period.
   * @param basedOnExpirationDate The basedOn period's expirationDate. Due to database consistency, it is also the effectiveDate
   *                               for the new period.
   * @param product The product the period is created for
   * @param producerCode The producer code of service
   * @param policyNumber The policy number for the policy periods associated with this Renewal. If null,
   *                               generate and use a new, unique policyNumber. If policy number already exists in the system,
   *                               generate and use a new, unique policyNumber.
   * @param populatePeriod A block accepting a policy period to inject custom initializations from an external period.
   * @param rethrowExceptions If true, rethrow the exception if any, if set to false, this method will return null if any exception happens.
   * @throws IllegalStateException If either the basedOnEffectiveDate or the basedOnExpirationDate is null
   * @return The newly created {@link entity.Renewal}.
   */
  public entity.Renewal createConversionRenewalWithBasedOn(java.util.Date basedOnEffectiveDate, java.util.Date basedOnExpirationDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, java.lang.String policyNumber, gw.api.policy.PeriodFromExternalPopulator populatePeriod, boolean rethrowExceptions) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createConversionRenewalWithBasedOn(basedOnEffectiveDate, basedOnExpirationDate, product, producerCode, policyNumber, populatePeriod, rethrowExceptions);
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description);
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description, java.lang.String originalValue, java.lang.String newValue) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description, originalValue, newValue);
  }
  
  /**
   * Used internally to create a new submission of a Policy.  Kicks off the addition of all
   * policy lines, coverages, etc contained by this product.
   * @param product - The product for this submission
   * @param producerSelection - The producer for this submission
   * @return - A new submission based on a new PolicyPeriod
   */
  public entity.Submission createSubmission(gw.api.productmodel.Product product, entity.ProducerSelection producerSelection) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createSubmission(product, producerSelection);
  }
  
  /**
   * Used internally to create a new submission of a Policy.  Kicks off the addition of all
   * policy lines, coverages, etc contained by this product.
   * @param effectiveDate The effective date
   * @param product The product for this submission
   * @param producerCode The producer code
   * @param populatePeriod The policy period populator
   * @return - A new submission based on a new PolicyPeriod
   */
  public entity.Submission createSubmission(java.util.Date effectiveDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createSubmission(effectiveDate, product, producerCode, populatePeriod);
  }
  
  /**
   * Gets the value of the AccountContacts field.
   * All the contacts related to this account, including inactive ones.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContact[] getAccountContacts() {
    return (entity.AccountContact[])__getInternalInterface().getFieldValue(ACCOUNTCONTACTS_PROP.get());
  }
  
  public entity.AccountContact[] getAccountContactsWithAnyRole(java.util.Set<typekey.AccountContactRole> roleSubtypes) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAccountContactsWithAnyRole(roleSubtypes);
  }
  
  /**
   * Returns the AccountContacts on the account that have a role of the supplied <code>roleSubtype</code>.
   * @param roleSubtype the type of Role to look for in AccountContacts
   * @return an Array of Active AccountContacts that have the supplied role
   */
  public entity.AccountContact[] getAccountContactsWithRole(typekey.AccountContactRole roleSubtype) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAccountContactsWithRole(roleSubtype);
  }
  
  /**
   * Return the AccountHolder of this account, or else null.
   * @return the AccountHolder
   */
  public entity.AccountHolder getAccountHolder() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAccountHolder();
  }
  
  /**
   * Gets the value of the AccountHolderContact field.
   * Account Holder Contact denormalized onto Account for performance.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getAccountHolderContact() {
    return (entity.Contact)__getInternalInterface().getFieldValue(ACCOUNTHOLDERCONTACT_PROP.get());
  }
  
  /**
   * Gets the value of the AccountLocations field.
   * The list of account locations for this Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountLocation[] getAccountLocations() {
    return (entity.AccountLocation[])__getInternalInterface().getFieldValue(ACCOUNTLOCATIONS_PROP.get());
  }
  
  /**
   * Gets the value of the AccountNumber field.
   * The account number of this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumberDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBERDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the AccountOrgType field.
   * Organization type of this account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountOrgType getAccountOrgType() {
    return (typekey.AccountOrgType)__getInternalInterface().getFieldValue(ACCOUNTORGTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the AccountStatus field.
   * The status of this account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountStatus getAccountStatus() {
    return (typekey.AccountStatus)__getInternalInterface().getFieldValue(ACCOUNTSTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the AccountStatusUpdateTime field.
   * Time when account status was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAccountStatusUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ACCOUNTSTATUSUPDATETIME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Acctholderedge[] getAcctholderedgeArray() {
    return (entity.Acctholderedge[])__getInternalInterface().getFieldValue(ACCTHOLDEREDGEARRAY_PROP.get());
  }
  
  /**
   * Returns all the active AccountContacts on this account.
   * @return the array of active AccountContacts on this Account
   */
  public entity.AccountContact[] getActiveAccountContacts() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getActiveAccountContacts();
  }
  
  /**
   * Gets the active assignments to the given role.
   * @param userRole 
   * @return 
   */
  public entity.UserRoleAssignment[] getActiveUserRoleAssignments(typekey.UserRole userRole) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getActiveUserRoleAssignments(userRole);
  }
  
  /**
   * Gets all jobs whose current period is related to the account.
   * @param completeJobsOnly null if don't care, True for only complete jobs, False for only non-complete jobs
   * @param jobType the type of job that must be matched, or null for any type of job
   * @param product the product which must be matched, or null for any product
   * @param user the user whoes permission will be used, or null to ignore permission
   * @return jobs whose current period is related to the account
   */
  public gw.api.database.IQueryBeanResult<entity.Job> getAllJobs(java.lang.Boolean completeJobsOnly, typekey.Job jobType, gw.api.productmodel.Product product, entity.User user) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAllJobs(completeJobsOnly, jobType, product, user);
  }
  
  /**
   * Retrieve all open actvitities linked to this account.
   * @return array of activities
   */
  public gw.api.database.IQueryBeanResult<entity.Activity> getAllOpenActivities() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAllOpenActivities();
  }
  
  /**
   * Returns an array with the relationships from both {@link #getSourceRelatedAccounts()} and
   * {@link #getTargetRelatedAccounts()}. If this account has a relationship to itself, only one
   * {@link entity.AccountAccount} will be returned for that relationship. If user agrument is supplied, the returned
   * array will be filtered to contain relationships only for accounts which given user has access to.
   * @param user user whose access permisions will be used to filter the array with the account relationships
   * @return an array of accountaccount
   */
  public entity.AccountAccount[] getAllRelatedAccounts(entity.User user) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAllRelatedAccounts(user);
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
   * Returns the a product offer matching the <code>product</code> given this account and <code>policyProductRoot</code>.
   * Products are first run through name clearance and then through availability lookups to further restrict their
   * availability.  If no such available product offer is found, return null.
   * @param policyProductRoot the root for availability
   * @param product the product we want a selection for
   * @return the available product selection or null if none are available
   */
  public entity.ProductSelection getAvailableProduct(entity.PolicyProductRoot policyProductRoot, gw.api.productmodel.Product product) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAvailableProduct(policyProductRoot, product);
  }
  
  /**
   * Returns all available products given this account and policy product root. Products are first run through
   * name clearance, after which the availability lookups are applied to further restrict their availability.
   * @param policyProductRoot the root for availability
   * @return product selections available to this account and policy product root
   */
  public java.util.List<entity.ProductSelection> getAvailableProducts(entity.PolicyProductRoot policyProductRoot) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAvailableProducts(policyProductRoot);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the BusOpsDesc field.
   * Business and operations description.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBusOpsDesc() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BUSOPSDESC_PROP.get());
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
  public entity.AccountUserRoleAssignment getCurrentRoleAssignment() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getCurrentRoleAssignment();
  }
  
  /**
   * Gets the set of documents linked to this Account
   * @return a QueryProcessor containing the set of documents linked to this Account
   */
  public gw.api.database.IQueryBeanResult<entity.Document> getDocuments() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getDocuments();
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
   * Gets the value of the IndustryCode field.
   * Industry Code of Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode() {
    return (entity.IndustryCode)__getInternalInterface().getFieldValue(INDUSTRYCODE_PROP.get());
  }
  
  /**
   * Returns the result of retrieving summary information for all bound policies related to this
   * account. Note that this method will not return unbound policies
   * (e.g., policies associated with new submissions).
   * @return the query result representing the issued policies for the account
   */
  public gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> getIssuedPolicies() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getIssuedPolicies();
  }
  
  /**
   * Returns the result of retrieving summary information from the remote
   * Policy Administration System for all bound policies related to this
   * account. Note that this method will not return unbound policies
   * created in PolicyCenter (e.g., policies associated with new submissions)
   * until they become bound in the remote system.<p>
   * <p/>
   * This method may have a non-trivial cost, since it may have to remotely search
   * for all policies associated with this account.
   * @return A list of the issued policies' reriod summaries
   * @deprecated in PC 9.0.2. Use getIssuedPolicies() instead
   */
  @java.lang.Deprecated
  public entity.PolicyPeriodSummary[] getIssuedPoliciesAsArray() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getIssuedPoliciesAsArray();
  }
  
  /**
   * Gets the value of the JobGroups field.
   * The list of Job Groups of this Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JobGroup[] getJobGroups() {
    return (entity.JobGroup[])__getInternalInterface().getFieldValue(JOBGROUPS_PROP.get());
  }
  
  /**
   * Gets the value of the LocationAutoNumberSeq field.
   * Sequence to autonumber account locations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getLocationAutoNumberSeq() {
    return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get());
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
   * Gets financials info (total paid, open reserves, total recoveries)
   * for all policies on this account.
   * @return loss financials for the account
   */
  public entity.LossFinancials[] getLossFinancials() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getLossFinancials();
  }
  
  /**
   * Gets the value of the Nickname field.
   * A nickname of the account used to distinguish multiple accounts of a single account holder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNickname() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NICKNAME_PROP.get());
  }
  
  /**
   * Gets the value of the Notes field.
   * Notes associated with this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes() {
    return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
  }
  
  /**
   * Gets the user role assignment for that role
   * If there's no assignment for that role, creates a new one.
   * If there is more than one assignment for that role, then the first role will be returned no matter
   * whether the role is exclusive or not.
   * @param role The role for the assignment
   * @return the existing user role assignment if found, or a new one if not found
   */
  public entity.UserRoleAssignment getOrCreateUserRoleAssignmentByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getOrCreateUserRoleAssignmentByRole(role);
  }
  
  /**
   * Gets the value of the OriginationDate field.
   * The date the account became a client of the carrier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getOriginationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ORIGINATIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the OtherOrgTypeDescription field.
   * If AccountOrgType is 'other', this value must be filled in
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOtherOrgTypeDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OTHERORGTYPEDESCRIPTION_PROP.get());
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PrimaryAcctLoc[] getPrimaryAcctLocArray() {
    return (entity.PrimaryAcctLoc[])__getInternalInterface().getFieldValue(PRIMARYACCTLOCARRAY_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryLanguage field.
   * The account's preferred language
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getPrimaryLanguage() {
    return (typekey.LanguageType)__getInternalInterface().getFieldValue(PRIMARYLANGUAGE_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryLocale field.
   * The account's preferred locale
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LocaleType getPrimaryLocale() {
    return (typekey.LocaleType)__getInternalInterface().getFieldValue(PRIMARYLOCALE_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryLocation field.
   * The primary Location for this Account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountLocation getPrimaryLocation() {
    return (entity.AccountLocation)__getInternalInterface().getFieldValue(PRIMARYLOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerCodes field.
   * Producer Codes associated with this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountProducerCode[] getProducerCodes() {
    return (entity.AccountProducerCode[])__getInternalInterface().getFieldValue(PRODUCERCODES_PROP.get());
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
   * Retrieves the renewal groups linked to this account.
   * @return renewal groups for the account
   */
  public java.util.List<entity.RenewalGroup> getRenewalGroups() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getRenewalGroups();
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
   * Gets the value of the RoleAssignments field.
   * Role Assignments for this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountUserRoleAssignment[] getRoleAssignments() {
    return (entity.AccountUserRoleAssignment[])__getInternalInterface().getFieldValue(ROLEASSIGNMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the ServiceTier field.
   * Customer Service Tier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CustomerServiceTier getServiceTier() {
    return (typekey.CustomerServiceTier)__getInternalInterface().getFieldValue(SERVICETIER_PROP.get());
  }
  
  /**
   * Gets the value of the SourceRelatedAccounts field.
   * Relationships from this account to another one.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountAccount[] getSourceRelatedAccounts() {
    return (entity.AccountAccount[])__getInternalInterface().getFieldValue(SOURCERELATEDACCOUNTS_PROP.get());
  }
  
  /**
   * Gets the value of the StateBureauNum field.
   * State Bureau number of this account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStateBureauNum() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATEBUREAUNUM_PROP.get());
  }
  
  /**
   * Retrieves the submission groups linked to this account.
   * @return all submissions groups for the account
   */
  public java.util.List<entity.SubmissionGroup> getSubmissionGroups() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getSubmissionGroups();
  }
  
  /**
   * Gets the value of the TargetRelatedAccounts field.
   * Relationships from another account to this one.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountAccount[] getTargetRelatedAccounts() {
    return (entity.AccountAccount[])__getInternalInterface().getFieldValue(TARGETRELATEDACCOUNTS_PROP.get());
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
  public entity.UserRoleAssignment getUserRoleAssignment(entity.User user, typekey.UserRole userRole) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getUserRoleAssignment(user, userRole);
  }
  
  /**
   * Gets the user role assignment for that role
   * If there's no assignment for that role, returns null.
   * If there is more than one assignment for that role, then the first role will be returned.
   * Note: getUserRoleAssignmentsByRole(UserRole) should be called if multiple assignments are expected to return.
   * @param role The role for the assignment
   */
  public entity.UserRoleAssignment getUserRoleAssignmentByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getUserRoleAssignmentByRole(role);
  }
  
  /**
   * Get the user role assignments for that role. If no assignment for that role,
   * then an empty array is returned.
   * @param role The role for the assignment
   * @return an array of user role assignments for the given role. The array is empty if no such user role assignment.
   */
  public entity.UserRoleAssignment[] getUserRoleAssignmentsByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getUserRoleAssignmentsByRole(role);
  }
  
  /**
   * Gets the validation result.
   * @return The validation result.
   */
  public gw.api.validation.ValidationResult getValidationResult() {
    return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
  }
  
  public java.lang.String getVersionString() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
  }
  
  /**
   * Gets the value of the YearBusinessStarted field.
   * What year was the business started?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearBusinessStarted() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARBUSINESSSTARTED_PROP.get());
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
   * Returns true if and only if this Account can be edited
   * in PolicyCenter.
   * @return true if can be edited
   */
  public boolean isEditable() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).isEditable();
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
   * Gets the value of the LinkContacts field.
   * Indicates that this Account will sync Contacts with an external Contact Management System.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLinkContacts() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LINKCONTACTS_PROP.get());
  }
  
  /**
   * If true then no Policy may be created on this Account
   * @return true if no Policy may be created on this Account
   */
  public boolean isLocked() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).isLocked();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLockedFromMerge() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LOCKEDFROMMERGE_PROP.get());
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
   * Mark all of the account contacts associated with this account as syncable except for contacts already marked as
   * 'disallow'.  Additionally flips the LinkContacts bit on this Account so any further Contacts added to the account are
   * marked for AutoSync as well.
   */
  public void markContactsForAutoSync() {
    ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).markContactsForAutoSync();
  }
  
  /**
   * Checks to see if there is already an AccountContact for the given Contact, and if so, returns it.
   * Otherwise it will create a new AccountContact for the given Contact in this Account's bundle.
   * @param contact the contact to find/create as an AccountContact
   * @return the found or created AccountContact
   */
  public entity.AccountContact maybeAddNewAccountContact(entity.Contact contact) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).maybeAddNewAccountContact(contact);
  }
  
  /**
   * Moves all Policies, Notes, Contacts, and Assignments from the
   * fromAccount to this Account, and deletes the fromAccount.
   * This Account becomes the "merged" Account.
   * All changes are made within this Account's bundle, which is not
   * committed at the end of the method.
   * @param fromAccount - the account to be merged into this account
   */
  public void mergeWithAccount(entity.Account fromAccount) {
    ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).mergeWithAccount(fromAccount);
  }
  
  /**
   * Creates a new activity on this account.
   * @param activityPattern the pattern from which the activity should be built
   * @return the new Activity.
   */
  public entity.Activity newActivity(entity.ActivityPattern activityPattern) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).newActivity(activityPattern);
  }
  
  /**
   * Creates and adds to the Account a new AccountLocation with a new Address.
   * The new location is assigned a unique location number
   * @return the created new location
   */
  public entity.AccountLocation newLocation() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).newLocation();
  }
  
  /**
   * Creates a new note on this account.
   * @return the new Note.
   */
  public entity.Note newNote() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).newNote();
  }
  
  /**
   * Given a ProducerSelection (essentially the Agency and the ProducerCode, though there may be more fields),
   * performs the "name clearance" operation of the Account to determine what Products are available.
   * @param policyProductRoot the root for availability
   * @return a result object with details about the name clearance
   */
  public entity.NameClearanceResult performNameClearance(entity.PolicyProductRoot policyProductRoot) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).performNameClearance(policyProductRoot);
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
   * Rejects the root bean w/ a global message
   * <p/>
   * Note the reason why the bean failed validation shouldn't refer to a particular
   * field in the entity. To do that, use the rejectField() method.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void reject(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).reject(errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Rejects a particular field or field path on the root bean.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void rejectField(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectField(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Rejects a particular field or field path on the root bean.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectFieldWithFlowStep(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
  }
  
  /**
   * Reject a particular field of field path on a bean related to the root
   * bean, e.g. an array element of the bean such as an Exposure of a Claim.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void rejectSubField(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubField(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Reject a particular field of field path on a bean related to the root
   * bean, e.g. an array element of the bean such as an Exposure of a Claim.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * Note that this is the fullest version of "reject"; all the others are
   * overloaded for easier use.
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectSubFieldWithFlowStep(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubFieldWithFlowStep(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
  }
  
  /**
   * Rejects the root bean w/ a global message
   * <p/>
   * Note the reason why the bean failed validation shouldn't refer to a particular
   * field in the entity. To do that, use the rejectField() method.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectWithFlowStep(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectWithFlowStep(errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
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
   * Removes the given element from the AccountContacts array. This is achieved by marking the element for removal.
   */
  public void removeFromAccountContacts(entity.AccountContact element) {
    __getInternalInterface().removeArrayElement(ACCOUNTCONTACTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AccountContacts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAccountContacts(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ACCOUNTCONTACTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the AccountLocations array. This is achieved by marking the element for removal.
   */
  public void removeFromAccountLocations(entity.AccountLocation element) {
    __getInternalInterface().removeArrayElement(ACCOUNTLOCATIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AccountLocations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAccountLocations(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ACCOUNTLOCATIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the JobGroups array. This is achieved by marking the element for removal.
   */
  public void removeFromJobGroups(entity.JobGroup element) {
    __getInternalInterface().removeArrayElement(JOBGROUPS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the JobGroups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJobGroups(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(JOBGROUPS_PROP.get(), elementID);
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
   * Removes the given element from the ProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromProducerCodes(entity.AccountProducerCode element) {
    __getInternalInterface().removeArrayElement(PRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducerCodes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PRODUCERCODES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   */
  public void removeFromRoleAssignments(entity.AccountUserRoleAssignment element) {
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
   * Removes the given element from the SourceRelatedAccounts array. This is achieved by marking the element for removal.
   */
  public void removeFromSourceRelatedAccounts(entity.AccountAccount element) {
    __getInternalInterface().removeArrayElement(SOURCERELATEDACCOUNTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the SourceRelatedAccounts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSourceRelatedAccounts(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(SOURCERELATEDACCOUNTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the TargetRelatedAccounts array. This is achieved by marking the element for removal.
   */
  public void removeFromTargetRelatedAccounts(entity.AccountAccount element) {
    __getInternalInterface().removeArrayElement(TARGETRELATEDACCOUNTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the TargetRelatedAccounts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTargetRelatedAccounts(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(TARGETRELATEDACCOUNTS_PROP.get(), elementID);
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
   * Sets the value of the AccountContacts field.
   */
  public void setAccountContacts(entity.AccountContact[] value) {
    __getInternalInterface().setFieldValue(ACCOUNTCONTACTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AccountHolderContact field.
   */
  private void setAccountHolderContact(entity.Contact value) {
    __getInternalInterface().setFieldValue(ACCOUNTHOLDERCONTACT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AccountLocations field.
   */
  public void setAccountLocations(entity.AccountLocation[] value) {
    __getInternalInterface().setFieldValue(ACCOUNTLOCATIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AccountNumber field.
   */
  public void setAccountNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AccountNumberDenorm field.
   */
  private void setAccountNumberDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBERDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AccountOrgType field.
   */
  public void setAccountOrgType(typekey.AccountOrgType value) {
    __getInternalInterface().setFieldValue(ACCOUNTORGTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AccountStatus field.
   */
  public void setAccountStatus(typekey.AccountStatus value) {
    __getInternalInterface().setFieldValue(ACCOUNTSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AccountStatusUpdateTime field.
   */
  private void setAccountStatusUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(ACCOUNTSTATUSUPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AcctholderedgeArray field.
   */
  private void setAcctholderedgeArray(entity.Acctholderedge[] value) {
    __getInternalInterface().setFieldValue(ACCTHOLDEREDGEARRAY_PROP.get(), value);
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
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BusOpsDesc field.
   */
  public void setBusOpsDesc(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BUSOPSDESC_PROP.get(), value);
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
  
  public void setDoNotDestroy(boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
    ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).setDoNotDestroy(value, getDescription);
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
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value) {
    __getInternalInterface().setFieldValue(INDUSTRYCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobGroups field.
   */
  public void setJobGroups(entity.JobGroup[] value) {
    __getInternalInterface().setFieldValue(JOBGROUPS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LinkContacts field.
   */
  private void setLinkContacts(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LINKCONTACTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationAutoNumberSeq field.
   */
  public void setLocationAutoNumberSeq(entity.AutoNumberSequence value) {
    __getInternalInterface().setFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LockedFromMerge field.
   */
  private void setLockedFromMerge(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LOCKEDFROMMERGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LockingColumn field.
   */
  private void setLockingColumn(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
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
   * Sets the value of the Nickname field.
   */
  public void setNickname(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NICKNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value) {
    __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OriginationDate field.
   */
  public void setOriginationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ORIGINATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OtherOrgTypeDescription field.
   */
  public void setOtherOrgTypeDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OTHERORGTYPEDESCRIPTION_PROP.get(), value);
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
   * Sets the value of the PrimaryAcctLocArray field.
   */
  private void setPrimaryAcctLocArray(entity.PrimaryAcctLoc[] value) {
    __getInternalInterface().setFieldValue(PRIMARYACCTLOCARRAY_PROP.get(), value);
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
   * Set the argument as the primary account location.
   * Also explicitly marks all other locations as not primary.
   * The location must already be on the account.
   * @param location to be set as the primary location of the account
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPrimaryLocation(entity.AccountLocation location) {
    ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).setPrimaryLocation(location);
  }
  
  /**
   * Sets the value of the ProducerCodes field.
   */
  public void setProducerCodes(entity.AccountProducerCode[] value) {
    __getInternalInterface().setFieldValue(PRODUCERCODES_PROP.get(), value);
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
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoleAssignments field.
   */
  public void setRoleAssignments(entity.AccountUserRoleAssignment[] value) {
    __getInternalInterface().setFieldValue(ROLEASSIGNMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServiceTier field.
   */
  public void setServiceTier(typekey.CustomerServiceTier value) {
    __getInternalInterface().setFieldValue(SERVICETIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SourceRelatedAccounts field.
   */
  public void setSourceRelatedAccounts(entity.AccountAccount[] value) {
    __getInternalInterface().setFieldValue(SOURCERELATEDACCOUNTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StateBureauNum field.
   */
  public void setStateBureauNum(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STATEBUREAUNUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TargetRelatedAccounts field.
   */
  public void setTargetRelatedAccounts(entity.AccountAccount[] value) {
    __getInternalInterface().setFieldValue(TARGETRELATEDACCOUNTS_PROP.get(), value);
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
   * Sets the value of the YearBusinessStarted field.
   */
  public void setYearBusinessStarted(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(YEARBUSINESSSTARTED_PROP.get(), value);
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
  
  public entity.Policy[] transferPolicies(entity.Policy[] policies, entity.Account fromAccount) {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).transferPolicies(policies, fromAccount);
  }
  
  /**
   * Removes the role from the given User on this assignable object.
   * @param user 
   * @param role 
   */
  public void unassignUserRole(entity.User user, typekey.UserRole role) {
    ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).unassignUserRole(user, role);
  }
  
  /**
   * Copies AccountHolder's contact into the denormalized field AccountHolderContact
   */
  public void updateAccountHolderContact() {
    ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).updateAccountHolderContact();
  }
  
  /**
   * Validates the Account, returning the current validation results.
   */
  public gw.api.validation.ValidationResult validate() {
    return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).validate();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.AccountInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Account.this.__getDelegateManager();
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
     * Add the contact as an AccountContact to this account and return it.
     * The AccountContact is created in this account's bundle.
     * @param contact the contact to create as an AccountContact
     * @throws IllegalStateException if the contact is already an AccountContact on this account
     * @return the AccountContact
     */
    public entity.AccountContact addNewAccountContactForContact(entity.Contact contact) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).addNewAccountContactForContact(contact);
    }
    
    /**
     * Adds a new AccountContact with a contact of <code>contactType</code> to this Account.
     * The AccountContact is created in this account's bundle.
     * @param contactType the type of contact to create
     * @return the AccountContact
     */
    public entity.AccountContact addNewAccountContactOfType(typekey.ContactType contactType) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).addNewAccountContactOfType(contactType);
    }
    
    /**
     * This will add a specific producer code the the array of AccountProducerCodes
     * @param pc the ProducerCode to add
     */
    public void addProducerCode(entity.ProducerCode pc) {
      ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).addProducerCode(pc);
    }
    
    /**
     * Adds the given element to the AccountContacts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAccountContacts(entity.AccountContact element) {
      __getInternalInterface().addArrayElement(ACCOUNTCONTACTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the AccountLocations array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAccountLocations(entity.AccountLocation element) {
      __getInternalInterface().addArrayElement(ACCOUNTLOCATIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the AcctholderedgeArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAcctholderedgeArray(entity.Acctholderedge element) {
      __getInternalInterface().addArrayElement(ACCTHOLDEREDGEARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the JobGroups array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToJobGroups(entity.JobGroup element) {
      __getInternalInterface().addArrayElement(JOBGROUPS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToNotes(entity.Note element) {
      __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PrimaryAcctLocArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPrimaryAcctLocArray(entity.PrimaryAcctLoc element) {
      __getInternalInterface().addArrayElement(PRIMARYACCTLOCARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToProducerCodes(entity.AccountProducerCode element) {
      __getInternalInterface().addArrayElement(PRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRoleAssignments(entity.AccountUserRoleAssignment element) {
      __getInternalInterface().addArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
    }
    
    public void addToRoleAssignments(entity.UserRoleAssignmentDelegate element) {
      ((com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods")).addToRoleAssignments(element);
    }
    
    /**
     * Adds the given element to the SourceRelatedAccounts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToSourceRelatedAccounts(entity.AccountAccount element) {
      __getInternalInterface().addArrayElement(SOURCERELATEDACCOUNTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the TargetRelatedAccounts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTargetRelatedAccounts(entity.AccountAccount element) {
      __getInternalInterface().addArrayElement(TARGETRELATEDACCOUNTS_PROP.get(), element);
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
    public entity.UserRoleAssignment assignUserRole(entity.User user, entity.Group group, typekey.UserRole role) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).assignUserRole(user, group, role);
    }
    
    /**
     * Assigns the UserRole for this assignable item.
     * This uses rules to find the right assignment
     * @param role The role to assign
     */
    public boolean autoAssignRole(typekey.UserRole role) {
      return ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).autoAssignRole(role);
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
     * @param assignment the assignable to cascade
     */
    public void cascadeAssignment(entity.Assignable assignment) {
      ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).cascadeAssignment(assignment);
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
    
    public void combine(entity.Account fromAccount) {
      ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).combine(fromAccount);
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public void copyAccountContactsReferencedByPeriod(entity.PolicyPeriod period) {
      ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).copyAccountContactsReferencedByPeriod(period);
    }
    
    public void copyAccountContactsReferencedByPolicies(entity.Policy[] policies) {
      ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).copyAccountContactsReferencedByPolicies(policies);
    }
    
    public void copyAccountLocationsReferencedByPeriod(entity.PolicyPeriod period) {
      ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).copyAccountLocationsReferencedByPeriod(period);
    }
    
    public void copyAccountLocationsReferencedByPolicies(entity.Policy[] policies) {
      ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).copyAccountLocationsReferencedByPolicies(policies);
    }
    
    public entity.Policy createAndAddPolicy(gw.api.productmodel.Product product) {
      return ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).createAndAddPolicy(product);
    }
    
    /**
     * Creates a new assignment. All fields are initially empty
     * @return the created UserRoleAssignment
     */
    public entity.AccountUserRoleAssignment createAndAddRoleAssignment() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createAndAddRoleAssignment();
    }
    
    /**
     * Creates and starts a new {@link entity.Renewal} job representing a conversion from an
     * external legacy system.. The appropriate {@link entity.Policy},
     * {@link entity.PolicyPeriod}, and
     * {@link entity.PolicyLine} entities are initialized from the <code>account</code>. The
     * period's primary named insured and primary location are initialized from the <code>account</code>. The appropriate
     * {@link entity.PolicyLine} entities are also created via
     * {@link entity.PolicyPeriod#createPolicyLine(gw.api.productmodel.PolicyLinePattern)}.
     * <p/>
     * The new period will also be linked to new {@link entity.Policy},
     * {@link entity.PolicyTerm},
     * {@link entity.EffectiveDatedFields} and
     * {@link entity.AutoNumberSequence} entities. The policy's loss history type defaults to
     * "No loss history".
     * <p/>
     * NOTE: This method should only be called when starting renewals on policies as they are transferred from an external
     * system to PolicyCenter. When the renewal is bound, PolicyCenter will effectively become the system of record for
     * the policy.
     * @param effectiveDate The starting date for the new period. This is also used to calculate the period end date,
     *                       based on this product's default term length. If this is null, the current system date will be
     *                       used as the start date.
     * @param product the product the period is created for
     * @param producerCode the producer code of service
     * @param populatePeriod A block accepting a policy period to inject custom initializations from an external period.
     * @return The newly created {@link entity.Renewal}.
     */
    public entity.Renewal createConversionRenewal(java.util.Date effectiveDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createConversionRenewal(effectiveDate, product, producerCode, populatePeriod);
    }
    
    /**
     * Creates and starts a new {@link entity.Renewal} job representing a conversion from an
     * external legacy system.. The appropriate {@link entity.Policy},
     * {@link entity.PolicyPeriod}, and
     * {@link entity.PolicyLine} entities are initialized from the <code>account</code>. The
     * period's primary named insured and primary location are initialized from the <code>account</code>. The appropriate
     * {@link entity.PolicyLine} entities are also created via
     * {@link entity.PolicyPeriod#createPolicyLine(gw.api.productmodel.PolicyLinePattern)}.
     * <p/>
     * The new period will also be linked to new {@link entity.Policy},
     * {@link entity.PolicyTerm},
     * {@link entity.EffectiveDatedFields} and
     * {@link entity.AutoNumberSequence} entities. The policy's loss history type defaults to
     * "No loss history".
     * <p/>
     * NOTE: This method should only be called when starting renewals on policies as they are transferred from an external
     * system to PolicyCenter. When the renewal is bound, PolicyCenter will effectively become the system of record for
     * the policy.
     * @param basedOnEffectiveDate The effectiveDate for the new period's basedOn period.
     * @param basedOnExpirationDate The basedOn period's expirationDate. Due to database consistency, it is also the effectiveDate
     *                               for the new period.
     * @param product The product the period is created for
     * @param producerCode The producer code of service
     * @param policyNumber The policy number for the policy periods associated with this Renewal. If null,
     *                               generate and use a new, unique policyNumber. If policy number already exists in the system,
     *                               generate and use a new, unique policyNumber.
     * @param populatePeriod A block accepting a policy period to inject custom initializations from an external period.
     * @throws IllegalStateException If either the basedOnEffectiveDate or the basedOnExpirationDate is null
     * @return The newly created {@link entity.Renewal}.
     */
    public entity.Renewal createConversionRenewalWithBasedOn(java.util.Date basedOnEffectiveDate, java.util.Date basedOnExpirationDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, java.lang.String policyNumber, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createConversionRenewalWithBasedOn(basedOnEffectiveDate, basedOnExpirationDate, product, producerCode, policyNumber, populatePeriod);
    }
    
    /**
     * Creates and starts a new {@link entity.Renewal} job representing a conversion from an
     * external legacy system.. The appropriate {@link entity.Policy},
     * {@link entity.PolicyPeriod}, and
     * {@link entity.PolicyLine} entities are initialized from the <code>account</code>. The
     * period's primary named insured and primary location are initialized from the <code>account</code>. The appropriate
     * {@link entity.PolicyLine} entities are also created via
     * {@link entity.PolicyPeriod#createPolicyLine(gw.api.productmodel.PolicyLinePattern)}.
     * <p/>
     * The new period will also be linked to new {@link entity.Policy},
     * {@link entity.PolicyTerm},
     * {@link entity.EffectiveDatedFields} and
     * {@link entity.AutoNumberSequence} entities. The policy's loss history type defaults to
     * "No loss history".
     * <p/>
     * NOTE: This method should only be called when starting renewals on policies as they are transferred from an external
     * system to PolicyCenter. When the renewal is bound, PolicyCenter will effectively become the system of record for
     * the policy.
     * @param basedOnEffectiveDate The effectiveDate for the new period's basedOn period.
     * @param basedOnExpirationDate The basedOn period's expirationDate. Due to database consistency, it is also the effectiveDate
     *                               for the new period.
     * @param product The product the period is created for
     * @param producerCode The producer code of service
     * @param policyNumber The policy number for the policy periods associated with this Renewal. If null,
     *                               generate and use a new, unique policyNumber. If policy number already exists in the system,
     *                               generate and use a new, unique policyNumber.
     * @param populatePeriod A block accepting a policy period to inject custom initializations from an external period.
     * @param rethrowExceptions If true, rethrow the exception if any, if set to false, this method will return null if any exception happens.
     * @throws IllegalStateException If either the basedOnEffectiveDate or the basedOnExpirationDate is null
     * @return The newly created {@link entity.Renewal}.
     */
    public entity.Renewal createConversionRenewalWithBasedOn(java.util.Date basedOnEffectiveDate, java.util.Date basedOnExpirationDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, java.lang.String policyNumber, gw.api.policy.PeriodFromExternalPopulator populatePeriod, boolean rethrowExceptions) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createConversionRenewalWithBasedOn(basedOnEffectiveDate, basedOnExpirationDate, product, producerCode, policyNumber, populatePeriod, rethrowExceptions);
    }
    
    public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description) {
      return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description);
    }
    
    public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description, java.lang.String originalValue, java.lang.String newValue) {
      return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description, originalValue, newValue);
    }
    
    /**
     * Used internally to create a new submission of a Policy.  Kicks off the addition of all
     * policy lines, coverages, etc contained by this product.
     * @param product - The product for this submission
     * @param producerSelection - The producer for this submission
     * @return - A new submission based on a new PolicyPeriod
     */
    public entity.Submission createSubmission(gw.api.productmodel.Product product, entity.ProducerSelection producerSelection) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createSubmission(product, producerSelection);
    }
    
    /**
     * Used internally to create a new submission of a Policy.  Kicks off the addition of all
     * policy lines, coverages, etc contained by this product.
     * @param effectiveDate The effective date
     * @param product The product for this submission
     * @param producerCode The producer code
     * @param populatePeriod The policy period populator
     * @return - A new submission based on a new PolicyPeriod
     */
    public entity.Submission createSubmission(java.util.Date effectiveDate, gw.api.productmodel.Product product, entity.ProducerCode producerCode, gw.api.policy.PeriodFromExternalPopulator populatePeriod) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).createSubmission(effectiveDate, product, producerCode, populatePeriod);
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
    
    public void freeze() {
      ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).freeze();
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
     * Gets the value of the AccountContacts field.
     * All the contacts related to this account, including inactive ones.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountContact[] getAccountContacts() {
      return (entity.AccountContact[])__getInternalInterface().getFieldValue(ACCOUNTCONTACTS_PROP.get());
    }
    
    public entity.AccountContact[] getAccountContactsWithAnyRole(java.util.Set<typekey.AccountContactRole> roleSubtypes) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAccountContactsWithAnyRole(roleSubtypes);
    }
    
    /**
     * Returns the AccountContacts on the account that have a role of the supplied <code>roleSubtype</code>.
     * @param roleSubtype the type of Role to look for in AccountContacts
     * @return an Array of Active AccountContacts that have the supplied role
     */
    public entity.AccountContact[] getAccountContactsWithRole(typekey.AccountContactRole roleSubtype) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAccountContactsWithRole(roleSubtype);
    }
    
    /**
     * Return the AccountHolder of this account, or else null.
     * @return the AccountHolder
     */
    public entity.AccountHolder getAccountHolder() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAccountHolder();
    }
    
    /**
     * Gets the value of the AccountHolderContact field.
     * Account Holder Contact denormalized onto Account for performance.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contact getAccountHolderContact() {
      return (entity.Contact)__getInternalInterface().getFieldValue(ACCOUNTHOLDERCONTACT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAccountHolderContactID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNTHOLDERCONTACT_PROP.get());
    }
    
    /**
     * Gets the value of the AccountLocations field.
     * The list of account locations for this Account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountLocation[] getAccountLocations() {
      return (entity.AccountLocation[])__getInternalInterface().getFieldValue(ACCOUNTLOCATIONS_PROP.get());
    }
    
    /**
     * Gets the value of the AccountNumber field.
     * The account number of this account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAccountNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the AccountNumberDenorm field.
     * denorm field for AccountNumber
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAccountNumberDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBERDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the AccountOrgType field.
     * Organization type of this account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AccountOrgType getAccountOrgType() {
      return (typekey.AccountOrgType)__getInternalInterface().getFieldValue(ACCOUNTORGTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the AccountStatus field.
     * The status of this account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AccountStatus getAccountStatus() {
      return (typekey.AccountStatus)__getInternalInterface().getFieldValue(ACCOUNTSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the AccountStatusUpdateTime field.
     * Time when account status was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAccountStatusUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ACCOUNTSTATUSUPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the AcctholderedgeArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Acctholderedge[] getAcctholderedgeArray() {
      return (entity.Acctholderedge[])__getInternalInterface().getFieldValue(ACCTHOLDEREDGEARRAY_PROP.get());
    }
    
    /**
     * Returns all the active AccountContacts on this account.
     * @return the array of active AccountContacts on this Account
     */
    public entity.AccountContact[] getActiveAccountContacts() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getActiveAccountContacts();
    }
    
    /**
     * Gets the active assignments to the given role.
     * @param userRole 
     * @return 
     */
    public entity.UserRoleAssignment[] getActiveUserRoleAssignments(typekey.UserRole userRole) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getActiveUserRoleAssignments(userRole);
    }
    
    /**
     * Gets all jobs whose current period is related to the account.
     * @param completeJobsOnly null if don't care, True for only complete jobs, False for only non-complete jobs
     * @param jobType the type of job that must be matched, or null for any type of job
     * @param product the product which must be matched, or null for any product
     * @param user the user whoes permission will be used, or null to ignore permission
     * @return jobs whose current period is related to the account
     */
    public gw.api.database.IQueryBeanResult<entity.Job> getAllJobs(java.lang.Boolean completeJobsOnly, typekey.Job jobType, gw.api.productmodel.Product product, entity.User user) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAllJobs(completeJobsOnly, jobType, product, user);
    }
    
    /**
     * Retrieve all open actvitities linked to this account.
     * @return array of activities
     */
    public gw.api.database.IQueryBeanResult<entity.Activity> getAllOpenActivities() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAllOpenActivities();
    }
    
    /**
     * Returns an array with the relationships from both {@link #getSourceRelatedAccounts()} and
     * {@link #getTargetRelatedAccounts()}. If this account has a relationship to itself, only one
     * {@link entity.AccountAccount} will be returned for that relationship. If user agrument is supplied, the returned
     * array will be filtered to contain relationships only for accounts which given user has access to.
     * @param user user whose access permisions will be used to filter the array with the account relationships
     * @return an array of accountaccount
     */
    public entity.AccountAccount[] getAllRelatedAccounts(entity.User user) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAllRelatedAccounts(user);
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
     * Returns the a product offer matching the <code>product</code> given this account and <code>policyProductRoot</code>.
     * Products are first run through name clearance and then through availability lookups to further restrict their
     * availability.  If no such available product offer is found, return null.
     * @param policyProductRoot the root for availability
     * @param product the product we want a selection for
     * @return the available product selection or null if none are available
     */
    public entity.ProductSelection getAvailableProduct(entity.PolicyProductRoot policyProductRoot, gw.api.productmodel.Product product) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAvailableProduct(policyProductRoot, product);
    }
    
    /**
     * Returns all available products given this account and policy product root. Products are first run through
     * name clearance, after which the availability lookups are applied to further restrict their availability.
     * @param policyProductRoot the root for availability
     * @return product selections available to this account and policy product root
     */
    public java.util.List<entity.ProductSelection> getAvailableProducts(entity.PolicyProductRoot policyProductRoot) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getAvailableProducts(policyProductRoot);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the BusOpsDesc field.
     * Business and operations description.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBusOpsDesc() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BUSOPSDESC_PROP.get());
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
    public entity.AccountUserRoleAssignment getCurrentRoleAssignment() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getCurrentRoleAssignment();
    }
    
    /**
     * Gets the set of documents linked to this Account
     * @return a QueryProcessor containing the set of documents linked to this Account
     */
    public gw.api.database.IQueryBeanResult<entity.Document> getDocuments() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getDocuments();
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
     * Gets the value of the IndustryCode field.
     * Industry Code of Account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.IndustryCode getIndustryCode() {
      return (entity.IndustryCode)__getInternalInterface().getFieldValue(INDUSTRYCODE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getIndustryCodeID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(INDUSTRYCODE_PROP.get());
    }
    
    /**
     * Returns the result of retrieving summary information for all bound policies related to this
     * account. Note that this method will not return unbound policies
     * (e.g., policies associated with new submissions).
     * @return the query result representing the issued policies for the account
     */
    public gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> getIssuedPolicies() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getIssuedPolicies();
    }
    
    /**
     * Returns the result of retrieving summary information from the remote
     * Policy Administration System for all bound policies related to this
     * account. Note that this method will not return unbound policies
     * created in PolicyCenter (e.g., policies associated with new submissions)
     * until they become bound in the remote system.<p>
     * <p/>
     * This method may have a non-trivial cost, since it may have to remotely search
     * for all policies associated with this account.
     * @return A list of the issued policies' reriod summaries
     * @deprecated in PC 9.0.2. Use getIssuedPolicies() instead
     */
    @java.lang.Deprecated
    public entity.PolicyPeriodSummary[] getIssuedPoliciesAsArray() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getIssuedPoliciesAsArray();
    }
    
    /**
     * Gets the value of the JobGroups field.
     * The list of Job Groups of this Account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.JobGroup[] getJobGroups() {
      return (entity.JobGroup[])__getInternalInterface().getFieldValue(JOBGROUPS_PROP.get());
    }
    
    /**
     * Gets the value of the LocationAutoNumberSeq field.
     * Sequence to autonumber account locations
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AutoNumberSequence getLocationAutoNumberSeq() {
      return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLocationAutoNumberSeqID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LOCATIONAUTONUMBERSEQ_PROP.get());
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
     * Gets financials info (total paid, open reserves, total recoveries)
     * for all policies on this account.
     * @return loss financials for the account
     */
    public entity.LossFinancials[] getLossFinancials() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getLossFinancials();
    }
    
    /**
     * Gets the value of the Nickname field.
     * A nickname of the account used to distinguish multiple accounts of a single account holder
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNickname() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NICKNAME_PROP.get());
    }
    
    /**
     * Gets the value of the Notes field.
     * Notes associated with this account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Note[] getNotes() {
      return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
    }
    
    /**
     * Gets the user role assignment for that role
     * If there's no assignment for that role, creates a new one.
     * If there is more than one assignment for that role, then the first role will be returned no matter
     * whether the role is exclusive or not.
     * @param role The role for the assignment
     * @return the existing user role assignment if found, or a new one if not found
     */
    public entity.UserRoleAssignment getOrCreateUserRoleAssignmentByRole(typekey.UserRole role) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getOrCreateUserRoleAssignmentByRole(role);
    }
    
    /**
     * Gets the value of the OriginationDate field.
     * The date the account became a client of the carrier.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getOriginationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ORIGINATIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the OtherOrgTypeDescription field.
     * If AccountOrgType is 'other', this value must be filled in
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOtherOrgTypeDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OTHERORGTYPEDESCRIPTION_PROP.get());
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
     * Gets the value of the PrimaryAcctLocArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PrimaryAcctLoc[] getPrimaryAcctLocArray() {
      return (entity.PrimaryAcctLoc[])__getInternalInterface().getFieldValue(PRIMARYACCTLOCARRAY_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryLanguage field.
     * The account's preferred language
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LanguageType getPrimaryLanguage() {
      return (typekey.LanguageType)__getInternalInterface().getFieldValue(PRIMARYLANGUAGE_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryLocale field.
     * The account's preferred locale
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LocaleType getPrimaryLocale() {
      return (typekey.LocaleType)__getInternalInterface().getFieldValue(PRIMARYLOCALE_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryLocation field.
     * The primary Location for this Account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountLocation getPrimaryLocation() {
      return (entity.AccountLocation)__getInternalInterface().getFieldValue(PRIMARYLOCATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPrimaryLocationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PRIMARYLOCATION_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerCodes field.
     * Producer Codes associated with this account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountProducerCode[] getProducerCodes() {
      return (entity.AccountProducerCode[])__getInternalInterface().getFieldValue(PRODUCERCODES_PROP.get());
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
     * Retrieves the renewal groups linked to this account.
     * @return renewal groups for the account
     */
    public java.util.List<entity.RenewalGroup> getRenewalGroups() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getRenewalGroups();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the RoleAssignments field.
     * Role Assignments for this account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountUserRoleAssignment[] getRoleAssignments() {
      return (entity.AccountUserRoleAssignment[])__getInternalInterface().getFieldValue(ROLEASSIGNMENTS_PROP.get());
    }
    
    public entity.Extractable getRoot() {
      return ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).getRoot();
    }
    
    /**
     * Gets the value of the ServiceTier field.
     * Customer Service Tier
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.CustomerServiceTier getServiceTier() {
      return (typekey.CustomerServiceTier)__getInternalInterface().getFieldValue(SERVICETIER_PROP.get());
    }
    
    /**
     * Gets the value of the SourceRelatedAccounts field.
     * Relationships from this account to another one.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountAccount[] getSourceRelatedAccounts() {
      return (entity.AccountAccount[])__getInternalInterface().getFieldValue(SOURCERELATEDACCOUNTS_PROP.get());
    }
    
    /**
     * Gets the value of the StateBureauNum field.
     * State Bureau number of this account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStateBureauNum() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATEBUREAUNUM_PROP.get());
    }
    
    /**
     * Retrieves the submission groups linked to this account.
     * @return all submissions groups for the account
     */
    public java.util.List<entity.SubmissionGroup> getSubmissionGroups() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getSubmissionGroups();
    }
    
    /**
     * Gets the value of the TargetRelatedAccounts field.
     * Relationships from another account to this one.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountAccount[] getTargetRelatedAccounts() {
      return (entity.AccountAccount[])__getInternalInterface().getFieldValue(TARGETRELATEDACCOUNTS_PROP.get());
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
    
    /**
     * Gets the assignment that corresponds to the given user and role, or null
     * if none matches.
     * @param user 
     * @param userRole 
     * @return 
     */
    public entity.UserRoleAssignment getUserRoleAssignment(entity.User user, typekey.UserRole userRole) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getUserRoleAssignment(user, userRole);
    }
    
    /**
     * Gets the user role assignment for that role
     * If there's no assignment for that role, returns null.
     * If there is more than one assignment for that role, then the first role will be returned.
     * Note: getUserRoleAssignmentsByRole(UserRole) should be called if multiple assignments are expected to return.
     * @param role The role for the assignment
     */
    public entity.UserRoleAssignment getUserRoleAssignmentByRole(typekey.UserRole role) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getUserRoleAssignmentByRole(role);
    }
    
    /**
     * Get the user role assignments for that role. If no assignment for that role,
     * then an empty array is returned.
     * @param role The role for the assignment
     * @return an array of user role assignments for the given role. The array is empty if no such user role assignment.
     */
    public entity.UserRoleAssignment[] getUserRoleAssignmentsByRole(typekey.UserRole role) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).getUserRoleAssignmentsByRole(role);
    }
    
    /**
     * Gets the validation result.
     * @return The validation result.
     */
    public gw.api.validation.ValidationResult getValidationResult() {
      return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
    }
    
    public java.lang.String getVersionString() {
      return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
    }
    
    /**
     * Gets the value of the YearBusinessStarted field.
     * What year was the business started?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getYearBusinessStarted() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARBUSINESSSTARTED_PROP.get());
    }
    
    public boolean hasExpiredPoliciesAndNoOpenJobs() {
      return ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).hasExpiredPoliciesAndNoOpenJobs();
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
     * Gets the value of the DoNotDestroy field.
     * If set then the entity should not be destroyed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDoNotDestroy() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTDESTROY_PROP.get());
    }
    
    /**
     * Returns true if and only if this Account can be edited
     * in PolicyCenter.
     * @return true if can be edited
     */
    public boolean isEditable() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).isEditable();
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
     * Gets the value of the LinkContacts field.
     * Indicates that this Account will sync Contacts with an external Contact Management System.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLinkContacts() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LINKCONTACTS_PROP.get());
    }
    
    /**
     * If true then no Policy may be created on this Account
     * @return true if no Policy may be created on this Account
     */
    public boolean isLocked() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).isLocked();
    }
    
    /**
     * Gets the value of the LockedFromMerge field.
     * If true then no Policy may be created or retrieved on this Account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLockedFromMerge() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LOCKEDFROMMERGE_PROP.get());
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
    
    /**
     * Mark all of the account contacts associated with this account as syncable except for contacts already marked as
     * 'disallow'.  Additionally flips the LinkContacts bit on this Account so any further Contacts added to the account are
     * marked for AutoSync as well.
     */
    public void markContactsForAutoSync() {
      ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).markContactsForAutoSync();
    }
    
    /**
     * Checks to see if there is already an AccountContact for the given Contact, and if so, returns it.
     * Otherwise it will create a new AccountContact for the given Contact in this Account's bundle.
     * @param contact the contact to find/create as an AccountContact
     * @return the found or created AccountContact
     */
    public entity.AccountContact maybeAddNewAccountContact(entity.Contact contact) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).maybeAddNewAccountContact(contact);
    }
    
    /**
     * Moves all Policies, Notes, Contacts, and Assignments from the
     * fromAccount to this Account, and deletes the fromAccount.
     * This Account becomes the "merged" Account.
     * All changes are made within this Account's bundle, which is not
     * committed at the end of the method.
     * @param fromAccount - the account to be merged into this account
     */
    public void mergeWithAccount(entity.Account fromAccount) {
      ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).mergeWithAccount(fromAccount);
    }
    
    /**
     * Creates a new activity on this account.
     * @param activityPattern the pattern from which the activity should be built
     * @return the new Activity.
     */
    public entity.Activity newActivity(entity.ActivityPattern activityPattern) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).newActivity(activityPattern);
    }
    
    /**
     * Creates and adds to the Account a new AccountLocation with a new Address.
     * The new location is assigned a unique location number
     * @return the created new location
     */
    public entity.AccountLocation newLocation() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).newLocation();
    }
    
    /**
     * Creates a new note on this account.
     * @return the new Note.
     */
    public entity.Note newNote() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).newNote();
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
    
    /**
     * Given a ProducerSelection (essentially the Agency and the ProducerCode, though there may be more fields),
     * performs the "name clearance" operation of the Account to determine what Products are available.
     * @param policyProductRoot the root for availability
     * @return a result object with details about the name clearance
     */
    public entity.NameClearanceResult performNameClearance(entity.PolicyProductRoot policyProductRoot) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).performNameClearance(policyProductRoot);
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
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void reject(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).reject(errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectField(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectField(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectFieldWithFlowStep(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectSubField(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubField(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * Note that this is the fullest version of "reject"; all the others are
     * overloaded for easier use.
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectSubFieldWithFlowStep(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubFieldWithFlowStep(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectWithFlowStep(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectWithFlowStep(errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
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
     * Removes the given element from the AccountContacts array. This is achieved by marking the element for removal.
     */
    public void removeFromAccountContacts(entity.AccountContact element) {
      __getInternalInterface().removeArrayElement(ACCOUNTCONTACTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AccountContacts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAccountContacts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ACCOUNTCONTACTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the AccountLocations array. This is achieved by marking the element for removal.
     */
    public void removeFromAccountLocations(entity.AccountLocation element) {
      __getInternalInterface().removeArrayElement(ACCOUNTLOCATIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AccountLocations array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAccountLocations(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ACCOUNTLOCATIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the AcctholderedgeArray array. This is achieved by marking the element for removal.
     */
    public void removeFromAcctholderedgeArray(entity.Acctholderedge element) {
      __getInternalInterface().removeArrayElement(ACCTHOLDEREDGEARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AcctholderedgeArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAcctholderedgeArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ACCTHOLDEREDGEARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the JobGroups array. This is achieved by marking the element for removal.
     */
    public void removeFromJobGroups(entity.JobGroup element) {
      __getInternalInterface().removeArrayElement(JOBGROUPS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the JobGroups array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromJobGroups(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(JOBGROUPS_PROP.get(), elementID);
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
     * Removes the given element from the PrimaryAcctLocArray array. This is achieved by marking the element for removal.
     */
    public void removeFromPrimaryAcctLocArray(entity.PrimaryAcctLoc element) {
      __getInternalInterface().removeArrayElement(PRIMARYACCTLOCARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PrimaryAcctLocArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPrimaryAcctLocArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRIMARYACCTLOCARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ProducerCodes array. This is achieved by marking the element for removal.
     */
    public void removeFromProducerCodes(entity.AccountProducerCode element) {
      __getInternalInterface().removeArrayElement(PRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ProducerCodes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromProducerCodes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRODUCERCODES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
     */
    public void removeFromRoleAssignments(entity.AccountUserRoleAssignment element) {
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
     * Removes the given element from the SourceRelatedAccounts array. This is achieved by marking the element for removal.
     */
    public void removeFromSourceRelatedAccounts(entity.AccountAccount element) {
      __getInternalInterface().removeArrayElement(SOURCERELATEDACCOUNTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the SourceRelatedAccounts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromSourceRelatedAccounts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SOURCERELATEDACCOUNTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the TargetRelatedAccounts array. This is achieved by marking the element for removal.
     */
    public void removeFromTargetRelatedAccounts(entity.AccountAccount element) {
      __getInternalInterface().removeArrayElement(TARGETRELATEDACCOUNTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the TargetRelatedAccounts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTargetRelatedAccounts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TARGETRELATEDACCOUNTS_PROP.get(), elementID);
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
     * Sets the value of the AccountContacts field.
     */
    public void setAccountContacts(entity.AccountContact[] value) {
      __getInternalInterface().setFieldValue(ACCOUNTCONTACTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AccountHolderContact field.
     */
    public void setAccountHolderContact(entity.Contact value) {
      __getInternalInterface().setFieldValue(ACCOUNTHOLDERCONTACT_PROP.get(), value);
    }
    
    public void setAccountHolderContactID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACCOUNTHOLDERCONTACT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AccountLocations field.
     */
    public void setAccountLocations(entity.AccountLocation[] value) {
      __getInternalInterface().setFieldValue(ACCOUNTLOCATIONS_PROP.get(), value);
    }
    
    public void setAccountMergeContext() {
      ((com.guidewire.pc.domain.account.impl.AccountInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountInternalMethods")).setAccountMergeContext();
    }
    
    /**
     * Sets the value of the AccountNumber field.
     */
    public void setAccountNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AccountNumberDenorm field.
     */
    public void setAccountNumberDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBERDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AccountOrgType field.
     */
    public void setAccountOrgType(typekey.AccountOrgType value) {
      __getInternalInterface().setFieldValue(ACCOUNTORGTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AccountStatus field.
     */
    public void setAccountStatus(typekey.AccountStatus value) {
      __getInternalInterface().setFieldValue(ACCOUNTSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AccountStatusUpdateTime field.
     */
    public void setAccountStatusUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(ACCOUNTSTATUSUPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AcctholderedgeArray field.
     */
    public void setAcctholderedgeArray(entity.Acctholderedge[] value) {
      __getInternalInterface().setFieldValue(ACCTHOLDEREDGEARRAY_PROP.get(), value);
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
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BusOpsDesc field.
     */
    public void setBusOpsDesc(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BUSOPSDESC_PROP.get(), value);
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
    
    public void setDoNotDestroy(boolean value, java.util.concurrent.Callable<java.lang.String> getDescription) {
      ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).setDoNotDestroy(value, getDescription);
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
     * Sets the value of the IndustryCode field.
     */
    public void setIndustryCode(entity.IndustryCode value) {
      __getInternalInterface().setFieldValue(INDUSTRYCODE_PROP.get(), value);
    }
    
    public void setIndustryCodeID(gw.pl.persistence.core.Key value) {
      setFieldValue(INDUSTRYCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the JobGroups field.
     */
    public void setJobGroups(entity.JobGroup[] value) {
      __getInternalInterface().setFieldValue(JOBGROUPS_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LinkContacts field.
     */
    public void setLinkContacts(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LINKCONTACTS_PROP.get(), value);
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
     * Sets the value of the LockedFromMerge field.
     */
    public void setLockedFromMerge(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LOCKEDFROMMERGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LockingColumn field.
     */
    public void setLockingColumn(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
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
     * Sets the value of the Nickname field.
     */
    public void setNickname(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NICKNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Notes field.
     */
    public void setNotes(entity.Note[] value) {
      __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OriginationDate field.
     */
    public void setOriginationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ORIGINATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OtherOrgTypeDescription field.
     */
    public void setOtherOrgTypeDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OTHERORGTYPEDESCRIPTION_PROP.get(), value);
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
     * Sets the value of the PrimaryAcctLocArray field.
     */
    public void setPrimaryAcctLocArray(entity.PrimaryAcctLoc[] value) {
      __getInternalInterface().setFieldValue(PRIMARYACCTLOCARRAY_PROP.get(), value);
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
     * Set the argument as the primary account location.
     * Also explicitly marks all other locations as not primary.
     * The location must already be on the account.
     * @param location to be set as the primary location of the account
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPrimaryLocation(entity.AccountLocation location) {
      ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).setPrimaryLocation(location);
    }
    
    public void setPrimaryLocationID(gw.pl.persistence.core.Key value) {
      setFieldValue(PRIMARYLOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerCodes field.
     */
    public void setProducerCodes(entity.AccountProducerCode[] value) {
      __getInternalInterface().setFieldValue(PRODUCERCODES_PROP.get(), value);
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
     * Sets the value of the RoleAssignments field.
     */
    public void setRoleAssignments(entity.AccountUserRoleAssignment[] value) {
      __getInternalInterface().setFieldValue(ROLEASSIGNMENTS_PROP.get(), value);
    }
    
    public void setRoot(entity.KeyableBean root) {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).setRoot(root);
    }
    
    /**
     * Sets the value of the ServiceTier field.
     */
    public void setServiceTier(typekey.CustomerServiceTier value) {
      __getInternalInterface().setFieldValue(SERVICETIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SourceRelatedAccounts field.
     */
    public void setSourceRelatedAccounts(entity.AccountAccount[] value) {
      __getInternalInterface().setFieldValue(SOURCERELATEDACCOUNTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StateBureauNum field.
     */
    public void setStateBureauNum(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STATEBUREAUNUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TargetRelatedAccounts field.
     */
    public void setTargetRelatedAccounts(entity.AccountAccount[] value) {
      __getInternalInterface().setFieldValue(TARGETRELATEDACCOUNTS_PROP.get(), value);
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
    
    public void setValidationResult(gw.api.validation.ValidationResult result) {
      ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).setValidationResult(result);
    }
    
    /**
     * Sets the value of the YearBusinessStarted field.
     */
    public void setYearBusinessStarted(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(YEARBUSINESSSTARTED_PROP.get(), value);
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
    
    public entity.Policy[] transferPolicies(entity.Policy[] policies, entity.Account fromAccount) {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).transferPolicies(policies, fromAccount);
    }
    
    /**
     * Removes the role from the given User on this assignable object.
     * @param user 
     * @param role 
     */
    public void unassignUserRole(entity.User user, typekey.UserRole role) {
      ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).unassignUserRole(user, role);
    }
    
    /**
     * Copies AccountHolder's contact into the denormalized field AccountHolderContact
     */
    public void updateAccountHolderContact() {
      ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).updateAccountHolderContact();
    }
    
    public void updateInfoOnArchive() {
      ((com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods")).updateInfoOnArchive();
    }
    
    /**
     * Validates the Account, returning the current validation results.
     */
    public gw.api.validation.ValidationResult validate() {
      return ((com.guidewire.pc.domain.account.AccountPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountPublicMethods")).validate();
    }
    
    public com.guidewire.pl.system.locale.UserMessage[] validateAssignments() {
      return ((com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods")).validateAssignments();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pc.domain.account.AccountPublicMethods", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pc.domain.account.impl.AccountInternalMethods", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pc.domain.note.NoteContainer", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pc.domain.personaldata.PinnableDomainMethods", "com.guidewire.pc.domain.personaldata.AccountPinnableAdapter");
    config.put("com.guidewire.pl.domain.assignment.impl.UserRoleOwnerInternalMethods", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pl.domain.extract.RootInfoPublicMethods", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.domain.validation.ValidatablePublicMethods", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("gw.api.assignment.UserRoleOwner", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("gw.api.domain.document.DocumentContainer", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("gw.api.domain.linkedobject.LinkedObjectContainer", "com.guidewire.pc.domain.account.impl.AccountImpl");
    config.put("gw.api.history.CustomHistory", "gw.api.history.AccountCustomHistoryImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Account.class, config);
    com.guidewire._generated.entity.AccountInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Account, com.guidewire._generated.entity.AccountInternal>() {
      public java.lang.Object getImplementation(entity.Account bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.AccountInternal getInternalInterface(entity.Account bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Account newEmptyInstance() {
        return new entity.Account((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}