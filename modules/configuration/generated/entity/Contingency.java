package entity;

/**
 * Contingency
 * contingency for policy
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Contingency.eti;Contingency.eix;Contingency.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Contingency")
public class Contingency extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.FrozenSetMember, com.guidewire.pc.domain.note.NoteContainer, gw.api.domain.document.DocumentContainer {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Contingency> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Contingency>("entity.Contingency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Action");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTIONSTARTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActionStartDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTIONSTARTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActionStarted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ACTIVITIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Activities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLOSEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CloseDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CLOSEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CloseUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CONTINGENCYJOBS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ContingencyJobs");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DOCUMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Documents");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DUEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DueDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TITLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Title");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ContingencyInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public Contingency()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public Contingency(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected Contingency(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ContingencyInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ContingencyInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the Activities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToActivities(entity.Activity element) {
    __getInternalInterface().addArrayElement(ACTIVITIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the ContingencyJobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContingencyJobs(entity.ContingencyJob element) {
    __getInternalInterface().addArrayElement(CONTINGENCYJOBS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Documents array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  public void addToDocuments(entity.Document element) {
    __getInternalInterface().addArrayElement(DOCUMENTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
   */
  @java.lang.Deprecated
  public void addToNotes(entity.Note element) {
    __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the Action field.
   * The action that will be taken if this contingency is not resolved successfully
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContingencyAction getAction() {
    return (typekey.ContingencyAction)__getInternalInterface().getFieldValue(ACTION_PROP.get());
  }
  
  /**
   * Gets the value of the ActionStartDate field.
   * date when action will be initiated if contingency is still unresolved
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getActionStartDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ACTIONSTARTDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Activities field.
   * Activities associated with this Contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity[] getActivities() {
    return (entity.Activity[])__getInternalInterface().getFieldValue(ACTIVITIES_PROP.get());
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CloseDate field.
   * The date when the Contingency was closed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCloseDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CLOSEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the CloseUser field.
   * The user who closed the Contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCloseUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CLOSEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the ContingencyJobs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContingencyJob[] getContingencyJobs() {
    return (entity.ContingencyJob[])__getInternalInterface().getFieldValue(CONTINGENCYJOBS_PROP.get());
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
   * Gets the value of the Description field.
   * description for contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the Documents field.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Document[] getDocuments() {
    return (entity.Document[])__getInternalInterface().getFieldValue(DOCUMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the DueDate field.
   * Due Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDueDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DUEDATE_PROP.get());
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
   * Gets the value of the Notes field.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes() {
    return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
  }
  
  /**
   * Gets the value of the Policy field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriod field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
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
   * Gets the value of the Status field.
   * Contingency status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContingencyStatus getStatus() {
    return (typekey.ContingencyStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  /**
   * Gets the value of the Title field.
   * title for contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTitle() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TITLE_PROP.get());
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
   * Gets the value of the ActionStarted field.
   * true if action has started
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActionStarted() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIONSTARTED_PROP.get());
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
   * Removes the given element from the Activities array. This is achieved by marking the element for removal.
   */
  public void removeFromActivities(entity.Activity element) {
    __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Activities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromActivities(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the ContingencyJobs array. This is achieved by marking the element for removal.
   */
  public void removeFromContingencyJobs(entity.ContingencyJob element) {
    __getInternalInterface().removeArrayElement(CONTINGENCYJOBS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ContingencyJobs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContingencyJobs(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(CONTINGENCYJOBS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Documents array. This is achieved by marking the element for removal.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  public void removeFromDocuments(entity.Document element) {
    __getInternalInterface().removeArrayElement(DOCUMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Documents array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDocuments(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DOCUMENTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
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
   * Sets the value of the Action field.
   */
  public void setAction(typekey.ContingencyAction value) {
    __getInternalInterface().setFieldValue(ACTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActionStartDate field.
   */
  public void setActionStartDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ACTIONSTARTDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActionStarted field.
   */
  public void setActionStarted(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ACTIONSTARTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Activities field.
   */
  public void setActivities(entity.Activity[] value) {
    __getInternalInterface().setFieldValue(ACTIVITIES_PROP.get(), value);
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
   * Sets the value of the CloseDate field.
   */
  public void setCloseDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CLOSEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CloseUser field.
   */
  public void setCloseUser(entity.User value) {
    __getInternalInterface().setFieldValue(CLOSEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContingencyJobs field.
   */
  public void setContingencyJobs(entity.ContingencyJob[] value) {
    __getInternalInterface().setFieldValue(CONTINGENCYJOBS_PROP.get(), value);
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
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Documents field.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  public void setDocuments(entity.Document[] value) {
    __getInternalInterface().setFieldValue(DOCUMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DueDate field.
   */
  public void setDueDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(DUEDATE_PROP.get(), value);
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
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the Notes field.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
   */
  @java.lang.Deprecated
  public void setNotes(entity.Note[] value) {
    __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
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
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ContingencyStatus value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Title field.
   */
  public void setTitle(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TITLE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ContingencyInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Contingency.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the Activities array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToActivities(entity.Activity element) {
      __getInternalInterface().addArrayElement(ACTIVITIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ContingencyJobs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToContingencyJobs(entity.ContingencyJob element) {
      __getInternalInterface().addArrayElement(CONTINGENCYJOBS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Documents array. This is achieved by setting the parent foreign key to this entity instance.
     * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
     */
    @java.lang.Deprecated
    public void addToDocuments(entity.Document element) {
      __getInternalInterface().addArrayElement(DOCUMENTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
     * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
     */
    @java.lang.Deprecated
    public void addToNotes(entity.Note element) {
      __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
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
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
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
     * Gets the value of the Action field.
     * The action that will be taken if this contingency is not resolved successfully
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContingencyAction getAction() {
      return (typekey.ContingencyAction)__getInternalInterface().getFieldValue(ACTION_PROP.get());
    }
    
    /**
     * Gets the value of the ActionStartDate field.
     * date when action will be initiated if contingency is still unresolved
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getActionStartDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ACTIONSTARTDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Activities field.
     * Activities associated with this Contingency
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Activity[] getActivities() {
      return (entity.Activity[])__getInternalInterface().getFieldValue(ACTIVITIES_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CloseDate field.
     * The date when the Contingency was closed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCloseDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CLOSEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the CloseUser field.
     * The user who closed the Contingency
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCloseUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CLOSEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCloseUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CLOSEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the ContingencyJobs field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ContingencyJob[] getContingencyJobs() {
      return (entity.ContingencyJob[])__getInternalInterface().getFieldValue(CONTINGENCYJOBS_PROP.get());
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
     * Gets the value of the Description field.
     * description for contingency
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the Documents field.
     * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Document[] getDocuments() {
      return (entity.Document[])__getInternalInterface().getFieldValue(DOCUMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the DueDate field.
     * Due Date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDueDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DUEDATE_PROP.get());
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
     * Gets the value of the Notes field.
     * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Note[] getNotes() {
      return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
    }
    
    /**
     * Gets the value of the Policy field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Policy getPolicy() {
      return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICY_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriod field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getPolicyPeriod() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyPeriodID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYPERIOD_PROP.get());
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
     * Gets the value of the Status field.
     * Contingency status
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContingencyStatus getStatus() {
      return (typekey.ContingencyStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    /**
     * Gets the value of the Title field.
     * title for contingency
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTitle() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TITLE_PROP.get());
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
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the ActionStarted field.
     * true if action has started
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isActionStarted() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIONSTARTED_PROP.get());
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
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
     * Removes the given element from the Activities array. This is achieved by marking the element for removal.
     */
    public void removeFromActivities(entity.Activity element) {
      __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Activities array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromActivities(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ContingencyJobs array. This is achieved by marking the element for removal.
     */
    public void removeFromContingencyJobs(entity.ContingencyJob element) {
      __getInternalInterface().removeArrayElement(CONTINGENCYJOBS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ContingencyJobs array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromContingencyJobs(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CONTINGENCYJOBS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Documents array. This is achieved by marking the element for removal.
     * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
     */
    @java.lang.Deprecated
    public void removeFromDocuments(entity.Document element) {
      __getInternalInterface().removeArrayElement(DOCUMENTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Documents array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDocuments(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DOCUMENTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Notes array. This is achieved by marking the element for removal.
     * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Action field.
     */
    public void setAction(typekey.ContingencyAction value) {
      __getInternalInterface().setFieldValue(ACTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ActionStartDate field.
     */
    public void setActionStartDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ACTIONSTARTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ActionStarted field.
     */
    public void setActionStarted(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ACTIONSTARTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Activities field.
     */
    public void setActivities(entity.Activity[] value) {
      __getInternalInterface().setFieldValue(ACTIVITIES_PROP.get(), value);
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
     * Sets the value of the CloseDate field.
     */
    public void setCloseDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CLOSEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CloseUser field.
     */
    public void setCloseUser(entity.User value) {
      __getInternalInterface().setFieldValue(CLOSEUSER_PROP.get(), value);
    }
    
    public void setCloseUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CLOSEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContingencyJobs field.
     */
    public void setContingencyJobs(entity.ContingencyJob[] value) {
      __getInternalInterface().setFieldValue(CONTINGENCYJOBS_PROP.get(), value);
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
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Documents field.
     * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
     */
    @java.lang.Deprecated
    public void setDocuments(entity.Document[] value) {
      __getInternalInterface().setFieldValue(DOCUMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DueDate field.
     */
    public void setDueDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(DUEDATE_PROP.get(), value);
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
    
    /**
     * Sets the value of the Notes field.
     * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
     */
    @java.lang.Deprecated
    public void setNotes(entity.Note[] value) {
      __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
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
     * Sets the value of the PolicyPeriod field.
     */
    public void setPolicyPeriod(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
    }
    
    public void setPolicyPeriodID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYPERIOD_PROP.get(), value);
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
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.ContingencyStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Title field.
     */
    public void setTitle(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TITLE_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.note.NoteContainer", "com.guidewire.pc.domain.policy.impl.ContingencyImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.api.domain.document.DocumentContainer", "com.guidewire.pc.domain.policy.impl.ContingencyImpl");
    config.put("gw.api.domain.linkedobject.LinkedObjectContainer", "com.guidewire.pc.domain.policy.impl.ContingencyImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Contingency.class, config);
    com.guidewire._generated.entity.ContingencyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Contingency, com.guidewire._generated.entity.ContingencyInternal>() {
      public java.lang.Object getImplementation(entity.Contingency bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ContingencyInternal getInternalInterface(entity.Contingency bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Contingency newEmptyInstance() {
        return new entity.Contingency((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}