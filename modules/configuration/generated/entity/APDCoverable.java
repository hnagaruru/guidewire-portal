package entity;

/**
 * APDCoverable
 * Coverable definition
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoverable.eti;APDCoverable.eix;APDCoverable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "APDCoverable")
public class APDCoverable extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDCoverable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDCoverable>("entity.APDCoverable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> APDCOVERABLEPARENTARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ApdcoverableparentArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHILDRENLABEL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ChildrenLabel");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CHILDRENLABEL_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ChildrenLabel_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CLAUSECATEGORIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ClauseCategories");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CLAUSES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Clauses");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COREFIELDS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CoreFields");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COSTDEFINITIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CostDefinitions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COVERABLETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CoverableType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DESCRIPTION_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Description_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPOSURELABEL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExposureLabel");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> EXPOSURELABEL_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ExposureLabel_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> EXPOSURES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Exposures");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FIELDS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Fields");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HASCHILDREN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HasChildren");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HASEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HasExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HASMODIFIERS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HasModifiers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ISAUTONUMBERED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IsAutoNumbered");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MENULABEL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MenuLabel");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> MENULABEL_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "MenuLabel_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NAME_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Name_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PARENT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Parent");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RISKLOCATION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RiskLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEPARATEBILLING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeparateBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEPARATECOLLECTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeparateCollection");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPENAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TypeName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WRITTENBYTHIRDPARTY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "WrittenByThirdParty");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.APDCoverableInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public APDCoverable()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public APDCoverable(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected APDCoverable(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.APDCoverableInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.APDCoverableInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the ClauseCategories array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClauseCategories(entity.APDClauseCategory element) {
    __getInternalInterface().addArrayElement(CLAUSECATEGORIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Clauses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClauses(entity.APDClause element) {
    __getInternalInterface().addArrayElement(CLAUSES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the CoreFields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoreFields(entity.APDCoreAttribute element) {
    __getInternalInterface().addArrayElement(COREFIELDS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the CostDefinitions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostDefinitions(entity.APDRiskCostDefinition element) {
    __getInternalInterface().addArrayElement(COSTDEFINITIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Exposures array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExposures(entity.APDExposure element) {
    __getInternalInterface().addArrayElement(EXPOSURES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Fields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFields(entity.APDField element) {
    __getInternalInterface().addArrayElement(FIELDS_PROP.get(), element);
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
  public entity.Apdcoverableparent[] getApdcoverableparentArray() {
    return (entity.Apdcoverableparent[])__getInternalInterface().getFieldValue(APDCOVERABLEPARENTARRAY_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the ChildrenLabel field.
   * The label given to the tab or reference to the child objects
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChildrenLabel() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHILDRENLABEL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_ChildrenLabel_L10N[] getChildrenLabel_L10N_ARRAY() {
    return (entity.APDCoverable_ChildrenLabel_L10N[])__getInternalInterface().getFieldValue(CHILDRENLABEL_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array ChildrenLabel_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChildrenLabel_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("ChildrenLabel_en_US"));
  }
  
  /**
   * Gets the value of the ClauseCategories field.
   * The set of clause categories used by this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseCategory[] getClauseCategories() {
    return (entity.APDClauseCategory[])__getInternalInterface().getFieldValue(CLAUSECATEGORIES_PROP.get());
  }
  
  /**
   * Gets the value of the Clauses field.
   * All clauses relating to this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause[] getClauses() {
    return (entity.APDClause[])__getInternalInterface().getFieldValue(CLAUSES_PROP.get());
  }
  
  /**
   * Gets the value of the CoreFields field.
   * Standard PolicyCenter fields that may be referred to in rules
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoreAttribute[] getCoreFields() {
    return (entity.APDCoreAttribute[])__getInternalInterface().getFieldValue(COREFIELDS_PROP.get());
  }
  
  /**
   * Gets the value of the CostDefinitions field.
   * The definitions of costs that attach directly to this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCostDefinition[] getCostDefinitions() {
    return (entity.APDRiskCostDefinition[])__getInternalInterface().getFieldValue(COSTDEFINITIONS_PROP.get());
  }
  
  /**
   * Gets the value of the CoverableType field.
   * The type of coverable, such as property, liability, etc
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCoverableType getCoverableType() {
    return (typekey.APDCoverableType)__getInternalInterface().getFieldValue(COVERABLETYPE_PROP.get());
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
   * A description of what the coverable is, e.g. a vehicle
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
  public entity.APDCoverable_Description_L10N[] getDescription_L10N_ARRAY() {
    return (entity.APDCoverable_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Description_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"));
  }
  
  /**
   * Gets the value of the ExposureLabel field.
   * The label given to the tab or reference to the exposure objects
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExposureLabel() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSURELABEL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_ExposureLabel_L10N[] getExposureLabel_L10N_ARRAY() {
    return (entity.APDCoverable_ExposureLabel_L10N[])__getInternalInterface().getFieldValue(EXPOSURELABEL_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array ExposureLabel_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExposureLabel_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("ExposureLabel_en_US"));
  }
  
  /**
   * Gets the value of the Exposures field.
   * The types of risk exposure for this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure[] getExposures() {
    return (entity.APDExposure[])__getInternalInterface().getFieldValue(EXPOSURES_PROP.get());
  }
  
  /**
   * Gets the value of the Fields field.
   * Fields available for this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDField[] getFields() {
    return (entity.APDField[])__getInternalInterface().getFieldValue(FIELDS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the MenuLabel field.
   * Line detail label or coverable list label used in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMenuLabel() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MENULABEL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_MenuLabel_L10N[] getMenuLabel_L10N_ARRAY() {
    return (entity.APDCoverable_MenuLabel_L10N[])__getInternalInterface().getFieldValue(MENULABEL_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array MenuLabel_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMenuLabel_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("MenuLabel_en_US"));
  }
  
  /**
   * Gets the value of the Name field.
   * The name of the line or type of coverable used in the UI as a title
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
  public entity.APDCoverable_Name_L10N[] getName_L10N_ARRAY() {
    return (entity.APDCoverable_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Name_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"));
  }
  
  /**
   * Gets the value of the Parent field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getParent() {
    return (entity.APDCoverable)__getInternalInterface().getFieldValue(PARENT_PROP.get());
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
   * Gets the value of the RiskLocation field.
   * Defines how the jurisdiction/location of this coverable risk is determined
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRiskLocationType getRiskLocation() {
    return (typekey.APDRiskLocationType)__getInternalInterface().getFieldValue(RISKLOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCoverable getSubtype() {
    return (typekey.APDCoverable)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TypeName field.
   * The entity (or subtype for lines) used to persist this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPENAME_PROP.get());
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
   * Gets the value of the HasChildren field.
   * Defines if this coverable can have child coverables.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasChildren() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(HASCHILDREN_PROP.get());
  }
  
  /**
   * Gets the value of the HasExposure field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasExposure() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(HASEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the HasModifiers field.
   * Whether this coverable has modifiers
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasModifiers() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(HASMODIFIERS_PROP.get());
  }
  
  /**
   * Gets the value of the IsAutoNumbered field.
   * Defines if the coverable is automatically numbered (ignored for the line)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIsAutoNumbered() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ISAUTONUMBERED_PROP.get());
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
   * Gets the value of the SeparateBilling field.
   * If true, this coverable will create an individual debtors charge items for billing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateBilling() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATEBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the SeparateCollection field.
   * If true, this coverable will crate an individual debtors charge for cash allocation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateCollection() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATECOLLECTION_PROP.get());
  }
  
  /**
   * Gets the value of the WrittenByThirdParty field.
   * If true, this product is written by another insurance company (captured as an organisation)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWrittenByThirdParty() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(WRITTENBYTHIRDPARTY_PROP.get());
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
   * Removes the given element from the ClauseCategories array. This is achieved by marking the element for removal.
   */
  public void removeFromClauseCategories(entity.APDClauseCategory element) {
    __getInternalInterface().removeArrayElement(CLAUSECATEGORIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ClauseCategories array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClauseCategories(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(CLAUSECATEGORIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Clauses array. This is achieved by marking the element for removal.
   */
  public void removeFromClauses(entity.APDClause element) {
    __getInternalInterface().removeArrayElement(CLAUSES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Clauses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClauses(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(CLAUSES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the CoreFields array. This is achieved by marking the element for removal.
   */
  public void removeFromCoreFields(entity.APDCoreAttribute element) {
    __getInternalInterface().removeArrayElement(COREFIELDS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CoreFields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoreFields(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COREFIELDS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
   */
  public void removeFromCostDefinitions(entity.APDRiskCostDefinition element) {
    __getInternalInterface().removeArrayElement(COSTDEFINITIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostDefinitions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COSTDEFINITIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
   */
  public void removeFromExposures(entity.APDExposure element) {
    __getInternalInterface().removeArrayElement(EXPOSURES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExposures(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(EXPOSURES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   */
  public void removeFromFields(entity.APDField element) {
    __getInternalInterface().removeArrayElement(FIELDS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFields(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FIELDS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ApdcoverableparentArray field.
   */
  private void setApdcoverableparentArray(entity.Apdcoverableparent[] value) {
    __getInternalInterface().setFieldValue(APDCOVERABLEPARENTARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChildrenLabel field.
   */
  public void setChildrenLabel(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CHILDRENLABEL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChildrenLabel_L10N_ARRAY field.
   */
  private void setChildrenLabel_L10N_ARRAY(entity.APDCoverable_ChildrenLabel_L10N[] value) {
    __getInternalInterface().setFieldValue(CHILDRENLABEL_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key ChildrenLabel_ on array ChildrenLabel_L10N_ARRAY
   */
  public void setChildrenLabel_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("ChildrenLabel_en_US"), value);
  }
  
  /**
   * Sets the value of the ClauseCategories field.
   */
  public void setClauseCategories(entity.APDClauseCategory[] value) {
    __getInternalInterface().setFieldValue(CLAUSECATEGORIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Clauses field.
   */
  public void setClauses(entity.APDClause[] value) {
    __getInternalInterface().setFieldValue(CLAUSES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoreFields field.
   */
  public void setCoreFields(entity.APDCoreAttribute[] value) {
    __getInternalInterface().setFieldValue(COREFIELDS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CostDefinitions field.
   */
  public void setCostDefinitions(entity.APDRiskCostDefinition[] value) {
    __getInternalInterface().setFieldValue(COSTDEFINITIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverableType field.
   */
  public void setCoverableType(typekey.APDCoverableType value) {
    __getInternalInterface().setFieldValue(COVERABLETYPE_PROP.get(), value);
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
  private void setDescription_L10N_ARRAY(entity.APDCoverable_Description_L10N[] value) {
    __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Description_ on array Description_L10N_ARRAY
   */
  public void setDescription_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"), value);
  }
  
  /**
   * Sets the value of the ExposureLabel field.
   */
  public void setExposureLabel(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXPOSURELABEL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExposureLabel_L10N_ARRAY field.
   */
  private void setExposureLabel_L10N_ARRAY(entity.APDCoverable_ExposureLabel_L10N[] value) {
    __getInternalInterface().setFieldValue(EXPOSURELABEL_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key ExposureLabel_ on array ExposureLabel_L10N_ARRAY
   */
  public void setExposureLabel_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("ExposureLabel_en_US"), value);
  }
  
  /**
   * Sets the value of the Exposures field.
   */
  public void setExposures(entity.APDExposure[] value) {
    __getInternalInterface().setFieldValue(EXPOSURES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fields field.
   */
  public void setFields(entity.APDField[] value) {
    __getInternalInterface().setFieldValue(FIELDS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HasChildren field.
   */
  public void setHasChildren(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(HASCHILDREN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HasExposure field.
   */
  public void setHasExposure(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(HASEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HasModifiers field.
   */
  public void setHasModifiers(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(HASMODIFIERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IsAutoNumbered field.
   */
  public void setIsAutoNumbered(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ISAUTONUMBERED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MenuLabel field.
   */
  public void setMenuLabel(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MENULABEL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MenuLabel_L10N_ARRAY field.
   */
  private void setMenuLabel_L10N_ARRAY(entity.APDCoverable_MenuLabel_L10N[] value) {
    __getInternalInterface().setFieldValue(MENULABEL_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key MenuLabel_ on array MenuLabel_L10N_ARRAY
   */
  public void setMenuLabel_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("MenuLabel_en_US"), value);
  }
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  private void setName_L10N_ARRAY(entity.APDCoverable_Name_L10N[] value) {
    __getInternalInterface().setFieldValue(NAME_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Name_ on array Name_L10N_ARRAY
   */
  public void setName_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"), value);
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
   * Sets the value of the Parent field.
   */
  public void setParent(entity.APDCoverable value) {
    __getInternalInterface().setFieldValue(PARENT_PROP.get(), value);
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
   * Sets the value of the RiskLocation field.
   */
  public void setRiskLocation(typekey.APDRiskLocationType value) {
    __getInternalInterface().setFieldValue(RISKLOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SeparateBilling field.
   */
  public void setSeparateBilling(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SEPARATEBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SeparateCollection field.
   */
  public void setSeparateCollection(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SEPARATECOLLECTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.APDCoverable value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TypeName field.
   */
  public void setTypeName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TYPENAME_PROP.get(), value);
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
   * Sets the value of the WrittenByThirdParty field.
   */
  public void setWrittenByThirdParty(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(WRITTENBYTHIRDPARTY_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.APDCoverableInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.APDCoverable.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the ApdcoverableparentArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToApdcoverableparentArray(entity.Apdcoverableparent element) {
      __getInternalInterface().addArrayElement(APDCOVERABLEPARENTARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ChildrenLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToChildrenLabel_L10N_ARRAY(entity.APDCoverable_ChildrenLabel_L10N element) {
      __getInternalInterface().addArrayElement(CHILDRENLABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ClauseCategories array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToClauseCategories(entity.APDClauseCategory element) {
      __getInternalInterface().addArrayElement(CLAUSECATEGORIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Clauses array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToClauses(entity.APDClause element) {
      __getInternalInterface().addArrayElement(CLAUSES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the CoreFields array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCoreFields(entity.APDCoreAttribute element) {
      __getInternalInterface().addArrayElement(COREFIELDS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the CostDefinitions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCostDefinitions(entity.APDRiskCostDefinition element) {
      __getInternalInterface().addArrayElement(COSTDEFINITIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDescription_L10N_ARRAY(entity.APDCoverable_Description_L10N element) {
      __getInternalInterface().addArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ExposureLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToExposureLabel_L10N_ARRAY(entity.APDCoverable_ExposureLabel_L10N element) {
      __getInternalInterface().addArrayElement(EXPOSURELABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Exposures array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToExposures(entity.APDExposure element) {
      __getInternalInterface().addArrayElement(EXPOSURES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Fields array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFields(entity.APDField element) {
      __getInternalInterface().addArrayElement(FIELDS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the MenuLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToMenuLabel_L10N_ARRAY(entity.APDCoverable_MenuLabel_L10N element) {
      __getInternalInterface().addArrayElement(MENULABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToName_L10N_ARRAY(entity.APDCoverable_Name_L10N element) {
      __getInternalInterface().addArrayElement(NAME_L10N_ARRAY_PROP.get(), element);
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
     * Gets the value of the ApdcoverableparentArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Apdcoverableparent[] getApdcoverableparentArray() {
      return (entity.Apdcoverableparent[])__getInternalInterface().getFieldValue(APDCOVERABLEPARENTARRAY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the ChildrenLabel field.
     * The label given to the tab or reference to the child objects
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChildrenLabel() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHILDRENLABEL_PROP.get());
    }
    
    /**
     * Gets the value of the ChildrenLabel_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverable_ChildrenLabel_L10N[] getChildrenLabel_L10N_ARRAY() {
      return (entity.APDCoverable_ChildrenLabel_L10N[])__getInternalInterface().getFieldValue(CHILDRENLABEL_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition ChildrenLabel_L10N_ARRAYByLanguage on array ChildrenLabel_L10N_ARRAY
     */
    public entity.APDCoverable_ChildrenLabel_L10N getChildrenLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDCoverable_ChildrenLabel_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the ClauseCategories field.
     * The set of clause categories used by this coverable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClauseCategory[] getClauseCategories() {
      return (entity.APDClauseCategory[])__getInternalInterface().getFieldValue(CLAUSECATEGORIES_PROP.get());
    }
    
    /**
     * Gets the value of the Clauses field.
     * All clauses relating to this coverable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClause[] getClauses() {
      return (entity.APDClause[])__getInternalInterface().getFieldValue(CLAUSES_PROP.get());
    }
    
    /**
     * Gets the value of the CoreFields field.
     * Standard PolicyCenter fields that may be referred to in rules
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoreAttribute[] getCoreFields() {
      return (entity.APDCoreAttribute[])__getInternalInterface().getFieldValue(COREFIELDS_PROP.get());
    }
    
    /**
     * Gets the value of the CostDefinitions field.
     * The definitions of costs that attach directly to this coverable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDRiskCostDefinition[] getCostDefinitions() {
      return (entity.APDRiskCostDefinition[])__getInternalInterface().getFieldValue(COSTDEFINITIONS_PROP.get());
    }
    
    /**
     * Gets the value of the CoverableType field.
     * The type of coverable, such as property, liability, etc
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDCoverableType getCoverableType() {
      return (typekey.APDCoverableType)__getInternalInterface().getFieldValue(COVERABLETYPE_PROP.get());
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
     * A description of what the coverable is, e.g. a vehicle
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the Description_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverable_Description_L10N[] getDescription_L10N_ARRAY() {
      return (entity.APDCoverable_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
     */
    public entity.APDCoverable_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDCoverable_Description_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the ExposureLabel field.
     * The label given to the tab or reference to the exposure objects
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExposureLabel() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSURELABEL_PROP.get());
    }
    
    /**
     * Gets the value of the ExposureLabel_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverable_ExposureLabel_L10N[] getExposureLabel_L10N_ARRAY() {
      return (entity.APDCoverable_ExposureLabel_L10N[])__getInternalInterface().getFieldValue(EXPOSURELABEL_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition ExposureLabel_L10N_ARRAYByLanguage on array ExposureLabel_L10N_ARRAY
     */
    public entity.APDCoverable_ExposureLabel_L10N getExposureLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDCoverable_ExposureLabel_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the Exposures field.
     * The types of risk exposure for this coverable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDExposure[] getExposures() {
      return (entity.APDExposure[])__getInternalInterface().getFieldValue(EXPOSURES_PROP.get());
    }
    
    /**
     * Gets the value of the Fields field.
     * Fields available for this coverable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDField[] getFields() {
      return (entity.APDField[])__getInternalInterface().getFieldValue(FIELDS_PROP.get());
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
     * Gets the value of the MenuLabel field.
     * Line detail label or coverable list label used in the UI
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMenuLabel() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MENULABEL_PROP.get());
    }
    
    /**
     * Gets the value of the MenuLabel_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverable_MenuLabel_L10N[] getMenuLabel_L10N_ARRAY() {
      return (entity.APDCoverable_MenuLabel_L10N[])__getInternalInterface().getFieldValue(MENULABEL_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition MenuLabel_L10N_ARRAYByLanguage on array MenuLabel_L10N_ARRAY
     */
    public entity.APDCoverable_MenuLabel_L10N getMenuLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDCoverable_MenuLabel_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the Name field.
     * The name of the line or type of coverable used in the UI as a title
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the Name_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverable_Name_L10N[] getName_L10N_ARRAY() {
      return (entity.APDCoverable_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
     */
    public entity.APDCoverable_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDCoverable_Name_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the Parent field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverable getParent() {
      return (entity.APDCoverable)__getInternalInterface().getFieldValue(PARENT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getParentID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PARENT_PROP.get());
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
     * Gets the value of the RiskLocation field.
     * Defines how the jurisdiction/location of this coverable risk is determined
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDRiskLocationType getRiskLocation() {
      return (typekey.APDRiskLocationType)__getInternalInterface().getFieldValue(RISKLOCATION_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDCoverable getSubtype() {
      return (typekey.APDCoverable)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TypeName field.
     * The entity (or subtype for lines) used to persist this coverable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTypeName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPENAME_PROP.get());
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
     * Gets the value of the HasChildren field.
     * Defines if this coverable can have child coverables.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isHasChildren() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(HASCHILDREN_PROP.get());
    }
    
    /**
     * Gets the value of the HasExposure field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isHasExposure() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(HASEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the HasModifiers field.
     * Whether this coverable has modifiers
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isHasModifiers() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(HASMODIFIERS_PROP.get());
    }
    
    /**
     * Gets the value of the IsAutoNumbered field.
     * Defines if the coverable is automatically numbered (ignored for the line)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isIsAutoNumbered() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ISAUTONUMBERED_PROP.get());
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
     * Gets the value of the SeparateBilling field.
     * If true, this coverable will create an individual debtors charge items for billing
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isSeparateBilling() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATEBILLING_PROP.get());
    }
    
    /**
     * Gets the value of the SeparateCollection field.
     * If true, this coverable will crate an individual debtors charge for cash allocation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isSeparateCollection() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATECOLLECTION_PROP.get());
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Gets the value of the WrittenByThirdParty field.
     * If true, this product is written by another insurance company (captured as an organisation)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isWrittenByThirdParty() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(WRITTENBYTHIRDPARTY_PROP.get());
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
     * Removes the given element from the ApdcoverableparentArray array. This is achieved by marking the element for removal.
     */
    public void removeFromApdcoverableparentArray(entity.Apdcoverableparent element) {
      __getInternalInterface().removeArrayElement(APDCOVERABLEPARENTARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ApdcoverableparentArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromApdcoverableparentArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(APDCOVERABLEPARENTARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ChildrenLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromChildrenLabel_L10N_ARRAY(entity.APDCoverable_ChildrenLabel_L10N element) {
      __getInternalInterface().removeArrayElement(CHILDRENLABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ChildrenLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromChildrenLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CHILDRENLABEL_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ClauseCategories array. This is achieved by marking the element for removal.
     */
    public void removeFromClauseCategories(entity.APDClauseCategory element) {
      __getInternalInterface().removeArrayElement(CLAUSECATEGORIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ClauseCategories array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromClauseCategories(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CLAUSECATEGORIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Clauses array. This is achieved by marking the element for removal.
     */
    public void removeFromClauses(entity.APDClause element) {
      __getInternalInterface().removeArrayElement(CLAUSES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Clauses array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromClauses(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CLAUSES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the CoreFields array. This is achieved by marking the element for removal.
     */
    public void removeFromCoreFields(entity.APDCoreAttribute element) {
      __getInternalInterface().removeArrayElement(COREFIELDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CoreFields array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCoreFields(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(COREFIELDS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
     */
    public void removeFromCostDefinitions(entity.APDRiskCostDefinition element) {
      __getInternalInterface().removeArrayElement(COSTDEFINITIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCostDefinitions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(COSTDEFINITIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromDescription_L10N_ARRAY(entity.APDCoverable_Description_L10N element) {
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
     * Removes the given element from the ExposureLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromExposureLabel_L10N_ARRAY(entity.APDCoverable_ExposureLabel_L10N element) {
      __getInternalInterface().removeArrayElement(EXPOSURELABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ExposureLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromExposureLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(EXPOSURELABEL_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
     */
    public void removeFromExposures(entity.APDExposure element) {
      __getInternalInterface().removeArrayElement(EXPOSURES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromExposures(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(EXPOSURES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Fields array. This is achieved by marking the element for removal.
     */
    public void removeFromFields(entity.APDField element) {
      __getInternalInterface().removeArrayElement(FIELDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Fields array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFields(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FIELDS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the MenuLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromMenuLabel_L10N_ARRAY(entity.APDCoverable_MenuLabel_L10N element) {
      __getInternalInterface().removeArrayElement(MENULABEL_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the MenuLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromMenuLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(MENULABEL_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromName_L10N_ARRAY(entity.APDCoverable_Name_L10N element) {
      __getInternalInterface().removeArrayElement(NAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(NAME_L10N_ARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ApdcoverableparentArray field.
     */
    public void setApdcoverableparentArray(entity.Apdcoverableparent[] value) {
      __getInternalInterface().setFieldValue(APDCOVERABLEPARENTARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChildrenLabel field.
     */
    public void setChildrenLabel(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHILDRENLABEL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChildrenLabel_L10N_ARRAY field.
     */
    public void setChildrenLabel_L10N_ARRAY(entity.APDCoverable_ChildrenLabel_L10N[] value) {
      __getInternalInterface().setFieldValue(CHILDRENLABEL_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClauseCategories field.
     */
    public void setClauseCategories(entity.APDClauseCategory[] value) {
      __getInternalInterface().setFieldValue(CLAUSECATEGORIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Clauses field.
     */
    public void setClauses(entity.APDClause[] value) {
      __getInternalInterface().setFieldValue(CLAUSES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoreFields field.
     */
    public void setCoreFields(entity.APDCoreAttribute[] value) {
      __getInternalInterface().setFieldValue(COREFIELDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CostDefinitions field.
     */
    public void setCostDefinitions(entity.APDRiskCostDefinition[] value) {
      __getInternalInterface().setFieldValue(COSTDEFINITIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverableType field.
     */
    public void setCoverableType(typekey.APDCoverableType value) {
      __getInternalInterface().setFieldValue(COVERABLETYPE_PROP.get(), value);
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
    public void setDescription_L10N_ARRAY(entity.APDCoverable_Description_L10N[] value) {
      __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExposureLabel field.
     */
    public void setExposureLabel(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXPOSURELABEL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExposureLabel_L10N_ARRAY field.
     */
    public void setExposureLabel_L10N_ARRAY(entity.APDCoverable_ExposureLabel_L10N[] value) {
      __getInternalInterface().setFieldValue(EXPOSURELABEL_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Exposures field.
     */
    public void setExposures(entity.APDExposure[] value) {
      __getInternalInterface().setFieldValue(EXPOSURES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fields field.
     */
    public void setFields(entity.APDField[] value) {
      __getInternalInterface().setFieldValue(FIELDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HasChildren field.
     */
    public void setHasChildren(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(HASCHILDREN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HasExposure field.
     */
    public void setHasExposure(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(HASEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HasModifiers field.
     */
    public void setHasModifiers(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(HASMODIFIERS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IsAutoNumbered field.
     */
    public void setIsAutoNumbered(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ISAUTONUMBERED_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the MenuLabel field.
     */
    public void setMenuLabel(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MENULABEL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MenuLabel_L10N_ARRAY field.
     */
    public void setMenuLabel_L10N_ARRAY(entity.APDCoverable_MenuLabel_L10N[] value) {
      __getInternalInterface().setFieldValue(MENULABEL_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Name_L10N_ARRAY field.
     */
    public void setName_L10N_ARRAY(entity.APDCoverable_Name_L10N[] value) {
      __getInternalInterface().setFieldValue(NAME_L10N_ARRAY_PROP.get(), value);
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
     * Sets the value of the Parent field.
     */
    public void setParent(entity.APDCoverable value) {
      __getInternalInterface().setFieldValue(PARENT_PROP.get(), value);
    }
    
    public void setParentID(gw.pl.persistence.core.Key value) {
      setFieldValue(PARENT_PROP.get(), value);
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
     * Sets the value of the RiskLocation field.
     */
    public void setRiskLocation(typekey.APDRiskLocationType value) {
      __getInternalInterface().setFieldValue(RISKLOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SeparateBilling field.
     */
    public void setSeparateBilling(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(SEPARATEBILLING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SeparateCollection field.
     */
    public void setSeparateCollection(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(SEPARATECOLLECTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.APDCoverable value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TypeName field.
     */
    public void setTypeName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TYPENAME_PROP.get(), value);
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
     * Sets the value of the WrittenByThirdParty field.
     */
    public void setWrittenByThirdParty(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(WRITTENBYTHIRDPARTY_PROP.get(), value);
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
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.APDCoverable.class, config);
    com.guidewire._generated.entity.APDCoverableInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.APDCoverable, com.guidewire._generated.entity.APDCoverableInternal>() {
      public java.lang.Object getImplementation(entity.APDCoverable bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDCoverableInternal getInternalInterface(entity.APDCoverable bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.APDCoverable newEmptyInstance() {
        return new entity.APDCoverable((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}