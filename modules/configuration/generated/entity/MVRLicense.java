package entity;

/**
 * MVRLicense
 * Licenses in the Motor Vehicle Record for a driver.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVRLicense.eti;MVRLicense.eix;MVRLicense.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "MVRLicense")
public class MVRLicense extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, gw.api.motorvehiclerecord.IMVRLicense {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.MVRLicense> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.MVRLicense>("entity.MVRLicense");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOATCLASS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BoatClass");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDORSEMENTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Endorsements");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIREDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpireDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ISSUEDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IssuedDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSECLASS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseClass");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LICENSESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LicenseState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSESTATUS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSETYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> MOTORVEHICLERECORD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "MotorVehicleRecord");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NONRESIDENTMILITARY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NonResidentMilitary");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORIGINALLYISSUED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OriginallyIssued");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POINTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Points");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYLICENSE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryLicense");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REINSTATEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReinstateDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RESTRICTIONS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Restrictions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.MVRLicenseInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public MVRLicense()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public MVRLicense(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected MVRLicense(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.MVRLicenseInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.MVRLicenseInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the BoatClass field.
   * Boat Class
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBoatClass() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOATCLASS_PROP.get());
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
   * Gets the value of the Endorsements field.
   * Several endorsements per license (Hazardous Material, 01/23/96 Duplicated License Issued, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEndorsements() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENDORSEMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the ExpireDate field.
   * Expire Date for the current License
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpireDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPIREDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IssuedDate field.
   * Issued Date for the current License
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getIssuedDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ISSUEDDATE_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseClass field.
   * Driver License Class
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseClass() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSECLASS_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseNumber field.
   * Driver License Number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSENUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseState field.
   * Driver License State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getLicenseState() {
    return (typekey.State)__getInternalInterface().getFieldValue(LICENSESTATE_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseStatus field.
   * Status (e.g. Duplicate, Valid, Suspended,etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseStatus() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSESTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseType field.
   * Driver License Type (Standard, Commercial)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSETYPE_PROP.get());
  }
  
  public gw.api.motorvehiclerecord.IMVRData getMVRDataParent() {
    return ((gw.api.motorvehiclerecord.IMVRLicense)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRLicense")).getMVRDataParent();
  }
  
  /**
   * Gets the value of the MotorVehicleRecord field.
   * Motor Vehicle Record containing this license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVR getMotorVehicleRecord() {
    return (entity.MVR)__getInternalInterface().getFieldValue(MOTORVEHICLERECORD_PROP.get());
  }
  
  /**
   * Gets the value of the OriginallyIssued field.
   * Date when the License was issued for the first time
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getOriginallyIssued() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ORIGINALLYISSUED_PROP.get());
  }
  
  /**
   * Gets the value of the Points field.
   * Total points assigned by the Department of Motor Vehicle (DMV) to the driver.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPoints() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(POINTS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the ReinstateDate field.
   * Date when the license was reinstated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReinstateDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REINSTATEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Restrictions field.
   * Several restriction per license (Daylight hours only, Corrective Lenses, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRestrictions() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RESTRICTIONS_PROP.get());
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
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRLicense getSubtype() {
    return (typekey.MVRLicense)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
   * Gets the value of the NonResidentMilitary field.
   * Indicates if this license belong to a non resident military
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isNonResidentMilitary() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(NONRESIDENTMILITARY_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryLicense field.
   * Indicates if this is the primary license
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPrimaryLicense() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PRIMARYLICENSE_PROP.get());
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
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BoatClass field.
   */
  public void setBoatClass(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BOATCLASS_PROP.get(), value);
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
   * Sets the value of the Endorsements field.
   */
  public void setEndorsements(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ENDORSEMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpireDate field.
   */
  public void setExpireDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPIREDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IssuedDate field.
   */
  public void setIssuedDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ISSUEDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseClass field.
   */
  public void setLicenseClass(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LICENSECLASS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseNumber field.
   */
  public void setLicenseNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LICENSENUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseState field.
   */
  public void setLicenseState(typekey.State value) {
    __getInternalInterface().setFieldValue(LICENSESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseStatus field.
   */
  public void setLicenseStatus(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LICENSESTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseType field.
   */
  public void setLicenseType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LICENSETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MotorVehicleRecord field.
   */
  public void setMotorVehicleRecord(entity.MVR value) {
    __getInternalInterface().setFieldValue(MOTORVEHICLERECORD_PROP.get(), value);
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
   * Sets the value of the NonResidentMilitary field.
   */
  public void setNonResidentMilitary(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(NONRESIDENTMILITARY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OriginallyIssued field.
   */
  public void setOriginallyIssued(java.util.Date value) {
    __getInternalInterface().setFieldValue(ORIGINALLYISSUED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Points field.
   */
  public void setPoints(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(POINTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryLicense field.
   */
  public void setPrimaryLicense(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PRIMARYLICENSE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the ReinstateDate field.
   */
  public void setReinstateDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(REINSTATEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Restrictions field.
   */
  public void setRestrictions(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RESTRICTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.MVRLicense value) {
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.MVRLicenseInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.MVRLicense.this.__getDelegateManager();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the BoatClass field.
     * Boat Class
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBoatClass() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOATCLASS_PROP.get());
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
     * Gets the value of the Endorsements field.
     * Several endorsements per license (Hazardous Material, 01/23/96 Duplicated License Issued, etc.)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEndorsements() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENDORSEMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the ExpireDate field.
     * Expire Date for the current License
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpireDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EXPIREDATE_PROP.get());
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
     * Gets the value of the IssuedDate field.
     * Issued Date for the current License
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getIssuedDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ISSUEDDATE_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseClass field.
     * Driver License Class
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLicenseClass() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSECLASS_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseNumber field.
     * Driver License Number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLicenseNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSENUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseState field.
     * Driver License State
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getLicenseState() {
      return (typekey.State)__getInternalInterface().getFieldValue(LICENSESTATE_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseStatus field.
     * Status (e.g. Duplicate, Valid, Suspended,etc.)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLicenseStatus() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSESTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseType field.
     * Driver License Type (Standard, Commercial)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLicenseType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSETYPE_PROP.get());
    }
    
    public gw.api.motorvehiclerecord.IMVRData getMVRDataParent() {
      return ((gw.api.motorvehiclerecord.IMVRLicense)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRLicense")).getMVRDataParent();
    }
    
    /**
     * Gets the value of the MotorVehicleRecord field.
     * Motor Vehicle Record containing this license.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MVR getMotorVehicleRecord() {
      return (entity.MVR)__getInternalInterface().getFieldValue(MOTORVEHICLERECORD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getMotorVehicleRecordID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(MOTORVEHICLERECORD_PROP.get());
    }
    
    /**
     * Gets the value of the OriginallyIssued field.
     * Date when the License was issued for the first time
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getOriginallyIssued() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ORIGINALLYISSUED_PROP.get());
    }
    
    /**
     * Gets the value of the Points field.
     * Total points assigned by the Department of Motor Vehicle (DMV) to the driver.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getPoints() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(POINTS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the ReinstateDate field.
     * Date when the license was reinstated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReinstateDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REINSTATEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Restrictions field.
     * Several restriction per license (Daylight hours only, Corrective Lenses, etc.)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRestrictions() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RESTRICTIONS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MVRLicense getSubtype() {
      return (typekey.MVRLicense)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
     * Gets the value of the NonResidentMilitary field.
     * Indicates if this license belong to a non resident military
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isNonResidentMilitary() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(NONRESIDENTMILITARY_PROP.get());
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Gets the value of the PrimaryLicense field.
     * Indicates if this is the primary license
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPrimaryLicense() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PRIMARYLICENSE_PROP.get());
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BoatClass field.
     */
    public void setBoatClass(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BOATCLASS_PROP.get(), value);
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
     * Sets the value of the Endorsements field.
     */
    public void setEndorsements(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ENDORSEMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpireDate field.
     */
    public void setExpireDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPIREDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IssuedDate field.
     */
    public void setIssuedDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ISSUEDDATE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LicenseClass field.
     */
    public void setLicenseClass(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LICENSECLASS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseNumber field.
     */
    public void setLicenseNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LICENSENUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseState field.
     */
    public void setLicenseState(typekey.State value) {
      __getInternalInterface().setFieldValue(LICENSESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseStatus field.
     */
    public void setLicenseStatus(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LICENSESTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseType field.
     */
    public void setLicenseType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LICENSETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MotorVehicleRecord field.
     */
    public void setMotorVehicleRecord(entity.MVR value) {
      __getInternalInterface().setFieldValue(MOTORVEHICLERECORD_PROP.get(), value);
    }
    
    public void setMotorVehicleRecordID(gw.pl.persistence.core.Key value) {
      setFieldValue(MOTORVEHICLERECORD_PROP.get(), value);
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
     * Sets the value of the NonResidentMilitary field.
     */
    public void setNonResidentMilitary(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(NONRESIDENTMILITARY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OriginallyIssued field.
     */
    public void setOriginallyIssued(java.util.Date value) {
      __getInternalInterface().setFieldValue(ORIGINALLYISSUED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Points field.
     */
    public void setPoints(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(POINTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryLicense field.
     */
    public void setPrimaryLicense(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PRIMARYLICENSE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReinstateDate field.
     */
    public void setReinstateDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(REINSTATEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Restrictions field.
     */
    public void setRestrictions(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RESTRICTIONS_PROP.get(), value);
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
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.MVRLicense value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.motorvehiclerecord.MVRLicensePublicMethods", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVRLicenseImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.api.motorvehiclerecord.IMVRLicense", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVRLicenseImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.MVRLicense.class, config);
    com.guidewire._generated.entity.MVRLicenseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.MVRLicense, com.guidewire._generated.entity.MVRLicenseInternal>() {
      public java.lang.Object getImplementation(entity.MVRLicense bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.MVRLicenseInternal getInternalInterface(entity.MVRLicense bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.MVRLicense newEmptyInstance() {
        return new entity.MVRLicense((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}