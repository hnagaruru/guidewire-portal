package entity;

/**
 * AccountLocation
 * Cross policy locations information in the account level
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountLocation.eti;AccountLocation.eix;AccountLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "AccountLocation")
public class AccountLocation extends entity.Address implements entity.Referenceable, entity.FrozenSetMember {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AccountLocation> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AccountLocation>("entity.AccountLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Account");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Active");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EMPLOYEECOUNT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EmployeeCount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCATIONCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LocationCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCATIONNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LocationName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCATIONNUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LocationNum");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NONSPECIFIC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NonSpecific");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PHONE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Phone");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PHONECOUNTRY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PhoneCountry");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PHONEEXTENSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PhoneExtension");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public AccountLocation()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public AccountLocation(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected AccountLocation(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.AccountLocationInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.AccountLocationInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.AccountLocationInternal)super.__getInternalInterface();
  }
  
  /**
   * Clones this location and adds it to the accoount.  The new cloned AccountLocation will copy all of the properties
   * of this AccountLocation.
   * The method will also clone extension properties.  The address used by this location is also cloned.  The cloned
   * location will continue to point to the same MostRecentAccountLocation.
   * @return the cloned location
   */
  public entity.AccountLocation cloneLocation() {
    return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).cloneLocation();
  }
  
  /**
   * Gets the value of the Account field.
   * The account on which this is a location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount() {
    return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
  }
  
  /**
   * Returns all bound policy reriods which have policy locations associated with this account location.
   * @return a query result of period summaries representing the bound periods
   */
  public gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> getBoundPeriods() {
    return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).getBoundPeriods();
  }
  
  /**
   * Gets the value of the EmployeeCount field.
   * The number of employees at this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getEmployeeCount() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(EMPLOYEECOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Returns open jobs which have policy locations associated with this account location.
   * @return the jobs associated with this account location via policy locations
   */
  public gw.api.database.IQueryBeanResult<entity.Job> getJobs() {
    return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).getJobs();
  }
  
  /**
   * Gets the value of the LocationCode field.
   * The custom location code specified by customer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocationCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATIONCODE_PROP.get());
  }
  
  /**
   * Gets the value of the LocationName field.
   * Shorthand name for this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLocationName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATIONNAME_PROP.get());
  }
  
  /**
   * Gets the value of the LocationNum field.
   * The location number of this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLocationNum() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCATIONNUM_PROP.get());
  }
  
  /**
   * Gets the value of the Phone field.
   * Phone
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPhone() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PHONE_PROP.get());
  }
  
  /**
   * Gets the value of the PhoneCountry field.
   * The country associated with this phone number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getPhoneCountry() {
    return (typekey.PhoneCountryCode)__getInternalInterface().getFieldValue(PHONECOUNTRY_PROP.get());
  }
  
  /**
   * Gets the value of the PhoneExtension field.
   * Phone extension
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPhoneExtension() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PHONEEXTENSION_PROP.get());
  }
  
  /**
   * Gets the value of the Active field.
   * Determines whether or not the location is available to be newly added to submissions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIVE_PROP.get());
  }
  
  /**
   * Returns true if this location is equivalent to the passed-in location.
   * @param location the location to be matched
   * @return true if location matches passed in location
   */
  public boolean isEquivalentTo(entity.AccountLocation location) {
    return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).isEquivalentTo(location);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * Gets the value of the NonSpecific field.
   * Is a non-specific location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isNonSpecific() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(NONSPECIFIC_PROP.get());
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
   * Sets the value of the EmployeeCount field.
   */
  public void setEmployeeCount(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(EMPLOYEECOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationCode field.
   */
  public void setLocationCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LOCATIONCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationName field.
   */
  public void setLocationName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LOCATIONNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationNum field.
   */
  public void setLocationNum(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(LOCATIONNUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NonSpecific field.
   */
  public void setNonSpecific(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(NONSPECIFIC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Phone field.
   */
  public void setPhone(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PHONE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PhoneCountry field.
   */
  public void setPhoneCountry(typekey.PhoneCountryCode value) {
    __getInternalInterface().setFieldValue(PHONECOUNTRY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PhoneExtension field.
   */
  public void setPhoneExtension(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PHONEEXTENSION_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.AccountLocationInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.AccountLocation.this.__getDelegateManager();
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
     * Clones this location and adds it to the accoount.  The new cloned AccountLocation will copy all of the properties
     * of this AccountLocation.
     * The method will also clone extension properties.  The address used by this location is also cloned.  The cloned
     * location will continue to point to the same MostRecentAccountLocation.
     * @return the cloned location
     */
    public entity.AccountLocation cloneLocation() {
      return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).cloneLocation();
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
     * Gets the value of the Account field.
     * The account on which this is a location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Account getAccount() {
      return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAccountID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNT_PROP.get());
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
     * Returns all bound policy reriods which have policy locations associated with this account location.
     * @return a query result of period summaries representing the bound periods
     */
    public gw.api.database.IQueryBeanResult<entity.PolicyPeriodSummary> getBoundPeriods() {
      return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).getBoundPeriods();
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
     * Gets the value of the EmployeeCount field.
     * The number of employees at this location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getEmployeeCount() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(EMPLOYEECOUNT_PROP.get());
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
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
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
     * Returns open jobs which have policy locations associated with this account location.
     * @return the jobs associated with this account location via policy locations
     */
    public gw.api.database.IQueryBeanResult<entity.Job> getJobs() {
      return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).getJobs();
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
     * Gets the value of the LocationCode field.
     * The custom location code specified by customer
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLocationCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATIONCODE_PROP.get());
    }
    
    /**
     * Gets the value of the LocationName field.
     * Shorthand name for this location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLocationName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOCATIONNAME_PROP.get());
    }
    
    /**
     * Gets the value of the LocationNum field.
     * The location number of this location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getLocationNum() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCATIONNUM_PROP.get());
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
     * Gets the value of the Phone field.
     * Phone
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPhone() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PHONE_PROP.get());
    }
    
    /**
     * Gets the value of the PhoneCountry field.
     * The country associated with this phone number.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PhoneCountryCode getPhoneCountry() {
      return (typekey.PhoneCountryCode)__getInternalInterface().getFieldValue(PHONECOUNTRY_PROP.get());
    }
    
    /**
     * Gets the value of the PhoneExtension field.
     * Phone extension
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPhoneExtension() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PHONEEXTENSION_PROP.get());
    }
    
    public gw.api.database.IQueryBeanResult<entity.PolicyPeriod> getPolicyPeriods(typekey.PolicyPeriodStatus[] statusList) {
      return ((com.guidewire.pc.domain.account.impl.AccountLocationInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.impl.AccountLocationInternalMethods")).getPolicyPeriods(statusList);
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
     * Gets the value of the Active field.
     * Determines whether or not the location is available to be newly added to submissions
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isActive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ACTIVE_PROP.get());
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
     * Returns true if this location is equivalent to the passed-in location.
     * @param location the location to be matched
     * @return true if location matches passed in location
     */
    public boolean isEquivalentTo(entity.AccountLocation location) {
      return ((com.guidewire.pc.domain.account.AccountLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.account.AccountLocationPublicMethods")).isEquivalentTo(location);
    }
    
    /**
     * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
     * @return true, if there is location information.
     */
    public boolean isFailureGeocoding() {
      return ((com.guidewire.pl.domain.contact.AddressPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.contact.AddressPublicMethods")).isFailureGeocoding();
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
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
    
    /**
     * Gets the value of the NonSpecific field.
     * Is a non-specific location.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isNonSpecific() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(NONSPECIFIC_PROP.get());
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
     * Sets the value of the EmployeeCount field.
     */
    public void setEmployeeCount(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(EMPLOYEECOUNT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExternalID field.
     */
    public void setExternalID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXTERNALID_PROP.get(), value);
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
     * Sets the value of the LocationCode field.
     */
    public void setLocationCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LOCATIONCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LocationName field.
     */
    public void setLocationName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LOCATIONNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LocationNum field.
     */
    public void setLocationNum(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(LOCATIONNUM_PROP.get(), value);
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
     * Sets the value of the NonSpecific field.
     */
    public void setNonSpecific(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(NONSPECIFIC_PROP.get(), value);
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
     * Sets the value of the Phone field.
     */
    public void setPhone(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PHONE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PhoneCountry field.
     */
    public void setPhoneCountry(typekey.PhoneCountryCode value) {
      __getInternalInterface().setFieldValue(PHONECOUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PhoneExtension field.
     */
    public void setPhoneExtension(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PHONEEXTENSION_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.account.AccountLocationPublicMethods", "com.guidewire.pc.domain.account.impl.AccountLocationImpl");
    config.put("com.guidewire.pc.domain.account.impl.AccountLocationInternalMethods", "com.guidewire.pc.domain.account.impl.AccountLocationImpl");
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
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pl.domain.contact.impl.AddressImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pl.domain.contact.impl.AddressImpl");
    config.put("gw.api.address.AddressFillable", "com.guidewire.pl.domain.geodata.zone.impl.AddressAutofillableImpl");
    config.put("gw.api.domain.archiving.MergeableReferenceable", "gw.contact.AddressMergeableReferenceableImpl");
    config.put("gw.api.obfuscation.ObfuscatablePublicMethods", "com.guidewire.pl.domain.obfuscation.ObfuscatableMethodsImpl");
    config.put("gw.api.obfuscation.Obfuscator", "gw.api.obfuscation.UnsupportedObfuscator");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.AccountLocation.class, config);
    com.guidewire._generated.entity.AccountLocationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.AccountLocation, com.guidewire._generated.entity.AccountLocationInternal>() {
      public java.lang.Object getImplementation(entity.AccountLocation bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.AccountLocationInternal getInternalInterface(entity.AccountLocation bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.AccountLocation newEmptyInstance() {
        return new entity.AccountLocation((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}