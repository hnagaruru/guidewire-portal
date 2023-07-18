package entity;

/**
 * APDAttribute
 * The base definition of any attribute
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDAttribute.eti;APDAttribute.eix;APDAttribute.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class APDAttribute extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDAttribute> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDAttribute>("entity.APDAttribute");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> APDOWNINGDROPDOWNARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ApdowningdropdownArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CATEGORY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Category");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CODES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Codes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DESCRIPTION_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Description_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DONOTREGENERATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DoNotRegenerate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DROPDOWNTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DropDownType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ISDROPDOWNOWNER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IsDropDownOwner");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JURISDICTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Jurisdiction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LABEL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Label");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LABEL_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Label_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> OWNINGDROPDOWN_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "OwningDropDown");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RULES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Rules");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SCALABLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Scalable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEQUENCE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Sequence");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPLITBYRATINGPERIODS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SplitByRatingPeriods");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Type");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPELIST_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Typelist");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.APDAttributeInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  protected APDAttribute(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.APDAttributeInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.APDAttributeInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the Codes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCodes(entity.APDDropdownEntry element) {
    __getInternalInterface().addArrayElement(CODES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRules(entity.APDAttributeRule element) {
    __getInternalInterface().addArrayElement(RULES_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
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
  
  /**
   * Gets the value of the Description field.
   * The description of the field in the object model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute_Description_L10N[] getDescription_L10N_ARRAY() {
    return (entity.APDAttribute_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Description_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"));
  }
  
  /**
   * Gets the value of the DropDownType field.
   * The way this attribute will be implemented as a dropdown 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDropDownType getDropDownType() {
    return (typekey.APDDropDownType)__getInternalInterface().getFieldValue(DROPDOWNTYPE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute_Label_L10N[] getLabel_L10N_ARRAY() {
    return (entity.APDAttribute_Label_L10N[])__getInternalInterface().getFieldValue(LABEL_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Label_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLabel_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Label_en_US"));
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
  
  /**
   * Gets the value of the DoNotRegenerate field.
   * If set, this is a typelist whose content is being maintained outside of the product definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotRegenerate() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DONOTREGENERATE_PROP.get());
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
  
  /**
   * Sets the value of the ApdowningdropdownArray field.
   */
  private void setApdowningdropdownArray(entity.Apdowningdropdown[] value) {
    __getInternalInterface().setFieldValue(APDOWNINGDROPDOWNARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
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
   * Sets the value of the Description_L10N_ARRAY field.
   */
  private void setDescription_L10N_ARRAY(entity.APDAttribute_Description_L10N[] value) {
    __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Description_ on array Description_L10N_ARRAY
   */
  public void setDescription_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"), value);
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
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
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
  private void setLabel_L10N_ARRAY(entity.APDAttribute_Label_L10N[] value) {
    __getInternalInterface().setFieldValue(LABEL_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Label_ on array Label_L10N_ARRAY
   */
  public void setLabel_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Label_en_US"), value);
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
  private void setSubtype(typekey.APDAttribute value) {
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
  
  static {
    com.guidewire._generated.entity.APDAttributeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.APDAttribute, com.guidewire._generated.entity.APDAttributeInternal>() {
      public java.lang.Object getImplementation(entity.APDAttribute bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDAttributeInternal getInternalInterface(entity.APDAttribute bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}