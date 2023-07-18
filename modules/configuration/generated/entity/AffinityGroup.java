package entity;

/**
 * AffinityGroup
 * Groups and Associations eligible for dividends or special rating.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AffinityGroup.eti;AffinityGroup.eix;AffinityGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "AffinityGroup")
public class AffinityGroup extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.GlobalPersonName, entity.Obfuscatable, gw.api.obfuscation.Obfuscator {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AffinityGroup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AffinityGroup>("entity.AffinityGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> AFFINITYGROUPPRODUCERCODES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AffinityGroupProducerCodes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AFFINITYGROUPTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AffinityGroupType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EndDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JURISDICTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Jurisdictions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OBFUSCATEDINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ObfuscatedInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ORGANIZATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Organization");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PARTICLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Particle");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYCONTACTFIRSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryContactFirstName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYCONTACTFIRSTNAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryContactFirstNameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYCONTACTLASTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryContactLastName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYCONTACTLASTNAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryContactLastNameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYCONTACTPHONE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryContactPhone");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYCONTACTPHONECOUNTRYCODE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryContactPhoneCountryCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYCONTACTPHONEEXTENSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryContactPhoneExtension");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRODUCTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Products");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STARTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StartDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.AffinityGroupInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public AffinityGroup()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public AffinityGroup(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected AffinityGroup(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.AffinityGroupInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.AffinityGroupInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the AffinityGroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
    __getInternalInterface().addArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.AffinityGroupJurisdiction element) {
    __getInternalInterface().addArrayElement(JURISDICTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Products array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducts(entity.AffinityGroupProduct element) {
    __getInternalInterface().addArrayElement(PRODUCTS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the AffinityGroupProducerCodes field.
   * Producer Codes that this affinity group is available to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupProducerCode[] getAffinityGroupProducerCodes() {
    return (entity.AffinityGroupProducerCode[])__getInternalInterface().getFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get());
  }
  
  /**
   * Gets the value of the AffinityGroupType field.
   * Type of group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AffinityGroupType getAffinityGroupType() {
    return (typekey.AffinityGroupType)__getInternalInterface().getFieldValue(AFFINITYGROUPTYPE_PROP.get());
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
   * Gets the value of the Description field.
   * Description of the affinity group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the EndDate field.
   * Affinity group end date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ENDDATE_PROP.get());
  }
  
  /**
   * Gets the value of the FirstNameKanji field.
   * First name in kanji (used only for Japanese names and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Jurisdictions field.
   * Jurisdictions that this affinity group is available to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupJurisdiction[] getJurisdictions() {
    return (entity.AffinityGroupJurisdiction[])__getInternalInterface().getFieldValue(JURISDICTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the LastNameKanji field.
   * Last name in kanji (used only for Japanese names and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the Name field.
   * The name of affinity group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the NameKanji field.
   * Group name to search for in kanji (used only for Japanese).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the Organization field.
   * The Organization that this group belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization() {
    return (entity.Organization)__getInternalInterface().getFieldValue(ORGANIZATION_PROP.get());
  }
  
  /**
   * Gets the value of the Particle field.
   * Particle, such as 'de', 'von' (used for French names and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParticle() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARTICLE_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryContactFirstName field.
   * First name of primary contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactFirstName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTFIRSTNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactFirstNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTFIRSTNAMEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryContactLastName field.
   * Last name of primary contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactLastName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTLASTNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactLastNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTLASTNAMEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryContactPhone field.
   * Phone number of primary contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactPhone() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTPHONE_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryContactPhoneCountryCode field.
   * The country associated with this phone number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PhoneCountryCode getPrimaryContactPhoneCountryCode() {
    return (typekey.PhoneCountryCode)__getInternalInterface().getFieldValue(PRIMARYCONTACTPHONECOUNTRYCODE_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryContactPhoneExtension field.
   * Phone extension
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryContactPhoneExtension() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTPHONEEXTENSION_PROP.get());
  }
  
  /**
   * Gets the value of the Products field.
   * Products associated with this Affinity Group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupProduct[] getProducts() {
    return (entity.AffinityGroupProduct[])__getInternalInterface().getFieldValue(PRODUCTS_PROP.get());
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
   * Gets the value of the StartDate field.
   * Affinity group start date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(STARTDATE_PROP.get());
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
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  public void markAsObfuscated() {
    ((gw.api.obfuscation.ObfuscatablePublicMethods)__getDelegateManager().getImplementation("gw.api.obfuscation.ObfuscatablePublicMethods")).markAsObfuscated();
  }
  
  public void obfuscate() {
    ((gw.api.obfuscation.Obfuscator)__getDelegateManager().getImplementation("gw.api.obfuscation.Obfuscator")).obfuscate();
  }
  
  public void obfuscateSimple() {
    ((gw.api.obfuscation.Obfuscator)__getDelegateManager().getImplementation("gw.api.obfuscation.Obfuscator")).obfuscateSimple();
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
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
    __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAffinityGroupProducerCodes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.AffinityGroupJurisdiction element) {
    __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Products array. This is achieved by marking the element for removal.
   */
  public void removeFromProducts(entity.AffinityGroupProduct element) {
    __getInternalInterface().removeArrayElement(PRODUCTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Products array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducts(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PRODUCTS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AffinityGroupProducerCodes field.
   */
  public void setAffinityGroupProducerCodes(entity.AffinityGroupProducerCode[] value) {
    __getInternalInterface().setFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AffinityGroupType field.
   */
  public void setAffinityGroupType(typekey.AffinityGroupType value) {
    __getInternalInterface().setFieldValue(AFFINITYGROUPTYPE_PROP.get(), value);
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
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ENDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameKanji field.
   */
  public void setFirstNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.AffinityGroupJurisdiction[] value) {
    __getInternalInterface().setFieldValue(JURISDICTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameKanji field.
   */
  public void setLastNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMEKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NameDenorm field.
   */
  private void setNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAMEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NameKanji field.
   */
  public void setNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAMEKANJI_PROP.get(), value);
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
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value) {
    __getInternalInterface().setFieldValue(ORGANIZATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Particle field.
   */
  public void setParticle(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PARTICLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryContactFirstName field.
   */
  public void setPrimaryContactFirstName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTFIRSTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryContactFirstNameDenorm field.
   */
  private void setPrimaryContactFirstNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTFIRSTNAMEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryContactLastName field.
   */
  public void setPrimaryContactLastName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTLASTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryContactLastNameDenorm field.
   */
  private void setPrimaryContactLastNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTLASTNAMEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryContactPhone field.
   */
  public void setPrimaryContactPhone(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTPHONE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryContactPhoneCountryCode field.
   */
  public void setPrimaryContactPhoneCountryCode(typekey.PhoneCountryCode value) {
    __getInternalInterface().setFieldValue(PRIMARYCONTACTPHONECOUNTRYCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryContactPhoneExtension field.
   */
  public void setPrimaryContactPhoneExtension(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTPHONEEXTENSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Products field.
   */
  public void setProducts(entity.AffinityGroupProduct[] value) {
    __getInternalInterface().setFieldValue(PRODUCTS_PROP.get(), value);
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
   * Sets the value of the StartDate field.
   */
  public void setStartDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(STARTDATE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.AffinityGroupInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.AffinityGroup.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the AffinityGroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
      __getInternalInterface().addArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToJurisdictions(entity.AffinityGroupJurisdiction element) {
      __getInternalInterface().addArrayElement(JURISDICTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Products array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToProducts(entity.AffinityGroupProduct element) {
      __getInternalInterface().addArrayElement(PRODUCTS_PROP.get(), element);
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
     * Gets the value of the AffinityGroupProducerCodes field.
     * Producer Codes that this affinity group is available to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AffinityGroupProducerCode[] getAffinityGroupProducerCodes() {
      return (entity.AffinityGroupProducerCode[])__getInternalInterface().getFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get());
    }
    
    /**
     * Gets the value of the AffinityGroupType field.
     * Type of group
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AffinityGroupType getAffinityGroupType() {
      return (typekey.AffinityGroupType)__getInternalInterface().getFieldValue(AFFINITYGROUPTYPE_PROP.get());
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
     * Gets the value of the Description field.
     * Description of the affinity group
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the EndDate field.
     * Affinity group end date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEndDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ENDDATE_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameKanji field.
     * First name in kanji (used only for Japanese names and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get());
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
     * Gets the value of the Jurisdictions field.
     * Jurisdictions that this affinity group is available to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AffinityGroupJurisdiction[] getJurisdictions() {
      return (entity.AffinityGroupJurisdiction[])__getInternalInterface().getFieldValue(JURISDICTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the LastNameKanji field.
     * Last name in kanji (used only for Japanese names and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the Name field.
     * The name of affinity group.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the NameDenorm field.
     * denorm field for Name
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNameDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the NameKanji field.
     * Group name to search for in kanji (used only for Japanese).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the Organization field.
     * The Organization that this group belongs to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Organization getOrganization() {
      return (entity.Organization)__getInternalInterface().getFieldValue(ORGANIZATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getOrganizationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ORGANIZATION_PROP.get());
    }
    
    /**
     * Gets the value of the Particle field.
     * Particle, such as 'de', 'von' (used for French names and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getParticle() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARTICLE_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryContactFirstName field.
     * First name of primary contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryContactFirstName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTFIRSTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryContactFirstNameDenorm field.
     * denorm field for PrimaryContactFirstName
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryContactFirstNameDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTFIRSTNAMEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryContactLastName field.
     * Last name of primary contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryContactLastName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTLASTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryContactLastNameDenorm field.
     * denorm field for PrimaryContactLastName
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryContactLastNameDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTLASTNAMEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryContactPhone field.
     * Phone number of primary contact.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryContactPhone() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTPHONE_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryContactPhoneCountryCode field.
     * The country associated with this phone number.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PhoneCountryCode getPrimaryContactPhoneCountryCode() {
      return (typekey.PhoneCountryCode)__getInternalInterface().getFieldValue(PRIMARYCONTACTPHONECOUNTRYCODE_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryContactPhoneExtension field.
     * Phone extension
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryContactPhoneExtension() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYCONTACTPHONEEXTENSION_PROP.get());
    }
    
    /**
     * Gets the value of the Products field.
     * Products associated with this Affinity Group.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AffinityGroupProduct[] getProducts() {
      return (entity.AffinityGroupProduct[])__getInternalInterface().getFieldValue(PRODUCTS_PROP.get());
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
     * Gets the value of the StartDate field.
     * Affinity group start date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getStartDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(STARTDATE_PROP.get());
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
    
    public void markAsObfuscated() {
      ((gw.api.obfuscation.ObfuscatablePublicMethods)__getDelegateManager().getImplementation("gw.api.obfuscation.ObfuscatablePublicMethods")).markAsObfuscated();
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
     * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
     */
    public void removeFromAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
      __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAffinityGroupProducerCodes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
     */
    public void removeFromJurisdictions(entity.AffinityGroupJurisdiction element) {
      __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(JURISDICTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Products array. This is achieved by marking the element for removal.
     */
    public void removeFromProducts(entity.AffinityGroupProduct element) {
      __getInternalInterface().removeArrayElement(PRODUCTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Products array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromProducts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRODUCTS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AffinityGroupProducerCodes field.
     */
    public void setAffinityGroupProducerCodes(entity.AffinityGroupProducerCode[] value) {
      __getInternalInterface().setFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AffinityGroupType field.
     */
    public void setAffinityGroupType(typekey.AffinityGroupType value) {
      __getInternalInterface().setFieldValue(AFFINITYGROUPTYPE_PROP.get(), value);
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
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EndDate field.
     */
    public void setEndDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ENDDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameKanji field.
     */
    public void setFirstNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Jurisdictions field.
     */
    public void setJurisdictions(entity.AffinityGroupJurisdiction[] value) {
      __getInternalInterface().setFieldValue(JURISDICTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastNameKanji field.
     */
    public void setLastNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTNAMEKANJI_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NameDenorm field.
     */
    public void setNameDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAMEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NameKanji field.
     */
    public void setNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAMEKANJI_PROP.get(), value);
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
     * Sets the value of the Organization field.
     */
    public void setOrganization(entity.Organization value) {
      __getInternalInterface().setFieldValue(ORGANIZATION_PROP.get(), value);
    }
    
    public void setOrganizationID(gw.pl.persistence.core.Key value) {
      setFieldValue(ORGANIZATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Particle field.
     */
    public void setParticle(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PARTICLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryContactFirstName field.
     */
    public void setPrimaryContactFirstName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTFIRSTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryContactFirstNameDenorm field.
     */
    public void setPrimaryContactFirstNameDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTFIRSTNAMEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryContactLastName field.
     */
    public void setPrimaryContactLastName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTLASTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryContactLastNameDenorm field.
     */
    public void setPrimaryContactLastNameDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTLASTNAMEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryContactPhone field.
     */
    public void setPrimaryContactPhone(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTPHONE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryContactPhoneCountryCode field.
     */
    public void setPrimaryContactPhoneCountryCode(typekey.PhoneCountryCode value) {
      __getInternalInterface().setFieldValue(PRIMARYCONTACTPHONECOUNTRYCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryContactPhoneExtension field.
     */
    public void setPrimaryContactPhoneExtension(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYCONTACTPHONEEXTENSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Products field.
     */
    public void setProducts(entity.AffinityGroupProduct[] value) {
      __getInternalInterface().setFieldValue(PRODUCTS_PROP.get(), value);
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
     * Sets the value of the StartDate field.
     */
    public void setStartDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(STARTDATE_PROP.get(), value);
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
    config.put("com.guidewire.pl.domain.obfuscation.ObfuscatableInternalMethods", "com.guidewire.pl.domain.obfuscation.ObfuscatableMethodsImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.api.obfuscation.ObfuscatablePublicMethods", "com.guidewire.pl.domain.obfuscation.ObfuscatableMethodsImpl");
    config.put("gw.api.obfuscation.Obfuscator", "gw.api.obfuscation.UnsupportedObfuscator");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.AffinityGroup.class, config);
    com.guidewire._generated.entity.AffinityGroupInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.AffinityGroup, com.guidewire._generated.entity.AffinityGroupInternal>() {
      public java.lang.Object getImplementation(entity.AffinityGroup bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.AffinityGroupInternal getInternalInterface(entity.AffinityGroup bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.AffinityGroup newEmptyInstance() {
        return new entity.AffinityGroup((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}