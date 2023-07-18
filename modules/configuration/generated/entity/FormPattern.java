package entity;

/**
 * FormPattern
 * A FormPattern specifies the conditions for attaching a particular form to a policy.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPattern.eti;FormPattern.eix;FormPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "FormPattern")
public class FormPattern extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.FormPattern> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.FormPattern>("entity.FormPattern");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAUSEPATTERNCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClausePatternCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Code");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVERABLETYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoverableType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVERABLETYPEKEY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoverableTypeKey");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVERABLETYPEKEYEXISTSONALL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoverableTypeKeyExistsOnAll");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVERABLETYPELIST_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoverableTypeList");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DESCRIPTION_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Description_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Edition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDORSEMENTNUMBERED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EndorsementNumbered");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FORMNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FormNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMPATTERNADDITIONALINSUREDTYPES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "FormPatternAdditionalInsuredTypes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMPATTERNADDITIONALINTERESTTYPES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "FormPatternAdditionalInterestTypes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMPATTERNCOVTERMS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "FormPatternCovTerms");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMPATTERNCOVERABLEPROPERTIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "FormPatternCoverableProperties");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMPATTERNCOVERAGEPARTTYPES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "FormPatternCoveragePartTypes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMPATTERNJOBS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "FormPatternJobs");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FORMPATTERNPRODUCTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "FormPatternProducts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> GENERICINFERENCECLASS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "GenericInferenceClass");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INFERENCETIME_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "InferenceTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INTERNALGROUPCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InternalGroupCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INTERNALREISSUEONCHANGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InternalReissueOnChange");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INTERNALREMOVALENDORSEMENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InternalRemovalEndorsement");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOOKUPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Lookups");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNEXISTSONALL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PatternExistsOnAll");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYLINEPATTERNCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyLinePatternCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIORITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Priority");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RefCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REMOVALENDORSEMENTFORMNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RemovalEndorsementFormNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> USEINSTEADOFCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UseInsteadOfCode");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.FormPatternInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.api.domain.form.PublicFormPatternFinder finder = com.guidewire.pc.domain.form.FormPatternPublicMethods.finder;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public FormPattern()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public FormPattern(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected FormPattern(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.FormPatternInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.FormPatternInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the FormPatternAdditionalInsuredTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType element) {
    __getInternalInterface().addArrayElement(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the FormPatternAdditionalInterestTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType element) {
    __getInternalInterface().addArrayElement(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the FormPatternCovTerms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternCovTerms(entity.FormPatternCovTerm element) {
    __getInternalInterface().addArrayElement(FORMPATTERNCOVTERMS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the FormPatternCoverableProperties array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternCoverableProperties(entity.FormPatternCoverableProperty element) {
    __getInternalInterface().addArrayElement(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the FormPatternCoveragePartTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType element) {
    __getInternalInterface().addArrayElement(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the FormPatternJobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternJobs(entity.FormPatternJob element) {
    __getInternalInterface().addArrayElement(FORMPATTERNJOBS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the FormPatternProducts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternProducts(entity.FormPatternProduct element) {
    __getInternalInterface().addArrayElement(FORMPATTERNPRODUCTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Lookups array. This is achieved by setting the parent foreign key to this entity instance.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void addToLookups(entity.FormPatternLookup value) {
    ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).addToLookups(value);
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
   * Gets the value of the ClausePatternCode field.
   * The clause pattern associated with this form pattern (used by GenericClauseSelectionForm and GenericCovTermSelectionForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClausePatternCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAUSEPATTERNCODE_PROP.get());
  }
  
  /**
   * Gets the value of the Code field.
   * The Unique ID of the form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODE_PROP.get());
  }
  
  /**
   * Gets the value of the CoverableType field.
   * Fully-qualified name of the Coverable entity type used to infer this form (used by GenericCoverableTypeKeyForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverableType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERABLETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the CoverableTypeKey field.
   * Code of the TypeKey value on CoverableTypeList used to infer this form (used by GenericCoverableTypeKeyForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverableTypeKey() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERABLETYPEKEY_PROP.get());
  }
  
  /**
   * Gets the value of the CoverableTypeList field.
   * Name of the TypeList field on CoverableType used to infer this form (used by GenericCoverableTypeKeyForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverableTypeList() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERABLETYPELIST_PROP.get());
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
   * The human-readable name/description of the form
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
  public entity.FormPattern_Description_L10N[] getDescription_L10N_ARRAY() {
    return (entity.FormPattern_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Description_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"));
  }
  
  /**
   * Gets the value of the Edition field.
   * The edition of the form, as the string MM YY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEdition() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDITION_PROP.get());
  }
  
  /**
   * Gets the value of the FormNumber field.
   * The number of the form, which is set in the FormNumber field of a Form inferred from this pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFormNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FORMNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the FormPatternAdditionalInsuredTypes field.
   * Additional Insured types associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternAdditionalInsuredType[] getFormPatternAdditionalInsuredTypes() {
    return (entity.FormPatternAdditionalInsuredType[])__getInternalInterface().getFieldValue(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get());
  }
  
  /**
   * Gets the value of the FormPatternAdditionalInterestTypes field.
   * Additional Interest types associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternAdditionalInterestType[] getFormPatternAdditionalInterestTypes() {
    return (entity.FormPatternAdditionalInterestType[])__getInternalInterface().getFieldValue(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get());
  }
  
  /**
   * Gets the value of the FormPatternCovTerms field.
   * Cov Term patterns associated with this form pattern's selected clause pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCovTerm[] getFormPatternCovTerms() {
    return (entity.FormPatternCovTerm[])__getInternalInterface().getFieldValue(FORMPATTERNCOVTERMS_PROP.get());
  }
  
  /**
   * Gets the value of the FormPatternCoverableProperties field.
   * The properties of a coverable associated with this form pattern's selected clause pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCoverableProperty[] getFormPatternCoverableProperties() {
    return (entity.FormPatternCoverableProperty[])__getInternalInterface().getFieldValue(FORMPATTERNCOVERABLEPROPERTIES_PROP.get());
  }
  
  /**
   * Gets the value of the FormPatternCoveragePartTypes field.
   * Coverage part types associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCoveragePartType[] getFormPatternCoveragePartTypes() {
    return (entity.FormPatternCoveragePartType[])__getInternalInterface().getFieldValue(FORMPATTERNCOVERAGEPARTTYPES_PROP.get());
  }
  
  /**
   * Gets the value of the FormPatternJobs field.
   * Jobs associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternJob[] getFormPatternJobs() {
    return (entity.FormPatternJob[])__getInternalInterface().getFieldValue(FORMPATTERNJOBS_PROP.get());
  }
  
  /**
   * Gets the value of the FormPatternProducts field.
   * Products associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternProduct[] getFormPatternProducts() {
    return (entity.FormPatternProduct[])__getInternalInterface().getFieldValue(FORMPATTERNPRODUCTS_PROP.get());
  }
  
  /**
   * Gets the value of the GenericInferenceClass field.
   * Fully-qualified name of generic form inference class, used if CustomFormInference system table has no entry for this form.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGenericInferenceClass() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(GENERICINFERENCECLASS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the InferenceTime field.
   * Determines when data related to the form is gathered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FormInferenceTime getInferenceTime() {
    return (typekey.FormInferenceTime)__getInternalInterface().getFieldValue(INFERENCETIME_PROP.get());
  }
  
  /**
   * Gets the value of the InternalGroupCode field.
   * Unique code that groups a set of forms that, for jurisdictional replacement reasons, need to be processed together.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInternalGroupCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INTERNALGROUPCODE_PROP.get());
  }
  
  /**
   * Gets the value of the Lookups field.
   * Availability lookups associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternLookup[] getLookups() {
    return (entity.FormPatternLookup[])__getInternalInterface().getFieldValue(LOOKUPS_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * If this is a line-specific form, the Code of the associated PolicyLinePattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYLINEPATTERNCODE_PROP.get());
  }
  
  /**
   * 
   * @return the set of jurisdictions in which this FormPattern might be available.
   */
  public java.util.Set<typekey.Jurisdiction> getPossibleStates() {
    return ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).getPossibleStates();
  }
  
  /**
   * Gets the value of the Priority field.
   * Determines processing order of form patterns
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPriority() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(PRIORITY_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RefCode field.
   * For customer integration purposes; unused by Guidewire
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRefCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(REFCODE_PROP.get());
  }
  
  /**
   * Gets the value of the RemovalEndorsementFormNumber field.
   * The form number of the removal endorsement that handles this form's removal/replacement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRemovalEndorsementFormNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(REMOVALENDORSEMENTFORMNUMBER_PROP.get());
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
   * Gets the value of the UseInsteadOfCode field.
   * Code of another form pattern to be replaced (within the same group) during jurisdictional replacement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUseInsteadOfCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USEINSTEADOFCODE_PROP.get());
  }
  
  /**
   * 
   * @param state the jurisdiction
   * @param lookupDate the lookup date
   * @param uwCompany the underwriting company
   * @return true if this FormPattern is available for the given lookup date,
   *                    jurisdiction, and underwriting company.
   */
  public boolean isAvailable(typekey.Jurisdiction state, java.util.Date lookupDate, entity.UWCompany uwCompany) {
    return ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).isAvailable(state, lookupDate, uwCompany);
  }
  
  /**
   * Gets the value of the CoverableTypeKeyExistsOnAll field.
   * Must the CoverableTypeKey value be selected on all instances of the coverable on this form's policy line? (used by GenericCoverableTypeKeyForm)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCoverableTypeKeyExistsOnAll() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(COVERABLETYPEKEYEXISTSONALL_PROP.get());
  }
  
  /**
   * Gets the value of the EndorsementNumbered field.
   * True if the form is endorsement numbered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEndorsementNumbered() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ENDORSEMENTNUMBERED_PROP.get());
  }
  
  /**
   * Gets the value of the InternalReissueOnChange field.
   * Form is reissued when its contents change. If false, could either mean that it is a blanket notice that doesn't require changes or that any changes following the initial form issuance will happen via targeted endorsements.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInternalReissueOnChange() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INTERNALREISSUEONCHANGE_PROP.get());
  }
  
  /**
   * Gets the value of the InternalRemovalEndorsement field.
   * Form is a removal endorsement, generated for removals or replacements. Removal endorsements must be contract forms and are always processed last so that they can have access to the set of forms that will need to be removed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInternalRemovalEndorsement() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INTERNALREMOVALENDORSEMENT_PROP.get());
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
   * Gets the value of the PatternExistsOnAll field.
   * Must the product model pattern exist on all the instances of its parent that exist on the policy? (used by GenericClauseSelectionForm and GenericCovTermSelectionForm)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPatternExistsOnAll() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PATTERNEXISTSONALL_PROP.get());
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
   * Removes the given element from the FormPatternAdditionalInsuredTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType element) {
    __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the FormPatternAdditionalInsuredTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternAdditionalInsuredTypes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the FormPatternAdditionalInterestTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType element) {
    __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the FormPatternAdditionalInterestTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternAdditionalInterestTypes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the FormPatternCovTerms array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternCovTerms(entity.FormPatternCovTerm element) {
    __getInternalInterface().removeArrayElement(FORMPATTERNCOVTERMS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the FormPatternCovTerms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternCovTerms(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMPATTERNCOVTERMS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the FormPatternCoverableProperties array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternCoverableProperties(entity.FormPatternCoverableProperty element) {
    __getInternalInterface().removeArrayElement(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the FormPatternCoverableProperties array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternCoverableProperties(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the FormPatternCoveragePartTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType element) {
    __getInternalInterface().removeArrayElement(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the FormPatternCoveragePartTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternCoveragePartTypes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the FormPatternJobs array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternJobs(entity.FormPatternJob element) {
    __getInternalInterface().removeArrayElement(FORMPATTERNJOBS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the FormPatternJobs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternJobs(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMPATTERNJOBS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the FormPatternProducts array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternProducts(entity.FormPatternProduct element) {
    __getInternalInterface().removeArrayElement(FORMPATTERNPRODUCTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the FormPatternProducts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternProducts(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FORMPATTERNPRODUCTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Lookups array. This is achieved by marking the element for removal.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void removeFromLookups(entity.FormPatternLookup value) {
    ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).removeFromLookups(value);
  }
  
  /**
   * Removes the given element from the Lookups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLookups(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOOKUPS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClausePatternCode field.
   */
  public void setClausePatternCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLAUSEPATTERNCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverableType field.
   */
  public void setCoverableType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVERABLETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverableTypeKey field.
   */
  public void setCoverableTypeKey(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVERABLETYPEKEY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverableTypeKeyExistsOnAll field.
   */
  public void setCoverableTypeKeyExistsOnAll(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(COVERABLETYPEKEYEXISTSONALL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverableTypeList field.
   */
  public void setCoverableTypeList(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVERABLETYPELIST_PROP.get(), value);
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
  private void setDescription_L10N_ARRAY(entity.FormPattern_Description_L10N[] value) {
    __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Description_ on array Description_L10N_ARRAY
   */
  public void setDescription_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"), value);
  }
  
  /**
   * Sets the value of the Edition field.
   */
  public void setEdition(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EDITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EndorsementNumbered field.
   */
  public void setEndorsementNumbered(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ENDORSEMENTNUMBERED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormNumber field.
   */
  public void setFormNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FORMNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormPatternAdditionalInsuredTypes field.
   */
  public void setFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType[] value) {
    __getInternalInterface().setFieldValue(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormPatternAdditionalInterestTypes field.
   */
  public void setFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType[] value) {
    __getInternalInterface().setFieldValue(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormPatternCovTerms field.
   */
  public void setFormPatternCovTerms(entity.FormPatternCovTerm[] value) {
    __getInternalInterface().setFieldValue(FORMPATTERNCOVTERMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormPatternCoverableProperties field.
   */
  public void setFormPatternCoverableProperties(entity.FormPatternCoverableProperty[] value) {
    __getInternalInterface().setFieldValue(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormPatternCoveragePartTypes field.
   */
  public void setFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType[] value) {
    __getInternalInterface().setFieldValue(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormPatternJobs field.
   */
  public void setFormPatternJobs(entity.FormPatternJob[] value) {
    __getInternalInterface().setFieldValue(FORMPATTERNJOBS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FormPatternProducts field.
   */
  public void setFormPatternProducts(entity.FormPatternProduct[] value) {
    __getInternalInterface().setFieldValue(FORMPATTERNPRODUCTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GenericInferenceClass field.
   */
  public void setGenericInferenceClass(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(GENERICINFERENCECLASS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InferenceTime field.
   */
  public void setInferenceTime(typekey.FormInferenceTime value) {
    __getInternalInterface().setFieldValue(INFERENCETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InternalGroupCode field.
   */
  public void setInternalGroupCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INTERNALGROUPCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InternalReissueOnChange field.
   */
  public void setInternalReissueOnChange(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INTERNALREISSUEONCHANGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InternalRemovalEndorsement field.
   */
  public void setInternalRemovalEndorsement(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INTERNALREMOVALENDORSEMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Lookups field.
   */
  public void setLookups(entity.FormPatternLookup[] value) {
    __getInternalInterface().setFieldValue(LOOKUPS_PROP.get(), value);
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
   * Sets the value of the PatternExistsOnAll field.
   */
  public void setPatternExistsOnAll(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PATTERNEXISTSONALL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYLINEPATTERNCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Priority field.
   */
  public void setPriority(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(PRIORITY_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RefCode field.
   */
  public void setRefCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(REFCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RemovalEndorsementFormNumber field.
   */
  public void setRemovalEndorsementFormNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(REMOVALENDORSEMENTFORMNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
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
   * Sets the value of the UseInsteadOfCode field.
   */
  public void setUseInsteadOfCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(USEINSTEADOFCODE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.FormPatternInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.FormPattern.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDescription_L10N_ARRAY(entity.FormPattern_Description_L10N element) {
      __getInternalInterface().addArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the FormPatternAdditionalInsuredTypes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType element) {
      __getInternalInterface().addArrayElement(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the FormPatternAdditionalInterestTypes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType element) {
      __getInternalInterface().addArrayElement(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the FormPatternCovTerms array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFormPatternCovTerms(entity.FormPatternCovTerm element) {
      __getInternalInterface().addArrayElement(FORMPATTERNCOVTERMS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the FormPatternCoverableProperties array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFormPatternCoverableProperties(entity.FormPatternCoverableProperty element) {
      __getInternalInterface().addArrayElement(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the FormPatternCoveragePartTypes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType element) {
      __getInternalInterface().addArrayElement(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the FormPatternJobs array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFormPatternJobs(entity.FormPatternJob element) {
      __getInternalInterface().addArrayElement(FORMPATTERNJOBS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the FormPatternProducts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFormPatternProducts(entity.FormPatternProduct element) {
      __getInternalInterface().addArrayElement(FORMPATTERNPRODUCTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Lookups array. This is achieved by setting the parent foreign key to this entity instance.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void addToLookups(entity.FormPatternLookup value) {
      ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).addToLookups(value);
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
     * Gets the value of the ClausePatternCode field.
     * The clause pattern associated with this form pattern (used by GenericClauseSelectionForm and GenericCovTermSelectionForm).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClausePatternCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAUSEPATTERNCODE_PROP.get());
    }
    
    /**
     * Gets the value of the Code field.
     * The Unique ID of the form
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODE_PROP.get());
    }
    
    /**
     * Gets the value of the CoverableType field.
     * Fully-qualified name of the Coverable entity type used to infer this form (used by GenericCoverableTypeKeyForm).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCoverableType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERABLETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the CoverableTypeKey field.
     * Code of the TypeKey value on CoverableTypeList used to infer this form (used by GenericCoverableTypeKeyForm).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCoverableTypeKey() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERABLETYPEKEY_PROP.get());
    }
    
    /**
     * Gets the value of the CoverableTypeList field.
     * Name of the TypeList field on CoverableType used to infer this form (used by GenericCoverableTypeKeyForm).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCoverableTypeList() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERABLETYPELIST_PROP.get());
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
     * The human-readable name/description of the form
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the Description_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPattern_Description_L10N[] getDescription_L10N_ARRAY() {
      return (entity.FormPattern_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
     */
    public entity.FormPattern_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.FormPattern_Description_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the Edition field.
     * The edition of the form, as the string MM YY
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEdition() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDITION_PROP.get());
    }
    
    /**
     * Gets the value of the FormNumber field.
     * The number of the form, which is set in the FormNumber field of a Form inferred from this pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFormNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FORMNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the FormPatternAdditionalInsuredTypes field.
     * Additional Insured types associated with this form pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternAdditionalInsuredType[] getFormPatternAdditionalInsuredTypes() {
      return (entity.FormPatternAdditionalInsuredType[])__getInternalInterface().getFieldValue(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get());
    }
    
    /**
     * Gets the value of the FormPatternAdditionalInterestTypes field.
     * Additional Interest types associated with this form pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternAdditionalInterestType[] getFormPatternAdditionalInterestTypes() {
      return (entity.FormPatternAdditionalInterestType[])__getInternalInterface().getFieldValue(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get());
    }
    
    /**
     * Gets the value of the FormPatternCovTerms field.
     * Cov Term patterns associated with this form pattern's selected clause pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternCovTerm[] getFormPatternCovTerms() {
      return (entity.FormPatternCovTerm[])__getInternalInterface().getFieldValue(FORMPATTERNCOVTERMS_PROP.get());
    }
    
    /**
     * Gets the value of the FormPatternCoverableProperties field.
     * The properties of a coverable associated with this form pattern's selected clause pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternCoverableProperty[] getFormPatternCoverableProperties() {
      return (entity.FormPatternCoverableProperty[])__getInternalInterface().getFieldValue(FORMPATTERNCOVERABLEPROPERTIES_PROP.get());
    }
    
    /**
     * Gets the value of the FormPatternCoveragePartTypes field.
     * Coverage part types associated with this form pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternCoveragePartType[] getFormPatternCoveragePartTypes() {
      return (entity.FormPatternCoveragePartType[])__getInternalInterface().getFieldValue(FORMPATTERNCOVERAGEPARTTYPES_PROP.get());
    }
    
    /**
     * Gets the value of the FormPatternJobs field.
     * Jobs associated with this form pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternJob[] getFormPatternJobs() {
      return (entity.FormPatternJob[])__getInternalInterface().getFieldValue(FORMPATTERNJOBS_PROP.get());
    }
    
    /**
     * Gets the value of the FormPatternProducts field.
     * Products associated with this form pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternProduct[] getFormPatternProducts() {
      return (entity.FormPatternProduct[])__getInternalInterface().getFieldValue(FORMPATTERNPRODUCTS_PROP.get());
    }
    
    /**
     * Gets the value of the GenericInferenceClass field.
     * Fully-qualified name of generic form inference class, used if CustomFormInference system table has no entry for this form.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getGenericInferenceClass() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(GENERICINFERENCECLASS_PROP.get());
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
     * Gets the value of the InferenceTime field.
     * Determines when data related to the form is gathered
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FormInferenceTime getInferenceTime() {
      return (typekey.FormInferenceTime)__getInternalInterface().getFieldValue(INFERENCETIME_PROP.get());
    }
    
    /**
     * Gets the value of the InternalGroupCode field.
     * Unique code that groups a set of forms that, for jurisdictional replacement reasons, need to be processed together.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInternalGroupCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INTERNALGROUPCODE_PROP.get());
    }
    
    /**
     * Gets the value of the Lookups field.
     * Availability lookups associated with this form pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FormPatternLookup[] getLookups() {
      return (entity.FormPatternLookup[])__getInternalInterface().getFieldValue(LOOKUPS_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyLinePatternCode field.
     * If this is a line-specific form, the Code of the associated PolicyLinePattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyLinePatternCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYLINEPATTERNCODE_PROP.get());
    }
    
    /**
     * 
     * @return the set of jurisdictions in which this FormPattern might be available.
     */
    public java.util.Set<typekey.Jurisdiction> getPossibleStates() {
      return ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).getPossibleStates();
    }
    
    /**
     * Gets the value of the Priority field.
     * Determines processing order of form patterns
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getPriority() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(PRIORITY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RefCode field.
     * For customer integration purposes; unused by Guidewire
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRefCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(REFCODE_PROP.get());
    }
    
    /**
     * Gets the value of the RemovalEndorsementFormNumber field.
     * The form number of the removal endorsement that handles this form's removal/replacement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRemovalEndorsementFormNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(REMOVALENDORSEMENTFORMNUMBER_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
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
     * Gets the value of the UseInsteadOfCode field.
     * Code of another form pattern to be replaced (within the same group) during jurisdictional replacement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUseInsteadOfCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USEINSTEADOFCODE_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * 
     * @param state the jurisdiction
     * @param lookupDate the lookup date
     * @param uwCompany the underwriting company
     * @return true if this FormPattern is available for the given lookup date,
     *                    jurisdiction, and underwriting company.
     */
    public boolean isAvailable(typekey.Jurisdiction state, java.util.Date lookupDate, entity.UWCompany uwCompany) {
      return ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).isAvailable(state, lookupDate, uwCompany);
    }
    
    /**
     * Gets the value of the CoverableTypeKeyExistsOnAll field.
     * Must the CoverableTypeKey value be selected on all instances of the coverable on this form's policy line? (used by GenericCoverableTypeKeyForm)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCoverableTypeKeyExistsOnAll() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(COVERABLETYPEKEYEXISTSONALL_PROP.get());
    }
    
    /**
     * Gets the value of the EndorsementNumbered field.
     * True if the form is endorsement numbered
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isEndorsementNumbered() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ENDORSEMENTNUMBERED_PROP.get());
    }
    
    /**
     * Gets the value of the InternalReissueOnChange field.
     * Form is reissued when its contents change. If false, could either mean that it is a blanket notice that doesn't require changes or that any changes following the initial form issuance will happen via targeted endorsements.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInternalReissueOnChange() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INTERNALREISSUEONCHANGE_PROP.get());
    }
    
    /**
     * Gets the value of the InternalRemovalEndorsement field.
     * Form is a removal endorsement, generated for removals or replacements. Removal endorsements must be contract forms and are always processed last so that they can have access to the set of forms that will need to be removed.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInternalRemovalEndorsement() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INTERNALREMOVALENDORSEMENT_PROP.get());
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
     * Gets the value of the PatternExistsOnAll field.
     * Must the product model pattern exist on all the instances of its parent that exist on the policy? (used by GenericClauseSelectionForm and GenericCovTermSelectionForm)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPatternExistsOnAll() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PATTERNEXISTSONALL_PROP.get());
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
     * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromDescription_L10N_ARRAY(entity.FormPattern_Description_L10N element) {
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
     * Removes the given element from the FormPatternAdditionalInsuredTypes array. This is achieved by marking the element for removal.
     */
    public void removeFromFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType element) {
      __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the FormPatternAdditionalInsuredTypes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFormPatternAdditionalInsuredTypes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the FormPatternAdditionalInterestTypes array. This is achieved by marking the element for removal.
     */
    public void removeFromFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType element) {
      __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the FormPatternAdditionalInterestTypes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFormPatternAdditionalInterestTypes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the FormPatternCovTerms array. This is achieved by marking the element for removal.
     */
    public void removeFromFormPatternCovTerms(entity.FormPatternCovTerm element) {
      __getInternalInterface().removeArrayElement(FORMPATTERNCOVTERMS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the FormPatternCovTerms array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFormPatternCovTerms(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMPATTERNCOVTERMS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the FormPatternCoverableProperties array. This is achieved by marking the element for removal.
     */
    public void removeFromFormPatternCoverableProperties(entity.FormPatternCoverableProperty element) {
      __getInternalInterface().removeArrayElement(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the FormPatternCoverableProperties array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFormPatternCoverableProperties(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the FormPatternCoveragePartTypes array. This is achieved by marking the element for removal.
     */
    public void removeFromFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType element) {
      __getInternalInterface().removeArrayElement(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the FormPatternCoveragePartTypes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFormPatternCoveragePartTypes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the FormPatternJobs array. This is achieved by marking the element for removal.
     */
    public void removeFromFormPatternJobs(entity.FormPatternJob element) {
      __getInternalInterface().removeArrayElement(FORMPATTERNJOBS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the FormPatternJobs array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFormPatternJobs(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMPATTERNJOBS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the FormPatternProducts array. This is achieved by marking the element for removal.
     */
    public void removeFromFormPatternProducts(entity.FormPatternProduct element) {
      __getInternalInterface().removeArrayElement(FORMPATTERNPRODUCTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the FormPatternProducts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFormPatternProducts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FORMPATTERNPRODUCTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Lookups array. This is achieved by marking the element for removal.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void removeFromLookups(entity.FormPatternLookup value) {
      ((com.guidewire.pc.domain.form.FormPatternPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.form.FormPatternPublicMethods")).removeFromLookups(value);
    }
    
    /**
     * Removes the given element from the Lookups array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLookups(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOOKUPS_PROP.get(), elementID);
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
     * Sets the value of the ClausePatternCode field.
     */
    public void setClausePatternCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLAUSEPATTERNCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Code field.
     */
    public void setCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverableType field.
     */
    public void setCoverableType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVERABLETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverableTypeKey field.
     */
    public void setCoverableTypeKey(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVERABLETYPEKEY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverableTypeKeyExistsOnAll field.
     */
    public void setCoverableTypeKeyExistsOnAll(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(COVERABLETYPEKEYEXISTSONALL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverableTypeList field.
     */
    public void setCoverableTypeList(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVERABLETYPELIST_PROP.get(), value);
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
    public void setDescription_L10N_ARRAY(entity.FormPattern_Description_L10N[] value) {
      __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Edition field.
     */
    public void setEdition(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EDITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EndorsementNumbered field.
     */
    public void setEndorsementNumbered(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ENDORSEMENTNUMBERED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormNumber field.
     */
    public void setFormNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FORMNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormPatternAdditionalInsuredTypes field.
     */
    public void setFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType[] value) {
      __getInternalInterface().setFieldValue(FORMPATTERNADDITIONALINSUREDTYPES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormPatternAdditionalInterestTypes field.
     */
    public void setFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType[] value) {
      __getInternalInterface().setFieldValue(FORMPATTERNADDITIONALINTERESTTYPES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormPatternCovTerms field.
     */
    public void setFormPatternCovTerms(entity.FormPatternCovTerm[] value) {
      __getInternalInterface().setFieldValue(FORMPATTERNCOVTERMS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormPatternCoverableProperties field.
     */
    public void setFormPatternCoverableProperties(entity.FormPatternCoverableProperty[] value) {
      __getInternalInterface().setFieldValue(FORMPATTERNCOVERABLEPROPERTIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormPatternCoveragePartTypes field.
     */
    public void setFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType[] value) {
      __getInternalInterface().setFieldValue(FORMPATTERNCOVERAGEPARTTYPES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormPatternJobs field.
     */
    public void setFormPatternJobs(entity.FormPatternJob[] value) {
      __getInternalInterface().setFieldValue(FORMPATTERNJOBS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FormPatternProducts field.
     */
    public void setFormPatternProducts(entity.FormPatternProduct[] value) {
      __getInternalInterface().setFieldValue(FORMPATTERNPRODUCTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GenericInferenceClass field.
     */
    public void setGenericInferenceClass(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(GENERICINFERENCECLASS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InferenceTime field.
     */
    public void setInferenceTime(typekey.FormInferenceTime value) {
      __getInternalInterface().setFieldValue(INFERENCETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InternalGroupCode field.
     */
    public void setInternalGroupCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INTERNALGROUPCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InternalReissueOnChange field.
     */
    public void setInternalReissueOnChange(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INTERNALREISSUEONCHANGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InternalRemovalEndorsement field.
     */
    public void setInternalRemovalEndorsement(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INTERNALREMOVALENDORSEMENT_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Lookups field.
     */
    public void setLookups(entity.FormPatternLookup[] value) {
      __getInternalInterface().setFieldValue(LOOKUPS_PROP.get(), value);
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
     * Sets the value of the PatternExistsOnAll field.
     */
    public void setPatternExistsOnAll(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PATTERNEXISTSONALL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyLinePatternCode field.
     */
    public void setPolicyLinePatternCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYLINEPATTERNCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Priority field.
     */
    public void setPriority(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(PRIORITY_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RefCode field.
     */
    public void setRefCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(REFCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RemovalEndorsementFormNumber field.
     */
    public void setRemovalEndorsementFormNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(REMOVALENDORSEMENTFORMNUMBER_PROP.get(), value);
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
     * Sets the value of the UseInsteadOfCode field.
     */
    public void setUseInsteadOfCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(USEINSTEADOFCODE_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.form.FormPatternPublicMethods", "com.guidewire.pc.domain.form.impl.FormPatternImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.form.impl.FormPatternImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.form.impl.FormPatternImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.FormPattern.class, config);
    com.guidewire._generated.entity.FormPatternInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.FormPattern, com.guidewire._generated.entity.FormPatternInternal>() {
      public java.lang.Object getImplementation(entity.FormPattern bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.FormPatternInternal getInternalInterface(entity.FormPattern bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.FormPattern newEmptyInstance() {
        return new entity.FormPattern((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}