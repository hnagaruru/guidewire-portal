package entity;

/**
 * MVRIncident
 * Incident in the Motor Vehicle Record for a driver.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVRIncident.eti;MVRIncident.eix;MVRIncident.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "MVRIncident")
public class MVRIncident extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, gw.api.motorvehiclerecord.IMVRIncident {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.MVRIncident> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.MVRIncident>("entity.MVRIncident");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACCIDENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Accident");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CARRIERVIOLATIONCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CarrierViolationCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONVICTIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ConvictionDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COURT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Court");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DISPOSITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Disposition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ELIGIBLEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EligibleDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INCIDENTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IncidentNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INCIDENTTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "IncidentType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Location");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MISC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Misc");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> MOTORVEHICLERECORD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "MotorVehicleRecord");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORDERNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OrderNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POINTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Points");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPEED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Speed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPEEDZONE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SpeedZone");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "State");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VIOLATIONCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ViolationCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VIOLATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ViolationDate");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.MVRIncidentInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public MVRIncident()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public MVRIncident(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected MVRIncident(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.MVRIncidentInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.MVRIncidentInternal __getInternalInterface() {
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
  
  /**
   * Gets the value of the Accident field.
   * Whether an accident was part of this incident
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccident() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCIDENT_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CarrierViolationCode field.
   * The insurance carrier specific code that can be used for standard processing or reporting.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCarrierViolationCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CARRIERVIOLATIONCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ConvictionDate field.
   * Date of conviction or reinstatement of license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getConvictionDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CONVICTIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Court field.
   * The court or agency of conviction.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCourt() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COURT_PROP.get());
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
   * State Department of Motor Vehicle (DMV) description.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the Disposition field.
   * The verdict on the violation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDisposition() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DISPOSITION_PROP.get());
  }
  
  /**
   * Gets the value of the EligibleDate field.
   * The date the driver becomes eligible based on the imposed restriction on a violation such as date driver is eligible to driver after a suspension.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEligibleDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ELIGIBLEDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IncidentNumber field.
   * An unique identifier for incidents of the same mvr
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIncidentNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INCIDENTNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the IncidentType field.
   * Type of incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRIncidentType getIncidentType() {
    return (typekey.MVRIncidentType)__getInternalInterface().getFieldValue(INCIDENTTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Location field.
   * City or location of the incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocation() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATION_PROP.get());
  }
  
  public gw.api.motorvehiclerecord.IMVRData getMVRDataParent() {
    return ((gw.api.motorvehiclerecord.IMVRIncident)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRIncident")).getMVRDataParent();
  }
  
  /**
   * Gets the value of the Misc field.
   * Any other information not captured in the defined fields
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMisc() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MISC_PROP.get());
  }
  
  /**
   * Gets the value of the MotorVehicleRecord field.
   * Motor Vehicle Record containing this incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVR getMotorVehicleRecord() {
    return (entity.MVR)__getInternalInterface().getFieldValue(MOTORVEHICLERECORD_PROP.get());
  }
  
  /**
   * Gets the value of the OrderNumber field.
   * The tracking number for the order or violation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrderNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORDERNUMBER_PROP.get());
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the Speed field.
   * The speed of the vehicle when the incident occurred
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSpeed() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPEED_PROP.get());
  }
  
  /**
   * Gets the value of the SpeedZone field.
   * The Zone speed limit where the incident occurred
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSpeedZone() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPEEDZONE_PROP.get());
  }
  
  /**
   * Gets the value of the State field.
   * State or county of the incident.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getState() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRIncident getSubtype() {
    return (typekey.MVRIncident)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
   * Gets the value of the ViolationCode field.
   * The state specific violation or incident code as returned by Department of Motor Vehicles (DMV).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getViolationCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VIOLATIONCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ViolationDate field.
   * Date of violation or suspension of license.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getViolationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(VIOLATIONDATE_PROP.get());
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
   * Sets the value of the Accident field.
   */
  public void setAccident(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ACCIDENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CarrierViolationCode field.
   */
  public void setCarrierViolationCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CARRIERVIOLATIONCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConvictionDate field.
   */
  public void setConvictionDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CONVICTIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Court field.
   */
  public void setCourt(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COURT_PROP.get(), value);
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
   * Sets the value of the Disposition field.
   */
  public void setDisposition(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DISPOSITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EligibleDate field.
   */
  public void setEligibleDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ELIGIBLEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IncidentNumber field.
   */
  public void setIncidentNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INCIDENTNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IncidentType field.
   */
  public void setIncidentType(typekey.MVRIncidentType value) {
    __getInternalInterface().setFieldValue(INCIDENTTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Misc field.
   */
  public void setMisc(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MISC_PROP.get(), value);
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
   * Sets the value of the OrderNumber field.
   */
  public void setOrderNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ORDERNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Points field.
   */
  public void setPoints(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(POINTS_PROP.get(), value);
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
   * Sets the value of the Speed field.
   */
  public void setSpeed(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SPEED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SpeedZone field.
   */
  public void setSpeedZone(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SPEEDZONE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the State field.
   */
  public void setState(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.MVRIncident value) {
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
   * Sets the value of the ViolationCode field.
   */
  public void setViolationCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(VIOLATIONCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ViolationDate field.
   */
  public void setViolationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(VIOLATIONDATE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.MVRIncidentInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.MVRIncident.this.__getDelegateManager();
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
     * Gets the value of the Accident field.
     * Whether an accident was part of this incident
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAccident() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCIDENT_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CarrierViolationCode field.
     * The insurance carrier specific code that can be used for standard processing or reporting.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCarrierViolationCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CARRIERVIOLATIONCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ConvictionDate field.
     * Date of conviction or reinstatement of license.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getConvictionDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CONVICTIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Court field.
     * The court or agency of conviction.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCourt() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COURT_PROP.get());
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
     * State Department of Motor Vehicle (DMV) description.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the Disposition field.
     * The verdict on the violation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDisposition() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DISPOSITION_PROP.get());
    }
    
    /**
     * Gets the value of the EligibleDate field.
     * The date the driver becomes eligible based on the imposed restriction on a violation such as date driver is eligible to driver after a suspension.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEligibleDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ELIGIBLEDATE_PROP.get());
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
     * Gets the value of the IncidentNumber field.
     * An unique identifier for incidents of the same mvr
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getIncidentNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INCIDENTNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the IncidentType field.
     * Type of incident.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MVRIncidentType getIncidentType() {
      return (typekey.MVRIncidentType)__getInternalInterface().getFieldValue(INCIDENTTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Location field.
     * City or location of the incident.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLocation() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATION_PROP.get());
    }
    
    public gw.api.motorvehiclerecord.IMVRData getMVRDataParent() {
      return ((gw.api.motorvehiclerecord.IMVRIncident)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVRIncident")).getMVRDataParent();
    }
    
    /**
     * Gets the value of the Misc field.
     * Any other information not captured in the defined fields
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMisc() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MISC_PROP.get());
    }
    
    /**
     * Gets the value of the MotorVehicleRecord field.
     * Motor Vehicle Record containing this incident.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MVR getMotorVehicleRecord() {
      return (entity.MVR)__getInternalInterface().getFieldValue(MOTORVEHICLERECORD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getMotorVehicleRecordID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(MOTORVEHICLERECORD_PROP.get());
    }
    
    /**
     * Gets the value of the OrderNumber field.
     * The tracking number for the order or violation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOrderNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ORDERNUMBER_PROP.get());
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Speed field.
     * The speed of the vehicle when the incident occurred
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSpeed() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPEED_PROP.get());
    }
    
    /**
     * Gets the value of the SpeedZone field.
     * The Zone speed limit where the incident occurred
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSpeedZone() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPEEDZONE_PROP.get());
    }
    
    /**
     * Gets the value of the State field.
     * State or county of the incident.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getState() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MVRIncident getSubtype() {
      return (typekey.MVRIncident)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
     * Gets the value of the ViolationCode field.
     * The state specific violation or incident code as returned by Department of Motor Vehicles (DMV).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getViolationCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(VIOLATIONCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ViolationDate field.
     * Date of violation or suspension of license.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getViolationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(VIOLATIONDATE_PROP.get());
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Accident field.
     */
    public void setAccident(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ACCIDENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CarrierViolationCode field.
     */
    public void setCarrierViolationCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CARRIERVIOLATIONCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConvictionDate field.
     */
    public void setConvictionDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CONVICTIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Court field.
     */
    public void setCourt(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COURT_PROP.get(), value);
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
     * Sets the value of the Disposition field.
     */
    public void setDisposition(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DISPOSITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EligibleDate field.
     */
    public void setEligibleDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ELIGIBLEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IncidentNumber field.
     */
    public void setIncidentNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INCIDENTNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IncidentType field.
     */
    public void setIncidentType(typekey.MVRIncidentType value) {
      __getInternalInterface().setFieldValue(INCIDENTTYPE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Location field.
     */
    public void setLocation(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Misc field.
     */
    public void setMisc(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MISC_PROP.get(), value);
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
     * Sets the value of the OrderNumber field.
     */
    public void setOrderNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ORDERNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Points field.
     */
    public void setPoints(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(POINTS_PROP.get(), value);
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
     * Sets the value of the Speed field.
     */
    public void setSpeed(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SPEED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SpeedZone field.
     */
    public void setSpeedZone(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SPEEDZONE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the State field.
     */
    public void setState(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.MVRIncident value) {
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
     * Sets the value of the ViolationCode field.
     */
    public void setViolationCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(VIOLATIONCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ViolationDate field.
     */
    public void setViolationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(VIOLATIONDATE_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.motorvehiclerecord.MVRIncidentPulicMethods", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVRIncidentImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.api.motorvehiclerecord.IMVRIncident", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVRIncidentImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.MVRIncident.class, config);
    com.guidewire._generated.entity.MVRIncidentInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.MVRIncident, com.guidewire._generated.entity.MVRIncidentInternal>() {
      public java.lang.Object getImplementation(entity.MVRIncident bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.MVRIncidentInternal getInternalInterface(entity.MVRIncident bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.MVRIncident newEmptyInstance() {
        return new entity.MVRIncident((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}