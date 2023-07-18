package entity;

/**
 * Address
 * <p>Represents a street or mailing address. Addresses are normally associated with
 *       a <code>Contact</code>, either as a <code>Contact.PrimaryAddress</code> or via the <code>ContactAddress</code> table.
 *       Addresses can have geographic location information stored for proximity searches.</p>
 *       {@link com.guidewire.pl.domain.contact.Contact}
 *       {@link com.guidewire.pl.domain.contact.ContactAddress}
 *     
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Address.eti;Address.eix;Address.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Address")
public class Address extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.AddressAutofillable, entity.AddressBookLinkable, entity.Extractable, entity.OverlapTable, entity.Referenceable, entity.Obfuscatable, gw.api.domain.archiving.MergeableReferenceable, gw.api.obfuscation.Obfuscator {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Address> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Address>("entity.Address");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSBOOKUID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressBookUID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1KANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1Kanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2KANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2Kanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE3_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine3");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ADDRESSTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AddressType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BATCHGEOCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BatchGeocode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEX_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEX");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEXBUREAU_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEXBureau");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "City");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COUNTRY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Country");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "County");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXTERNALID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExternalID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> GEOCODESTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "GeocodeStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LINKEDADDRESS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LinkedAddress");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OBFUSCATEDINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ObfuscatedInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCodeDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Referenced");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> REPLACES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Replaces");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPATIALPOINT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SpatialPoint");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "State");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEMPORARYLASTUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TemporaryLastUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VALIDUNTIL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ValidUntil");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.AddressInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public Address()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public Address(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected Address(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.AddressInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.AddressInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the Replaces array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToReplaces(entity.AddressReplacement element) {
    __getInternalInterface().addArrayElement(REPLACES_PROP.get(), element);
  }
  
  public boolean canRemove() {
    return ((com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods")).canRemove();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public entity.KeyableBean findMergeReplacement() {
    return ((gw.api.domain.archiving.MergeableReferenceable)__getDelegateManager().getImplementation("gw.api.domain.archiving.MergeableReferenceable")).findMergeReplacement();
  }
  
  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * @return true, if there is location information.
   */
  public entity.Address geocodeSynchronously() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).geocodeSynchronously();
  }
  
  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * @return true, if there is location information.
   */
  public entity.Address geocodeSynchronouslyIfNecessary() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).geocodeSynchronouslyIfNecessary();
  }
  
  /**
   * Gets the value of the AddressBookUID field.
   * The system uses this value when it is integrated with ContactManager and the related contact is linked.  In this case, the ID represents the ID of the corresponding entity in ContactManager. This value is null if the object is not linked.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressBookUID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSBOOKUID_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine1 field.
   * First line of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine1Kanji field.
   * First line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1Kanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2 field.
   * Second line of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2Kanji field.
   * Second line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2Kanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine3 field.
   * Third line of mailing address.
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
   * CEDEX: Special business mail delivery bureau (used only for French addresses and will be null otherwise)
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the CityKanji field.
   * City in kanji (used only for Japanese addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJI_PROP.get());
  }
  
  /**
   * Returns City, State and ZIP in the standard "city, state ZIP" format
   * @return City, State and ZIP in the standard "city, state ZIP" format
   */
  public java.lang.String getCityStateZip() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getCityStateZip();
  }
  
  /**
   * This gets a list of addresses which could match the provided address.
   * The first result in the list is used as the best match found.  This caps the number of results found.
   * <p/>
   * You can check if this is supported with a call to GeocodeUtils.currentPluginSupportsMultipleCorrections()
   * @throws RemoteException if there is a problem connecting to the datasource.
   * @return A list of addresses.  The first result returned will be the best match available.
   */
  public java.util.List<entity.Address> getCorrectionsFromGeocodingPlugin() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getCorrectionsFromGeocodingPlugin();
  }
  
  /**
   * This gets a list of addresses which could match the provided address.
   * The first result in the list is used as the best match found.  This caps the number of results found.
   * <p/>
   * Note that this DOES NOT modify the original address; if you want to use this in lieu of regular geocoding
   * (ie geocodeSynchronously) you will have to copy over SpatialPoint and GeocodeStatus from the
   * selected match.
   * <p/>
   * You can check if this is supported with a call to GeocodeUtils.currentPluginSupportsMultipleCorrections()
   * @param maxResults the maximum number of results to return, if a positive/non-zero integer.  Returns all results if zero or negative.
   * @throws RemoteException if there is a problem connecting to the datasource.
   * @return A list of addresses.  The first result returned will be the best match available.
   */
  public java.util.List<entity.Address> getCorrectionsFromGeocodingPlugin(int maxResults) {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getCorrectionsFromGeocodingPlugin(maxResults);
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
   * Additional description of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the great circle distance to this address from a given point, given in millimeters.
   * @param origin an Address representing the origin point to get distance from
   * @return the distance in millimeters
   */
  public long getDistanceFrom(entity.Address origin) {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFrom(origin);
  }
  
  /**
   * Gets the great circle distance to this address from a given point, given in millimeters.
   * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
   * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
   * @return the distance in millimeters
   */
  public long getDistanceFrom(java.math.BigDecimal latitude, java.math.BigDecimal longitude) {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFrom(latitude, longitude);
  }
  
  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
   * where the unit is the system default unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   * @param origin an Address representing the origin point to get distance from
   * @return the distance as a human-readable string
   */
  public java.lang.String getDistanceFromAsString(entity.Address origin) {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(origin);
  }
  
  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
   * where the unit is determined by the given unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   * @param origin an Address representing the origin point to get distance from
   * @param unit a unit of distance: either UnitOfDistance.TC_MILES or UnitOfDistance.TC_KILOMETERS
   * @return the distance as a human-readable string
   */
  public java.lang.String getDistanceFromAsString(entity.Address origin, typekey.UnitOfDistance unit) {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(origin, unit);
  }
  
  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
   * where the unit is the system default unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
   * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
   * @return the distance as a human-readable string
   */
  public java.lang.String getDistanceFromAsString(java.math.BigDecimal latitude, java.math.BigDecimal longitude) {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(latitude, longitude);
  }
  
  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
   * where the unit is determined by the given unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
   * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
   * @param unit a unit of distance: either UnitOfDistance.TC_MILES or UnitOfDistance.TC_KILOMETERS
   * @return the distance as a human-readable string
   */
  public java.lang.String getDistanceFromAsString(java.math.BigDecimal latitude, java.math.BigDecimal longitude, typekey.UnitOfDistance unit) {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(latitude, longitude, unit);
  }
  
  /**
   * Gets the value of the ExternalID field.
   * Application assigned ID used as ABUID when ABUID is null
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExternalID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXTERNALID_PROP.get());
  }
  
  /**
   * Gets the value of the GeocodeStatus field.
   * Enum giving the status of the latitude and longitude data.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GeocodeStatus getGeocodeStatus() {
    return (typekey.GeocodeStatus)__getInternalInterface().getFieldValue(GEOCODESTATUS_PROP.get());
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
  
  /**
   * Latitude expressed in degrees.  Positive = North; Negative = South: -90 <= x <= 90
   */
  public java.math.BigDecimal getLatitude() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getLatitude();
  }
  
  /**
   * Gets the value of the LinkedAddress field.
   * A potential link to a group of addresses
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LinkedAddress getLinkedAddress() {
    return (entity.LinkedAddress)__getInternalInterface().getFieldValue(LINKEDADDRESS_PROP.get());
  }
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
  }
  
  /**
   * Longitude expressed in degrees relative to the prime meridian.  Positive = East; Negative = West: -180 <= x < 180
   */
  public java.math.BigDecimal getLongitude() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getLongitude();
  }
  
  /**
   * Gets a URL to a map showing this address. If not supported by
   * the current geocode plugin, returns null.  Uses the system-default
   * unit of distance.
   * @throws java.rmi.RemoteException if an error occurs in contacting the geocoding provider
   * @return the MapImageUrl of the map
   */
  public gw.api.contact.MapImageUrl getMap() throws java.rmi.RemoteException {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getMap();
  }
  
  /**
   * Gets a URL to a map showing this address. If not supported by
   * the current geocode plugin, returns null.
   * @param unit a UnitOfDistance indicating whether to show miles or kilometers on the map
   * @throws java.rmi.RemoteException if an error occurs in contacting the geocoding provider
   * @return the MapImageUrl of the map
   */
  public gw.api.contact.MapImageUrl getMap(typekey.UnitOfDistance unit) throws java.rmi.RemoteException {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getMap(unit);
  }
  
  /**
   * Gets the value of the PostalCode field.
   * Postal code; string to handle Zip+4 and international codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEDENORM_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  public entity.PolicyAddress[] getReferencingPolicyAddresses() {
    return ((com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods")).getReferencingPolicyAddresses();
  }
  
  /**
   * Gets the value of the Replaces field.
   * The Addresses that this Address has replaced through merges
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AddressReplacement[] getReplaces() {
    return (entity.AddressReplacement[])__getInternalInterface().getFieldValue(REPLACES_PROP.get());
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
   * Gets the value of the SpatialPoint field.
   * Latitude and longitude of this address, represented as an instance of SpatialPoint.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.database.spatial.SpatialPoint getSpatialPoint() {
    return (gw.api.database.spatial.SpatialPoint)__getInternalInterface().getFieldValue(SPATIALPOINT_PROP.get());
  }
  
  /**
   * Gets the value of the State field.
   * State.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getState() {
    return (typekey.State)__getInternalInterface().getFieldValue(STATE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Address getSubtype() {
    return (typekey.Address)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
  
  /**
   * Gets the value of the ValidUntil field.
   * Latest date that this address is valid.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getValidUntil() {
    return (java.util.Date)__getInternalInterface().getFieldValue(VALIDUNTIL_PROP.get());
  }
  
  /**
   * Checks if the location information (SpatialPoint and GeocodeStatus) has been successfully set.
   * @return true, if there is location information.
   */
  public java.lang.Boolean hasLocationInformation() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).hasLocationInformation();
  }
  
  /**
   * Gets the value of the BatchGeocode field.
   * Boolean field to mark an address to be geocoded (if needed) by the batch geocoding work queue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBatchGeocode() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(BATCHGEOCODE_PROP.get());
  }
  
  /**
   * Gets the value of the CEDEX field.
   * CEDEX: Special business mail delivery flag (used only for French addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEX() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEX_PROP.get());
  }
  
  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * @return true, if there is location information.
   */
  public boolean isFailureGeocoding() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).isFailureGeocoding();
  }
  
  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * @return true, if there is location information.
   */
  public boolean isNeverGeocoded() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).isNeverGeocoded();
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
  
  public boolean isObfuscated() {
    return ((gw.api.obfuscation.ObfuscatablePublicMethods)__getDelegateManager().getImplementation("gw.api.obfuscation.ObfuscatablePublicMethods")).isObfuscated();
  }
  
  /**
   * Gets the value of the ObfuscatedInternal field.
   * Flag to let us know if the bean has been obfuscated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isObfuscatedInternal() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(OBFUSCATEDINTERNAL_PROP.get());
  }
  
  /**
   * Gets the value of the Referenced field.
   * Whether or not this entity is Referenced.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isReferenced() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(REFERENCED_PROP.get());
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
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * @return true, if there is location information.
   */
  public boolean isSuccessfullyGeocoded() {
    return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).isSuccessfullyGeocoded();
  }
  
  public void markAsObfuscated() {
    ((gw.api.obfuscation.ObfuscatablePublicMethods)__getDelegateManager().getImplementation("gw.api.obfuscation.ObfuscatablePublicMethods")).markAsObfuscated();
  }
  
  /**
   * Merges the reference tracking for another Referenceable into this Referenceable.  If the Referenced bit
   * is set for the merged bean, the bit is set for the this Referenceable; then the Referenced bit is disabled for
   * the merged bean (so it can be removed/retired as part of the merge)
   * @param mergedReference the Referenceable being merged into this one
   */
  public void mergeReferenceWith(entity.Referenceable mergedReference) {
    ((com.guidewire.pc.domain.archiving.ReferenceablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.archiving.ReferenceablePublicMethods")).mergeReferenceWith(mergedReference);
  }
  
  public void obfuscate() {
    ((gw.api.obfuscation.Obfuscator)__getDelegateManager().getImplementation("gw.api.obfuscation.Obfuscator")).obfuscate();
  }
  
  public void obfuscateSimple() {
    ((gw.api.obfuscation.Obfuscator)__getDelegateManager().getImplementation("gw.api.obfuscation.Obfuscator")).obfuscateSimple();
  }
  
  /**
   * Records that this Referenceable is now referenced by a relatively permanent Foreign Key, and that that
   * reference is permanent enough that this entity should probably not be removed/retired.
   */
  public void recordReference() {
    ((com.guidewire.pc.domain.archiving.ReferenceablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.archiving.ReferenceablePublicMethods")).recordReference();
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
   * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromReplaces(entity.AddressReplacement element) {
    __getInternalInterface().removeArrayElement(REPLACES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromReplaces(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(REPLACES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AddressBookUID field.
   */
  public void setAddressBookUID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSBOOKUID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1 field.
   */
  public void setAddressLine1(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1Kanji field.
   */
  public void setAddressLine1Kanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2 field.
   */
  public void setAddressLine2(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2Kanji field.
   */
  public void setAddressLine2Kanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine3 field.
   */
  public void setAddressLine3(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressType field.
   */
  public void setAddressType(typekey.AddressType value) {
    __getInternalInterface().setFieldValue(ADDRESSTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BatchGeocode field.
   */
  public void setBatchGeocode(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(BATCHGEOCODE_PROP.get(), value);
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
   * Sets the value of the City field.
   */
  public void setCity(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityDenorm field.
   */
  private void setCityDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityKanji field.
   */
  public void setCityKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(typekey.Country value) {
    __getInternalInterface().setFieldValue(COUNTRY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the County field.
   */
  public void setCounty(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COUNTY_PROP.get(), value);
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
   * Sets the value of the ExternalID field.
   */
  public void setExternalID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXTERNALID_PROP.get(), value);
  }
  
  /**
   * Takes a Latitude and Longitude pair, and sets the SpatialPoint and GeocodeStatus based on them.
   * @param latitude the Latitude
   * @param longitude the Longitude
   */
  public void setGeocodeFieldsFromLatLong(java.math.BigDecimal latitude, java.math.BigDecimal longitude) {
    ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).setGeocodeFieldsFromLatLong(latitude, longitude);
  }
  
  /**
   * Takes a SpatialPoint, and sets the SpatialPoint and GeocodeStatus based on them.
   * @param spatialPoint the SpatialPoint
   */
  public void setGeocodeFieldsFromSpatialPoint(gw.api.database.spatial.SpatialPoint spatialPoint) {
    ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).setGeocodeFieldsFromSpatialPoint(spatialPoint);
  }
  
  /**
   * Sets the value of the GeocodeStatus field.
   */
  public void setGeocodeStatus(typekey.GeocodeStatus value) {
    __getInternalInterface().setFieldValue(GEOCODESTATUS_PROP.get(), value);
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
   * Sets the value of the LinkedAddress field.
   */
  public void setLinkedAddress(entity.LinkedAddress value) {
    __getInternalInterface().setFieldValue(LINKEDADDRESS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
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
   * Sets the value of the ObfuscatedInternal field.
   */
  private void setObfuscatedInternal(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(OBFUSCATEDINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCode field.
   */
  public void setPostalCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCodeDenorm field.
   */
  private void setPostalCodeDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODEDENORM_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Referenced field.
   */
  private void setReferenced(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(REFERENCED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Replaces field.
   */
  private void setReplaces(entity.AddressReplacement[] value) {
    __getInternalInterface().setFieldValue(REPLACES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SpatialPoint field.
   */
  public void setSpatialPoint(gw.api.database.spatial.SpatialPoint value) {
    __getInternalInterface().setFieldValue(SPATIALPOINT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.State value) {
    __getInternalInterface().setFieldValue(STATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.Address value) {
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
   * Sets the value of the ValidUntil field.
   */
  public void setValidUntil(java.util.Date value) {
    __getInternalInterface().setFieldValue(VALIDUNTIL_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.AddressInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Address.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the Replaces array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToReplaces(entity.AddressReplacement element) {
      __getInternalInterface().addArrayElement(REPLACES_PROP.get(), element);
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
    
    public boolean canRemove() {
      return ((com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods")).canRemove();
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
    
    public entity.KeyableBean findMergeReplacement() {
      return ((gw.api.domain.archiving.MergeableReferenceable)__getDelegateManager().getImplementation("gw.api.domain.archiving.MergeableReferenceable")).findMergeReplacement();
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
    
    public void geocodeForProximitySearch() {
      ((com.guidewire.pl.domain.contact.impl.AddressInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.AddressInternalMethods")).geocodeForProximitySearch();
    }
    
    /**
     * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
     * @return true, if there is location information.
     */
    public entity.Address geocodeSynchronously() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).geocodeSynchronously();
    }
    
    /**
     * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
     * @return true, if there is location information.
     */
    public entity.Address geocodeSynchronouslyIfNecessary() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).geocodeSynchronouslyIfNecessary();
    }
    
    /**
     * Gets the value of the AddressBookUID field.
     * The system uses this value when it is integrated with ContactManager and the related contact is linked.  In this case, the ID represents the ID of the corresponding entity in ContactManager. This value is null if the object is not linked.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressBookUID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSBOOKUID_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine1 field.
     * First line of mailing address.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine1Kanji field.
     * First line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1Kanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2 field.
     * Second line of mailing address.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2Kanji field.
     * Second line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2Kanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine3 field.
     * Third line of mailing address.
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
     * CEDEX: Special business mail delivery bureau (used only for French addresses and will be null otherwise)
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
     * Gets the value of the CityDenorm field.
     * denorm field for City
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the CityKanji field.
     * City in kanji (used only for Japanese addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJI_PROP.get());
    }
    
    /**
     * Returns City, State and ZIP in the standard "city, state ZIP" format
     * @return City, State and ZIP in the standard "city, state ZIP" format
     */
    public java.lang.String getCityStateZip() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getCityStateZip();
    }
    
    /**
     * This gets a list of addresses which could match the provided address.
     * The first result in the list is used as the best match found.  This caps the number of results found.
     * <p/>
     * You can check if this is supported with a call to GeocodeUtils.currentPluginSupportsMultipleCorrections()
     * @throws RemoteException if there is a problem connecting to the datasource.
     * @return A list of addresses.  The first result returned will be the best match available.
     */
    public java.util.List<entity.Address> getCorrectionsFromGeocodingPlugin() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getCorrectionsFromGeocodingPlugin();
    }
    
    /**
     * This gets a list of addresses which could match the provided address.
     * The first result in the list is used as the best match found.  This caps the number of results found.
     * <p/>
     * Note that this DOES NOT modify the original address; if you want to use this in lieu of regular geocoding
     * (ie geocodeSynchronously) you will have to copy over SpatialPoint and GeocodeStatus from the
     * selected match.
     * <p/>
     * You can check if this is supported with a call to GeocodeUtils.currentPluginSupportsMultipleCorrections()
     * @param maxResults the maximum number of results to return, if a positive/non-zero integer.  Returns all results if zero or negative.
     * @throws RemoteException if there is a problem connecting to the datasource.
     * @return A list of addresses.  The first result returned will be the best match available.
     */
    public java.util.List<entity.Address> getCorrectionsFromGeocodingPlugin(int maxResults) {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getCorrectionsFromGeocodingPlugin(maxResults);
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
     * Additional description of mailing address.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the great circle distance to this address from a given point, given in millimeters.
     * @param origin an Address representing the origin point to get distance from
     * @return the distance in millimeters
     */
    public long getDistanceFrom(entity.Address origin) {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFrom(origin);
    }
    
    /**
     * Gets the great circle distance to this address from a given point, given in millimeters.
     * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
     * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
     * @return the distance in millimeters
     */
    public long getDistanceFrom(java.math.BigDecimal latitude, java.math.BigDecimal longitude) {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFrom(latitude, longitude);
    }
    
    /**
     * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
     * where the unit is the system default unit of distance.  Always provided to an accuracy of 1/10th of a unit.
     * @param origin an Address representing the origin point to get distance from
     * @return the distance as a human-readable string
     */
    public java.lang.String getDistanceFromAsString(entity.Address origin) {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(origin);
    }
    
    /**
     * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
     * where the unit is determined by the given unit of distance.  Always provided to an accuracy of 1/10th of a unit.
     * @param origin an Address representing the origin point to get distance from
     * @param unit a unit of distance: either UnitOfDistance.TC_MILES or UnitOfDistance.TC_KILOMETERS
     * @return the distance as a human-readable string
     */
    public java.lang.String getDistanceFromAsString(entity.Address origin, typekey.UnitOfDistance unit) {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(origin, unit);
    }
    
    /**
     * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
     * where the unit is the system default unit of distance.  Always provided to an accuracy of 1/10th of a unit.
     * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
     * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
     * @return the distance as a human-readable string
     */
    public java.lang.String getDistanceFromAsString(java.math.BigDecimal latitude, java.math.BigDecimal longitude) {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(latitude, longitude);
    }
    
    /**
     * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
     * where the unit is determined by the given unit of distance.  Always provided to an accuracy of 1/10th of a unit.
     * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
     * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
     * @param unit a unit of distance: either UnitOfDistance.TC_MILES or UnitOfDistance.TC_KILOMETERS
     * @return the distance as a human-readable string
     */
    public java.lang.String getDistanceFromAsString(java.math.BigDecimal latitude, java.math.BigDecimal longitude, typekey.UnitOfDistance unit) {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getDistanceFromAsString(latitude, longitude, unit);
    }
    
    /**
     * Gets the value of the ExternalID field.
     * Application assigned ID used as ABUID when ABUID is null
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExternalID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXTERNALID_PROP.get());
    }
    
    /**
     * Gets the value of the GeocodeStatus field.
     * Enum giving the status of the latitude and longitude data.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.GeocodeStatus getGeocodeStatus() {
      return (typekey.GeocodeStatus)__getInternalInterface().getFieldValue(GEOCODESTATUS_PROP.get());
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
    
    /**
     * Latitude expressed in degrees.  Positive = North; Negative = South: -90 <= x <= 90
     */
    public java.math.BigDecimal getLatitude() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getLatitude();
    }
    
    /**
     * Gets the value of the LinkedAddress field.
     * A potential link to a group of addresses
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LinkedAddress getLinkedAddress() {
      return (entity.LinkedAddress)__getInternalInterface().getFieldValue(LINKEDADDRESS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLinkedAddressID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LINKEDADDRESS_PROP.get());
    }
    
    /**
     * Gets the value of the LoadCommandID field.
     * LoadCommand for load where row was created. If not null this object was loaded via the loader.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLoadCommandID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
    }
    
    /**
     * Longitude expressed in degrees relative to the prime meridian.  Positive = East; Negative = West: -180 <= x < 180
     */
    public java.math.BigDecimal getLongitude() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getLongitude();
    }
    
    /**
     * Gets a URL to a map showing this address. If not supported by
     * the current geocode plugin, returns null.  Uses the system-default
     * unit of distance.
     * @throws java.rmi.RemoteException if an error occurs in contacting the geocoding provider
     * @return the MapImageUrl of the map
     */
    public gw.api.contact.MapImageUrl getMap() throws java.rmi.RemoteException {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getMap();
    }
    
    /**
     * Gets a URL to a map showing this address. If not supported by
     * the current geocode plugin, returns null.
     * @param unit a UnitOfDistance indicating whether to show miles or kilometers on the map
     * @throws java.rmi.RemoteException if an error occurs in contacting the geocoding provider
     * @return the MapImageUrl of the map
     */
    public gw.api.contact.MapImageUrl getMap(typekey.UnitOfDistance unit) throws java.rmi.RemoteException {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).getMap(unit);
    }
    
    /**
     * Gets the value of the PostalCode field.
     * Postal code; string to handle Zip+4 and international codes.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODE_PROP.get());
    }
    
    /**
     * Gets the value of the PostalCodeDenorm field.
     * denorm field for PostalCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCodeDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEDENORM_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    public entity.PolicyAddress[] getReferencingPolicyAddresses() {
      return ((com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods")).getReferencingPolicyAddresses();
    }
    
    /**
     * Gets the value of the Replaces field.
     * The Addresses that this Address has replaced through merges
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AddressReplacement[] getReplaces() {
      return (entity.AddressReplacement[])__getInternalInterface().getFieldValue(REPLACES_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the SpatialPoint field.
     * Latitude and longitude of this address, represented as an instance of SpatialPoint.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.api.database.spatial.SpatialPoint getSpatialPoint() {
      return (gw.api.database.spatial.SpatialPoint)__getInternalInterface().getFieldValue(SPATIALPOINT_PROP.get());
    }
    
    public java.lang.String getStandardizedString() {
      return ((com.guidewire.pl.domain.contact.impl.AddressInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.AddressInternalMethods")).getStandardizedString();
    }
    
    /**
     * Gets the value of the State field.
     * State.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getState() {
      return (typekey.State)__getInternalInterface().getFieldValue(STATE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Address getSubtype() {
      return (typekey.Address)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
    
    /**
     * Gets the value of the ValidUntil field.
     * Latest date that this address is valid.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getValidUntil() {
      return (java.util.Date)__getInternalInterface().getFieldValue(VALIDUNTIL_PROP.get());
    }
    
    /**
     * Checks if the location information (SpatialPoint and GeocodeStatus) has been successfully set.
     * @return true, if there is location information.
     */
    public java.lang.Boolean hasLocationInformation() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).hasLocationInformation();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the BatchGeocode field.
     * Boolean field to mark an address to be geocoded (if needed) by the batch geocoding work queue.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBatchGeocode() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BATCHGEOCODE_PROP.get());
    }
    
    /**
     * Gets the value of the CEDEX field.
     * CEDEX: Special business mail delivery flag (used only for French addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCEDEX() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEX_PROP.get());
    }
    
    /**
     * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
     * @return true, if there is location information.
     */
    public boolean isFailureGeocoding() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).isFailureGeocoding();
    }
    
    /**
     * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
     * @return true, if there is location information.
     */
    public boolean isNeverGeocoded() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).isNeverGeocoded();
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
    
    public boolean isObfuscated() {
      return ((gw.api.obfuscation.ObfuscatablePublicMethods)__getDelegateManager().getImplementation("gw.api.obfuscation.ObfuscatablePublicMethods")).isObfuscated();
    }
    
    /**
     * Gets the value of the ObfuscatedInternal field.
     * Flag to let us know if the bean has been obfuscated.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isObfuscatedInternal() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(OBFUSCATEDINTERNAL_PROP.get());
    }
    
    public boolean isObfuscatingNow() {
      return ((com.guidewire.pl.domain.obfuscation.ObfuscatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.obfuscation.ObfuscatableInternalMethods")).isObfuscatingNow();
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Gets the value of the Referenced field.
     * Whether or not this entity is Referenced.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isReferenced() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(REFERENCED_PROP.get());
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
     * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
     * @return true, if there is location information.
     */
    public boolean isSuccessfullyGeocoded() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).isSuccessfullyGeocoded();
    }
    
    public boolean isSufficientlyCompleteToGeocode() {
      return ((com.guidewire.pl.domain.contact.impl.AddressInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.impl.AddressInternalMethods")).isSufficientlyCompleteToGeocode();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public void markAsObfuscated() {
      ((gw.api.obfuscation.ObfuscatablePublicMethods)__getDelegateManager().getImplementation("gw.api.obfuscation.ObfuscatablePublicMethods")).markAsObfuscated();
    }
    
    /**
     * Merges the reference tracking for another Referenceable into this Referenceable.  If the Referenced bit
     * is set for the merged bean, the bit is set for the this Referenceable; then the Referenced bit is disabled for
     * the merged bean (so it can be removed/retired as part of the merge)
     * @param mergedReference the Referenceable being merged into this one
     */
    public void mergeReferenceWith(entity.Referenceable mergedReference) {
      ((com.guidewire.pc.domain.archiving.ReferenceablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.archiving.ReferenceablePublicMethods")).mergeReferenceWith(mergedReference);
    }
    
    public void obfuscate() {
      ((gw.api.obfuscation.Obfuscator)__getDelegateManager().getImplementation("gw.api.obfuscation.Obfuscator")).obfuscate();
    }
    
    public void obfuscateSimple() {
      ((gw.api.obfuscation.Obfuscator)__getDelegateManager().getImplementation("gw.api.obfuscation.Obfuscator")).obfuscateSimple();
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
     * Records that this Referenceable is now referenced by a relatively permanent Foreign Key, and that that
     * reference is permanent enough that this entity should probably not be removed/retired.
     */
    public void recordReference() {
      ((com.guidewire.pc.domain.archiving.ReferenceablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.archiving.ReferenceablePublicMethods")).recordReference();
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
     * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
     */
    public void removeFromReplaces(entity.AddressReplacement element) {
      __getInternalInterface().removeArrayElement(REPLACES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromReplaces(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(REPLACES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AddressBookUID field.
     */
    public void setAddressBookUID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSBOOKUID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1 field.
     */
    public void setAddressLine1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1Kanji field.
     */
    public void setAddressLine1Kanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2 field.
     */
    public void setAddressLine2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2Kanji field.
     */
    public void setAddressLine2Kanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine3 field.
     */
    public void setAddressLine3(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressType field.
     */
    public void setAddressType(typekey.AddressType value) {
      __getInternalInterface().setFieldValue(ADDRESSTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BatchGeocode field.
     */
    public void setBatchGeocode(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BATCHGEOCODE_PROP.get(), value);
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
     * Sets the value of the City field.
     */
    public void setCity(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityDenorm field.
     */
    public void setCityDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityKanji field.
     */
    public void setCityKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Country field.
     */
    public void setCountry(typekey.Country value) {
      __getInternalInterface().setFieldValue(COUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the County field.
     */
    public void setCounty(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COUNTY_PROP.get(), value);
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
     * Sets the value of the ExternalID field.
     */
    public void setExternalID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXTERNALID_PROP.get(), value);
    }
    
    /**
     * Takes a Latitude and Longitude pair, and sets the SpatialPoint and GeocodeStatus based on them.
     * @param latitude the Latitude
     * @param longitude the Longitude
     */
    public void setGeocodeFieldsFromLatLong(java.math.BigDecimal latitude, java.math.BigDecimal longitude) {
      ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).setGeocodeFieldsFromLatLong(latitude, longitude);
    }
    
    /**
     * Takes a SpatialPoint, and sets the SpatialPoint and GeocodeStatus based on them.
     * @param spatialPoint the SpatialPoint
     */
    public void setGeocodeFieldsFromSpatialPoint(gw.api.database.spatial.SpatialPoint spatialPoint) {
      ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).setGeocodeFieldsFromSpatialPoint(spatialPoint);
    }
    
    /**
     * Sets the value of the GeocodeStatus field.
     */
    public void setGeocodeStatus(typekey.GeocodeStatus value) {
      __getInternalInterface().setFieldValue(GEOCODESTATUS_PROP.get(), value);
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
     * Sets the value of the LinkedAddress field.
     */
    public void setLinkedAddress(entity.LinkedAddress value) {
      __getInternalInterface().setFieldValue(LINKEDADDRESS_PROP.get(), value);
    }
    
    public void setLinkedAddressID(gw.pl.persistence.core.Key value) {
      setFieldValue(LINKEDADDRESS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
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
     * Sets the value of the ObfuscatedInternal field.
     */
    public void setObfuscatedInternal(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(OBFUSCATEDINTERNAL_PROP.get(), value);
    }
    
    public void setObfuscatingNow(boolean arg0) {
      ((com.guidewire.pl.domain.obfuscation.ObfuscatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.obfuscation.ObfuscatableInternalMethods")).setObfuscatingNow(arg0);
    }
    
    /**
     * Sets the value of the PostalCode field.
     */
    public void setPostalCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PostalCodeDenorm field.
     */
    public void setPostalCodeDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODEDENORM_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the Referenced field.
     */
    public void setReferenced(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(REFERENCED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Replaces field.
     */
    public void setReplaces(entity.AddressReplacement[] value) {
      __getInternalInterface().setFieldValue(REPLACES_PROP.get(), value);
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
     * Sets the value of the SpatialPoint field.
     */
    public void setSpatialPoint(gw.api.database.spatial.SpatialPoint value) {
      __getInternalInterface().setFieldValue(SPATIALPOINT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the State field.
     */
    public void setState(typekey.State value) {
      __getInternalInterface().setFieldValue(STATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.Address value) {
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
     * Sets the value of the ValidUntil field.
     */
    public void setValidUntil(java.util.Date value) {
      __getInternalInterface().setFieldValue(VALIDUNTIL_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.archiving.ReferenceablePublicMethods", "com.guidewire.pc.domain.contact.impl.AddressCoreExtMethodsImpl");
    config.put("com.guidewire.pc.domain.archiving.impl.ReferenceableInternalMethods", "com.guidewire.pc.domain.contact.impl.AddressCoreExtMethodsImpl");
    config.put("com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods", "com.guidewire.pc.domain.contact.impl.AddressCoreExtMethodsImpl");
    config.put("com.guidewire.pl.domain.contact.AddressPublicMethods", "com.guidewire.pl.domain.contact.impl.AddressImpl");
    config.put("com.guidewire.pl.domain.contact.impl.AddressInternalMethods", "com.guidewire.pl.domain.contact.impl.AddressImpl");
    config.put("com.guidewire.pl.domain.obfuscation.ObfuscatableInternalMethods", "com.guidewire.pl.domain.obfuscation.ObfuscatableMethodsImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pl.domain.contact.impl.AddressImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pl.domain.contact.impl.AddressImpl");
    config.put("gw.api.address.AddressFillable", "com.guidewire.pl.domain.geodata.zone.impl.AddressAutofillableImpl");
    config.put("gw.api.domain.archiving.MergeableReferenceable", "gw.contact.AddressMergeableReferenceableImpl");
    config.put("gw.api.obfuscation.ObfuscatablePublicMethods", "com.guidewire.pl.domain.obfuscation.ObfuscatableMethodsImpl");
    config.put("gw.api.obfuscation.Obfuscator", "gw.api.obfuscation.UnsupportedObfuscator");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Address.class, config);
    com.guidewire._generated.entity.AddressInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Address, com.guidewire._generated.entity.AddressInternal>() {
      public java.lang.Object getImplementation(entity.Address bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.AddressInternal getInternalInterface(entity.Address bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Address newEmptyInstance() {
        return new entity.Address((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}