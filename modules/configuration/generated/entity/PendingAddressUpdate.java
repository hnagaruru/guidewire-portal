package entity;

/**
 * PendingAddressUpdate
 * A pending update to an Address.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingAddressUpdate.eti;PendingAddressUpdate.eix;PendingAddressUpdate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PendingAddressUpdate")
public class PendingAddressUpdate extends com.guidewire.pl.persistence.code.BeanBase implements entity.Editable, entity.PendingUpdateDelegate, entity.Extractable, entity.OverlapTable, entity.FrozenSetMember, gw.api.domain.account.PendingUpdate {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PendingAddressUpdate> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PendingAddressUpdate>("entity.PendingAddressUpdate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1ISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1IsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1KANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1Kanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1KANJIISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1KanjiIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2ISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2IsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2KANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2Kanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2KANJIISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2KanjiIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE3_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine3");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE3ISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine3IsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ADDRESSTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AddressType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSTYPEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressTypeIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEX_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEX");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEXBUREAU_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEXBureau");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEXBUREAUISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEXBureauIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEXISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEXIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "City");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYKANJIISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityKanjiIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COUNTRY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Country");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTRYISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CountryIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "County");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTYISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CountyIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTIONISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DescriptionIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PENDINGUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PendingUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCodeIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "State");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STATEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StateIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> TARGETADDRESS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "TargetAddress");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PendingAddressUpdateInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PendingAddressUpdate()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PendingAddressUpdate(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected PendingAddressUpdate(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PendingAddressUpdateInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.PendingAddressUpdateInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public void applyUpdate() {
    ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).applyUpdate();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the AddressLine1 field.
   * Address Line 1.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine1Kanji field.
   * Address Line 1 Kanji.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1Kanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2 field.
   * Address Line 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2Kanji field.
   * Address Line 2 Kanji.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2Kanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine3 field.
   * Address Line 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine3() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE3_PROP.get());
  }
  
  /**
   * Gets the value of the AddressType field.
   * Type of this address record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddressType getAddressType() {
    return (typekey.AddressType)__getInternalInterface().getFieldValue(ADDRESSTYPE_PROP.get());
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
   * Gets the value of the CEDEXBureau field.
   * CEDEX: Special business mail delivery bureau (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCEDEXBureau() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CEDEXBUREAU_PROP.get());
  }
  
  /**
   * Gets the value of the City field.
   * City.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCity() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITY_PROP.get());
  }
  
  /**
   * Gets the value of the CityKanji field.
   * City Kanji
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the Country field.
   * Country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountry() {
    return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRY_PROP.get());
  }
  
  /**
   * Gets the value of the County field.
   * County.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCounty() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COUNTY_PROP.get());
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
   * Address Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  public java.util.Date getExecuteTime() {
    return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getExecuteTime();
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
   * Gets the value of the Job field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob() {
    return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
  }
  
  /**
   * Gets the value of the PendingUpdateTime field.
   * The time when this pending update should be applied to the target entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPendingUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(PENDINGUPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the PostalCode field.
   * Postal code; string to handle Zip+4 and international codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the State field.
   * State.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getState() {
    return (typekey.State)__getInternalInterface().getFieldValue(STATE_PROP.get());
  }
  
  public entity.KeyableBean getTarget() {
    return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getTarget();
  }
  
  /**
   * Gets the value of the TargetAddress field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getTargetAddress() {
    return (entity.Address)__getInternalInterface().getFieldValue(TARGETADDRESS_PROP.get());
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
   * Gets the value of the AddressLine1IsNull field.
   * True if Address Line 1 should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine1IsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE1ISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine1KanjiIsNull field.
   * True if Address Line 1 Kanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine1KanjiIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE1KANJIISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2IsNull field.
   * True if Address Line 2 should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine2IsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE2ISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2KanjiIsNull field.
   * True if Address Line 2 Kanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine2KanjiIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE2KANJIISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine3IsNull field.
   * True if Address Line 3 should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressLine3IsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE3ISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the AddressTypeIsNull field.
   * True if AddressType should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAddressTypeIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSTYPEISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the CEDEX field.
   * CEDEX: Special business mail delivery flag (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEX() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEX_PROP.get());
  }
  
  /**
   * Gets the value of the CEDEXBureauIsNull field.
   * True if CEDEX Bureau should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEXBureauIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEXBUREAUISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the CEDEXIsNull field.
   * True if CEDEX should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEXIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEXISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the CityIsNull field.
   * True if City should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCityIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CITYISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the CityKanjiIsNull field.
   * True if City Kanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCityKanjiIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CITYKANJIISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the CountryIsNull field.
   * True if Country should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCountryIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(COUNTRYISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the CountyIsNull field.
   * True if County should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCountyIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(COUNTYISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the DescriptionIsNull field.
   * True if Description should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDescriptionIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DESCRIPTIONISNULL_PROP.get());
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
   * Gets the value of the PostalCodeIsNull field.
   * True if PostalCode should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPostalCodeIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(POSTALCODEISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the StateIsNull field.
   * True if the State should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStateIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(STATEISNULL_PROP.get());
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
   * Sets the value of the AddressLine1 field.
   */
  public void setAddressLine1(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1IsNull field.
   */
  public void setAddressLine1IsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ADDRESSLINE1ISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1Kanji field.
   */
  public void setAddressLine1Kanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1KanjiIsNull field.
   */
  public void setAddressLine1KanjiIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ADDRESSLINE1KANJIISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2 field.
   */
  public void setAddressLine2(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2IsNull field.
   */
  public void setAddressLine2IsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ADDRESSLINE2ISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2Kanji field.
   */
  public void setAddressLine2Kanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2KanjiIsNull field.
   */
  public void setAddressLine2KanjiIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ADDRESSLINE2KANJIISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine3 field.
   */
  public void setAddressLine3(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine3IsNull field.
   */
  public void setAddressLine3IsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ADDRESSLINE3ISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressType field.
   */
  public void setAddressType(typekey.AddressType value) {
    __getInternalInterface().setFieldValue(ADDRESSTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressTypeIsNull field.
   */
  public void setAddressTypeIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ADDRESSTYPEISNULL_PROP.get(), value);
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
   * Sets the value of the CEDEX field.
   */
  public void setCEDEX(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CEDEX_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CEDEXBureau field.
   */
  public void setCEDEXBureau(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CEDEXBUREAU_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CEDEXBureauIsNull field.
   */
  public void setCEDEXBureauIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CEDEXBUREAUISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CEDEXIsNull field.
   */
  public void setCEDEXIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CEDEXISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the City field.
   */
  public void setCity(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityIsNull field.
   */
  public void setCityIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CITYISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityKanji field.
   */
  public void setCityKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityKanjiIsNull field.
   */
  public void setCityKanjiIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CITYKANJIISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(typekey.Country value) {
    __getInternalInterface().setFieldValue(COUNTRY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CountryIsNull field.
   */
  public void setCountryIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(COUNTRYISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the County field.
   */
  public void setCounty(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COUNTY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CountyIsNull field.
   */
  public void setCountyIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(COUNTYISNULL_PROP.get(), value);
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
   * Sets the value of the DescriptionIsNull field.
   */
  public void setDescriptionIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DESCRIPTIONISNULL_PROP.get(), value);
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
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value) {
    __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
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
   * Sets the value of the PendingUpdateTime field.
   */
  public void setPendingUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(PENDINGUPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCode field.
   */
  public void setPostalCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCodeIsNull field.
   */
  public void setPostalCodeIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(POSTALCODEISNULL_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.State value) {
    __getInternalInterface().setFieldValue(STATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StateIsNull field.
   */
  public void setStateIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(STATEISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TargetAddress field.
   */
  public void setTargetAddress(entity.Address value) {
    __getInternalInterface().setFieldValue(TARGETADDRESS_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PendingAddressUpdateInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PendingAddressUpdate.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void applyUpdate() {
      ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).applyUpdate();
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
     * Gets the value of the AddressLine1 field.
     * Address Line 1.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine1Kanji field.
     * Address Line 1 Kanji.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1Kanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2 field.
     * Address Line 2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2Kanji field.
     * Address Line 2 Kanji.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2Kanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine3 field.
     * Address Line 3
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine3() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE3_PROP.get());
    }
    
    /**
     * Gets the value of the AddressType field.
     * Type of this address record.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AddressType getAddressType() {
      return (typekey.AddressType)__getInternalInterface().getFieldValue(ADDRESSTYPE_PROP.get());
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
     * Gets the value of the CEDEXBureau field.
     * CEDEX: Special business mail delivery bureau (France)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCEDEXBureau() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CEDEXBUREAU_PROP.get());
    }
    
    /**
     * Gets the value of the City field.
     * City.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCity() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITY_PROP.get());
    }
    
    /**
     * Gets the value of the CityKanji field.
     * City Kanji
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the Country field.
     * Country.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Country getCountry() {
      return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRY_PROP.get());
    }
    
    /**
     * Gets the value of the County field.
     * County.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCounty() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COUNTY_PROP.get());
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
     * Address Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    public java.util.Date getExecuteTime() {
      return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getExecuteTime();
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
     * Gets the value of the Job field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job getJob() {
      return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getJobID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(JOB_PROP.get());
    }
    
    /**
     * Gets the value of the PendingUpdateTime field.
     * The time when this pending update should be applied to the target entity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getPendingUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(PENDINGUPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the PostalCode field.
     * Postal code; string to handle Zip+4 and international codes.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the State field.
     * State.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getState() {
      return (typekey.State)__getInternalInterface().getFieldValue(STATE_PROP.get());
    }
    
    public entity.KeyableBean getTarget() {
      return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getTarget();
    }
    
    /**
     * Gets the value of the TargetAddress field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Address getTargetAddress() {
      return (entity.Address)__getInternalInterface().getFieldValue(TARGETADDRESS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getTargetAddressID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(TARGETADDRESS_PROP.get());
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
     * Gets the value of the AddressLine1IsNull field.
     * True if Address Line 1 should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAddressLine1IsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE1ISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine1KanjiIsNull field.
     * True if Address Line 1 Kanji should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAddressLine1KanjiIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE1KANJIISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2IsNull field.
     * True if Address Line 2 should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAddressLine2IsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE2ISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2KanjiIsNull field.
     * True if Address Line 2 Kanji should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAddressLine2KanjiIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE2KANJIISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine3IsNull field.
     * True if Address Line 3 should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAddressLine3IsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSLINE3ISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressTypeIsNull field.
     * True if AddressType should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAddressTypeIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ADDRESSTYPEISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the CEDEX field.
     * CEDEX: Special business mail delivery flag (France)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCEDEX() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEX_PROP.get());
    }
    
    /**
     * Gets the value of the CEDEXBureauIsNull field.
     * True if CEDEX Bureau should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCEDEXBureauIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEXBUREAUISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the CEDEXIsNull field.
     * True if CEDEX should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCEDEXIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEXISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the CityIsNull field.
     * True if City should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCityIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CITYISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the CityKanjiIsNull field.
     * True if City Kanji should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCityKanjiIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CITYKANJIISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the CountryIsNull field.
     * True if Country should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCountryIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(COUNTRYISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the CountyIsNull field.
     * True if County should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCountyIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(COUNTYISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the DescriptionIsNull field.
     * True if Description should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDescriptionIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DESCRIPTIONISNULL_PROP.get());
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
     * Gets the value of the PostalCodeIsNull field.
     * True if PostalCode should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPostalCodeIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(POSTALCODEISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the StateIsNull field.
     * True if the State should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isStateIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(STATEISNULL_PROP.get());
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
     * Sets the value of the AddressLine1 field.
     */
    public void setAddressLine1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1IsNull field.
     */
    public void setAddressLine1IsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ADDRESSLINE1ISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1Kanji field.
     */
    public void setAddressLine1Kanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1KanjiIsNull field.
     */
    public void setAddressLine1KanjiIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ADDRESSLINE1KANJIISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2 field.
     */
    public void setAddressLine2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2IsNull field.
     */
    public void setAddressLine2IsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ADDRESSLINE2ISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2Kanji field.
     */
    public void setAddressLine2Kanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2KanjiIsNull field.
     */
    public void setAddressLine2KanjiIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ADDRESSLINE2KANJIISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine3 field.
     */
    public void setAddressLine3(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine3IsNull field.
     */
    public void setAddressLine3IsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ADDRESSLINE3ISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressType field.
     */
    public void setAddressType(typekey.AddressType value) {
      __getInternalInterface().setFieldValue(ADDRESSTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressTypeIsNull field.
     */
    public void setAddressTypeIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ADDRESSTYPEISNULL_PROP.get(), value);
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
     * Sets the value of the CEDEX field.
     */
    public void setCEDEX(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CEDEX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CEDEXBureau field.
     */
    public void setCEDEXBureau(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CEDEXBUREAU_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CEDEXBureauIsNull field.
     */
    public void setCEDEXBureauIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CEDEXBUREAUISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CEDEXIsNull field.
     */
    public void setCEDEXIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CEDEXISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the City field.
     */
    public void setCity(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityIsNull field.
     */
    public void setCityIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CITYISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityKanji field.
     */
    public void setCityKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityKanjiIsNull field.
     */
    public void setCityKanjiIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CITYKANJIISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Country field.
     */
    public void setCountry(typekey.Country value) {
      __getInternalInterface().setFieldValue(COUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CountryIsNull field.
     */
    public void setCountryIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(COUNTRYISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the County field.
     */
    public void setCounty(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COUNTY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CountyIsNull field.
     */
    public void setCountyIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(COUNTYISNULL_PROP.get(), value);
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
     * Sets the value of the DescriptionIsNull field.
     */
    public void setDescriptionIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DESCRIPTIONISNULL_PROP.get(), value);
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
     * Sets the value of the Job field.
     */
    public void setJob(entity.Job value) {
      __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setJobID(gw.pl.persistence.core.Key value) {
      setFieldValue(JOB_PROP.get(), value);
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
     * Sets the value of the PendingUpdateTime field.
     */
    public void setPendingUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(PENDINGUPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PostalCode field.
     */
    public void setPostalCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PostalCodeIsNull field.
     */
    public void setPostalCodeIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(POSTALCODEISNULL_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the State field.
     */
    public void setState(typekey.State value) {
      __getInternalInterface().setFieldValue(STATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StateIsNull field.
     */
    public void setStateIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(STATEISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TargetAddress field.
     */
    public void setTargetAddress(entity.Address value) {
      __getInternalInterface().setFieldValue(TARGETADDRESS_PROP.get(), value);
    }
    
    public void setTargetAddressID(gw.pl.persistence.core.Key value) {
      setFieldValue(TARGETADDRESS_PROP.get(), value);
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
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.api.domain.account.PendingUpdate", "gw.account.PendingAddressUpdateAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PendingAddressUpdate.class, config);
    com.guidewire._generated.entity.PendingAddressUpdateInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PendingAddressUpdate, com.guidewire._generated.entity.PendingAddressUpdateInternal>() {
      public java.lang.Object getImplementation(entity.PendingAddressUpdate bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PendingAddressUpdateInternal getInternalInterface(entity.PendingAddressUpdate bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PendingAddressUpdate newEmptyInstance() {
        return new entity.PendingAddressUpdate((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}