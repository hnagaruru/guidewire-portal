package entity;

/**
 * RIRiskVersionList
 * The container for all versions of a RIRisk.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIRiskVersionList.eti;RIRiskVersionList.eix;RIRiskVersionList.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RIRiskVersionList")
public class RIRiskVersionList extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.FrozenSetMember {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RIRiskVersionList> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RIRiskVersionList>("entity.RIRiskVersionList");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ALLVERSIONSINTERNAL_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AllVersionsInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ATTACHMENTINCLUSIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AttachmentInclusions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CANCELLATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CancellationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CONTAINER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Container");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDITEFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EditEffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RISKNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RiskNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RIRiskVersionListInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RIRiskVersionList()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RIRiskVersionList(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RIRiskVersionList(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RIRiskVersionListInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RIRiskVersionListInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the AttachmentInclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAttachmentInclusions(entity.RIAttachmentInclusion element) {
    __getInternalInterface().addArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), element);
  }
  
  /**
   * This should be the only way to add a version to a version list.
   * @param date the date which the version starts
   * @return the version as of that date
   */
  public entity.RIRisk addVersion(java.util.Date date) {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).addVersion(date);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Sets the expiration date for the version list to a specified date. This has the effect of changing the effective
   * date range for this version list, equivalent to calling
   * <code>setEffectiveWindow(null, expirationDate)</code>. See that method for important details.
   * @param expirationDate desired expiration date
   */
  public void endDate(java.util.Date expirationDate) {
    ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).endDate(expirationDate);
  }
  
  /**
   * Returns all versions of this version list in sorted by effective date order.
   * @return sorted array of all versions.
   */
  public entity.RIRisk[] getAllVersions() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).getAllVersions();
  }
  
  /**
   * Gets the value of the AllVersionsInternal field.
   * All versions of the RIRisk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRisk[] getAllVersionsInternal() {
    return (entity.RIRisk[])__getInternalInterface().getFieldValue(ALLVERSIONSINTERNAL_PROP.get());
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
   * Gets the value of the AttachmentInclusions field.
   * The exclusions/special acceptances for attached risks.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAttachmentInclusion[] getAttachmentInclusions() {
    return (entity.RIAttachmentInclusion[])__getInternalInterface().getFieldValue(ATTACHMENTINCLUSIONS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CancellationDate field.
   * The cancellation date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCancellationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CANCELLATIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Container field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVLContainer getContainer() {
    return (entity.RIRiskVLContainer)__getInternalInterface().getFieldValue(CONTAINER_PROP.get());
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
   * Gets the value of the EditEffectiveDate field.
   * Effective date of this change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEditEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EDITEFFECTIVEDATE_PROP.get());
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
   * Gets the value of the PolicyPeriod field.
   * Associated Policy Period.
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
   * Returns the RIRisk associated with the reinsurable.
   * @param reinsurable the reinsurable
   * @return the RIRisk
   */
  public entity.RIRisk getRIRisk(entity.Reinsurable reinsurable) {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).getRIRisk(reinsurable);
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
   * Gets the value of the RiskNumber field.
   * The risk number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RISKNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the Status field.
   * The status of the effdated entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIEffDatedStatus getStatus() {
    return (typekey.RIEffDatedStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
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
   * Returns the version as of the given date.
   * @param date as of date
   * @return the version
   */
  public entity.RIRisk getVersionAsOf(java.util.Date date) {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).getVersionAsOf(date);
  }
  
  /**
   * Returns true if status is bound.
   * @return boolean value
   */
  public boolean isBound() {
    return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).isBound();
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
   * Make current version list active.
   */
  public void makeActive() {
    ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).makeActive();
  }
  
  /**
   * Merge adjacent identical slices in the version list.   The only circumstance where this
   * should be necessary is when regenerating the version list because of changes to the
   * reinsurance programs.
   */
  public void mergeSlices() {
    ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).mergeSlices();
  }
  
  /**
   * Move edit effective date, which may result in expanding and shrinking of slices.
   * @param newValue the new edit effective date
   */
  public void moveEditEffectiveDate(java.util.Date newValue) {
    ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).moveEditEffectiveDate(newValue);
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
   * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromAttachmentInclusions(entity.RIAttachmentInclusion element) {
    __getInternalInterface().removeArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAttachmentInclusions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AllVersionsInternal field.
   */
  private void setAllVersionsInternal(entity.RIRisk[] value) {
    __getInternalInterface().setFieldValue(ALLVERSIONSINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AttachmentInclusions field.
   */
  public void setAttachmentInclusions(entity.RIAttachmentInclusion[] value) {
    __getInternalInterface().setFieldValue(ATTACHMENTINCLUSIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CancellationDate field.
   */
  public void setCancellationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CANCELLATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Container field.
   */
  public void setContainer(entity.RIRiskVLContainer value) {
    __getInternalInterface().setFieldValue(CONTAINER_PROP.get(), value);
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
   * Sets the value of the EditEffectiveDate field.
   */
  public void setEditEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EDITEFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Set the effective window of the version list by changing effective date, expiration date, or both.
   * 
   * If effectiveDate is non-null, it is the new effective date of the window. If it is null, the
   * effective date continues to be the effective date  of the earliest version currently in the list.
   * 
   * If expirationDate is non-null, it is the new expiration date of the window. If it is null, the
   * expiration date continues to be the expiration date of the latest version currently in the list.
   * 
   * If any versions now fall completely outside the new effective window,
   * this method removes those versions. If any versions now cross the boundary
   * of the new effective window, this method truncates the effective date range of those versions.
   * 
   * If effectiveDate is before the earliest effective date in the list, this method
   * changes the effective date of the earliest version to match the new window effective date.
   * Similarly, if expirationDate is later than the latest expiration date in the list,
   * the method changes the expiration date of the latest version to match the new window
   * expiration date.
   * 
   * For example, suppose the version list has three versions with the following effective ranges:
   * <pre>
   *   1/1/2010---3/30/2010, 3/30/2010---4/30/2010, 4/30/2010---6/30/2010
   * </pre>
   * After calling <code>setEffectiveWindow(4/10/2010, 7/10/2010)</code>, the list contains
   * <pre>
   *   4/10/2010---4/30/2010, 4/30/2010---7/10/2010
   * </pre>
   * 
   * If effectiveDate >= expirationDate, this method removes all versions from the version list array.
   * If this RIRiskVersionList is the latest one, the method also calls remove() on the version list itself.
   * 
   * If both effectiveDate and expirationDate are null, this method has no effect.
   * @param effectiveDate the start date, or null
   * @param expirationDate the end date, or null
   */
  public void setEffectiveWindow(java.util.Date effectiveDate, java.util.Date expirationDate) {
    ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).setEffectiveWindow(effectiveDate, expirationDate);
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
   * Sets the value of the RiskNumber field.
   */
  private void setRiskNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RISKNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Status field.
   */
  private void setStatus(typekey.RIEffDatedStatus value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RIRiskVersionListInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RIRiskVersionList.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the AllVersionsInternal array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAllVersionsInternal(entity.RIRisk element) {
      __getInternalInterface().addArrayElement(ALLVERSIONSINTERNAL_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the AttachmentInclusions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAttachmentInclusions(entity.RIAttachmentInclusion element) {
      __getInternalInterface().addArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), element);
    }
    
    /**
     * This should be the only way to add a version to a version list.
     * @param date the date which the version starts
     * @return the version as of that date
     */
    public entity.RIRisk addVersion(java.util.Date date) {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).addVersion(date);
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
    
    /**
     * Sets the expiration date for the version list to a specified date. This has the effect of changing the effective
     * date range for this version list, equivalent to calling
     * <code>setEffectiveWindow(null, expirationDate)</code>. See that method for important details.
     * @param expirationDate desired expiration date
     */
    public void endDate(java.util.Date expirationDate) {
      ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).endDate(expirationDate);
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
     * Returns all versions of this version list in sorted by effective date order.
     * @return sorted array of all versions.
     */
    public entity.RIRisk[] getAllVersions() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).getAllVersions();
    }
    
    /**
     * Gets the value of the AllVersionsInternal field.
     * All versions of the RIRisk.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIRisk[] getAllVersionsInternal() {
      return (entity.RIRisk[])__getInternalInterface().getFieldValue(ALLVERSIONSINTERNAL_PROP.get());
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
     * Gets the value of the AttachmentInclusions field.
     * The exclusions/special acceptances for attached risks.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIAttachmentInclusion[] getAttachmentInclusions() {
      return (entity.RIAttachmentInclusion[])__getInternalInterface().getFieldValue(ATTACHMENTINCLUSIONS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CancellationDate field.
     * The cancellation date.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCancellationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CANCELLATIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Container field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIRiskVLContainer getContainer() {
      return (entity.RIRiskVLContainer)__getInternalInterface().getFieldValue(CONTAINER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getContainerID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CONTAINER_PROP.get());
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
     * Gets the value of the EditEffectiveDate field.
     * Effective date of this change.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEditEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EDITEFFECTIVEDATE_PROP.get());
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
    
    public entity.RIRisk getLatestVersion() {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListInternalMethods")).getLatestVersion();
    }
    
    /**
     * Gets the value of the PolicyPeriod field.
     * Associated Policy Period.
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
    
    /**
     * Returns the RIRisk associated with the reinsurable.
     * @param reinsurable the reinsurable
     * @return the RIRisk
     */
    public entity.RIRisk getRIRisk(entity.Reinsurable reinsurable) {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).getRIRisk(reinsurable);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the RiskNumber field.
     * The risk number.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRiskNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RISKNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the Status field.
     * The status of the effdated entity
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RIEffDatedStatus getStatus() {
      return (typekey.RIEffDatedStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    public int getTermNumber() {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListInternalMethods")).getTermNumber();
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
     * Returns the version as of the given date.
     * @param date as of date
     * @return the version
     */
    public entity.RIRisk getVersionAsOf(java.util.Date date) {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).getVersionAsOf(date);
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Returns true if status is bound.
     * @return boolean value
     */
    public boolean isBound() {
      return ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).isBound();
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
    
    /**
     * Make current version list active.
     */
    public void makeActive() {
      ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).makeActive();
    }
    
    /**
     * Merge adjacent identical slices in the version list.   The only circumstance where this
     * should be necessary is when regenerating the version list because of changes to the
     * reinsurance programs.
     */
    public void mergeSlices() {
      ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).mergeSlices();
    }
    
    /**
     * Move edit effective date, which may result in expanding and shrinking of slices.
     * @param newValue the new edit effective date
     */
    public void moveEditEffectiveDate(java.util.Date newValue) {
      ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).moveEditEffectiveDate(newValue);
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
     * Removes the given element from the AllVersionsInternal array. This is achieved by marking the element for removal.
     */
    public void removeFromAllVersionsInternal(entity.RIRisk element) {
      __getInternalInterface().removeArrayElement(ALLVERSIONSINTERNAL_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AllVersionsInternal array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAllVersionsInternal(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ALLVERSIONSINTERNAL_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
     */
    public void removeFromAttachmentInclusions(entity.RIAttachmentInclusion element) {
      __getInternalInterface().removeArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AttachmentInclusions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAttachmentInclusions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ATTACHMENTINCLUSIONS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AllVersionsInternal field.
     */
    public void setAllVersionsInternal(entity.RIRisk[] value) {
      __getInternalInterface().setFieldValue(ALLVERSIONSINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AttachmentInclusions field.
     */
    public void setAttachmentInclusions(entity.RIAttachmentInclusion[] value) {
      __getInternalInterface().setFieldValue(ATTACHMENTINCLUSIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CancellationDate field.
     */
    public void setCancellationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CANCELLATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Container field.
     */
    public void setContainer(entity.RIRiskVLContainer value) {
      __getInternalInterface().setFieldValue(CONTAINER_PROP.get(), value);
    }
    
    public void setContainerID(gw.pl.persistence.core.Key value) {
      setFieldValue(CONTAINER_PROP.get(), value);
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
     * Sets the value of the EditEffectiveDate field.
     */
    public void setEditEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EDITEFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Set the effective window of the version list by changing effective date, expiration date, or both.
     * 
     * If effectiveDate is non-null, it is the new effective date of the window. If it is null, the
     * effective date continues to be the effective date  of the earliest version currently in the list.
     * 
     * If expirationDate is non-null, it is the new expiration date of the window. If it is null, the
     * expiration date continues to be the expiration date of the latest version currently in the list.
     * 
     * If any versions now fall completely outside the new effective window,
     * this method removes those versions. If any versions now cross the boundary
     * of the new effective window, this method truncates the effective date range of those versions.
     * 
     * If effectiveDate is before the earliest effective date in the list, this method
     * changes the effective date of the earliest version to match the new window effective date.
     * Similarly, if expirationDate is later than the latest expiration date in the list,
     * the method changes the expiration date of the latest version to match the new window
     * expiration date.
     * 
     * For example, suppose the version list has three versions with the following effective ranges:
     * <pre>
     *   1/1/2010---3/30/2010, 3/30/2010---4/30/2010, 4/30/2010---6/30/2010
     * </pre>
     * After calling <code>setEffectiveWindow(4/10/2010, 7/10/2010)</code>, the list contains
     * <pre>
     *   4/10/2010---4/30/2010, 4/30/2010---7/10/2010
     * </pre>
     * 
     * If effectiveDate >= expirationDate, this method removes all versions from the version list array.
     * If this RIRiskVersionList is the latest one, the method also calls remove() on the version list itself.
     * 
     * If both effectiveDate and expirationDate are null, this method has no effect.
     * @param effectiveDate the start date, or null
     * @param expirationDate the end date, or null
     */
    public void setEffectiveWindow(java.util.Date effectiveDate, java.util.Date expirationDate) {
      ((com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods")).setEffectiveWindow(effectiveDate, expirationDate);
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
     * Sets the value of the RiskNumber field.
     */
    public void setRiskNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RISKNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.RIEffDatedStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.reinsurance.RIRiskVersionListPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListImpl");
    config.put("com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListInternalMethods", "com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.reinsurance.impl.RIRiskVersionListImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RIRiskVersionList.class, config);
    com.guidewire._generated.entity.RIRiskVersionListInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RIRiskVersionList, com.guidewire._generated.entity.RIRiskVersionListInternal>() {
      public java.lang.Object getImplementation(entity.RIRiskVersionList bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RIRiskVersionListInternal getInternalInterface(entity.RIRiskVersionList bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RIRiskVersionList newEmptyInstance() {
        return new entity.RIRiskVersionList((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}