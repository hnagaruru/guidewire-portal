package entity;

/**
 * PolicyLocation
 * Policy location specific information.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLocation.eti;PolicyLocation.eix;PolicyLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PolicyLocation")
public class PolicyLocation extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, entity.AnswerContainer, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, gw.api.copier.EffDatedCopyable, gw.api.domain.RefersOutOfDomainGraph, gw.api.domain.account.AccountSyncable, gw.api.effdate.UniqueOnPolicyPeriod, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.reinsurance.ReinsurableCoverable {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PolicyLocation, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PolicyLocation, entity.PolicyPeriod>("entity.PolicyLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNTLOCATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AccountLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1INTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1Internal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1KANJIINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1KanjiInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2INTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2Internal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2KANJIINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2KanjiInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE3INTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine3Internal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ADDRESSTYPEINTERNAL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AddressTypeInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BUILDINGAUTONUMBERSEQ_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BuildingAutoNumberSeq");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BUILDINGS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Buildings");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEXBUREAUINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEXBureauInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEXINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEXInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYKANJIINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityKanjiInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYKANJIINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityKanjiInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COUNTRYINTERNAL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CountryInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTYINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CountyInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTIONINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DescriptionInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EMPLOYEECOUNTINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EmployeeCountInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> FIREPROTECTCLASS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "FireProtectClass");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INDUSTRYCODE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "IndustryCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOCATIONANSWERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LocationAnswers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOCATIONNAMEDINSUREDS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LocationNamedInsureds");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCATIONNUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LocationNum");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOCATIONRISKASSESSMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LocationRiskAssessments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOCATIONRISKS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LocationRisks");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTORE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "OutboundLocationRiskAssessmentTempStore");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "OutboundLocationRiskAssessmentTempStoreArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCodeInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODEINTERNALDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCodeInternalDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATEINTERNAL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "StateInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> TAXLOCATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "TaxLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TERRITORYCODES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "TerritoryCodes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VALIDUNTILINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ValidUntilInternal");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PolicyLocationInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  public PolicyLocation(entity.PolicyPeriod branch)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList());
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  public PolicyLocation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList());
  }
  
  protected PolicyLocation(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PolicyLocationInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.PolicyLocationInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the Buildings array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildings(entity.Building element) {
    __getInternalInterface().addArrayElement(BUILDINGS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LocationAnswers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationAnswers(entity.LocationAnswer element) {
    __getInternalInterface().addArrayElement(LOCATIONANSWERS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LocationNamedInsureds array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationNamedInsureds(entity.LocationNamedInsured element) {
    __getInternalInterface().addArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LocationRiskAssessments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationRiskAssessments(entity.LocationRiskAssessment element) {
    __getInternalInterface().addArrayElement(LOCATIONRISKASSESSMENTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LocationRisks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationRisks(entity.LocationRisk element) {
    __getInternalInterface().addArrayElement(LOCATIONRISKS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the TerritoryCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTerritoryCodes(entity.TerritoryCode element) {
    __getInternalInterface().addArrayElement(TERRITORYCODES_PROP.get(), element);
  }
  
  /**
   * Assigns the source to this account syncable, potentially initializing the initial fields.
   * This method should only be called during create or merge.
   * @param source The source of this account syncable
   */
  public void assignToSource(entity.KeyableBean source) {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).assignToSource(source);
  }
  
  /**
   * Checks all answers stored on this container against the availability of the questions defined in
   * the product model.
   * @return a list of issues encountered
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel() {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel(gw.api.productmodel.QuestionSet[] questionSetsToSync) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel(questionSetsToSync);
  }
  
  /**
   * Clears any Question/QuestionFilter dependencies that have been cached. Should be
   * called before displaying a question set in the app.
   */
  public void clearQuestionDependencies() {
    ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).clearQuestionDependencies();
  }
  
  public entity.PolicyLocation clone() {
    return (entity.PolicyLocation)__getInternalInterface().cloneUntyped();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public void copyBasicFieldsFromBeanUntyped(entity.EffDated bean) {
    ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyBasicFieldsFromBeanUntyped(bean);
  }
  
  public void copyFromBeanUntyped(entity.EffDated bean) {
    ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyFromBeanUntyped(bean);
  }
  
  /**
   * Copies the policy contract data from the account level into the account syncable.
   * Since copying unsynced policy contact data is typically a programming error, this
   * method throws an IllegalStateException if this account syncable is not sycned to
   * the account.
   */
  public void copyPolicyContractData() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).copyPolicyContractData();
  }
  
  /**
   * Copies the policy contract data from the account level into the account syncable
   * without checking if this account syncable is synced.  This method is typically used
   * for initialization where overwriting the policy-level values is not a concern, and
   * it should be used with care.
   */
  public void copyPolicyContractDataUnchecked() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).copyPolicyContractDataUnchecked();
  }
  
  /**
   * Creates an answer for the given question and sets its value to the question's
   * default answer value, if any.
   * @param question the question to create an answer for
   * @throws IllegalStateException if an answer has already been allocated for the
   * question.
   * @return the created answer
   */
  public entity.PCAnswerDelegate createAnswer(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).createAnswer(question);
  }
  
  /**
   * Create the reinsurable risk from this reinsurable coverable.
   * @return the applicable reinsurable risk
   */
  public entity.Reinsurable createReinsurableRisk() {
    return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).createReinsurableRisk();
  }
  
  public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
  }
  
  public java.lang.Object genKey() {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
  }
  
  public gw.api.effdate.EffDatedUniqueKey genUniqueKey() {
    return ((gw.api.effdate.UniqueOnPolicyPeriod)__getDelegateManager().getImplementation("gw.api.effdate.UniqueOnPolicyPeriod")).genUniqueKey();
  }
  
  /**
   * Gets the value of the AccountLocation field.
   * The account location this policy location may be synced with.  While the policy location contains policy contract information, the account location contains shared role information.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountLocation getAccountLocation() {
    return (entity.AccountLocation)__getInternalInterface().getFieldValue(ACCOUNTLOCATION_PROP.get());
  }
  
  /**
   * Returns the list of account synced fields for this account syncable.
   */
  public java.util.Set<gw.api.domain.account.AccountSyncedField<? extends gw.api.domain.account.AccountSyncable, ? extends java.lang.Object>> getAccountSyncedFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getAccountSyncedFields();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1Internal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1INTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1KanjiInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJIINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2Internal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2INTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2KanjiInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJIINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine3Internal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE3INTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddressType getAddressTypeInternal() {
    return (typekey.AddressType)__getInternalInterface().getFieldValue(ADDRESSTYPEINTERNAL_PROP.get());
  }
  
  /**
   * Returns the answer to the given question, or null if none has been allocated
   * yet.
   * @param question the question to get the answer for
   * @return the answer for the given question
   */
  public entity.PCAnswerDelegate getAnswer(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswer(question);
  }
  
  /**
   * Gets the actual value of the answer. If the answer is undefined on this
   * entity, use the default answer if there is one, else null.
   * @param question the question to get the answer value for
   * @return the answer value
   */
  public java.lang.Object getAnswerValue(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswerValue(question);
  }
  
  public entity.PCAnswerDelegate[] getAnswers() {
    return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAnswers();
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
  
  /**
   * 
   * @return LocationForRiskAssessment that is associated to this PolicyLocation
   */
  public entity.OutboundLocationRiskAssessmentTempStore getAssociatedLocationRiskAssessmentTempStore() {
    return ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).getAssociatedLocationRiskAssessmentTempStore();
  }
  
  public entity.PolicyPeriod getAssociatedPolicyPeriod() {
    return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAssociatedPolicyPeriod();
  }
  
  public entity.PolicyLocation getBasedOn() {
    return (entity.PolicyLocation)__getInternalInterface().getBasedOnUntyped();
  }
  
  /**
   * Return the bean from which this bean was based (cloned), or null if this
   * bean is new to this branch. This value will never change for the life of
   * the bean as its set when the bean is first created, either as a bean new to
   * this branch (in which case it's null) or when this bean is cloned from a
   * bean in an existing branch when its branch is created.
   * <p/>
   * When compiling DiffItems a bean is always compared to it's based-on bean to
   * discover what fields on it have changed. If there is no based-on bean then
   * we know that this bean was new to this branch.
   * @return Bean on which this bean was based (cloned), or null if this bean is
   *         new to this branch.
   */
  public entity.EffDated getBasedOnUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getBasedOnValue() {
    return (entity.PolicyLocation)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Return the branch associated with this bean. This can never be null, and
   * will never change. A bean will always be associated with the same branch.
   * @return Branch associated with this bean
   */
  public entity.EffDatedBranch getBranchUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
  }
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the BuildingAutoNumberSeq field.
   * Sequence to autonumber buildings
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getBuildingAutoNumberSeq() {
    return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(BUILDINGAUTONUMBERSEQ_PROP.get());
  }
  
  /**
   * Gets the value of the Buildings field.
   * Set of buildings at a location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Building[] getBuildings() {
    return (entity.Building[])__getInternalInterface().getFieldValue(BUILDINGS_PROP.get());
  }
  
  /**
   * Gets the value of the CEDEXBureauInternal field.
   * CEDEX: Special business mail delivery bureau (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCEDEXBureauInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CEDEXBUREAUINTERNAL_PROP.get());
  }
  
  /**
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYINTERNALDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanjiInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJIINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanjiInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJIINTERNALDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountryInternal() {
    return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRYINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCountyInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COUNTYINTERNAL_PROP.get());
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescriptionInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTIONINTERNAL_PROP.get());
  }
  
  /**
   * Get an effective date independent key for this bean. This key will include
   * the BranchId and the FixedId. This is the key for the "logical" bean.
   * <p/>
   * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
   * the same throughout its effective range (or its period range) so there is
   * no difference between the "logical" bean and the actual bean.
   */
  public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
  }
  
  /**
   * Get the date when this bean starts being effective.
   * @return Date when this bean starts being effective.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getEmployeeCountInternal() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(EMPLOYEECOUNTINTERNAL_PROP.get());
  }
  
  public java.lang.String getErrorMessage(entity.EffDated[] duplicateBeans) {
    return ((gw.api.effdate.UniqueOnPolicyPeriod)__getDelegateManager().getImplementation("gw.api.effdate.UniqueOnPolicyPeriod")).getErrorMessage(duplicateBeans);
  }
  
  /**
   * Get the date when this bean expires.
   * @return Date when this bean expires.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
  }
  
  /**
   * Gets the value of the FireProtectClass field.
   * Fire protection class.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FireProtectClass getFireProtectClass() {
    return (typekey.FireProtectClass)__getInternalInterface().getFieldValue(FIREPROTECTCLASS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getFixed() {
    return (entity.PolicyLocation)__getInternalInterface().getFieldValue(FIXED_PROP.get());
  }
  
  /**
   * Get the logical ID for this bean, not the row ID. All row
   * @return Logical ID for this bean, not the row ID.
   */
  public gw.pl.persistence.core.Key getFixedId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Indicates that this account syncable is new or its policy entity fields
   * have been changed.
   */
  public boolean getHasChangedPolicyEntityFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasChangedPolicyEntityFields();
  }
  
  /**
   * Indicates that all the account syncable's policy entity fields are null.
   */
  public boolean getHasEmptyPolicyEntityFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasEmptyPolicyEntityFields();
  }
  
  /**
   * Indicates that all the account synced fields have the same value at both the account and policy levels.
   */
  public boolean getHasMatchingAccountAndPolicyFields() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasMatchingAccountAndPolicyFields();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IndustryCode field.
   * Industry Code of Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode() {
    return (entity.IndustryCode)__getInternalInterface().getFieldValue(INDUSTRYCODE_PROP.get());
  }
  
  /**
   * Get the version list for an effective dated foreign key.  You need this
   * method because it's the only way to get the version list for a foreign key
   * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
   * since you can't traverse the array and there are no methods on
   * EffDatedVersionList to access a FK (only arrays).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key
   * @return Version list for an effective dated foreign key
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
  }
  
  /**
   * Gets the value of the LocationAnswers field.
   * Set of answers for this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationAnswer[] getLocationAnswers() {
    return (entity.LocationAnswer[])__getInternalInterface().getFieldValue(LOCATIONANSWERS_PROP.get());
  }
  
  /**
   * Gets the value of the LocationNamedInsureds field.
   * The additional named insured covered at this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationNamedInsured[] getLocationNamedInsureds() {
    return (entity.LocationNamedInsured[])__getInternalInterface().getFieldValue(LOCATIONNAMEDINSUREDS_PROP.get());
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
   * Gets the value of the LocationRiskAssessments field.
   * Risk assessment result for this policy location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRiskAssessment[] getLocationRiskAssessments() {
    return (entity.LocationRiskAssessment[])__getInternalInterface().getFieldValue(LOCATIONRISKASSESSMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the LocationRisks field.
   * A reinsurable risk associated with a Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationRisk[] getLocationRisks() {
    return (entity.LocationRisk[])__getInternalInterface().getFieldValue(LOCATIONRISKS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundLocationRiskAssessmentTempStore getOutboundLocationRiskAssessmentTempStore() {
    return (entity.OutboundLocationRiskAssessmentTempStore)__getInternalInterface().getFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTORE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundLocationRiskAssessmentTempStore[] getOutboundLocationRiskAssessmentTempStoreArray() {
    return (entity.OutboundLocationRiskAssessmentTempStore[])__getInternalInterface().getFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeInternal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEINTERNAL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeInternalDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEINTERNALDENORM_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Recalculates question dependencies if they have been cleared (see {@link #clearQuestionDependencies}),
   * then returns all questions that are dependent on the given question's answers.
   * @param question the question to get dependencies for
   * @return the set of questions on which the given question depends
   */
  public java.util.Set<gw.api.productmodel.Question> getQuestionDependencies(gw.api.productmodel.Question question) {
    return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getQuestionDependencies(question);
  }
  
  public gw.api.productmodel.QuestionSet[] getQuestionSets() {
    return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getQuestionSets();
  }
  
  public java.util.Map<gw.entity.ILinkPropertyInfo, entity.KeyableBean> getReferencedBeans() {
    return ((gw.api.domain.RefersOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.RefersOutOfDomainGraph")).getReferencedBeans();
  }
  
  /**
   * Find reinsurable risk associated with reinsurable coverable
   * @return associated reinsurable risk if it exists, else null
   */
  public entity.Reinsurable[] getReinsurables() {
    return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).getReinsurables();
  }
  
  public entity.PolicyLocation getSlice(java.util.Date sliceDate) {
    return (entity.PolicyLocation)getSliceUntyped(sliceDate);
  }
  
  /**
   * Date which this bean is "sliced" or viewed. If you traverse from this bean
   * to another bean or beans via a link or array, only beans that are effective
   * at this slice date will be returned. The beans that are returned will be
   * sliced at this date as well. If NULL then the bean is in "window" mode.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return Date which bean is sliced or null if in window mode.
   */
  public java.util.Date getSliceDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
  }
  
  /**
   * Slice this bean at a particular date. This bean can be unsliced or sliced
   * when this method is called. The slice date must be within the effective
   * range of this bean or an exception will be thrown. If you want to get at
   * the version of this "logical" bean at a date outside of this particular
   * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
   * @param sliceDate Date at which to slice this bean.
   * @return Sliced version of the bean.
   */
  public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getStateInternal() {
    return (typekey.State)__getInternalInterface().getFieldValue(STATEINTERNAL_PROP.get());
  }
  
  /**
   * Gets the value of the TaxLocation field.
   * The TaxLocation for this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TaxLocation getTaxLocation() {
    return (entity.TaxLocation)__getInternalInterface().getFieldValue(TAXLOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the TerritoryCodes field.
   * The rating territory codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TerritoryCode[] getTerritoryCodes() {
    return (entity.TerritoryCode[])__getInternalInterface().getFieldValue(TERRITORYCODES_PROP.get());
  }
  
  /**
   * Returns a list of the existing {@link TerritoryCode Territory Codes} for a given PolicyLine
   * specified by its {@link PolicyLinePattern Pattern}
   * @param pattern 
   */
  public java.util.List<entity.TerritoryCode> getTerritoryCodesForLine(gw.api.productmodel.PolicyLinePattern pattern) {
    return ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).getTerritoryCodesForLine(pattern);
  }
  
  public entity.PolicyLocation getUnsliced() {
    return (entity.PolicyLocation)getUnslicedUntyped();
  }
  
  /**
   * Return the unsliced version of this bean. If the bean is already unsliced
   * then returns itself.
   * @return An unsliced version of this bean. If the bean is already unsliced
   *         then returns itself.
   */
  public entity.EffDated getUnslicedUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
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
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getValidUntilInternal() {
    return (java.util.Date)__getInternalInterface().getFieldValue(VALIDUNTILINTERNAL_PROP.get());
  }
  
  public entity.windowed.PolicyLocationVersionList getVersionList() {
    return (entity.windowed.PolicyLocationVersionList)getVersionListUntyped();
  }
  
  /**
   * Get the version list for this bean. An EffDatedVersionList is a
   * representation of a logical bean through its effective range. For example,
   * if a bean has changes at three separate effective dates then the version
   * list will comprise 3 versions of the bean, one for each of these dates.
   * <p/>
   * You can use an EffDatedVersionList to traverse from this bean to other
   * linked beans in window mode. Recall that in window mode you cannot traverse
   * links directly from the bean.
   * <p/>
   * Although an EffDatedBranch only has a single version throughout its
   * effective range you can still get its EffDatedVersionList in order to
   * navigate in window mode from the branch to its related EffDateds.
   * @return Version list for this bean
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
  }
  
  /**
   * Handle the pre-update for this account syncable.
   */
  public void handlePreUpdate() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).handlePreUpdate();
  }
  
  /**
   * Initializes BuildingAutoNumberSeq on PolicyPeriod.
   * @param bundle the bundle in which to do the auto-numbering
   */
  public void initializeBuildingAutoNumberSequence(gw.pl.persistence.core.Bundle bundle) {
    ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).initializeBuildingAutoNumberSequence(bundle);
  }
  
  /**
   * Gets the value of the CEDEXInternal field.
   * CEDEX: Special business mail delivery flag (France)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEXInternal() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEXINTERNAL_PROP.get());
  }
  
  /**
   * Given a date, check whether it falls within this bean's effective window.
   * @param effDate Date to check
   * @return True if date is within this bean's effective window.
   */
  public boolean isEffective(java.util.Date effDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
  }
  
  /**
   * Returns true if the given field has been modified relative to the based-on
   * bean and false if this bean has no based-on or if the field has the same
   * value as for the based-on bean.  This method only works with non-array
   * fields.
   * @param field the name of the property to check for changes, which must
   *              correspond to a database column (i.e. it can't be an array or
   *              a synthetic property)
   * @return true if the field has a different value for the based-on bean,
   *         false otherwise
   */
  public boolean isFieldChangedFromBasedOn(java.lang.String field) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * 
   * @return true if this location is considered in use by any of the PolicyLines in the PolicyPeriod
   */
  public boolean isInUse() {
    return ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).isInUse();
  }
  
  public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).isLogicalMatchUntyped(bean);
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
   * Check if this bean or branch has been promoted. A promoted bean is also
   * locked and cannot be changed.
   * <p/>
   * An EffDated is never promoted independent of its related
   * EffDatedBranch, meaning if the branch is promoted every bean in the graph
   * will be promoted, and if the branch is not promoted no bean in the graph
   * can be promoted.
   * @return True if promoted.
   */
  public boolean isPromoted() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
  }
  
  /**
   * Whether this bean is sliced. If a bean is sliced then you can navigate from
   * this bean to another bean or beans via a link or array, if it's unsliced
   * (in "window" mode) you cannot navigate from this bean.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return 
   */
  public boolean isSlice() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
  }
  
  /**
   * Indicates if the account syncable has its values synced to the account level.
   * An account syncable should be synced to the account when the account syncable
   * is allowed to change and when the account level data is more accurate.
   */
  public boolean isSyncedToAccount() {
    return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).isSyncedToAccount();
  }
  
  /**
   * Returns true if the other is the same reinsurable coverable.
   * @param other the object to compare
   * @return true if the same
   */
  public boolean isTheSame(gw.api.reinsurance.ReinsurableCoverable other) {
    return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).isTheSame(other);
  }
  
  /**
   * Prepare the account syncable so that the diff code can operate correctly on it.
   */
  public void prepareForDiff() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForDiff();
  }
  
  /**
   * Prepare the account syncable so that the job edit code can operate correctly on it.
   */
  public void prepareForJobEdit() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForJobEdit();
  }
  
  /**
   * Prepare the account syncable so that the job start code can operate correctly on it.
   */
  public void prepareForJobStart() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForJobStart();
  }
  
  /**
   * Prepare the account syncable so that the OOS merge code can operate correctly on it.
   */
  public void prepareForOOSMerge() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForOOSMerge();
  }
  
  /**
   * Prepare the account syncable so that the promotion code can operate correctly on it.
   */
  public void prepareForPromote() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForPromote();
  }
  
  /**
   * Prepare the account syncable so that the quote code can operate correctly on it.
   */
  public void prepareForQuote() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForQuote();
  }
  
  public void recordExternalReferences() {
    ((gw.api.domain.RefersOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.RefersOutOfDomainGraph")).recordExternalReferences();
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
   * Refreshes any necessary account information to ensure this account syncable will use the
   * most current data when calling the other methods on this interface.
   */
  public void refreshAccountInformation() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).refreshAccountInformation();
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
   * Removes the answer, if any, to the specified question.
   * @param question the question to remove the answer for
   */
  public void removeAnswer(gw.api.productmodel.Question question) {
    ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).removeAnswer(question);
  }
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildings(entity.Building element) {
    __getInternalInterface().removeArrayElement(BUILDINGS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildings(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(BUILDINGS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationAnswers(entity.LocationAnswer element) {
    __getInternalInterface().removeArrayElement(LOCATIONANSWERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationAnswers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOCATIONANSWERS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationNamedInsureds(entity.LocationNamedInsured element) {
    __getInternalInterface().removeArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationNamedInsureds(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LocationRiskAssessments array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationRiskAssessments(entity.LocationRiskAssessment element) {
    __getInternalInterface().removeArrayElement(LOCATIONRISKASSESSMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LocationRiskAssessments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationRiskAssessments(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOCATIONRISKASSESSMENTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationRisks(entity.LocationRisk element) {
    __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationRisks(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the TerritoryCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromTerritoryCodes(entity.TerritoryCode element) {
    __getInternalInterface().removeArrayElement(TERRITORYCODES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the TerritoryCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTerritoryCodes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(TERRITORYCODES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AccountLocation field.
   */
  private void setAccountLocation(entity.AccountLocation value) {
    __getInternalInterface().setFieldValue(ACCOUNTLOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1Internal field.
   */
  private void setAddressLine1Internal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1INTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1KanjiInternal field.
   */
  private void setAddressLine1KanjiInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJIINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2Internal field.
   */
  private void setAddressLine2Internal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2INTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2KanjiInternal field.
   */
  private void setAddressLine2KanjiInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJIINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine3Internal field.
   */
  private void setAddressLine3Internal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3INTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressTypeInternal field.
   */
  private void setAddressTypeInternal(typekey.AddressType value) {
    __getInternalInterface().setFieldValue(ADDRESSTYPEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.PolicyLocation value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchValue field.
   */
  private void setBranchValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BuildingAutoNumberSeq field.
   */
  public void setBuildingAutoNumberSeq(entity.AutoNumberSequence value) {
    __getInternalInterface().setFieldValue(BUILDINGAUTONUMBERSEQ_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Buildings field.
   */
  public void setBuildings(entity.Building[] value) {
    __getInternalInterface().setFieldValue(BUILDINGS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CEDEXBureauInternal field.
   */
  public void setCEDEXBureauInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CEDEXBUREAUINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CEDEXInternal field.
   */
  public void setCEDEXInternal(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CEDEXINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityInternal field.
   */
  private void setCityInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityInternalDenorm field.
   */
  private void setCityInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYINTERNALDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityKanjiInternal field.
   */
  private void setCityKanjiInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYKANJIINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityKanjiInternalDenorm field.
   */
  private void setCityKanjiInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYKANJIINTERNALDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CountryInternal field.
   */
  private void setCountryInternal(typekey.Country value) {
    __getInternalInterface().setFieldValue(COUNTRYINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CountyInternal field.
   */
  private void setCountyInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COUNTYINTERNAL_PROP.get(), value);
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
   * Sets the value of the DescriptionInternal field.
   */
  private void setDescriptionInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTIONINTERNAL_PROP.get(), value);
  }
  
  /**
   * Change when the effective date of this bean. You cannot change the
   * effective date when in slice mode. In window mode there are no
   * restrictions.
   * <p/>
   * The effective date must be non-null. It must also come on or before the
   * expiration date and within the period range of its branch.
   * @param effDate New effective date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setEffectiveDate(java.util.Date effDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
  }
  
  /**
   * Change the effective and expiration dates together. This can only be called
   * in window mode. Both dates must be non-null. The effective date must be
   * before or equal to the expiration date. Both dates must be within the
   * period range of its branch.
   * @param effDate New effective date
   * @param expDate New expiration date
   */
  public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
  }
  
  /**
   * Sets the value of the EmployeeCountInternal field.
   */
  private void setEmployeeCountInternal(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(EMPLOYEECOUNTINTERNAL_PROP.get(), value);
  }
  
  /**
   * Change when the expiration date of this bean. You cannot change the
   * expiration date when in slice mode UNLESS the bean is new to its branch and
   * you're not setting the expiration date to the effective date (zero width).
   * In window mode there are no restrictions.
   * <p/>
   * The expiration date must be non-null. It must also come on or after the
   * effective date and within the period range of its branch.
   * @param expDate New expiration date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setExpirationDate(java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
  }
  
  /**
   * Sets the value of the FireProtectClass field.
   */
  public void setFireProtectClass(typekey.FireProtectClass value) {
    __getInternalInterface().setFieldValue(FIREPROTECTCLASS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.PolicyLocation value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
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
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value) {
    __getInternalInterface().setFieldValue(INDUSTRYCODE_PROP.get(), value);
  }
  
  /**
   * Set a foreign key by passing in an EFfDatedKey (effectively the
   * EffDatedVersionList or FixedId of the bean). You need this method because
   * it's the only way to set a foreign key given a FixedId (and no context for
   * when that FixeId might be effective).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key to set
   * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
   *             FixedId of the bean)
   */
  public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
  }
  
  /**
   * Sets the value of the LocationAnswers field.
   */
  public void setLocationAnswers(entity.LocationAnswer[] value) {
    __getInternalInterface().setFieldValue(LOCATIONANSWERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationNamedInsureds field.
   */
  public void setLocationNamedInsureds(entity.LocationNamedInsured[] value) {
    __getInternalInterface().setFieldValue(LOCATIONNAMEDINSUREDS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationNum field.
   */
  public void setLocationNum(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(LOCATIONNUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationRiskAssessments field.
   */
  public void setLocationRiskAssessments(entity.LocationRiskAssessment[] value) {
    __getInternalInterface().setFieldValue(LOCATIONRISKASSESSMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LocationRisks field.
   */
  public void setLocationRisks(entity.LocationRisk[] value) {
    __getInternalInterface().setFieldValue(LOCATIONRISKS_PROP.get(), value);
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
   * Sets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  private void setOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore value) {
    __getInternalInterface().setFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTORE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OutboundLocationRiskAssessmentTempStoreArray field.
   */
  private void setOutboundLocationRiskAssessmentTempStoreArray(entity.OutboundLocationRiskAssessmentTempStore[] value) {
    __getInternalInterface().setFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCodeInternal field.
   */
  private void setPostalCodeInternal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCodeInternalDenorm field.
   */
  private void setPostalCodeInternalDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODEINTERNALDENORM_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the StateInternal field.
   */
  private void setStateInternal(typekey.State value) {
    __getInternalInterface().setFieldValue(STATEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TaxLocation field.
   */
  public void setTaxLocation(entity.TaxLocation value) {
    __getInternalInterface().setFieldValue(TAXLOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TerritoryCodes field.
   */
  public void setTerritoryCodes(entity.TerritoryCode[] value) {
    __getInternalInterface().setFieldValue(TERRITORYCODES_PROP.get(), value);
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
   * Sets the value of the ValidUntilInternal field.
   */
  private void setValidUntilInternal(java.util.Date value) {
    __getInternalInterface().setFieldValue(VALIDUNTILINTERNAL_PROP.get(), value);
  }
  
  public entity.PolicyLocation split(java.util.Date splitDate) {
    return (entity.PolicyLocation)splitUntyped(splitDate);
  }
  
  /**
   * Split this bean at the given date. A bean can only be split in window mode.
   * Splitting creates a new bean (and row) with the same FixedId as this bean
   * which is effective from the original effective date of this bean to the
   * split date. We then move the effective date of this bean up to the split
   * date. The result is two beans: one effective from the original effective
   * date to the split date, the other effective from the split date to the
   * original expiration date. "This" bean is the later in that range, and the
   * bean returned from calling this method is the former in that range.
   * <p/>
   * If this bean's effective date equals the split date then no split will
   * occur. The split date must be within the effective range of this bean or an
   * exception is thrown.
   * @param splitDate Date on which to split this bean.
   * @return A new bean effective from the original effective date to the split
   *         date or this bean if no split occurred (see above).
   */
  public entity.EffDated splitUntyped(java.util.Date splitDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
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
  
  /**
   * Updates the territory codes of the policy location according to the existing lines in this period.
   * Usually called when adding/removing lines from multi-line policies.
   */
  public void updateTerritoryCodes() {
    ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).updateTerritoryCodes();
  }
  
  /**
   * Validates that the account and policy entity fields have the same value.
   */
  public void validateAccountAndPolicyEntityFields() {
    ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).validateAccountAndPolicyEntityFields();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PolicyLocationInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PolicyLocation.this.__getDelegateManager();
    }
    
    public void addSlice(entity.EffDatedBase slice, java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).addSlice(slice, sliceDate);
    }
    
    /**
     * Addes given answer to answers stored on this AnswerContainer.
     * @param answer answer to add
     */
    public void addToAnswers(entity.PCAnswerDelegate answer) {
      ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).addToAnswers(answer);
    }
    
    /**
     * Adds the given element to the Buildings array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBuildings(entity.Building element) {
      __getInternalInterface().addArrayElement(BUILDINGS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LocationAnswers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLocationAnswers(entity.LocationAnswer element) {
      __getInternalInterface().addArrayElement(LOCATIONANSWERS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LocationNamedInsureds array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLocationNamedInsureds(entity.LocationNamedInsured element) {
      __getInternalInterface().addArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LocationRiskAssessments array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLocationRiskAssessments(entity.LocationRiskAssessment element) {
      __getInternalInterface().addArrayElement(LOCATIONRISKASSESSMENTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LocationRisks array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLocationRisks(entity.LocationRisk element) {
      __getInternalInterface().addArrayElement(LOCATIONRISKS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the OutboundLocationRiskAssessmentTempStoreArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToOutboundLocationRiskAssessmentTempStoreArray(entity.OutboundLocationRiskAssessmentTempStore element) {
      __getInternalInterface().addArrayElement(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the TerritoryCodes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTerritoryCodes(entity.TerritoryCode element) {
      __getInternalInterface().addArrayElement(TERRITORYCODES_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    /**
     * Assigns the source to this account syncable, potentially initializing the initial fields.
     * This method should only be called during create or merge.
     * @param source The source of this account syncable
     */
    public void assignToSource(entity.KeyableBean source) {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).assignToSource(source);
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
    
    public void changeEdgeForeignKey(gw.entity.IEdgeLinkPropertyInfo edgeProp, gw.pl.persistence.core.Key newId) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeEdgeForeignKey(edgeProp, newId);
    }
    
    public void changeNonDefaultLocaleValue(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo localizedProperty, java.lang.Object value) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeNonDefaultLocaleValue(localizedProperty, value);
    }
    
    public void changeSlice(java.util.Date oldSliceDate, java.util.Date newSliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeSlice(oldSliceDate, newSliceDate);
    }
    
    /**
     * Checks all answers stored on this container against the availability of the questions defined in
     * the product model.
     * @return a list of issues encountered
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel() {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkAnswersAgainstProductModel(gw.api.productmodel.QuestionSet[] questionSetsToSync) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).checkAnswersAgainstProductModel(questionSetsToSync);
    }
    
    /**
     * Clears any Question/QuestionFilter dependencies that have been cached. Should be
     * called before displaying a question set in the app.
     */
    public void clearQuestionDependencies() {
      ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).clearQuestionDependencies();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    public entity.EffDated cloneIntoBranch(entity.EffDatedBranch branch) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).cloneIntoBranch(branch);
    }
    
    public entity.EffDated cloneUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).cloneUntyped();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public void copyBasicFieldsFromBeanUntyped(entity.EffDated bean) {
      ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyBasicFieldsFromBeanUntyped(bean);
    }
    
    public void copyFromBeanUntyped(entity.EffDated bean) {
      ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyFromBeanUntyped(bean);
    }
    
    /**
     * Copies the policy contract data from the account level into the account syncable.
     * Since copying unsynced policy contact data is typically a programming error, this
     * method throws an IllegalStateException if this account syncable is not sycned to
     * the account.
     */
    public void copyPolicyContractData() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).copyPolicyContractData();
    }
    
    /**
     * Copies the policy contract data from the account level into the account syncable
     * without checking if this account syncable is synced.  This method is typically used
     * for initialization where overwriting the policy-level values is not a concern, and
     * it should be used with care.
     */
    public void copyPolicyContractDataUnchecked() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).copyPolicyContractDataUnchecked();
    }
    
    /**
     * Creates an answer for the given question and sets its value to the question's
     * default answer value, if any.
     * @param question the question to create an answer for
     * @throws IllegalStateException if an answer has already been allocated for the
     * question.
     * @return the created answer
     */
    public entity.PCAnswerDelegate createAnswer(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).createAnswer(question);
    }
    
    /**
     * Creates and returns an answer of the type associated with this AnswerContainer.
     * @return newly created answer of the type associated with this AnswerContainer
     */
    public entity.PCAnswerDelegate createRawAnswer() {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).createRawAnswer();
    }
    
    /**
     * Create the reinsurable risk from this reinsurable coverable.
     * @return the applicable reinsurable risk
     */
    public entity.Reinsurable createReinsurableRisk() {
      return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).createReinsurableRisk();
    }
    
    public boolean deletableInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).deletableInternal();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public void extendExpirationDate(java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).extendExpirationDate(newExp);
    }
    
    public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
    }
    
    public java.lang.Object genKey() {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
    }
    
    public gw.api.effdate.EffDatedUniqueKey genUniqueKey() {
      return ((gw.api.effdate.UniqueOnPolicyPeriod)__getDelegateManager().getImplementation("gw.api.effdate.UniqueOnPolicyPeriod")).genUniqueKey();
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
     * Gets the value of the AccountLocation field.
     * The account location this policy location may be synced with.  While the policy location contains policy contract information, the account location contains shared role information.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AccountLocation getAccountLocation() {
      return (entity.AccountLocation)__getInternalInterface().getFieldValue(ACCOUNTLOCATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAccountLocationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNTLOCATION_PROP.get());
    }
    
    /**
     * Returns the list of account synced fields for this account syncable.
     */
    public java.util.Set<gw.api.domain.account.AccountSyncedField<? extends gw.api.domain.account.AccountSyncable, ? extends java.lang.Object>> getAccountSyncedFields() {
      return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getAccountSyncedFields();
    }
    
    /**
     * Gets the value of the AddressLine1Internal field.
     * Address Line 1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1Internal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1INTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine1KanjiInternal field.
     * Address Line 1 Kanji.  Used only for Japanese addresses and will be null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1KanjiInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJIINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2Internal field.
     * Address Line 2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2Internal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2INTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2KanjiInternal field.
     * Address Line 2 Kanji.  Used only for Japanese addresses and will be null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2KanjiInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJIINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine3Internal field.
     * Address Line 3
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine3Internal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE3INTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the AddressTypeInternal field.
     * Type of this address record.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AddressType getAddressTypeInternal() {
      return (typekey.AddressType)__getInternalInterface().getFieldValue(ADDRESSTYPEINTERNAL_PROP.get());
    }
    
    /**
     * Returns the answer to the given question, or null if none has been allocated
     * yet.
     * @param question the question to get the answer for
     * @return the answer for the given question
     */
    public entity.PCAnswerDelegate getAnswer(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswer(question);
    }
    
    /**
     * Gets the actual value of the answer. If the answer is undefined on this
     * entity, use the default answer if there is one, else null.
     * @param question the question to get the answer value for
     * @return the answer value
     */
    public java.lang.Object getAnswerValue(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getAnswerValue(question);
    }
    
    public entity.PCAnswerDelegate[] getAnswers() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAnswers();
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * 
     * @return LocationForRiskAssessment that is associated to this PolicyLocation
     */
    public entity.OutboundLocationRiskAssessmentTempStore getAssociatedLocationRiskAssessmentTempStore() {
      return ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).getAssociatedLocationRiskAssessmentTempStore();
    }
    
    public entity.PolicyPeriod getAssociatedPolicyPeriod() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAssociatedPolicyPeriod();
    }
    
    public gw.pl.persistence.core.Key getBasedOnId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBasedOnId();
    }
    
    /**
     * Return the bean from which this bean was based (cloned), or null if this
     * bean is new to this branch. This value will never change for the life of
     * the bean as its set when the bean is first created, either as a bean new to
     * this branch (in which case it's null) or when this bean is cloned from a
     * bean in an existing branch when its branch is created.
     * <p/>
     * When compiling DiffItems a bean is always compared to it's based-on bean to
     * discover what fields on it have changed. If there is no based-on bean then
     * we know that this bean was new to this branch.
     * @return Bean on which this bean was based (cloned), or null if this bean is
     *         new to this branch.
     */
    public entity.EffDated getBasedOnUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
    }
    
    /**
     * Gets the value of the BasedOnValue field.
     * Link to the row on which this row is based; or null if new to branch
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLocation getBasedOnValue() {
      return (entity.PolicyLocation)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BASEDONVALUE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    public gw.pl.persistence.core.Key getBranchId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBranchId();
    }
    
    /**
     * Return the branch associated with this bean. This can never be null, and
     * will never change. A bean will always be associated with the same branch.
     * @return Branch associated with this bean
     */
    public entity.EffDatedBranch getBranchUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
    }
    
    /**
     * Gets the value of the BranchValue field.
     * Link to root of effdated tree
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getBranchValue() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBranchValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BRANCHVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the BuildingAutoNumberSeq field.
     * Sequence to autonumber buildings
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AutoNumberSequence getBuildingAutoNumberSeq() {
      return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(BUILDINGAUTONUMBERSEQ_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBuildingAutoNumberSeqID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BUILDINGAUTONUMBERSEQ_PROP.get());
    }
    
    /**
     * Gets the value of the Buildings field.
     * Set of buildings at a location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Building[] getBuildings() {
      return (entity.Building[])__getInternalInterface().getFieldValue(BUILDINGS_PROP.get());
    }
    
    /**
     * Gets the value of the CEDEXBureauInternal field.
     * CEDEX: Special business mail delivery bureau (France)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCEDEXBureauInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CEDEXBUREAUINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the ChangeType field.
     * Type of change made to this row
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.EffDatedChangeType getChangeType() {
      return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
    }
    
    public java.util.Set<gw.lang.reflect.IPropertyInfo> getChangedFields(entity.EffDated basedOn) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getChangedFields(basedOn);
    }
    
    public java.util.Set<gw.lang.reflect.IPropertyInfo> getChangedFieldsFromBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getChangedFieldsFromBasedOn();
    }
    
    /**
     * Gets the value of the CityInternal field.
     * City.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the CityInternalDenorm field.
     * denorm field for CityInternal
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityInternalDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYINTERNALDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the CityKanjiInternal field.
     * City Kanji.  Used only for Japanese addresses and will be null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityKanjiInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJIINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the CityKanjiInternalDenorm field.
     * denorm field for CityKanjiInternal
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityKanjiInternalDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJIINTERNALDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the CountryInternal field.
     * Country.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Country getCountryInternal() {
      return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRYINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the CountyInternal field.
     * County.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCountyInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COUNTYINTERNAL_PROP.get());
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
    
    public typekey.ValidationLevel getDefaultValidationLevel() {
      return ((com.guidewire.pl.system.entity.LevelAwareValidatableBean)__getDelegateManager().getImplementation("com.guidewire.pl.system.entity.LevelAwareValidatableBean")).getDefaultValidationLevel();
    }
    
    /**
     * Gets the value of the DescriptionInternal field.
     * Address Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescriptionInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTIONINTERNAL_PROP.get());
    }
    
    /**
     * Get an effective date independent key for this bean. This key will include
     * the BranchId and the FixedId. This is the key for the "logical" bean.
     * <p/>
     * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
     * the same throughout its effective range (or its period range) so there is
     * no difference between the "logical" bean and the actual bean.
     */
    public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
    }
    
    public java.util.Map<java.util.Date, java.lang.Boolean> getEffectiveCache() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getEffectiveCache();
    }
    
    /**
     * Get the date when this bean starts being effective.
     * @return Date when this bean starts being effective.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
    }
    
    public com.guidewire.pl.system.util.DateRange getEffectiveRange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getEffectiveRange();
    }
    
    /**
     * Gets the value of the EmployeeCountInternal field.
     * Employee Count
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getEmployeeCountInternal() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(EMPLOYEECOUNTINTERNAL_PROP.get());
    }
    
    public java.lang.String getErrorMessage(entity.EffDated[] duplicateBeans) {
      return ((gw.api.effdate.UniqueOnPolicyPeriod)__getDelegateManager().getImplementation("gw.api.effdate.UniqueOnPolicyPeriod")).getErrorMessage(duplicateBeans);
    }
    
    /**
     * Get the date when this bean expires.
     * @return Date when this bean expires.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpirationDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
    }
    
    /**
     * Gets the value of the FireProtectClass field.
     * Fire protection class.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FireProtectClass getFireProtectClass() {
      return (typekey.FireProtectClass)__getInternalInterface().getFieldValue(FIREPROTECTCLASS_PROP.get());
    }
    
    /**
     * Gets the value of the Fixed field.
     * Unique ID for this 'object' across all branches and periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLocation getFixed() {
      return (entity.PolicyLocation)__getInternalInterface().getFieldValue(FIXED_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFixedID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FIXED_PROP.get());
    }
    
    /**
     * Get the logical ID for this bean, not the row ID. All row
     * @return Logical ID for this bean, not the row ID.
     */
    public gw.pl.persistence.core.Key getFixedId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
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
    
    public java.util.List<entity.EffDated> getFutureVersions() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getFutureVersions();
    }
    
    /**
     * Indicates that this account syncable is new or its policy entity fields
     * have been changed.
     */
    public boolean getHasChangedPolicyEntityFields() {
      return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasChangedPolicyEntityFields();
    }
    
    /**
     * Indicates that all the account syncable's policy entity fields are null.
     */
    public boolean getHasEmptyPolicyEntityFields() {
      return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasEmptyPolicyEntityFields();
    }
    
    /**
     * Indicates that all the account synced fields have the same value at both the account and policy levels.
     */
    public boolean getHasMatchingAccountAndPolicyFields() {
      return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).getHasMatchingAccountAndPolicyFields();
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
     * Gets the value of the IndustryCode field.
     * Industry Code of Location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.IndustryCode getIndustryCode() {
      return (entity.IndustryCode)__getInternalInterface().getFieldValue(INDUSTRYCODE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getIndustryCodeID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(INDUSTRYCODE_PROP.get());
    }
    
    /**
     * Get the version list for an effective dated foreign key.  You need this
     * method because it's the only way to get the version list for a foreign key
     * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
     * since you can't traverse the array and there are no methods on
     * EffDatedVersionList to access a FK (only arrays).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key
     * @return Version list for an effective dated foreign key
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
    }
    
    /**
     * Gets the value of the LocationAnswers field.
     * Set of answers for this location.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LocationAnswer[] getLocationAnswers() {
      return (entity.LocationAnswer[])__getInternalInterface().getFieldValue(LOCATIONANSWERS_PROP.get());
    }
    
    /**
     * Gets the value of the LocationNamedInsureds field.
     * The additional named insured covered at this location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LocationNamedInsured[] getLocationNamedInsureds() {
      return (entity.LocationNamedInsured[])__getInternalInterface().getFieldValue(LOCATIONNAMEDINSUREDS_PROP.get());
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
     * Gets the value of the LocationRiskAssessments field.
     * Risk assessment result for this policy location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LocationRiskAssessment[] getLocationRiskAssessments() {
      return (entity.LocationRiskAssessment[])__getInternalInterface().getFieldValue(LOCATIONRISKASSESSMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the LocationRisks field.
     * A reinsurable risk associated with a Location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LocationRisk[] getLocationRisks() {
      return (entity.LocationRisk[])__getInternalInterface().getFieldValue(LOCATIONRISKS_PROP.get());
    }
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
    }
    
    /**
     * Gets the value of the OutboundLocationRiskAssessmentTempStore field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.OutboundLocationRiskAssessmentTempStore getOutboundLocationRiskAssessmentTempStore() {
      return (entity.OutboundLocationRiskAssessmentTempStore)__getInternalInterface().getFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTORE_PROP.get());
    }
    
    /**
     * Gets the value of the OutboundLocationRiskAssessmentTempStoreArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.OutboundLocationRiskAssessmentTempStore[] getOutboundLocationRiskAssessmentTempStoreArray() {
      return (entity.OutboundLocationRiskAssessmentTempStore[])__getInternalInterface().getFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getOutboundLocationRiskAssessmentTempStoreID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTORE_PROP.get());
    }
    
    /**
     * Gets the value of the PostalCodeInternal field.
     * Postal code; string to handle Zip+4 and international codes.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCodeInternal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the PostalCodeInternalDenorm field.
     * denorm field for PostalCodeInternal
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCodeInternalDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEINTERNALDENORM_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Recalculates question dependencies if they have been cleared (see {@link #clearQuestionDependencies}),
     * then returns all questions that are dependent on the given question's answers.
     * @param question the question to get dependencies for
     * @return the set of questions on which the given question depends
     */
    public java.util.Set<gw.api.productmodel.Question> getQuestionDependencies(gw.api.productmodel.Question question) {
      return ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).getQuestionDependencies(question);
    }
    
    /**
     * Returns reference date to use for question set availability lookup based on question set type.
     * @param questionSetType question set type that reference date is requested for
     * @return reference date to use for availability lookup of question sets of given type.
     */
    public java.util.Date getQuestionSetLookupReferenceDate(typekey.QuestionSetType questionSetType) {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).getQuestionSetLookupReferenceDate(questionSetType);
    }
    
    public gw.api.productmodel.QuestionSet[] getQuestionSets() {
      return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getQuestionSets();
    }
    
    public java.util.Map<gw.entity.ILinkPropertyInfo, entity.KeyableBean> getReferencedBeans() {
      return ((gw.api.domain.RefersOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.RefersOutOfDomainGraph")).getReferencedBeans();
    }
    
    /**
     * Find reinsurable risk associated with reinsurable coverable
     * @return associated reinsurable risk if it exists, else null
     */
    public entity.Reinsurable[] getReinsurables() {
      return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).getReinsurables();
    }
    
    /**
     * Date which this bean is "sliced" or viewed. If you traverse from this bean
     * to another bean or beans via a link or array, only beans that are effective
     * at this slice date will be returned. The beans that are returned will be
     * sliced at this date as well. If NULL then the bean is in "window" mode.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return Date which bean is sliced or null if in window mode.
     */
    public java.util.Date getSliceDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
    }
    
    /**
     * Slice this bean at a particular date. This bean can be unsliced or sliced
     * when this method is called. The slice date must be within the effective
     * range of this bean or an exception will be thrown. If you want to get at
     * the version of this "logical" bean at a date outside of this particular
     * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
     * @param sliceDate Date at which to slice this bean.
     * @return Sliced version of the bean.
     */
    public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
    }
    
    public java.util.Collection<entity.EffDatedBase> getSlices() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlices();
    }
    
    public java.util.Map<java.util.Date, entity.EffDatedBase> getSlicesMap() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlicesMap();
    }
    
    /**
     * Gets the value of the StateInternal field.
     * State.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getStateInternal() {
      return (typekey.State)__getInternalInterface().getFieldValue(STATEINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the TaxLocation field.
     * The TaxLocation for this location.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.TaxLocation getTaxLocation() {
      return (entity.TaxLocation)__getInternalInterface().getFieldValue(TAXLOCATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getTaxLocationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(TAXLOCATION_PROP.get());
    }
    
    /**
     * Gets the value of the TerritoryCodes field.
     * The rating territory codes.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.TerritoryCode[] getTerritoryCodes() {
      return (entity.TerritoryCode[])__getInternalInterface().getFieldValue(TERRITORYCODES_PROP.get());
    }
    
    /**
     * Returns a list of the existing {@link TerritoryCode Territory Codes} for a given PolicyLine
     * specified by its {@link PolicyLinePattern Pattern}
     * @param pattern 
     */
    public java.util.List<entity.TerritoryCode> getTerritoryCodesForLine(gw.api.productmodel.PolicyLinePattern pattern) {
      return ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).getTerritoryCodesForLine(pattern);
    }
    
    public java.util.Date getTraversalDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getTraversalDate();
    }
    
    /**
     * Return the unsliced version of this bean. If the bean is already unsliced
     * then returns itself.
     * @return An unsliced version of this bean. If the bean is already unsliced
     *         then returns itself.
     */
    public entity.EffDated getUnslicedUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
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
     * Gets the value of the ValidUntilInternal field.
     * Date Valid Until
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getValidUntilInternal() {
      return (java.util.Date)__getInternalInterface().getFieldValue(VALIDUNTILINTERNAL_PROP.get());
    }
    
    public typekey.ValidationLevel getValidationLevel() {
      return ((com.guidewire.pl.system.entity.LevelAwareValidatableBean)__getDelegateManager().getImplementation("com.guidewire.pl.system.entity.LevelAwareValidatableBean")).getValidationLevel();
    }
    
    /**
     * Get the version list for this bean. An EffDatedVersionList is a
     * representation of a logical bean through its effective range. For example,
     * if a bean has changes at three separate effective dates then the version
     * list will comprise 3 versions of the bean, one for each of these dates.
     * <p/>
     * You can use an EffDatedVersionList to traverse from this bean to other
     * linked beans in window mode. Recall that in window mode you cannot traverse
     * links directly from the bean.
     * <p/>
     * Although an EffDatedBranch only has a single version throughout its
     * effective range you can still get its EffDatedVersionList in order to
     * navigate in window mode from the branch to its related EffDateds.
     * @return Version list for this bean
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
    }
    
    /**
     * Handle the pre-update for this account syncable.
     */
    public void handlePreUpdate() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).handlePreUpdate();
    }
    
    public boolean hasFutureVersions() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).hasFutureVersions();
    }
    
    public boolean hasMergeBase() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).hasMergeBase();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Initializes BuildingAutoNumberSeq on PolicyPeriod.
     * @param bundle the bundle in which to do the auto-numbering
     */
    public void initializeBuildingAutoNumberSequence(gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).initializeBuildingAutoNumberSequence(bundle);
    }
    
    public boolean isAutoSplit() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isAutoSplit();
    }
    
    public boolean isBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isBasedOn();
    }
    
    /**
     * Gets the value of the CEDEXInternal field.
     * CEDEX: Special business mail delivery flag (France)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCEDEXInternal() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEXINTERNAL_PROP.get());
    }
    
    /**
     * Returns true if AnswerContainer is locked and false otherwise.
     * @return true if AnswerContainer is locked and false otherwise.
     */
    public boolean isContainerLocked() {
      return ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).isContainerLocked();
    }
    
    /**
     * Given a date, check whether it falls within this bean's effective window.
     * @param effDate Date to check
     * @return True if date is within this bean's effective window.
     */
    public boolean isEffective(java.util.Date effDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
    }
    
    /**
     * Returns true if the given field has been modified relative to the based-on
     * bean and false if this bean has no based-on or if the field has the same
     * value as for the based-on bean.  This method only works with non-array
     * fields.
     * @param field the name of the property to check for changes, which must
     *              correspond to a database column (i.e. it can't be an array or
     *              a synthetic property)
     * @return true if the field has a different value for the based-on bean,
     *         false otherwise
     */
    public boolean isFieldChangedFromBasedOn(java.lang.String field) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    /**
     * 
     * @return true if this location is considered in use by any of the PolicyLines in the PolicyPeriod
     */
    public boolean isInUse() {
      return ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).isInUse();
    }
    
    public java.lang.Boolean isLocked() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isLocked();
    }
    
    public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).isLogicalMatchUntyped(bean);
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
     * Check if this bean or branch has been promoted. A promoted bean is also
     * locked and cannot be changed.
     * <p/>
     * An EffDated is never promoted independent of its related
     * EffDatedBranch, meaning if the branch is promoted every bean in the graph
     * will be promoted, and if the branch is not promoted no bean in the graph
     * can be promoted.
     * @return True if promoted.
     */
    public boolean isPromoted() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
    }
    
    /**
     * Whether this bean is sliced. If a bean is sliced then you can navigate from
     * this bean to another bean or beans via a link or array, if it's unsliced
     * (in "window" mode) you cannot navigate from this bean.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return 
     */
    public boolean isSlice() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
    }
    
    public boolean isSliceAddedBeforeBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isSliceAddedBeforeBasedOn();
    }
    
    public boolean isSliceChange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isSliceChange();
    }
    
    /**
     * Indicates if the account syncable has its values synced to the account level.
     * An account syncable should be synced to the account when the account syncable
     * is allowed to change and when the account level data is more accurate.
     */
    public boolean isSyncedToAccount() {
      return ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).isSyncedToAccount();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public boolean isTerminated() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isTerminated();
    }
    
    /**
     * Returns true if the other is the same reinsurable coverable.
     * @param other the object to compare
     * @return true if the same
     */
    public boolean isTheSame(gw.api.reinsurance.ReinsurableCoverable other) {
      return ((gw.api.reinsurance.ReinsurableCoverable)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableCoverable")).isTheSame(other);
    }
    
    public boolean isZeroWidth() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isZeroWidth();
    }
    
    public void markAsMerged() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).markAsMerged();
    }
    
    public void mergeForwardFieldValue(gw.lang.reflect.IPropertyInfo property, java.lang.Object newValue) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).mergeForwardFieldValue(property, newValue);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    /**
     * Prepare the account syncable so that the diff code can operate correctly on it.
     */
    public void prepareForDiff() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForDiff();
    }
    
    /**
     * Prepare the account syncable so that the job edit code can operate correctly on it.
     */
    public void prepareForJobEdit() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForJobEdit();
    }
    
    /**
     * Prepare the account syncable so that the job start code can operate correctly on it.
     */
    public void prepareForJobStart() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForJobStart();
    }
    
    /**
     * Prepare the account syncable so that the OOS merge code can operate correctly on it.
     */
    public void prepareForOOSMerge() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForOOSMerge();
    }
    
    /**
     * Prepare the account syncable so that the promotion code can operate correctly on it.
     */
    public void prepareForPromote() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForPromote();
    }
    
    /**
     * Prepare the account syncable so that the quote code can operate correctly on it.
     */
    public void prepareForQuote() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).prepareForQuote();
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    public void recordExternalReferences() {
      ((gw.api.domain.RefersOutOfDomainGraph)__getDelegateManager().getImplementation("gw.api.domain.RefersOutOfDomainGraph")).recordExternalReferences();
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
     * Refreshes any necessary account information to ensure this account syncable will use the
     * most current data when calling the other methods on this interface.
     */
    public void refreshAccountInformation() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).refreshAccountInformation();
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
     * Removes the answer, if any, to the specified question.
     * @param question the question to remove the answer for
     */
    public void removeAnswer(gw.api.productmodel.Question question) {
      ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).removeAnswer(question);
    }
    
    /**
     * Removes given answer from answers stored on this AnswerContainer.
     * @param answer answer to remove
     */
    public void removeFromAnswers(entity.PCAnswerDelegate answer) {
      ((gw.api.domain.AnswerContainerAdapter)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAdapter")).removeFromAnswers(answer);
    }
    
    /**
     * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
     */
    public void removeFromBuildings(entity.Building element) {
      __getInternalInterface().removeArrayElement(BUILDINGS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBuildings(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BUILDINGS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
     */
    public void removeFromLocationAnswers(entity.LocationAnswer element) {
      __getInternalInterface().removeArrayElement(LOCATIONANSWERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLocationAnswers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOCATIONANSWERS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
     */
    public void removeFromLocationNamedInsureds(entity.LocationNamedInsured element) {
      __getInternalInterface().removeArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLocationNamedInsureds(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LocationRiskAssessments array. This is achieved by marking the element for removal.
     */
    public void removeFromLocationRiskAssessments(entity.LocationRiskAssessment element) {
      __getInternalInterface().removeArrayElement(LOCATIONRISKASSESSMENTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LocationRiskAssessments array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLocationRiskAssessments(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOCATIONRISKASSESSMENTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
     */
    public void removeFromLocationRisks(entity.LocationRisk element) {
      __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LocationRisks array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLocationRisks(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOCATIONRISKS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the OutboundLocationRiskAssessmentTempStoreArray array. This is achieved by marking the element for removal.
     */
    public void removeFromOutboundLocationRiskAssessmentTempStoreArray(entity.OutboundLocationRiskAssessmentTempStore element) {
      __getInternalInterface().removeArrayElement(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the OutboundLocationRiskAssessmentTempStoreArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromOutboundLocationRiskAssessmentTempStoreArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the TerritoryCodes array. This is achieved by marking the element for removal.
     */
    public void removeFromTerritoryCodes(entity.TerritoryCode element) {
      __getInternalInterface().removeArrayElement(TERRITORYCODES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the TerritoryCodes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTerritoryCodes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TERRITORYCODES_PROP.get(), elementID);
    }
    
    public void removeTerritoryCodesForLine(gw.api.productmodel.PolicyLinePattern pattern) {
      ((com.guidewire.pc.domain.policy.period.impl.PolicyLocationInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.impl.PolicyLocationInternalMethods")).removeTerritoryCodesForLine(pattern);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AccountLocation field.
     */
    public void setAccountLocation(entity.AccountLocation value) {
      __getInternalInterface().setFieldValue(ACCOUNTLOCATION_PROP.get(), value);
    }
    
    public void setAccountLocationID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACCOUNTLOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1Internal field.
     */
    public void setAddressLine1Internal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1INTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1KanjiInternal field.
     */
    public void setAddressLine1KanjiInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJIINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2Internal field.
     */
    public void setAddressLine2Internal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2INTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2KanjiInternal field.
     */
    public void setAddressLine2KanjiInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJIINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine3Internal field.
     */
    public void setAddressLine3Internal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3INTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressTypeInternal field.
     */
    public void setAddressTypeInternal(typekey.AddressType value) {
      __getInternalInterface().setFieldValue(ADDRESSTYPEINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.PolicyLocation value) {
      __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    public void setBasedOnValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchValue field.
     */
    public void setBranchValue(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    public void setBranchValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BuildingAutoNumberSeq field.
     */
    public void setBuildingAutoNumberSeq(entity.AutoNumberSequence value) {
      __getInternalInterface().setFieldValue(BUILDINGAUTONUMBERSEQ_PROP.get(), value);
    }
    
    public void setBuildingAutoNumberSeqID(gw.pl.persistence.core.Key value) {
      setFieldValue(BUILDINGAUTONUMBERSEQ_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Buildings field.
     */
    public void setBuildings(entity.Building[] value) {
      __getInternalInterface().setFieldValue(BUILDINGS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CEDEXBureauInternal field.
     */
    public void setCEDEXBureauInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CEDEXBUREAUINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CEDEXInternal field.
     */
    public void setCEDEXInternal(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CEDEXINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChangeType field.
     */
    public void setChangeType(typekey.EffDatedChangeType value) {
      __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityInternal field.
     */
    public void setCityInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityInternalDenorm field.
     */
    public void setCityInternalDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYINTERNALDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityKanjiInternal field.
     */
    public void setCityKanjiInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYKANJIINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityKanjiInternalDenorm field.
     */
    public void setCityKanjiInternalDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYKANJIINTERNALDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CountryInternal field.
     */
    public void setCountryInternal(typekey.Country value) {
      __getInternalInterface().setFieldValue(COUNTRYINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CountyInternal field.
     */
    public void setCountyInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COUNTYINTERNAL_PROP.get(), value);
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
     * Sets the value of the DescriptionInternal field.
     */
    public void setDescriptionInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTIONINTERNAL_PROP.get(), value);
    }
    
    /**
     * Change when the effective date of this bean. You cannot change the
     * effective date when in slice mode. In window mode there are no
     * restrictions.
     * <p/>
     * The effective date must be non-null. It must also come on or before the
     * expiration date and within the period range of its branch.
     * @param effDate New effective date
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setEffectiveDate(java.util.Date effDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
    }
    
    public void setEffectiveDateInternal(java.util.Date newEff) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveDateInternal(newEff);
    }
    
    public void setEffectiveWindow(com.guidewire.pl.system.util.DateRange oldEffRange, java.util.Date newEff, java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveWindow(oldEffRange, newEff, newExp);
    }
    
    /**
     * Change the effective and expiration dates together. This can only be called
     * in window mode. Both dates must be non-null. The effective date must be
     * before or equal to the expiration date. Both dates must be within the
     * period range of its branch.
     * @param effDate New effective date
     * @param expDate New expiration date
     */
    public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
    }
    
    public void setEffectiveWindowInternal(java.util.Date newEff, java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveWindowInternal(newEff, newExp);
    }
    
    /**
     * Sets the value of the EmployeeCountInternal field.
     */
    public void setEmployeeCountInternal(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(EMPLOYEECOUNTINTERNAL_PROP.get(), value);
    }
    
    /**
     * Change when the expiration date of this bean. You cannot change the
     * expiration date when in slice mode UNLESS the bean is new to its branch and
     * you're not setting the expiration date to the effective date (zero width).
     * In window mode there are no restrictions.
     * <p/>
     * The expiration date must be non-null. It must also come on or after the
     * effective date and within the period range of its branch.
     * @param expDate New expiration date
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setExpirationDate(java.util.Date expDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
    }
    
    public void setExpirationDateInternal(java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setExpirationDateInternal(newExp);
    }
    
    /**
     * Sets the value of the FireProtectClass field.
     */
    public void setFireProtectClass(typekey.FireProtectClass value) {
      __getInternalInterface().setFieldValue(FIREPROTECTCLASS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fixed field.
     */
    public void setFixed(entity.PolicyLocation value) {
      __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
    }
    
    public void setFixedID(gw.pl.persistence.core.Key value) {
      setFieldValue(FIXED_PROP.get(), value);
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
     * Sets the value of the IndustryCode field.
     */
    public void setIndustryCode(entity.IndustryCode value) {
      __getInternalInterface().setFieldValue(INDUSTRYCODE_PROP.get(), value);
    }
    
    public void setIndustryCodeID(gw.pl.persistence.core.Key value) {
      setFieldValue(INDUSTRYCODE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Set a foreign key by passing in an EFfDatedKey (effectively the
     * EffDatedVersionList or FixedId of the bean). You need this method because
     * it's the only way to set a foreign key given a FixedId (and no context for
     * when that FixeId might be effective).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key to set
     * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
     *             FixedId of the bean)
     */
    public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
    }
    
    /**
     * Sets the value of the LocationAnswers field.
     */
    public void setLocationAnswers(entity.LocationAnswer[] value) {
      __getInternalInterface().setFieldValue(LOCATIONANSWERS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LocationNamedInsureds field.
     */
    public void setLocationNamedInsureds(entity.LocationNamedInsured[] value) {
      __getInternalInterface().setFieldValue(LOCATIONNAMEDINSUREDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LocationNum field.
     */
    public void setLocationNum(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(LOCATIONNUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LocationRiskAssessments field.
     */
    public void setLocationRiskAssessments(entity.LocationRiskAssessment[] value) {
      __getInternalInterface().setFieldValue(LOCATIONRISKASSESSMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LocationRisks field.
     */
    public void setLocationRisks(entity.LocationRisk[] value) {
      __getInternalInterface().setFieldValue(LOCATIONRISKS_PROP.get(), value);
    }
    
    public void setMaster(entity.EffDatedBase master) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setMaster(master);
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
     * Sets the value of the OutboundLocationRiskAssessmentTempStore field.
     */
    public void setOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore value) {
      __getInternalInterface().setFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTORE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OutboundLocationRiskAssessmentTempStoreArray field.
     */
    public void setOutboundLocationRiskAssessmentTempStoreArray(entity.OutboundLocationRiskAssessmentTempStore[] value) {
      __getInternalInterface().setFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTOREARRAY_PROP.get(), value);
    }
    
    public void setOutboundLocationRiskAssessmentTempStoreID(gw.pl.persistence.core.Key value) {
      setFieldValue(OUTBOUNDLOCATIONRISKASSESSMENTTEMPSTORE_PROP.get(), value);
    }
    
    public void setPeriodWindow(com.guidewire.pl.system.util.DateRange oldPeriodRange) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setPeriodWindow(oldPeriodRange);
    }
    
    /**
     * Sets the value of the PostalCodeInternal field.
     */
    public void setPostalCodeInternal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODEINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PostalCodeInternalDenorm field.
     */
    public void setPostalCodeInternalDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODEINTERNALDENORM_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the StateInternal field.
     */
    public void setStateInternal(typekey.State value) {
      __getInternalInterface().setFieldValue(STATEINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TaxLocation field.
     */
    public void setTaxLocation(entity.TaxLocation value) {
      __getInternalInterface().setFieldValue(TAXLOCATION_PROP.get(), value);
    }
    
    public void setTaxLocationID(gw.pl.persistence.core.Key value) {
      setFieldValue(TAXLOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TerritoryCodes field.
     */
    public void setTerritoryCodes(entity.TerritoryCode[] value) {
      __getInternalInterface().setFieldValue(TERRITORYCODES_PROP.get(), value);
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
     * Sets the value of the ValidUntilInternal field.
     */
    public void setValidUntilInternal(java.util.Date value) {
      __getInternalInterface().setFieldValue(VALIDUNTILINTERNAL_PROP.get(), value);
    }
    
    /**
     * Split this bean at the given date. A bean can only be split in window mode.
     * Splitting creates a new bean (and row) with the same FixedId as this bean
     * which is effective from the original effective date of this bean to the
     * split date. We then move the effective date of this bean up to the split
     * date. The result is two beans: one effective from the original effective
     * date to the split date, the other effective from the split date to the
     * original expiration date. "This" bean is the later in that range, and the
     * bean returned from calling this method is the former in that range.
     * <p/>
     * If this bean's effective date equals the split date then no split will
     * occur. The split date must be within the effective range of this bean or an
     * exception is thrown.
     * @param splitDate Date on which to split this bean.
     * @return A new bean effective from the original effective date to the split
     *         date or this bean if no split occurred (see above).
     */
    public entity.EffDated splitUntyped(java.util.Date splitDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
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
    
    /**
     * Updates the territory codes of the policy location according to the existing lines in this period.
     * Usually called when adding/removing lines from multi-line policies.
     */
    public void updateTerritoryCodes() {
      ((com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods")).updateTerritoryCodes();
    }
    
    /**
     * Validates that the account and policy entity fields have the same value.
     */
    public void validateAccountAndPolicyEntityFields() {
      ((gw.api.domain.account.AccountSyncable)__getDelegateManager().getImplementation("gw.api.domain.account.AccountSyncable")).validateAccountAndPolicyEntityFields();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.policy.period.PolicyLocationPublicMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyLocationImpl");
    config.put("com.guidewire.pc.domain.policy.period.impl.PolicyLocationInternalMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyLocationImpl");
    config.put("com.guidewire.pc.domain.question.AnswerContainerPublicMethods", "com.guidewire.pc.domain.question.impl.AnswerContainerImpl");
    config.put("com.guidewire.pc.domain.question.impl.AnswerContainerInternalMethods", "com.guidewire.pc.domain.question.impl.AnswerContainerImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.system.entity.DoesNotValidateOnCommit", "com.guidewire.pc.domain.policy.period.impl.PolicyLocationImpl");
    config.put("com.guidewire.pl.system.entity.LevelAwareValidatableBean", "com.guidewire.pc.domain.policy.period.impl.PolicyLocationImpl");
    config.put("gw.api.copier.EffDatedCopyable", "gw.policylocation.PolicyLocationEffDatedCopier");
    config.put("gw.api.domain.AnswerContainerAbstractDomainMethods", "gw.question.PolicyLocationAnswerContainerAdapter");
    config.put("gw.api.domain.AnswerContainerAdapter", "gw.question.PolicyLocationAnswerContainerAdapter");
    config.put("gw.api.domain.RefersOutOfDomainGraph", "gw.policylocation.PolicyLocationRefersOutOfDomainGraphImpl");
    config.put("gw.api.domain.account.AccountSyncable", "gw.policylocation.PolicyLocationAccountSyncableImpl");
    config.put("gw.api.effdate.UniqueOnPolicyPeriod", "gw.api.effdate.PolicyLocationUniqueKeyGen");
    config.put("gw.api.logicalmatch.EffDatedLogicalMatcher", "gw.policylocation.PolicyLocationMatcher");
    config.put("gw.api.logicalmatch.LogicalMatcher", "gw.policylocation.PolicyLocationMatcher");
    config.put("gw.api.reinsurance.ReinsurableCoverable", "gw.reinsurance.risk.LocationReinsurableCoverableAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PolicyLocation.class, config);
    com.guidewire._generated.entity.PolicyLocationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PolicyLocation, com.guidewire._generated.entity.PolicyLocationInternal>() {
      public java.lang.Object getImplementation(entity.PolicyLocation bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyLocationInternal getInternalInterface(entity.PolicyLocation bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PolicyLocation newEmptyInstance() {
        return new entity.PolicyLocation((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}