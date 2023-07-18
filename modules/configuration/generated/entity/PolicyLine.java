package entity;

/**
 * PolicyLine
 * A line of insurance (e.g. auto, property, etc.) and selected policy line level attributes (i.e. attributes necessary, but not sufficient to rate)
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLine.eti;PolicyLine.eix;PolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PolicyLine extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, entity.AnswerContainer, com.guidewire.pc.domain.rating.RateflowMethods, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.policy.PolicyLineJavaMethods {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PolicyLine, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PolicyLine, entity.PolicyPeriod>("entity.PolicyLine");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ADDITIONALINSUREDS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AdditionalInsureds");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COVERAGESYMBOLGROUPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CoverageSymbolGroups");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DIAGNOSTICRATINGWORKSHEETS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "DiagnosticRatingWorksheets");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LINEANSWERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LineAnswers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMADDINSURED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumAddInsured");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PatternCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PolicyLineInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  protected PolicyLine(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.PolicyLineInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.PolicyLineInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the AdditionalInsureds array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInsureds(entity.PolicyAddlInsured element) {
    __getInternalInterface().addArrayElement(ADDITIONALINSUREDS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the CoverageSymbolGroups array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageSymbolGroups(entity.CoverageSymbolGroup element) {
    __getInternalInterface().addArrayElement(COVERAGESYMBOLGROUPS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the DiagnosticRatingWorksheets array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet element) {
    __getInternalInterface().addArrayElement(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LineAnswers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLineAnswers(entity.PolicyLineAnswer element) {
    __getInternalInterface().addArrayElement(LINEANSWERS_PROP.get(), element);
  }
  
  /**
   * Indicates whether ChangeEditEffectiveDate (CEED) can be performed on this policy line.
   * @return true if can CEED, false otherwise.
   */
  public boolean canSafelyCEED() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyCEED();
  }
  
  /**
   * Indicates whether or not this building can be safely deleted.
   * @param building the building to check
   * @return an error message if it can't be safely deleted, null or the empty String if it can
   */
  public java.lang.String canSafelyDeleteBuilding(entity.Building building) {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteBuilding(building);
  }
  
  /**
   * Indicates whether or not this contact can be safely deleted, according to this policy line.  If this returns
   * a null or empty string, that means that the line thinks it's okay to delete this contact.  Otherwise, this method
   * should return an error message indicating why this contact can't be deleted.
   * @param toContact the contact to check
   * @return an error message if it can't be safely deleted, null or the empty String if it can
   */
  public java.lang.String canSafelyDeleteExistingContact(entity.Contact toContact) {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteExistingContact(toContact);
  }
  
  /**
   * Indicates whether or not this location can be safely deleted, according to this policy line.  If this returns
   * a null or empty string, that means that the line thinks it's okay to delete the location.  Otherwise, this method
   * should return an error message indicating why the location can't be deleted.
   * <p>Depending on the line, it may be possible to safely delete a location even
   * {@link #checkLocationInUse(entity.PolicyLocation) if it is in use}.
   * @param location the PolicyLocation to check
   * @return an error message if it can't be safely deleted, null or the empty String if it can
   */
  public java.lang.String canSafelyDeleteLocation(entity.PolicyLocation location) {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteLocation(location);
  }
  
  /**
   * Indicates whether or not this policy named insured can be safely deleted, according to this policy line.  If this returns
   * a null or empty string, that means that the line thinks it's okay to delete the policy named insured.  Otherwise, this method
   * should return an error message indicating why the policy named insured can't be deleted.
   * @param polNamedInsured the PolicyNamedInsured to check
   * @return an error message if it can't be safely deleted, null or the empty String if it can
   */
  public java.lang.String canSafelyDeleteNamedInsured(entity.PolicyNamedInsured polNamedInsured) {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).canSafelyDeleteNamedInsured(polNamedInsured);
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
   * Indicates whether or not this location is in use by the policy line.
   * <p>Depending on the line, {@link #canSafelyDeleteLocation(entity.PolicyLocation) it may be possible to safely delete a location}
   * even if it is in use.
   * @param location the PolicyLocation to check
   * @return true if the PolicyLocation is in use by this line, false if it is not
   * @deprecated In 10.0.0 and will be removed in 11.0.0.
   * Please use {@link #getLocationsInUseOnOrAfterSliceDate()}.
   * If you currently have an overriding Line-of-Business-specific implementation, please override getLocationsInUseOnOrAfterSliceDate() instead.
   */
  @java.lang.Deprecated
  public boolean checkLocationInUse(entity.PolicyLocation location) {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).checkLocationInUse(location);
  }
  
  /**
   * Clears any Question/QuestionFilter dependencies that have been cached. Should be
   * called before displaying a question set in the app.
   */
  public void clearQuestionDependencies() {
    ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).clearQuestionDependencies();
  }
  
  public entity.PolicyLine clone() {
    return (entity.PolicyLine)__getInternalInterface().cloneUntyped();
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
  
  public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
  }
  
  public java.lang.Object genKey() {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
  }
  
  /**
   * Gets the value of the AdditionalInsureds field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInsured[] getAdditionalInsureds() {
    return (entity.PolicyAddlInsured[])__getInternalInterface().getFieldValue(ADDITIONALINSUREDS_PROP.get());
  }
  
  /**
   * <b>Note:</b> this method is expensive and should be used infrequently.
   * @return all coverages, exclusions, and conditions on the policy line
   */
  public entity.Clause[] getAllClauses() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllClauses();
  }
  
  /**
   * Returns all conditions on the policy line
   * @return all conditions on the policy line
   */
  public entity.PolicyCondition[] getAllConditions() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllConditions();
  }
  
  /**
   * Returns all Coverables on the policy line.
   * @return Coverable[]
   */
  public entity.Coverable[] getAllCoverables() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllCoverables();
  }
  
  /**
   * <b>Note:</b> this method is expensive and should be used infrequently.
   * Moreover, each policy line should override this and include coverages
   * specific to the line. For instance, BA Line needs to add coverages on its
   * vehicles and jurisdictions.
   * @return all coverages on the policy line
   */
  public entity.Coverage[] getAllCoverages() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllCoverages();
  }
  
  /**
   * If schedules are implemented on policy line, this method will return a list of current and future scheduled items.
   * @return all scheduled items on policy line
   */
  public java.util.List<entity.ScheduledItem> getAllCurrentAndFutureScheduledItems() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllCurrentAndFutureScheduledItems();
  }
  
  /**
   * Returns all exclusions on the policy line
   * @return all exclusions on the policy line
   */
  public entity.Exclusion[] getAllExclusions() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getAllExclusions();
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
  
  public entity.PolicyPeriod getAssociatedPolicyPeriod() {
    return ((gw.api.domain.AnswerContainerAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.AnswerContainerAbstractDomainMethods")).getAssociatedPolicyPeriod();
  }
  
  /**
   * Returns the base state of the policy period that contains this line.
   * @return the base state of the period
   */
  public typekey.Jurisdiction getBaseState() {
    return ((com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods")).getBaseState();
  }
  
  public entity.PolicyLine getBasedOn() {
    return (entity.PolicyLine)__getInternalInterface().getBasedOnUntyped();
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
  public entity.PolicyLine getBasedOnValue() {
    return (entity.PolicyLine)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
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
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * 
   * @return all this line's cost version lists in a LoB-independent manner.
   */
  public java.lang.Iterable<gw.pl.persistence.core.effdate.EffDatedVersionList> getCostVLs() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getCostVLs();
  }
  
  /**
   * 
   * @return all this line's costs across the term, in window mode and in a LoB-independent manner.
   */
  public java.util.Set<entity.Cost> getCosts() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getCosts();
  }
  
  /**
   * Gets the value of the CoverageSymbolGroups field.
   * Groups of coverage symbols on this policy line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CoverageSymbolGroup[] getCoverageSymbolGroups() {
    return (entity.CoverageSymbolGroup[])__getInternalInterface().getFieldValue(COVERAGESYMBOLGROUPS_PROP.get());
  }
  
  /**
   * Returns jurisdictions that are covered by this line.
   * @return Jurisdiction[] states covered by this line
   */
  public typekey.Jurisdiction[] getCoveredStates() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getCoveredStates();
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
   * Gets the value of the DiagnosticRatingWorksheets field.
   * A list of DiagnosticRatingWorksheet entities related to this PolicyLine
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DiagnosticRatingWorksheet[] getDiagnosticRatingWorksheets() {
    return (entity.DiagnosticRatingWorksheet[])__getInternalInterface().getFieldValue(DIAGNOSTICRATINGWORKSHEETS_PROP.get());
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
   * Get the date when this bean expires.
   * @return Date when this bean expires.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine getFixed() {
    return (entity.PolicyLine)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LineAnswers field.
   * Set of answers for this policyline.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLineAnswer[] getLineAnswers() {
    return (entity.PolicyLineAnswer[])__getInternalInterface().getFieldValue(LINEANSWERS_PROP.get());
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
   * Return all current and future policy locations in use by the policy line
   * @return set of fixedId's for all current and future policy locations in use by the policy line
   */
  public java.util.Set<gw.pl.persistence.core.Key> getLocationsInUseOnOrAfterSliceDate() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getLocationsInUseOnOrAfterSliceDate();
  }
  
  /**
   * Gets the value of the NumAddInsured field.
   * The number of additional insureds. For Quick Quotes users enter just the number additional insureds instead of all the details
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumAddInsured() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMADDINSURED_PROP.get());
  }
  
  /**
   * 
   * @return all states for which official IDs should be created.
   */
  public typekey.State[] getOfficialIDStates() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getOfficialIDStates();
  }
  
  /**
   * 
   * @return the policy line pattern from which this line derived
   */
  public gw.api.productmodel.PolicyLinePattern getPattern() {
    return ((com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods")).getPattern();
  }
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of PolicyLine this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNCODE_PROP.get());
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
  
  /**
   * 
   * @return associated quote rounding level
   */
  public java.lang.Integer getQuoteRoundingLevel() {
    return ((com.guidewire.pc.domain.rating.RateflowMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateflowMethods")).getQuoteRoundingLevel();
  }
  
  /**
   * 
   * @return associated quote rounding mode
   */
  public java.math.RoundingMode getQuoteRoundingMode() {
    return ((com.guidewire.pc.domain.rating.RateflowMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateflowMethods")).getQuoteRoundingMode();
  }
  
  /**
   * Returns the reference date that should be used for availability lookups for the given state.
   * This method first determines the reference date type (either effective date, written date or
   * rating period date) for the given state, the type of this product and the underwriting
   * company on the policy period. Then the {@link gw.plugin.productmodel.IReferenceDatePlugin} is
   * invoked to return the appropriate date.
   * @param baseState the base state to check
   * @return the reference date for the given state in the job
   */
  public java.util.Date getReferenceDateForCurrentJob(typekey.Jurisdiction baseState) {
    return ((com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.lines.PolicyLinePublicMethods")).getReferenceDateForCurrentJob(baseState);
  }
  
  public entity.PolicyLine getSlice(java.util.Date sliceDate) {
    return (entity.PolicyLine)getSliceUntyped(sliceDate);
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
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyLine getSubtype() {
    return (typekey.PolicyLine)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * 
   * @return this line's transactions in a LoB-independent manner.
   */
  public java.util.Set<entity.Transaction> getTransactions() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).getTransactions();
  }
  
  public entity.PolicyLine getUnsliced() {
    return (entity.PolicyLine)getUnslicedUntyped();
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
  
  public entity.windowed.PolicyLineVersionList getVersionList() {
    return (entity.windowed.PolicyLineVersionList)getVersionListUntyped();
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
   * Policy Line Subtype specific initialization
   */
  public void initialize() {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).initialize();
  }
  
  /**
   * Marks the PolicyLine as generated by APD. False for OOTB lines of business
   * @return true: Is APD Generated Line
   */
  public boolean isAPDLine() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).isAPDLine();
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
   * Indicates if unused location cleanup is enabled for this line of business.
   * If true, the quote process for any transaction on a policy that includes
   * this line of business will detect and remove unused locations.
   * @return true if the policy line has enabled unused location cleanup, false if it has not.
   */
  public boolean isUnusedLocationCleanupEnabled() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).isUnusedLocationCleanupEnabled();
  }
  
  /**
   * Marks lines that are WorkersComp lines. OOTB this is only the WCLine.
   * @return true: Is a WorkersComp line.
   */
  public boolean isWorkersComp() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).isWorkersComp();
  }
  
  /**
   * Generic callback executed on each line whenever a primary location is created during submission, allowing the line
   * to do any necessary book-keeping or updates to its own datamodel.
   * @param location the PolicyLocation being created
   */
  public void onPrimaryLocationCreation(entity.PolicyLocation location) {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).onPrimaryLocationCreation(location);
  }
  
  /**
   * Generic callback executed on each line whenever the primary named insured is changed, allowing the line
   * to do any necessary book-keeping or updates to its own datamodel.
   * @param newPrimaryNamedInsured the new PolicyPriNamedInsured
   */
  public void onPrimaryNamedInsuredChange(entity.PolicyPriNamedInsured newPrimaryNamedInsured) {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).onPrimaryNamedInsuredChange(newPrimaryNamedInsured);
  }
  
  /**
   * Called after applyChangesFromBranch
   * @param sourcePeriod 
   */
  public void postApplyChangesFromBranch(entity.PolicyPeriod sourcePeriod) {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postApplyChangesFromBranch(sourcePeriod);
  }
  
  /**
   * Called after a branch has been created in a new (logical) period. This will
   * be called for renewals and rewrites.
   */
  public void postCopyBranchIntoNewPolicy() {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postCopyBranchIntoNewPolicy();
  }
  
  /**
   * Called after a branch has been created in a new (logical) period. This will
   * be called for renewals and rewrites.
   */
  public void postCreateDraftBranchInNewPeriod() {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postCreateDraftBranchInNewPeriod();
  }
  
  /**
   * Called after the period dates have changed.
   * @param oldEffDate The old effective date of the period
   * @param oldExpDate The old expiration date of the period
   */
  public void postSetPeriodWindow(java.util.Date oldEffDate, java.util.Date oldExpDate) {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).postSetPeriodWindow(oldEffDate, oldExpDate);
  }
  
  /**
   */
  public void preLoadCoverages() {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).preLoadCoverages();
  }
  
  /**
   * Generic callback executed on each line whenever a location is about to be deleted, allowing the line to do any
   * necessary book-keeping or updates to its own datamodel.
   * @param location the PolicyLocation that's about to be deleted
   */
  public void preLocationDelete(entity.PolicyLocation location) {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).preLocationDelete(location);
  }
  
  /**
   * Prorate bases from the cancellation dates. This method should only be called from
   * the start of an Audit job.
   */
  public void prorateBasesFromCancellation() {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).prorateBasesFromCancellation();
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
   * Removes the answer, if any, to the specified question.
   * @param question the question to remove the answer for
   */
  public void removeAnswer(gw.api.productmodel.Question question) {
    ((com.guidewire.pc.domain.question.AnswerContainerPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.question.AnswerContainerPublicMethods")).removeAnswer(question);
  }
  
  /**
   * Removes the given element from the AdditionalInsureds array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInsureds(entity.PolicyAddlInsured element) {
    __getInternalInterface().removeArrayElement(ADDITIONALINSUREDS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AdditionalInsureds array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInsureds(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ADDITIONALINSUREDS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the CoverageSymbolGroups array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageSymbolGroups(entity.CoverageSymbolGroup element) {
    __getInternalInterface().removeArrayElement(COVERAGESYMBOLGROUPS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CoverageSymbolGroups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageSymbolGroups(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COVERAGESYMBOLGROUPS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the DiagnosticRatingWorksheets array. This is achieved by marking the element for removal.
   */
  public void removeFromDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet element) {
    __getInternalInterface().removeArrayElement(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the DiagnosticRatingWorksheets array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDiagnosticRatingWorksheets(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LineAnswers array. This is achieved by marking the element for removal.
   */
  public void removeFromLineAnswers(entity.PolicyLineAnswer element) {
    __getInternalInterface().removeArrayElement(LINEANSWERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LineAnswers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLineAnswers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LINEANSWERS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AdditionalInsureds field.
   */
  public void setAdditionalInsureds(entity.PolicyAddlInsured[] value) {
    __getInternalInterface().setFieldValue(ADDITIONALINSUREDS_PROP.get(), value);
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
  private void setBasedOnValue(entity.PolicyLine value) {
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
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverageSymbolGroups field.
   */
  public void setCoverageSymbolGroups(entity.CoverageSymbolGroup[] value) {
    __getInternalInterface().setFieldValue(COVERAGESYMBOLGROUPS_PROP.get(), value);
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
   * Sets the value of the DiagnosticRatingWorksheets field.
   */
  public void setDiagnosticRatingWorksheets(entity.DiagnosticRatingWorksheet[] value) {
    __getInternalInterface().setFieldValue(DIAGNOSTICRATINGWORKSHEETS_PROP.get(), value);
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
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.PolicyLine value) {
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
   * Sets the value of the LineAnswers field.
   */
  public void setLineAnswers(entity.PolicyLineAnswer[] value) {
    __getInternalInterface().setFieldValue(LINEANSWERS_PROP.get(), value);
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
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the NumAddInsured field.
   */
  public void setNumAddInsured(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMADDINSURED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PatternCode field.
   */
  private void setPatternCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PATTERNCODE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.PolicyLine value) {
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
   * Returns false for lines not supporting parallelization, true for lines supporting parallelization,
   * or -- depending on the implementation -- conditionally true for lines which support parallelization yet sometimes restrict it.
   * 
   * In the base configuration, the abstract implementation of this method returns false and must be overridden by each
   * line that supports parallelization.
   */
  public boolean shouldParallelizeRating() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).shouldParallelizeRating();
  }
  
  public entity.PolicyLine split(java.util.Date splitDate) {
    return (entity.PolicyLine)splitUntyped(splitDate);
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
   * This base class implementation updates all the CoveredState. Subclasses may
   * update their own particular computed values.
   * <p/>
   * This method is typically called at "key" points in the lifecycle of a
   * policy, such as just before quoting and just before issuance.
   */
  public void syncComputedValues() {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).syncComputedValues();
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
   * called to sync the territory codes on a location
   * @param location 
   */
  public void updateTerritoryCodes(entity.PolicyLocation location) {
    ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).updateTerritoryCodes(location);
  }
  
  /**
   * Determines if this line supports all OOS slice dates instead of only bound edit effective dates.
   * @return true: Supports all OOS slice dates; true for most lines
   *         false: Only uses bound edit effective dates
   */
  public boolean usesAllOOSSliceDates() {
    return ((gw.api.policy.PolicyLineJavaMethods)__getDelegateManager().getImplementation("gw.api.policy.PolicyLineJavaMethods")).usesAllOOSSliceDates();
  }
  
  static {
    com.guidewire._generated.entity.PolicyLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PolicyLine, com.guidewire._generated.entity.PolicyLineInternal>() {
      public java.lang.Object getImplementation(entity.PolicyLine bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyLineInternal getInternalInterface(entity.PolicyLine bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}