package entity;

/**
 * MVR
 * A Motor Vehicle Record for the driver including the order information.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVR.eti;MVR.eix;MVR.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "MVR")
public class MVR extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, gw.api.motorvehiclerecord.IMVRData {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.MVR> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.MVR>("entity.MVR");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDITIONALDRIVERS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AdditionalDrivers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Address");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEOFBIRTH_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateOfBirth");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Donor");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EYES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Eyes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> GENDER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Gender");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HAIR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Hair");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HEIGHT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Height");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> INCIDENTENTITIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "IncidentEntities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LICENSEENTITIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LicenseEntities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> MVRORDER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "MVROrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MIDDLENAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MiddleName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MISCELLANEOUS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Miscellaneous");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RACE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Race");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REPORTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReportDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REPORTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReportNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SSN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SSN");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WEIGHT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Weight");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> YEARSREQUESTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "YearsRequested");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.MVRInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public MVR()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public MVR(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected MVR(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.MVRInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.MVRInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the IncidentEntities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIncidentEntities(entity.MVRIncident element) {
    __getInternalInterface().addArrayElement(INCIDENTENTITIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LicenseEntities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLicenseEntities(entity.MVRLicense element) {
    __getInternalInterface().addArrayElement(LICENSEENTITIES_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the AdditionalDrivers field.
   * Any additional drivers associated with this MVR report.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdditionalDrivers() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDITIONALDRIVERS_PROP.get());
  }
  
  /**
   * Gets the value of the Address field.
   * Driver's Address - received from MVR provider
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddress() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
   * Gets the value of the DateOfBirth field.
   * Driver's date of birth - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirth() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEOFBIRTH_PROP.get());
  }
  
  /**
   * Gets the value of the Eyes field.
   * Eye color of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEyes() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EYES_PROP.get());
  }
  
  /**
   * Gets the value of the FirstName field.
   * Driver's first name - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the Gender field.
   * Gender - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GenderType getGender() {
    return (typekey.GenderType)__getInternalInterface().getFieldValue(GENDER_PROP.get());
  }
  
  /**
   * Gets the value of the Hair field.
   * Hair color of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHair() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HAIR_PROP.get());
  }
  
  /**
   * Gets the value of the Height field.
   * Height of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHeight() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HEIGHT_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IncidentEntities field.
   * Incidents in this record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVRIncident[] getIncidentEntities() {
    return (entity.MVRIncident[])__getInternalInterface().getFieldValue(INCIDENTENTITIES_PROP.get());
  }
  
  public gw.api.motorvehiclerecord.IMVRIncident[] getIncidents() {
    return ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).getIncidents();
  }
  
  /**
   * Gets the value of the LastName field.
   * Driver's last name - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseEntities field.
   * Licenses in this record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVRLicense[] getLicenseEntities() {
    return (entity.MVRLicense[])__getInternalInterface().getFieldValue(LICENSEENTITIES_PROP.get());
  }
  
  public gw.api.motorvehiclerecord.IMVRLicense[] getLicenses() {
    return ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).getLicenses();
  }
  
  /**
   * Gets the value of the MVROrder field.
   * Order used to request this Motor Vehicle Record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVROrder getMVROrder() {
    return (entity.MVROrder)__getInternalInterface().getFieldValue(MVRORDER_PROP.get());
  }
  
  public gw.api.motorvehiclerecord.IMVROrder getMVROrderParent() {
    return ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).getMVROrderParent();
  }
  
  /**
   * Gets the value of the MiddleName field.
   * Driver's middle name or initial - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiddleName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MIDDLENAME_PROP.get());
  }
  
  /**
   * Gets the value of the Miscellaneous field.
   * Miscellaneous and state specific information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiscellaneous() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MISCELLANEOUS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Race field.
   * Race of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRace() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RACE_PROP.get());
  }
  
  /**
   * Gets the value of the ReportDate field.
   * Date and Time when the report was processed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReportDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REPORTDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ReportNumber field.
   * Identifies the report when multiple MVR reports are received for one License. Default value=1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getReportNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(REPORTNUMBER_PROP.get());
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
   * Gets the value of the SSN field.
   * Social Security Number - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSSN() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SSN_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVR getSubtype() {
    return (typekey.MVR)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
   * Gets the value of the Weight field.
   * Weight of the driver - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWeight() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(WEIGHT_PROP.get());
  }
  
  /**
   * Gets the value of the YearsRequested field.
   * The MVR report can be requested base on 3, 5, 7 or 10 years depending on the State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearsRequested() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARSREQUESTED_PROP.get());
  }
  
  /**
   * Gets the value of the Donor field.
   * Whether the driver is an organ donor - received from MVR provider.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDonor() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOR_PROP.get());
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
   * Removes the given element from the IncidentEntities array. This is achieved by marking the element for removal.
   */
  public void removeFromIncidentEntities(entity.MVRIncident element) {
    __getInternalInterface().removeArrayElement(INCIDENTENTITIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the IncidentEntities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIncidentEntities(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(INCIDENTENTITIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LicenseEntities array. This is achieved by marking the element for removal.
   */
  public void removeFromLicenseEntities(entity.MVRLicense element) {
    __getInternalInterface().removeArrayElement(LICENSEENTITIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LicenseEntities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLicenseEntities(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LICENSEENTITIES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AdditionalDrivers field.
   */
  public void setAdditionalDrivers(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDITIONALDRIVERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
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
   * Sets the value of the DateOfBirth field.
   */
  public void setDateOfBirth(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEOFBIRTH_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Donor field.
   */
  public void setDonor(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DONOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Eyes field.
   */
  public void setEyes(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EYES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameDenorm field.
   */
  private void setFirstNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Gender field.
   */
  public void setGender(typekey.GenderType value) {
    __getInternalInterface().setFieldValue(GENDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Hair field.
   */
  public void setHair(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(HAIR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Height field.
   */
  public void setHeight(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(HEIGHT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IncidentEntities field.
   */
  public void setIncidentEntities(entity.MVRIncident[] value) {
    __getInternalInterface().setFieldValue(INCIDENTENTITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameDenorm field.
   */
  private void setLastNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseEntities field.
   */
  public void setLicenseEntities(entity.MVRLicense[] value) {
    __getInternalInterface().setFieldValue(LICENSEENTITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MVROrder field.
   */
  public void setMVROrder(entity.MVROrder value) {
    __getInternalInterface().setFieldValue(MVRORDER_PROP.get(), value);
  }
  
  public void setMVROrderParent(gw.api.motorvehiclerecord.IMVROrder order) {
    ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).setMVROrderParent(order);
  }
  
  /**
   * Sets the value of the MiddleName field.
   */
  public void setMiddleName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MIDDLENAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Miscellaneous field.
   */
  public void setMiscellaneous(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MISCELLANEOUS_PROP.get(), value);
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
   * Sets the value of the Race field.
   */
  public void setRace(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RACE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReportDate field.
   */
  public void setReportDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(REPORTDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReportNumber field.
   */
  public void setReportNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(REPORTNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SSN field.
   */
  public void setSSN(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SSN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.MVR value) {
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
   * Sets the value of the Weight field.
   */
  public void setWeight(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(WEIGHT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the YearsRequested field.
   */
  public void setYearsRequested(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(YEARSREQUESTED_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.MVRInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.MVR.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the IncidentEntities array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToIncidentEntities(entity.MVRIncident element) {
      __getInternalInterface().addArrayElement(INCIDENTENTITIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LicenseEntities array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLicenseEntities(entity.MVRLicense element) {
      __getInternalInterface().addArrayElement(LICENSEENTITIES_PROP.get(), element);
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
     * Gets the value of the AdditionalDrivers field.
     * Any additional drivers associated with this MVR report.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAdditionalDrivers() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDITIONALDRIVERS_PROP.get());
    }
    
    /**
     * Gets the value of the Address field.
     * Driver's Address - received from MVR provider
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddress() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
     * Gets the value of the DateOfBirth field.
     * Driver's date of birth - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateOfBirth() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATEOFBIRTH_PROP.get());
    }
    
    /**
     * Gets the value of the Eyes field.
     * Eye color of the driver - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEyes() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EYES_PROP.get());
    }
    
    /**
     * Gets the value of the FirstName field.
     * Driver's first name - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameDenorm field.
     * denorm field for FirstName
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstNameDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the Gender field.
     * Gender - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.GenderType getGender() {
      return (typekey.GenderType)__getInternalInterface().getFieldValue(GENDER_PROP.get());
    }
    
    /**
     * Gets the value of the Hair field.
     * Hair color of the driver - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHair() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HAIR_PROP.get());
    }
    
    /**
     * Gets the value of the Height field.
     * Height of the driver - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHeight() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HEIGHT_PROP.get());
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
     * Gets the value of the IncidentEntities field.
     * Incidents in this record.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MVRIncident[] getIncidentEntities() {
      return (entity.MVRIncident[])__getInternalInterface().getFieldValue(INCIDENTENTITIES_PROP.get());
    }
    
    public gw.api.motorvehiclerecord.IMVRIncident[] getIncidents() {
      return ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).getIncidents();
    }
    
    /**
     * Gets the value of the LastName field.
     * Driver's last name - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the LastNameDenorm field.
     * denorm field for LastName
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastNameDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseEntities field.
     * Licenses in this record.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MVRLicense[] getLicenseEntities() {
      return (entity.MVRLicense[])__getInternalInterface().getFieldValue(LICENSEENTITIES_PROP.get());
    }
    
    public gw.api.motorvehiclerecord.IMVRLicense[] getLicenses() {
      return ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).getLicenses();
    }
    
    /**
     * Gets the value of the MVROrder field.
     * Order used to request this Motor Vehicle Record.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MVROrder getMVROrder() {
      return (entity.MVROrder)__getInternalInterface().getFieldValue(MVRORDER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getMVROrderID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(MVRORDER_PROP.get());
    }
    
    public gw.api.motorvehiclerecord.IMVROrder getMVROrderParent() {
      return ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).getMVROrderParent();
    }
    
    /**
     * Gets the value of the MiddleName field.
     * Driver's middle name or initial - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMiddleName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MIDDLENAME_PROP.get());
    }
    
    /**
     * Gets the value of the Miscellaneous field.
     * Miscellaneous and state specific information.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMiscellaneous() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MISCELLANEOUS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Race field.
     * Race of the driver - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRace() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RACE_PROP.get());
    }
    
    /**
     * Gets the value of the ReportDate field.
     * Date and Time when the report was processed.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReportDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REPORTDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ReportNumber field.
     * Identifies the report when multiple MVR reports are received for one License. Default value=1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getReportNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(REPORTNUMBER_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the SSN field.
     * Social Security Number - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSSN() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SSN_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MVR getSubtype() {
      return (typekey.MVR)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
     * Gets the value of the Weight field.
     * Weight of the driver - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getWeight() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(WEIGHT_PROP.get());
    }
    
    /**
     * Gets the value of the YearsRequested field.
     * The MVR report can be requested base on 3, 5, 7 or 10 years depending on the State
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getYearsRequested() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARSREQUESTED_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the Donor field.
     * Whether the driver is an organ donor - received from MVR provider.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDonor() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOR_PROP.get());
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
     * Removes the given element from the IncidentEntities array. This is achieved by marking the element for removal.
     */
    public void removeFromIncidentEntities(entity.MVRIncident element) {
      __getInternalInterface().removeArrayElement(INCIDENTENTITIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the IncidentEntities array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromIncidentEntities(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(INCIDENTENTITIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LicenseEntities array. This is achieved by marking the element for removal.
     */
    public void removeFromLicenseEntities(entity.MVRLicense element) {
      __getInternalInterface().removeArrayElement(LICENSEENTITIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LicenseEntities array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLicenseEntities(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LICENSEENTITIES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AdditionalDrivers field.
     */
    public void setAdditionalDrivers(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDITIONALDRIVERS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Address field.
     */
    public void setAddress(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
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
     * Sets the value of the DateOfBirth field.
     */
    public void setDateOfBirth(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATEOFBIRTH_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Donor field.
     */
    public void setDonor(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DONOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Eyes field.
     */
    public void setEyes(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EYES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstName field.
     */
    public void setFirstName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameDenorm field.
     */
    public void setFirstNameDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Gender field.
     */
    public void setGender(typekey.GenderType value) {
      __getInternalInterface().setFieldValue(GENDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Hair field.
     */
    public void setHair(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HAIR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Height field.
     */
    public void setHeight(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HEIGHT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IncidentEntities field.
     */
    public void setIncidentEntities(entity.MVRIncident[] value) {
      __getInternalInterface().setFieldValue(INCIDENTENTITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastName field.
     */
    public void setLastName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastNameDenorm field.
     */
    public void setLastNameDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTNAMEDENORM_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LicenseEntities field.
     */
    public void setLicenseEntities(entity.MVRLicense[] value) {
      __getInternalInterface().setFieldValue(LICENSEENTITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MVROrder field.
     */
    public void setMVROrder(entity.MVROrder value) {
      __getInternalInterface().setFieldValue(MVRORDER_PROP.get(), value);
    }
    
    public void setMVROrderID(gw.pl.persistence.core.Key value) {
      setFieldValue(MVRORDER_PROP.get(), value);
    }
    
    public void setMVROrderParent(gw.api.motorvehiclerecord.IMVROrder order) {
      ((gw.api.motorvehiclerecord.IMVRData)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRData")).setMVROrderParent(order);
    }
    
    /**
     * Sets the value of the MiddleName field.
     */
    public void setMiddleName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MIDDLENAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Miscellaneous field.
     */
    public void setMiscellaneous(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MISCELLANEOUS_PROP.get(), value);
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
     * Sets the value of the Race field.
     */
    public void setRace(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RACE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ReportDate field.
     */
    public void setReportDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(REPORTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ReportNumber field.
     */
    public void setReportNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(REPORTNUMBER_PROP.get(), value);
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
     * Sets the value of the SSN field.
     */
    public void setSSN(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SSN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.MVR value) {
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
     * Sets the value of the Weight field.
     */
    public void setWeight(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(WEIGHT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the YearsRequested field.
     */
    public void setYearsRequested(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(YEARSREQUESTED_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.motorvehiclerecord.MVRPublicMethods", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVRImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.api.motorvehiclerecord.IMVRData", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVRImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.MVR.class, config);
    com.guidewire._generated.entity.MVRInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.MVR, com.guidewire._generated.entity.MVRInternal>() {
      public java.lang.Object getImplementation(entity.MVR bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.MVRInternal getInternalInterface(entity.MVR bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.MVR newEmptyInstance() {
        return new entity.MVR((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}