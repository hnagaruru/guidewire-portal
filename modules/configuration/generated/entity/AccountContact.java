package entity;

/**
 * AccountContact
 * A contact on an account.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountContact.eti;AccountContact.eix;AccountContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "AccountContact")
public class AccountContact extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.FrozenSetMember, gw.api.domain.account.Mergeable, gw.api.logicalmatch.LogicalMatcher {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AccountContact> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AccountContact>("entity.AccountContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Account");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Active");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CONTACT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Contact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ROLES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Roles");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEMPORARYLASTUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TemporaryLastUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.AccountContactInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public AccountContact()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public AccountContact(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected AccountContact(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.AccountContactInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.AccountContactInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Add a new AccountContactRole of the correct type to this AccountContact.
   * The AccountContactRole is created in this AccountContact's bundle.
   * @param type the type of role to create
   * @throws IllegalArgumentException if the role is unavailable, of an inapproriate type
   * (i.e. Driver for a company AccountContact), or already an role on this AccountContact
   * @return the newly created AccountContactRole
   */
  public entity.AccountContactRole addNewRole(typekey.AccountContactRole type) {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).addNewRole(type);
  }
  
  /**
   * Adds the given element to the Roles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoles(entity.AccountContactRole element) {
    __getInternalInterface().addArrayElement(ROLES_PROP.get(), element);
  }
  
  /**
   * Double checks that it is possible to remove the AccountContact from the database (i.e. to call
   * AccountContact.remove() on it.)  May not be possible if policies refer to it
   * @return true if the AccountContact can be removed
   */
  public boolean canRemove() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).canRemove();
  }
  
  /**
   * Clones this AccountContact.
   * Makes a call out to {@link gw.plugin.contact.IAccountContactPlugin#cloneExtensions(entity.AccountContact, entity.AccountContact)}
   * @return a copy of this AccountContact.
   */
  public entity.AccountContact cloneAccountContact() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).cloneAccountContact();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public java.lang.Object genKey() {
    return ((gw.api.logicalmatch.LogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.LogicalMatcher")).genKey();
  }
  
  /**
   * Gets the value of the Account field.
   * The account on which this is a contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount() {
    return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
  }
  
  /**
   * 
   * @return the AccountContactView for this AccountContact
   */
  public entity.AccountContactView getAccountContactView() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getAccountContactView();
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
   * 
   * @return A QueryProcessor of open Jobs with PolicyPeriods that have PolicyContactRoles that ultimately
   * refer to this AccountContact. If particular PolicyPeriod is archived the PNIContactDenorm will be used to determine
   * if that AccountContact's Contact participates in a transaction.
   * Uses a query for performance, so it only considers Jobs in the database.
   * Returns an empty QueryProcessor if this AccountContact has not been persisted.
   */
  public gw.api.database.IQueryBeanResult<entity.Job> getAssociatedOpenJobs() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getAssociatedOpenJobs();
  }
  
  /**
   * 
   * @return A QueryProcessor of the most recent bound PolicyPeriods that have PolicyContactRoles that ultimately
   * reference this AccountContact.  Returns an empty QueryProcessor if this AccountContact has not been persisted.
   */
  public gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> getAssociatedPolicies() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getAssociatedPolicies();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the Contact field.
   * The related contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getContact() {
    return (entity.Contact)__getInternalInterface().getFieldValue(CONTACT_PROP.get());
  }
  
  /**
   * Gets the ContactType of the Contact referenced by this AccountContact
   * @return the ContactType of the referenced Contact
   */
  public typekey.ContactType getContactType() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getContactType();
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
   * Gets the value of the LastUpdateTime field.
   * Date and time of last update
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LASTUPDATETIME_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
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
   * 
   * @param type the role type to be matched
   * @return This AccountContact's AccountContactRole of the specified <code>type</code>, or null if it doesn't exist.
   */
  public entity.AccountContactRole getRole(typekey.AccountContactRole type) {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getRole(type);
  }
  
  /**
   * Gets the value of the Roles field.
   * The roles that this contact has played on the account or its policies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContactRole[] getRoles() {
    return (entity.AccountContactRole[])__getInternalInterface().getFieldValue(ROLES_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountContact getSubtype() {
    return (typekey.AccountContact)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTemporaryLastUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(TEMPORARYLASTUPDATETIME_PROP.get());
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
  
  public boolean hasAnyRole(java.util.Set<typekey.AccountContactRole> types) {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).hasAnyRole(types);
  }
  
  /**
   * 
   * @param type the role type to be matched
   * @return True if this AccountContact has an AccountContactRole of the specified <code>type</code>.
   */
  public boolean hasRole(typekey.AccountContactRole type) {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).hasRole(type);
  }
  
  /**
   * Gets the value of the Active field.
   * Determines whether or not the contact is available to be added to jobs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIVE_PROP.get());
  }
  
  /**
   * Checks whether this AccountContact references Contact of type Company
   * @return true if the referenced contact is a Company
   */
  public boolean isCompany() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).isCompany();
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
    return ((gw.api.logicalmatch.LogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.LogicalMatcher")).isLogicalMatchUntyped(bean);
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
   * Checks whether this AccountContact references Contact of type Person
   * @return true if the referenced contact is a Person
   */
  public boolean isPerson() {
    return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).isPerson();
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
   * Marks the associated {@link entity.Contact} as AutoSync.TC_ALLOW unless the state is AutoSync.TC_DISALLOW, because
   * that is a terminal state.
   */
  public void markContactForAutoSync() {
    ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).markContactForAutoSync();
  }
  
  public void merge(entity.KeyableBean merged) {
    ((gw.api.domain.account.Mergeable)__getDelegateManager().getImplementation("gw.api.domain.account.Mergeable")).merge(merged);
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
   * Removes the given element from the Roles array. This is achieved by marking the element for removal.
   */
  public void removeFromRoles(entity.AccountContactRole element) {
    __getInternalInterface().removeArrayElement(ROLES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Roles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoles(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ROLES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value) {
    __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Active field.
   */
  public void setActive(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ACTIVE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Contact field.
   */
  public void setContact(entity.Contact value) {
    __getInternalInterface().setFieldValue(CONTACT_PROP.get(), value);
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
   * Sets the value of the LastUpdateTime field.
   */
  private void setLastUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(LASTUPDATETIME_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Roles field.
   */
  public void setRoles(entity.AccountContactRole[] value) {
    __getInternalInterface().setFieldValue(ROLES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.AccountContact value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TemporaryLastUpdateTime field.
   */
  private void setTemporaryLastUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(TEMPORARYLASTUPDATETIME_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.AccountContactInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.AccountContact.this.__getDelegateManager();
    }
    
    /**
     * Add a new AccountContactRole of the correct type to this AccountContact.
     * The AccountContactRole is created in this AccountContact's bundle.
     * @param type the type of role to create
     * @throws IllegalArgumentException if the role is unavailable, of an inapproriate type
     * (i.e. Driver for a company AccountContact), or already an role on this AccountContact
     * @return the newly created AccountContactRole
     */
    public entity.AccountContactRole addNewRole(typekey.AccountContactRole type) {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).addNewRole(type);
    }
    
    /**
     * Adds the given element to the Roles array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRoles(entity.AccountContactRole element) {
      __getInternalInterface().addArrayElement(ROLES_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
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
    
    /**
     * Double checks that it is possible to remove the AccountContact from the database (i.e. to call
     * AccountContact.remove() on it.)  May not be possible if policies refer to it
     * @return true if the AccountContact can be removed
     */
    public boolean canRemove() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).canRemove();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    /**
     * Clones this AccountContact.
     * Makes a call out to {@link gw.plugin.contact.IAccountContactPlugin#cloneExtensions(entity.AccountContact, entity.AccountContact)}
     * @return a copy of this AccountContact.
     */
    public entity.AccountContact cloneAccountContact() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).cloneAccountContact();
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
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.lang.Object genKey() {
      return ((gw.api.logicalmatch.LogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.LogicalMatcher")).genKey();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the Account field.
     * The account on which this is a contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Account getAccount() {
      return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
    }
    
    /**
     * 
     * @return the AccountContactView for this AccountContact
     */
    public entity.AccountContactView getAccountContactView() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getAccountContactView();
    }
    
    public gw.pl.persistence.core.Key getAccountID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNT_PROP.get());
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
     * 
     * @return A QueryProcessor of open Jobs with PolicyPeriods that have PolicyContactRoles that ultimately
     * refer to this AccountContact. If particular PolicyPeriod is archived the PNIContactDenorm will be used to determine
     * if that AccountContact's Contact participates in a transaction.
     * Uses a query for performance, so it only considers Jobs in the database.
     * Returns an empty QueryProcessor if this AccountContact has not been persisted.
     */
    public gw.api.database.IQueryBeanResult<entity.Job> getAssociatedOpenJobs() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getAssociatedOpenJobs();
    }
    
    /**
     * 
     * @return A QueryProcessor of the most recent bound PolicyPeriods that have PolicyContactRoles that ultimately
     * reference this AccountContact.  Returns an empty QueryProcessor if this AccountContact has not been persisted.
     */
    public gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> getAssociatedPolicies() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getAssociatedPolicies();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Contact field.
     * The related contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contact getContact() {
      return (entity.Contact)__getInternalInterface().getFieldValue(CONTACT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getContactID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CONTACT_PROP.get());
    }
    
    /**
     * Gets the ContactType of the Contact referenced by this AccountContact
     * @return the ContactType of the referenced Contact
     */
    public typekey.ContactType getContactType() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getContactType();
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
     * Gets the value of the LastUpdateTime field.
     * Date and time of last update
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLastUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LASTUPDATETIME_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * 
     * @param type the role type to be matched
     * @return This AccountContact's AccountContactRole of the specified <code>type</code>, or null if it doesn't exist.
     */
    public entity.AccountContactRole getRole(typekey.AccountContactRole type) {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).getRole(type);
    }
    
    /**
     * Gets the value of the Roles field.
     * The roles that this contact has played on the account or its policies.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountContactRole[] getRoles() {
      return (entity.AccountContactRole[])__getInternalInterface().getFieldValue(ROLES_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AccountContact getSubtype() {
      return (typekey.AccountContact)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TemporaryLastUpdateTime field.
     * Temporary date and time of last update; will eventually be copied to the LastUpdateTime during commit
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getTemporaryLastUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(TEMPORARYLASTUPDATETIME_PROP.get());
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
    
    public boolean hasAnyRole(java.util.Set<typekey.AccountContactRole> types) {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).hasAnyRole(types);
    }
    
    /**
     * 
     * @param type the role type to be matched
     * @return True if this AccountContact has an AccountContactRole of the specified <code>type</code>.
     */
    public boolean hasRole(typekey.AccountContactRole type) {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).hasRole(type);
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the Active field.
     * Determines whether or not the contact is available to be added to jobs
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isActive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIVE_PROP.get());
    }
    
    /**
     * Checks whether this AccountContact references Contact of type Company
     * @return true if the referenced contact is a Company
     */
    public boolean isCompany() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).isCompany();
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
      return ((gw.api.logicalmatch.LogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.LogicalMatcher")).isLogicalMatchUntyped(bean);
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
    
    /**
     * Checks whether this AccountContact references Contact of type Person
     * @return true if the referenced contact is a Person
     */
    public boolean isPerson() {
      return ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).isPerson();
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
    
    /**
     * Marks the associated {@link entity.Contact} as AutoSync.TC_ALLOW unless the state is AutoSync.TC_DISALLOW, because
     * that is a terminal state.
     */
    public void markContactForAutoSync() {
      ((com.guidewire.pc.domain.account.AccountContactPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountContactPublicMethods")).markContactForAutoSync();
    }
    
    public void merge(entity.KeyableBean merged) {
      ((gw.api.domain.account.Mergeable)__getDelegateManager().getImplementation("gw.api.domain.account.Mergeable")).merge(merged);
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
     * Removes the given element from the Roles array. This is achieved by marking the element for removal.
     */
    public void removeFromRoles(entity.AccountContactRole element) {
      __getInternalInterface().removeArrayElement(ROLES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Roles array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRoles(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ROLES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
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
     * Sets the value of the Active field.
     */
    public void setActive(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ACTIVE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Contact field.
     */
    public void setContact(entity.Contact value) {
      __getInternalInterface().setFieldValue(CONTACT_PROP.get(), value);
    }
    
    public void setContactID(gw.pl.persistence.core.Key value) {
      setFieldValue(CONTACT_PROP.get(), value);
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
     * Sets the value of the LastUpdateTime field.
     */
    public void setLastUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(LASTUPDATETIME_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
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
     * Sets the value of the Roles field.
     */
    public void setRoles(entity.AccountContactRole[] value) {
      __getInternalInterface().setFieldValue(ROLES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.AccountContact value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TemporaryLastUpdateTime field.
     */
    public void setTemporaryLastUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(TEMPORARYLASTUPDATETIME_PROP.get(), value);
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
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.account.AccountContactPublicMethods", "com.guidewire.pc.domain.account.impl.AccountContactImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.account.impl.AccountContactImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.account.impl.AccountContactImpl");
    config.put("gw.api.domain.account.Mergeable", "gw.account.AccountContactMergeableImpl");
    config.put("gw.api.logicalmatch.LogicalMatcher", "gw.account.AccountContactMatcher");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.AccountContact.class, config);
    com.guidewire._generated.entity.AccountContactInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.AccountContact, com.guidewire._generated.entity.AccountContactInternal>() {
      public java.lang.Object getImplementation(entity.AccountContact bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.AccountContactInternal getInternalInterface(entity.AccountContact bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.AccountContact newEmptyInstance() {
        return new entity.AccountContact((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}