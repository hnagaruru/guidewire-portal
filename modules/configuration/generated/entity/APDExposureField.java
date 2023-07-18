package entity;

/**
 * APDExposureField
 * The definition of a field that is part of the exposure
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDExposureField.eti;APDExposureField.eix;APDExposureField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "APDExposureField")
public class APDExposureField extends entity.APDAttribute {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDExposureField> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDExposureField>("entity.APDExposureField");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASISSCALINGKEY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BasisScalingKey");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> EXPOSURE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Exposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPOSUREPARTY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExposureParty");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public APDExposureField()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public APDExposureField(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected APDExposureField(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.APDExposureFieldInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.APDExposureFieldInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.APDExposureFieldInternal)super.__getInternalInterface();
  }
  
  /**
   * Gets the value of the Exposure field.
   * The exposure to which this field belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure getExposure() {
    return (entity.APDExposure)__getInternalInterface().getFieldValue(EXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the BasisScalingKey field.
   * Where the exposure is rated basis scalable, this is part of the key to the exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBasisScalingKey() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(BASISSCALINGKEY_PROP.get());
  }
  
  /**
   * Gets the value of the ExposureParty field.
   * Identifies that this field is the PolicyContactRole that is the exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExposureParty() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXPOSUREPARTY_PROP.get());
  }
  
  /**
   * Sets the value of the BasisScalingKey field.
   */
  public void setBasisScalingKey(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(BASISSCALINGKEY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Exposure field.
   */
  public void setExposure(entity.APDExposure value) {
    __getInternalInterface().setFieldValue(EXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExposureParty field.
   */
  public void setExposureParty(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(EXPOSUREPARTY_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.APDExposureFieldInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.APDExposureField.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the ApdowningdropdownArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToApdowningdropdownArray(entity.Apdowningdropdown element) {
      __getInternalInterface().addArrayElement(APDOWNINGDROPDOWNARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Codes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCodes(entity.APDDropdownEntry element) {
      __getInternalInterface().addArrayElement(CODES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDescription_L10N_ARRAY(entity.APDAttribute_Description_L10N element) {
      __getInternalInterface().addArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Label_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLabel_L10N_ARRAY(entity.APDAttribute_Label_L10N element) {
      __getInternalInterface().addArrayElement(LABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRules(entity.APDAttributeRule element) {
      __getInternalInterface().addArrayElement(RULES_PROP.get(), element);
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
     * Gets the value of the ApdowningdropdownArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Apdowningdropdown[] getApdowningdropdownArray() {
      return (entity.Apdowningdropdown[])__getInternalInterface().getFieldValue(APDOWNINGDROPDOWNARRAY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Category field.
     * The category of this attribute
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCategory() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CATEGORY_PROP.get());
    }
    
    /**
     * Gets the value of the Codes field.
     * The list of available drop down entries
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDDropdownEntry[] getCodes() {
      return (entity.APDDropdownEntry[])__getInternalInterface().getFieldValue(CODES_PROP.get());
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
     * The description of the field in the object model
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the Description_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDAttribute_Description_L10N[] getDescription_L10N_ARRAY() {
      return (entity.APDAttribute_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
     */
    public entity.APDAttribute_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDAttribute_Description_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the DropDownType field.
     * The way this attribute will be implemented as a dropdown 
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDDropDownType getDropDownType() {
      return (typekey.APDDropDownType)__getInternalInterface().getFieldValue(DROPDOWNTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Exposure field.
     * The exposure to which this field belongs
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDExposure getExposure() {
      return (entity.APDExposure)__getInternalInterface().getFieldValue(EXPOSURE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getExposureID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(EXPOSURE_PROP.get());
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
     * Gets the value of the Label field.
     * The label for this field on the screen
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLabel() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LABEL_PROP.get());
    }
    
    /**
     * Gets the value of the Label_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDAttribute_Label_L10N[] getLabel_L10N_ARRAY() {
      return (entity.APDAttribute_Label_L10N[])__getInternalInterface().getFieldValue(LABEL_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Label_L10N_ARRAYByLanguage on array Label_L10N_ARRAY
     */
    public entity.APDAttribute_Label_L10N getLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDAttribute_Label_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the Name field.
     * The name of the field in the object model
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the OwningDropDown field.
     * The attribute that owns the list 
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDAttribute getOwningDropDown() {
      return (entity.APDAttribute)__getInternalInterface().getFieldValue(OWNINGDROPDOWN_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getOwningDropDownID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(OWNINGDROPDOWN_PROP.get());
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
     * Gets the value of the Rules field.
     * Rules that apply to this attribute
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDAttributeRule[] getRules() {
      return (entity.APDAttributeRule[])__getInternalInterface().getFieldValue(RULES_PROP.get());
    }
    
    /**
     * Gets the value of the Sequence field.
     * The order in which the fields are displayed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getSequence() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(SEQUENCE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDAttribute getSubtype() {
      return (typekey.APDAttribute)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Type field.
     * The type of field 
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDFieldType getType() {
      return (typekey.APDFieldType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Typelist field.
     * The name of the typelist that implements this attribute as a drop down (if relevant)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTypelist() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPELIST_PROP.get());
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
     * Gets the value of the BasisScalingKey field.
     * Where the exposure is rated basis scalable, this is part of the key to the exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBasisScalingKey() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BASISSCALINGKEY_PROP.get());
    }
    
    /**
     * Gets the value of the DoNotRegenerate field.
     * If set, this is a typelist whose content is being maintained outside of the product definition
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDoNotRegenerate() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTREGENERATE_PROP.get());
    }
    
    /**
     * Gets the value of the ExposureParty field.
     * Identifies that this field is the PolicyContactRole that is the exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isExposureParty() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXPOSUREPARTY_PROP.get());
    }
    
    /**
     * Gets the value of the IsDropDownOwner field.
     * If set, this attribute is an owner of a dropdown list
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isIsDropDownOwner() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ISDROPDOWNOWNER_PROP.get());
    }
    
    /**
     * Gets the value of the Jurisdiction field.
     * Identifies that this field is the location that provides the jurisdiction of the risk
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isJurisdiction() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(JURISDICTION_PROP.get());
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
    
    /**
     * Gets the value of the Scalable field.
     * If true, this attribute should be pro-rated on splits and changes to period width
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isScalable() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(SCALABLE_PROP.get());
    }
    
    /**
     * Gets the value of the SplitByRatingPeriods field.
     * If true, this attribute will have values defined by rating periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isSplitByRatingPeriods() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(SPLITBYRATINGPERIODS_PROP.get());
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
     * Removes the given element from the ApdowningdropdownArray array. This is achieved by marking the element for removal.
     */
    public void removeFromApdowningdropdownArray(entity.Apdowningdropdown element) {
      __getInternalInterface().removeArrayElement(APDOWNINGDROPDOWNARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ApdowningdropdownArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromApdowningdropdownArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(APDOWNINGDROPDOWNARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Codes array. This is achieved by marking the element for removal.
     */
    public void removeFromCodes(entity.APDDropdownEntry element) {
      __getInternalInterface().removeArrayElement(CODES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Codes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCodes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CODES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromDescription_L10N_ARRAY(entity.APDAttribute_Description_L10N element) {
      __getInternalInterface().removeArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Label_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromLabel_L10N_ARRAY(entity.APDAttribute_Label_L10N element) {
      __getInternalInterface().removeArrayElement(LABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Label_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LABEL_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Rules array. This is achieved by marking the element for removal.
     */
    public void removeFromRules(entity.APDAttributeRule element) {
      __getInternalInterface().removeArrayElement(RULES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Rules array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRules(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RULES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ApdowningdropdownArray field.
     */
    public void setApdowningdropdownArray(entity.Apdowningdropdown[] value) {
      __getInternalInterface().setFieldValue(APDOWNINGDROPDOWNARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BasisScalingKey field.
     */
    public void setBasisScalingKey(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BASISSCALINGKEY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Category field.
     */
    public void setCategory(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CATEGORY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Codes field.
     */
    public void setCodes(entity.APDDropdownEntry[] value) {
      __getInternalInterface().setFieldValue(CODES_PROP.get(), value);
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
     * Sets the value of the Description_L10N_ARRAY field.
     */
    public void setDescription_L10N_ARRAY(entity.APDAttribute_Description_L10N[] value) {
      __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DoNotRegenerate field.
     */
    public void setDoNotRegenerate(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DONOTREGENERATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DropDownType field.
     */
    public void setDropDownType(typekey.APDDropDownType value) {
      __getInternalInterface().setFieldValue(DROPDOWNTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Exposure field.
     */
    public void setExposure(entity.APDExposure value) {
      __getInternalInterface().setFieldValue(EXPOSURE_PROP.get(), value);
    }
    
    public void setExposureID(gw.pl.persistence.core.Key value) {
      setFieldValue(EXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExposureParty field.
     */
    public void setExposureParty(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(EXPOSUREPARTY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IsDropDownOwner field.
     */
    public void setIsDropDownOwner(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ISDROPDOWNOWNER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Jurisdiction field.
     */
    public void setJurisdiction(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(JURISDICTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Label field.
     */
    public void setLabel(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LABEL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Label_L10N_ARRAY field.
     */
    public void setLabel_L10N_ARRAY(entity.APDAttribute_Label_L10N[] value) {
      __getInternalInterface().setFieldValue(LABEL_L10N_ARRAY_PROP.get(), value);
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
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the OwningDropDown field.
     */
    public void setOwningDropDown(entity.APDAttribute value) {
      __getInternalInterface().setFieldValue(OWNINGDROPDOWN_PROP.get(), value);
    }
    
    public void setOwningDropDownID(gw.pl.persistence.core.Key value) {
      setFieldValue(OWNINGDROPDOWN_PROP.get(), value);
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
     * Sets the value of the Rules field.
     */
    public void setRules(entity.APDAttributeRule[] value) {
      __getInternalInterface().setFieldValue(RULES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Scalable field.
     */
    public void setScalable(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(SCALABLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Sequence field.
     */
    public void setSequence(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SEQUENCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SplitByRatingPeriods field.
     */
    public void setSplitByRatingPeriods(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(SPLITBYRATINGPERIODS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.APDAttribute value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Type field.
     */
    public void setType(typekey.APDFieldType value) {
      __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Typelist field.
     */
    public void setTypelist(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TYPELIST_PROP.get(), value);
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
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.apd.model.APDTagContainer", "gw.apd.model.APDAttributeTagContainerImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.APDExposureField.class, config);
    com.guidewire._generated.entity.APDExposureFieldInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.APDExposureField, com.guidewire._generated.entity.APDExposureFieldInternal>() {
      public java.lang.Object getImplementation(entity.APDExposureField bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDExposureFieldInternal getInternalInterface(entity.APDExposureField bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.APDExposureField newEmptyInstance() {
        return new entity.APDExposureField((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}