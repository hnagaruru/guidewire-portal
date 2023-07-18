package entity;

/**
 * PolicyContactRole
 * A role that a contact plays within a policy period.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyContactRole.eti;PolicyContactRole.eix;PolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PolicyContactRole extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, entity.EventAware, gw.api.copier.EffDatedCopyable, gw.api.domain.DenormalizedFKOutOfDomainGraph, gw.api.domain.RefersOutOfDomainGraph, gw.api.domain.account.AccountSyncable, gw.api.domain.account.Mergeable, gw.api.effdate.UniqueOnPolicyPeriod, gw.api.logicalmatch.EffDatedLogicalMatcher {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PolicyContactRole, entity.PolicyPeriod>("entity.PolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNTCONTACTROLE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AccountContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAMEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyNameInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAMEINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyNameInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAMEKANJIINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyNameKanjiInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAMEKANJIINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyNameKanjiInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CONTACTDENORM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ContactDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEOFBIRTHINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateOfBirthInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEKANJIINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameKanjiInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEKANJIINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameKanjiInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEKANJIINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameKanjiInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEKANJIINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameKanjiInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> MARITALSTATUSINTERNAL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "MaritalStatusInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PARTICLEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ParticleInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEQNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeqNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PolicyContactRoleInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  public static final java.lang.String POLICYCONTACTROLEADDED_EVENT = "PolicyContactRoleAdded";
  
  public static final java.lang.String POLICYCONTACTROLECHANGED_EVENT = "PolicyContactRoleChanged";
  
  public static final java.lang.String POLICYCONTACTROLEREMOVED_EVENT = "PolicyContactRoleRemoved";
  
  protected PolicyContactRole(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.PolicyContactRoleInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.PolicyContactRoleInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
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
   * Assigns the source to this account syncable, potentially initializing the initial fields.
   * This method should only be called during create or merge.
   * @param source The source of this account syncable
   */
  public void assignToSource(entity.KeyableBean source) {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).assignToSource(source);
  }
  
  public entity.PolicyContactRole clone() {
    return (entity.PolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public void copyBasicFieldsFromBeanUntyped(entity.EffDated bean) {
    ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyBasicFieldsFromBeanUntyped(bean);
  }
  
  public void copyFromBeanUntyped(entity.EffDated bean) {
    ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyFromBeanUntyped(bean);
  }
  
  /**
   * Copies the policy contract data from the account level into the account syncable.
   * Since copying unsynced policy contact data is typically a programming error, this
   * method throws an IllegalStateException if this account syncable is not sycned to
   * the account.
   */
  public void copyPolicyContractData() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).copyPolicyContractData();
  }
  
  /**
   * Copies the policy contract data from the account level into the account syncable
   * without checking if this account syncable is synced.  This method is typically used
   * for initialization where overwriting the policy-level values is not a concern, and
   * it should be used with care.
   */
  public void copyPolicyContractDataUnchecked() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).copyPolicyContractDataUnchecked();
  }
  
  public boolean denormalizedFKIsCorrect() {
    return ((gw.api.domain.DenormalizedFKOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.DenormalizedFKOutOfDomainGraph")).denormalizedFKIsCorrect();
  }
  
  public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
  }
  
  public java.lang.Object genKey() {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
  }
  
  public gw.api.effdate.EffDatedUniqueKey genUniqueKey() {
    return ((gw.api.effdate.UniqueOnPolicyPeriod)__getDelegateManager().getImplementation("gw.api.effdate.UniqueOnPolicyPeriod")).genUniqueKey();
  }
  
  /**
   * Gets the value of the AccountContactRole field.
   * The account contact role this policy contact role may be synced with.  While the policy contact role contains policy contract information, the account contact role contains shared role information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContactRole getAccountContactRole() {
    return (entity.AccountContactRole)__getInternalInterface().getFieldValue(ACCOUNTCONTACTROLE_PROP.get());
  }
  
  /**
   * Returns the list of account synced fields for this account syncable.
   */
  public java.util.Set<gw.api.domain.account.AccountSyncedField<? extends gw.api.domain.account.AccountSyncable, ? extends java.lang.Object>> getAccountSyncedFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getAccountSyncedFields();
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
  
  public entity.PolicyContactRole getBasedOn() {
    return (entity.PolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  /**
   * Return the bean from which this bean was based (cloned), or null if this
   * bean is new to this branch. This value will never change for the life of
   * the bean as its set when the bean is first created, either as a bean new to
   * this branch (in which case it's null) or when this bean is cloned from a
   * bean in an existing branch when its branch is created.
   * <p/>
   * When compiling DiffItems a bean is always compared to it's based-on bean to
   * discover what fields on it have changed. If there is no based-on bean then
   * we know that this bean was new to this branch.
   * @return Bean on which this bean was based (cloned), or null if this bean is
   *         new to this branch.
   */
  public entity.EffDated getBasedOnUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyContactRole getBasedOnValue() {
    return (entity.PolicyContactRole)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Return the branch associated with this bean. This can never be null, and
   * will never change. A bean will always be associated with the same branch.
   * @return Branch associated with this bean
   */
  public entity.EffDatedBranch getBranchUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
  }
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAMEINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAMEINTERNALDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameKanjiInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAMEKANJIINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameKanjiInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAMEKANJIINTERNALDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the ContactDenorm field.
   * The PolicyContactRole.AccountContactRole.AccountContact.Contact (denormalization).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getContactDenorm() {
    return (entity.Contact)__getInternalInterface().getFieldValue(CONTACTDENORM_PROP.get());
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirthInternal() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEOFBIRTHINTERNAL_PROP.get());
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
   * Get the date when this bean starts being effective.
   * @return Date when this bean starts being effective.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
  }
  
  public java.lang.String getErrorMessage(entity.EffDated[] duplicateBeans) {
    return ((gw.api.effdate.UniqueOnPolicyPeriod)__getDelegateManager().getImplementation("gw.api.effdate.UniqueOnPolicyPeriod")).getErrorMessage(duplicateBeans);
  }
  
  /**
   * Get the date when this bean expires.
   * @return Date when this bean expires.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEINTERNALDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanjiInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJIINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanjiInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJIINTERNALDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyContactRole getFixed() {
    return (entity.PolicyContactRole)__getInternalInterface().getFieldValue(FIXED_PROP.get());
  }
  
  /**
   * Get the logical ID for this bean, not the row ID. All row
   * @return Logical ID for this bean, not the row ID.
   */
  public gw.pl.persistence.core.Key getFixedId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Indicates that this account syncable is new or its policy entity fields
   * have been changed.
   */
  public boolean getHasChangedPolicyEntityFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasChangedPolicyEntityFields();
  }
  
  /**
   * Indicates that all the account syncable's policy entity fields are null.
   */
  public boolean getHasEmptyPolicyEntityFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasEmptyPolicyEntityFields();
  }
  
  /**
   * Indicates that all the account synced fields have the same value at both the account and policy levels.
   */
  public boolean getHasMatchingAccountAndPolicyFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasMatchingAccountAndPolicyFields();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEINTERNALDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameKanjiInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEKANJIINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameKanjiInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEKANJIINTERNALDENORM_PROP.get());
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MaritalStatus getMaritalStatusInternal() {
    return (typekey.MaritalStatus)__getInternalInterface().getFieldValue(MARITALSTATUSINTERNAL_PROP.get());
  }
  
  /**
   * Gets the value of the ParticleInternal field.
   * Particle for (French) name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParticleInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARTICLEINTERNAL_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  public java.util.Map<gw.entity.ILinkPropertyInfo, entity.KeyableBean> getReferencedBeans() {
    return ((gw.api.domain.RefersOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.RefersOutOfDomainGraph")).getReferencedBeans();
  }
  
  /**
   * Gets the value of the SeqNumber field.
   * The contact sequence number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSeqNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(SEQNUMBER_PROP.get());
  }
  
  public entity.PolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.PolicyContactRole)getSliceUntyped(sliceDate);
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
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyContactRole getSubtype() {
    return (typekey.PolicyContactRole)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  public entity.PolicyContactRole getUnsliced() {
    return (entity.PolicyContactRole)getUnslicedUntyped();
  }
  
  /**
   * Return the unsliced version of this bean. If the bean is already unsliced
   * then returns itself.
   * @return An unsliced version of this bean. If the bean is already unsliced
   *         then returns itself.
   */
  public entity.EffDated getUnslicedUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
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
  
  public entity.windowed.PolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.PolicyContactRoleVersionList)getVersionListUntyped();
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
  
  /**
   * Handle the pre-update for this account syncable.
   */
  public void handlePreUpdate() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).handlePreUpdate();
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
   * Returns true if the given field has been modified relative to the based-on
   * bean and false if this bean has no based-on or if the field has the same
   * value as for the based-on bean.  This method only works with non-array
   * fields.
   * @param field the name of the property to check for changes, which must
   *              correspond to a database column (i.e. it can't be an array or
   *              a synthetic property)
   * @return true if the field has a different value for the based-on bean,
   *         false otherwise
   */
  public boolean isFieldChangedFromBasedOn(java.lang.String field) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).isLogicalMatchUntyped(bean);
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
   * Indicates if the account syncable has its values synced to the account level.
   * An account syncable should be synced to the account when the account syncable
   * is allowed to change and when the account level data is more accurate.
   */
  public boolean isSyncedToAccount() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).isSyncedToAccount();
  }
  
  public void merge(entity.KeyableBean merged) {
    ((gw.api.domain.account.Mergeable)__getDelegateManager().getImplementation("gw.api.domain.account.Mergeable")).merge(merged);
  }
  
  /**
   * Prepare the account syncable so that the diff code can operate correctly on it.
   */
  public void prepareForDiff() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForDiff();
  }
  
  /**
   * Prepare the account syncable so that the job edit code can operate correctly on it.
   */
  public void prepareForJobEdit() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForJobEdit();
  }
  
  /**
   * Prepare the account syncable so that the job start code can operate correctly on it.
   */
  public void prepareForJobStart() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForJobStart();
  }
  
  /**
   * Prepare the account syncable so that the OOS merge code can operate correctly on it.
   */
  public void prepareForOOSMerge() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForOOSMerge();
  }
  
  /**
   * Prepare the account syncable so that the promotion code can operate correctly on it.
   */
  public void prepareForPromote() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForPromote();
  }
  
  /**
   * Prepare the account syncable so that the quote code can operate correctly on it.
   */
  public void prepareForQuote() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForQuote();
  }
  
  public void recordExternalReferences() {
    ((gw.api.domain.RefersOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.RefersOutOfDomainGraph")).recordExternalReferences();
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
   * Refreshes any necessary account information to ensure this account syncable will use the
   * most current data when calling the other methods on this interface.
   */
  public void refreshAccountInformation() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).refreshAccountInformation();
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
   * Sets the value of the AccountContactRole field.
   */
  private void setAccountContactRole(entity.AccountContactRole value) {
    __getInternalInterface().setFieldValue(ACCOUNTCONTACTROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.PolicyContactRole value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchValue field.
   */
  private void setBranchValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyNameInternal field.
   */
  private void setCompanyNameInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COMPANYNAMEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyNameInternalDenorm field.
   */
  private void setCompanyNameInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COMPANYNAMEINTERNALDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyNameKanjiInternal field.
   */
  private void setCompanyNameKanjiInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COMPANYNAMEKANJIINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyNameKanjiInternalDenorm field.
   */
  private void setCompanyNameKanjiInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COMPANYNAMEKANJIINTERNALDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactDenorm field.
   */
  public void setContactDenorm(entity.Contact value) {
    __getInternalInterface().setFieldValue(CONTACTDENORM_PROP.get(), value);
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
   * Sets the value of the DateOfBirthInternal field.
   */
  private void setDateOfBirthInternal(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEOFBIRTHINTERNAL_PROP.get(), value);
  }
  
  public void setDenormalizedFK() {
    ((gw.api.domain.DenormalizedFKOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.DenormalizedFKOutOfDomainGraph")).setDenormalizedFK();
  }
  
  /**
   * Change when the effective date of this bean. You cannot change the
   * effective date when in slice mode. In window mode there are no
   * restrictions.
   * <p/>
   * The effective date must be non-null. It must also come on or before the
   * expiration date and within the period range of its branch.
   * @param effDate New effective date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setEffectiveDate(java.util.Date effDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
  }
  
  /**
   * Change the effective and expiration dates together. This can only be called
   * in window mode. Both dates must be non-null. The effective date must be
   * before or equal to the expiration date. Both dates must be within the
   * period range of its branch.
   * @param effDate New effective date
   * @param expDate New expiration date
   */
  public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
  }
  
  /**
   * Change when the expiration date of this bean. You cannot change the
   * expiration date when in slice mode UNLESS the bean is new to its branch and
   * you're not setting the expiration date to the effective date (zero width).
   * In window mode there are no restrictions.
   * <p/>
   * The expiration date must be non-null. It must also come on or after the
   * effective date and within the period range of its branch.
   * @param expDate New expiration date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setExpirationDate(java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
  }
  
  /**
   * Sets the value of the FirstNameInternal field.
   */
  private void setFirstNameInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameInternalDenorm field.
   */
  private void setFirstNameInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEINTERNALDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameKanjiInternal field.
   */
  private void setFirstNameKanjiInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJIINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameKanjiInternalDenorm field.
   */
  private void setFirstNameKanjiInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJIINTERNALDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.PolicyContactRole value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
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
   * Sets the value of the LastNameInternal field.
   */
  private void setLastNameInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameInternalDenorm field.
   */
  private void setLastNameInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMEINTERNALDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameKanjiInternal field.
   */
  private void setLastNameKanjiInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMEKANJIINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameKanjiInternalDenorm field.
   */
  private void setLastNameKanjiInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMEKANJIINTERNALDENORM_PROP.get(), value);
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
   * Sets the value of the MaritalStatusInternal field.
   */
  private void setMaritalStatusInternal(typekey.MaritalStatus value) {
    __getInternalInterface().setFieldValue(MARITALSTATUSINTERNAL_PROP.get(), value);
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
   * Sets the value of the ParticleInternal field.
   */
  public void setParticleInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PARTICLEINTERNAL_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the SeqNumber field.
   */
  public void setSeqNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SEQNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.PolicyContactRole value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
  
  public entity.PolicyContactRole split(java.util.Date splitDate) {
    return (entity.PolicyContactRole)splitUntyped(splitDate);
  }
  
  /**
   * Split this bean at the given date. A bean can only be split in window mode.
   * Splitting creates a new bean (and row) with the same FixedId as this bean
   * which is effective from the original effective date of this bean to the
   * split date. We then move the effective date of this bean up to the split
   * date. The result is two beans: one effective from the original effective
   * date to the split date, the other effective from the split date to the
   * original expiration date. "This" bean is the later in that range, and the
   * bean returned from calling this method is the former in that range.
   * <p/>
   * If this bean's effective date equals the split date then no split will
   * occur. The split date must be within the effective range of this bean or an
   * exception is thrown.
   * @param splitDate Date on which to split this bean.
   * @return A new bean effective from the original effective date to the split
   *         date or this bean if no split occurred (see above).
   */
  public entity.EffDated splitUntyped(java.util.Date splitDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
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
   * Validates that the account and policy entity fields have the same value.
   */
  public void validateAccountAndPolicyEntityFields() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).validateAccountAndPolicyEntityFields();
  }
  
  static {
    com.guidewire._generated.entity.PolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PolicyContactRole, com.guidewire._generated.entity.PolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.PolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyContactRoleInternal getInternalInterface(entity.PolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}