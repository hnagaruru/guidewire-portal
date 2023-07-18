package entity;

/**
 * HOPLineScheduleCond
 * HOP Line condition with a schedule
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCond.eti;HOPLineScheduleCond.eix;HOPLineScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "HOPLineScheduleCond")
public class HOPLineScheduleCond extends entity.HOPLineCond implements entity.ScheduleAutoNumberSequence, gw.api.domain.Schedule {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.HOPLineScheduleCond, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.HOPLineScheduleCond, entity.PolicyPeriod>("entity.HOPLineScheduleCond");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> HOPLINESCHEDULEDITEMS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "HOPLineScheduledItems");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SCHEDULEAUTONUMBERSEQ_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ScheduleAutoNumberSeq");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  protected HOPLineScheduleCond(entity.PolicyPeriod branch, java.lang.String param_PatternCode)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList(param_PatternCode));
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  protected HOPLineScheduleCond(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate, java.lang.String param_PatternCode)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList(param_PatternCode));
  }
  
  protected HOPLineScheduleCond(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.HOPLineScheduleCondInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.HOPLineScheduleCondInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.HOPLineScheduleCondInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the HOPLineScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineScheduledItems(entity.HOPLineScheduleCondItem element) {
    __getInternalInterface().addArrayElement(HOPLINESCHEDULEDITEMS_PROP.get(), element);
  }
  
  public void bindAutoNumberSequence() {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).bindAutoNumberSequence();
  }
  
  public entity.HOPLineScheduleCond clone() {
    return (entity.HOPLineScheduleCond)__getInternalInterface().cloneUntyped();
  }
  
  public void cloneAutoNumberSequence() {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).cloneAutoNumberSequence();
  }
  
  public entity.ScheduledItem createAndAddScheduledItem() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).createAndAddScheduledItem();
  }
  
  public void createAutoNumber(entity.KeyableBean scheduledItem) {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).createAutoNumber(scheduledItem);
  }
  
  public entity.HOPLineScheduleCond getBasedOn() {
    return (entity.HOPLineScheduleCond)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the HOPLineScheduledItems field.
   * Scheduled Items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineScheduleCondItem[] getHOPLineScheduledItems() {
    return (entity.HOPLineScheduleCondItem[])__getInternalInterface().getFieldValue(HOPLINESCHEDULEDITEMS_PROP.get());
  }
  
  public gw.api.productmodel.SchedulePropertyInfo getMostDescriptivePropertyInfo() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getMostDescriptivePropertyInfo();
  }
  
  public gw.api.productmodel.SchedulePropertyInfo[] getPropertyInfos() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getPropertyInfos();
  }
  
  public java.util.Map<java.lang.String, gw.api.productmodel.SchedulePropertyInfo> getPropertyInfosMap() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getPropertyInfosMap();
  }
  
  /**
   * Gets the value of the ScheduleAutoNumberSeq field.
   * Sequence to autonumber schedule items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getScheduleAutoNumberSeq() {
    return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(SCHEDULEAUTONUMBERSEQ_PROP.get());
  }
  
  public java.lang.String getScheduleName() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduleName();
  }
  
  public gw.api.productmodel.ClauseSchedulePattern getSchedulePattern() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getSchedulePattern();
  }
  
  public java.lang.String getScheduledItemDescription(entity.ScheduledItem scheduledItem) {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduledItemDescription(scheduledItem);
  }
  
  public gw.api.productmodel.ClausePattern[] getScheduledItemMultiPatterns() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduledItemMultiPatterns();
  }
  
  public entity.ScheduledItem[] getScheduledItems() {
    return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduledItems();
  }
  
  public entity.HOPLineScheduleCond getSlice(java.util.Date sliceDate) {
    return (entity.HOPLineScheduleCond)getSliceUntyped(sliceDate);
  }
  
  public entity.HOPLineScheduleCond getUnsliced() {
    return (entity.HOPLineScheduleCond)getUnslicedUntyped();
  }
  
  public entity.windowed.HOPLineScheduleCondVersionList getVersionList() {
    return (entity.windowed.HOPLineScheduleCondVersionList)getVersionListUntyped();
  }
  
  public void initializeAutoNumberSequence(gw.pl.persistence.core.Bundle bundle) {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).initializeAutoNumberSequence(bundle);
  }
  
  /**
   * Removes the given element from the HOPLineScheduledItems array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineScheduledItems(entity.HOPLineScheduleCondItem element) {
    __getInternalInterface().removeArrayElement(HOPLINESCHEDULEDITEMS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the HOPLineScheduledItems array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineScheduledItems(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(HOPLINESCHEDULEDITEMS_PROP.get(), elementID);
  }
  
  public void removeScheduledItem(entity.ScheduledItem item) {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).removeScheduledItem(item);
  }
  
  public void renumberAutoNumberSequence() {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).renumberAutoNumberSequence();
  }
  
  public void renumberNewScheduledItems() {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).renumberNewScheduledItems();
  }
  
  public void resetAutoNumberSequence() {
    ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).resetAutoNumberSequence();
  }
  
  /**
   * Sets the value of the HOPLineScheduledItems field.
   */
  public void setHOPLineScheduledItems(entity.HOPLineScheduleCondItem[] value) {
    __getInternalInterface().setFieldValue(HOPLINESCHEDULEDITEMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ScheduleAutoNumberSeq field.
   */
  public void setScheduleAutoNumberSeq(entity.AutoNumberSequence value) {
    __getInternalInterface().setFieldValue(SCHEDULEAUTONUMBERSEQ_PROP.get(), value);
  }
  
  public entity.HOPLineScheduleCond split(java.util.Date splitDate) {
    return (entity.HOPLineScheduleCond)splitUntyped(splitDate);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.HOPLineScheduleCondInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.HOPLineScheduleCond.this.__getDelegateManager();
    }
    
    public void addSlice(entity.EffDatedBase slice, java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).addSlice(slice, sliceDate);
    }
    
    public void addToConditionArray(entity.PolicyCondition policyCondition) {
      ((gw.api.domain.PolicyConditionAdapter)__getDelegateManager().getImplementation("gw.api.domain.PolicyConditionAdapter")).addToConditionArray(policyCondition);
    }
    
    /**
     * Adds the given element to the HOPLineScheduledItems array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToHOPLineScheduledItems(entity.HOPLineScheduleCondItem element) {
      __getInternalInterface().addArrayElement(HOPLINESCHEDULEDITEMS_PROP.get(), element);
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
    
    public void bindAutoNumberSequence() {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).bindAutoNumberSequence();
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
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCovTermsAgainstProductModel(com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext ctx) {
      return ((com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods")).checkCovTermsAgainstProductModel(ctx);
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCovTermsAgainstProductModelwLine(com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext ctx, entity.PolicyLine policyLine, boolean fixIssue) {
      return ((com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods")).checkCovTermsAgainstProductModelwLine(ctx, policyLine, fixIssue);
    }
    
    /**
     * Sets the ReferenceDateInternal field of this clause to null so {@link #getReferenceDate()}
     * will compute the reference date based on the current policy data, rather than returning the
     * field's value. This is meant to be called only upon creating a new policy term (e.g., in a
     * renewal job), when the reference dates must be recalculated.
     */
    public void clearReferenceDateInternal() {
      ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).clearReferenceDateInternal();
    }
    
    public void cloneAutoNumberSequence() {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).cloneAutoNumberSequence();
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
    
    /**
     * Creates a new condition which is a copy of the current condition
     * @return The new copy of this condition
     */
    public entity.PolicyCondition copyCondition() {
      return ((com.guidewire.pc.domain.coverage.PolicyConditionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.PolicyConditionPublicMethods")).copyCondition();
    }
    
    public void copyFromBeanUntyped(entity.EffDated bean) {
      ((gw.api.copier.EffDatedCopyable)__getDelegateManager().getImplementation("gw.api.copier.EffDatedCopyable")).copyFromBeanUntyped(bean);
    }
    
    public entity.ScheduledItem createAndAddScheduledItem() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).createAndAddScheduledItem();
    }
    
    public void createAutoNumber(entity.KeyableBean scheduledItem) {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).createAutoNumber(scheduledItem);
    }
    
    public boolean deletableInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).deletableInternal();
    }
    
    /**
     * Stores the current value of getReferenceDate() in the ReferenceDateInternal field of this
     * clause if the field is not already set, and does nothing otherwise. This is meant to be
     * called only upon binding a policy period.
     */
    public void denormalizeReferenceDate() {
      ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).denormalizeReferenceDate();
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
    
    public void fireInitializeEvent() {
      ((com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods")).fireInitializeEvent();
    }
    
    public void fireRemovalEvent() {
      ((com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods")).fireRemovalEvent();
    }
    
    public java.lang.Object genKey() {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
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
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
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
    public entity.HOPLineCond getBasedOnValue() {
      return (entity.HOPLineCond)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BASEDONVALUE_PROP.get());
    }
    
    /**
     * 
     * @return the actual bean this clause represents
     */
    public entity.EffDated getBean() {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getBean();
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
     * Gets the value of the ChoiceTerm1 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM1_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm10 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm10() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM10_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm11 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm11() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM11_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm2 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM2_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm3 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm3() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM3_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm4 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm4() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM4_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm5 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm5() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM5_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm6 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm6() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM6_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm7 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm7() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM7_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm8 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm8() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM8_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm9 field.
     * choice cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChoiceTerm9() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHOICETERM9_PROP.get());
    }
    
    /**
     * Returns the CovTerm in this clause with the given pattern. Note that this
     * may return null if the CovTerm is not available due to the state of the
     * policy, and a hasCovTerm check or null test may be necessary to avoid an NPE.
     * @param pattern - pattern of the term you want to get
     * @return the term
     */
    public gw.api.domain.covterm.CovTerm getCovTerm(gw.api.productmodel.CovTermPattern pattern) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getCovTerm(pattern);
    }
    
    /**
     * Returns the CovTerm in this coverage with the given pattern.  Note that this
     *  may return null if the CovTerm is not available due to the state of the
     *  policy, and a hasCovTerm check or null test may be necessary to avoid an NPE.
     * @param patternCode - pattern code of the term you want to get
     * @return the term
     * @deprecated Since PolicyCenter 9.0.0. Please use {@link #getCovTermByPublicId(String)} or {@link #getCovTermByCodeIdentifier(String)} instead.
     */
    @java.lang.Deprecated
    public gw.api.domain.covterm.CovTerm getCovTerm(java.lang.String patternCode) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getCovTerm(patternCode);
    }
    
    /**
     * Returns the CovTerm in this coverage with the given pattern.  Note that this
     *  may return null if the CovTerm is not available due to the state of the
     *  policy, and a hasCovTerm check or null test may be necessary to avoid an NPE.
     * @param patternCodeIdentifier codeIdentifier of the term you want to get
     * @return the term
     */
    public gw.api.domain.covterm.CovTerm getCovTermByCodeIdentifier(java.lang.String patternCodeIdentifier) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getCovTermByCodeIdentifier(patternCodeIdentifier);
    }
    
    /**
     * Returns the CovTerm in this coverage with the given pattern.  Note that this
     *  may return null if the CovTerm is not available due to the state of the
     *  policy, and a hasCovTerm check or null test may be necessary to avoid an NPE.
     * @param patternPublicId publicId of the term you want to get
     * @return the term
     */
    public gw.api.domain.covterm.CovTerm getCovTermByPublicId(java.lang.String patternPublicId) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getCovTermByPublicId(patternPublicId);
    }
    
    /**
     * 
     * @return an array containing the child CovTerms of this Clause
     */
    public gw.api.domain.covterm.CovTerm[] getCovTerms() {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getCovTerms();
    }
    
    public typekey.Jurisdiction getCoverageState() {
      return ((gw.api.domain.ClauseAdapter)__getDelegateManager().getImplementation("gw.api.domain.ClauseAdapter")).getCoverageState();
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
     * Gets the value of the Currency field.
     * Currency associated with the policy condition
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCurrency() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CURRENCY_PROP.get());
    }
    
    /**
     * Gets the value of the DateTerm1 field.
     * datetime cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateTerm1() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATETERM1_PROP.get());
    }
    
    /**
     * Gets the value of the DateTerm2 field.
     * datetime cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateTerm2() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATETERM2_PROP.get());
    }
    
    /**
     * Gets the value of the DirectTerm1 field.
     * direct cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDirectTerm1() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DIRECTTERM1_PROP.get());
    }
    
    /**
     * Gets the value of the DirectTerm2 field.
     * direct cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDirectTerm2() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DIRECTTERM2_PROP.get());
    }
    
    /**
     * Gets the value of the DirectTerm3 field.
     * direct cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDirectTerm3() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DIRECTTERM3_PROP.get());
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
     * Get the date when this bean expires.
     * @return Date when this bean expires.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpirationDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
    }
    
    /**
     * Gets the value of the Fixed field.
     * Unique ID for this 'object' across all branches and periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPLineCond getFixed() {
      return (entity.HOPLineCond)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
     * Gets the value of the HOPLine field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPLine getHOPLine() {
      return (entity.HOPLine)__getInternalInterface().getFieldValue(HOPLINE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getHOPLineID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(HOPLINE_PROP.get());
    }
    
    /**
     * Gets the value of the HOPLineScheduledItems field.
     * Scheduled Items
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPLineScheduleCondItem[] getHOPLineScheduledItems() {
      return (entity.HOPLineScheduleCondItem[])__getInternalInterface().getFieldValue(HOPLINESCHEDULEDITEMS_PROP.get());
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
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
    }
    
    public gw.api.productmodel.SchedulePropertyInfo getMostDescriptivePropertyInfo() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getMostDescriptivePropertyInfo();
    }
    
    public entity.Coverable getOwningCoverable() {
      return ((gw.api.domain.ClauseAbstractMethods)__getDelegateManager().getImplementation("gw.api.domain.ClauseAbstractMethods")).getOwningCoverable();
    }
    
    /**
     * 
     * @return the ClausePattern associated with this Clause.
     */
    public gw.api.productmodel.ClausePattern getPattern() {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getPattern();
    }
    
    /**
     * Gets the value of the PatternCode field.
     * The pattern defining what kind of Condition this is
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPatternCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNCODE_PROP.get());
    }
    
    public entity.PolicyLine getPolicyLine() {
      return ((gw.api.domain.ClauseAbstractMethods)__getDelegateManager().getImplementation("gw.api.domain.ClauseAbstractMethods")).getPolicyLine();
    }
    
    public gw.lang.reflect.IType getProductModelType() {
      return ((com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods")).getProductModelType();
    }
    
    public java.lang.String getProductModelTypeName() {
      return ((com.guidewire.pc.domain.coverage.impl.ClauseInternal)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.ClauseInternal")).getProductModelTypeName();
    }
    
    public gw.api.productmodel.SchedulePropertyInfo[] getPropertyInfos() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getPropertyInfos();
    }
    
    public java.util.Map<java.lang.String, gw.api.productmodel.SchedulePropertyInfo> getPropertyInfosMap() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getPropertyInfosMap();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Invokes {@link gw.plugin.productmodel.IReferenceDatePlugin} to compute the reference date
     * of this clause.
     * @return the reference date
     */
    public java.util.Date getReferenceDate() {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).getReferenceDate();
    }
    
    /**
     * Gets the value of the ReferenceDateInternal field.
     * Internal field for storing the reference date of coverages on bound policy periods. Normally the ReferenceDate property should be used instead.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReferenceDateInternal() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REFERENCEDATEINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the ScheduleAutoNumberSeq field.
     * Sequence to autonumber schedule items
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AutoNumberSequence getScheduleAutoNumberSeq() {
      return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(SCHEDULEAUTONUMBERSEQ_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getScheduleAutoNumberSeqID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SCHEDULEAUTONUMBERSEQ_PROP.get());
    }
    
    public java.lang.String getScheduleName() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduleName();
    }
    
    public gw.api.productmodel.ClauseSchedulePattern getSchedulePattern() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getSchedulePattern();
    }
    
    public java.lang.String getScheduledItemDescription(entity.ScheduledItem scheduledItem) {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduledItemDescription(scheduledItem);
    }
    
    public gw.api.productmodel.ClausePattern[] getScheduledItemMultiPatterns() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduledItemMultiPatterns();
    }
    
    public entity.ScheduledItem[] getScheduledItems() {
      return ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).getScheduledItems();
    }
    
    public entity.PolicyCondition getSlice(java.util.Date sliceDate) {
      return ((gw.api.domain.PolicyConditionAdapter)__getDelegateManager().getImplementation("gw.api.domain.PolicyConditionAdapter")).getSlice(sliceDate);
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
     * Gets the value of the StringTerm1 field.
     * string cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStringTerm1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGTERM1_PROP.get());
    }
    
    /**
     * Gets the value of the StringTerm2 field.
     * string cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStringTerm2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGTERM2_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.HOPLineCond getSubtype() {
      return (typekey.HOPLineCond)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
     * Returns true if the clause has a covterm of the specified type and returns
     * false otherwise
     * @param pattern the specific pattern to search for
     * @return true if there is a matching covterm, false otherwise
     */
    public boolean hasCovTerm(gw.api.productmodel.CovTermPattern pattern) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).hasCovTerm(pattern);
    }
    
    /**
     * Like {@link #hasCovTerm(gw.api.productmodel.CovTermPattern)} but takes
     * a String code instead of a pattern
     * @param patternCode String patterncode to match against
     * @return true if this Clause has a matching CovTerm, false otherwise
     * @deprecated Since PolicyCenter 9.0.0. Please use {@link #hasCovTermByPublicId(String)} or {@link #hasCovTermByCodeIdentifier(String)} instead.
     */
    @java.lang.Deprecated
    public boolean hasCovTerm(java.lang.String patternCode) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).hasCovTerm(patternCode);
    }
    
    /**
     * Like {@link #hasCovTerm(gw.api.productmodel.CovTermPattern)} but takes
     * a String publicId instead of a pattern
     * @param patternCodeIdentifier string codeIdentifier to match against
     * @return true if this Clause has a matching CovTerm, false otherwise
     */
    public boolean hasCovTermByCodeIdentifier(java.lang.String patternCodeIdentifier) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).hasCovTermByCodeIdentifier(patternCodeIdentifier);
    }
    
    /**
     * Like {@link #hasCovTerm(gw.api.productmodel.CovTermPattern)} but takes
     * a String publicId instead of a pattern
     * @param patternPublicId string publicId to match against
     * @return true if this Clause has a matching CovTerm, false otherwise
     */
    public boolean hasCovTermByPublicId(java.lang.String patternPublicId) {
      return ((gw.api.domain.Clause)__getDelegateManager().getImplementation("gw.api.domain.Clause")).hasCovTermByPublicId(patternPublicId);
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
    
    public void initializeAutoNumberSequence(gw.pl.persistence.core.Bundle bundle) {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).initializeAutoNumberSequence(bundle);
    }
    
    public boolean isAutoSplit() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isAutoSplit();
    }
    
    public boolean isBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isBasedOn();
    }
    
    /**
     * Gets the value of the BooleanTerm1 field.
     * boolean cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBooleanTerm1() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLEANTERM1_PROP.get());
    }
    
    /**
     * Gets the value of the BooleanTerm1Avl field.
     * whether or not the BooleanTerm1 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBooleanTerm1Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLEANTERM1AVL_PROP.get());
    }
    
    /**
     * Gets the value of the BooleanTerm2 field.
     * boolean cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBooleanTerm2() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLEANTERM2_PROP.get());
    }
    
    /**
     * Gets the value of the BooleanTerm2Avl field.
     * whether or not the BooleanTerm2 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBooleanTerm2Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLEANTERM2AVL_PROP.get());
    }
    
    /**
     * Gets the value of the BooleanTerm3 field.
     * boolean cov term field
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBooleanTerm3() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLEANTERM3_PROP.get());
    }
    
    /**
     * Gets the value of the BooleanTerm3Avl field.
     * whether or not the BooleanTerm3 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isBooleanTerm3Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BOOLEANTERM3AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm10Avl field.
     * whether or not the ChoiceTerm10 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm10Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM10AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm11Avl field.
     * whether or not the ChoiceTerm11 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm11Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM11AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm1Avl field.
     * whether or not the ChoiceTerm1 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm1Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM1AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm2Avl field.
     * whether or not the ChoiceTerm2 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm2Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM2AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm3Avl field.
     * whether or not the ChoiceTerm3 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm3Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM3AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm4Avl field.
     * whether or not the ChoiceTerm4 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm4Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM4AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm5Avl field.
     * whether or not the ChoiceTerm5 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm5Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM5AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm6Avl field.
     * whether or not the ChoiceTerm6 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm6Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM6AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm7Avl field.
     * whether or not the ChoiceTerm7 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm7Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM7AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm8Avl field.
     * whether or not the ChoiceTerm8 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm8Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM8AVL_PROP.get());
    }
    
    /**
     * Gets the value of the ChoiceTerm9Avl field.
     * whether or not the ChoiceTerm9 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isChoiceTerm9Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CHOICETERM9AVL_PROP.get());
    }
    
    /**
     * Convenience wrapper around isFieldChangedFromBasedOn that takes a CovTermPattern.
     * @param pattern the pattern of the cov term to check
     * @return true if either the cov term value has changed or if the cov term availability has changed.
     */
    public boolean isCovTermChangedFromBasedOn(gw.api.productmodel.CovTermPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.PolicyConditionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.PolicyConditionPublicMethods")).isCovTermChangedFromBasedOn(pattern);
    }
    
    /**
     * Gets the value of the DateTerm1Avl field.
     * whether or not the DateTerm1 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDateTerm1Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DATETERM1AVL_PROP.get());
    }
    
    /**
     * Gets the value of the DateTerm2Avl field.
     * whether or not the DateTerm2 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDateTerm2Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DATETERM2AVL_PROP.get());
    }
    
    /**
     * Gets the value of the DirectTerm1Avl field.
     * whether or not the DirectTerm1 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDirectTerm1Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DIRECTTERM1AVL_PROP.get());
    }
    
    /**
     * Gets the value of the DirectTerm2Avl field.
     * whether or not the DirectTerm2 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDirectTerm2Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DIRECTTERM2AVL_PROP.get());
    }
    
    /**
     * Gets the value of the DirectTerm3Avl field.
     * whether or not the DirectTerm3 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDirectTerm3Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DIRECTTERM3AVL_PROP.get());
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
     * Gets the value of the StringTerm1Avl field.
     * whether or not the StringTerm1 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isStringTerm1Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(STRINGTERM1AVL_PROP.get());
    }
    
    /**
     * Gets the value of the StringTerm2Avl field.
     * whether or not the StringTerm2 field was available the last time availability was checked
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isStringTerm2Avl() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(STRINGTERM2AVL_PROP.get());
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public boolean isTerminated() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isTerminated();
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
     * Removes the given element from the HOPLineScheduledItems array. This is achieved by marking the element for removal.
     */
    public void removeFromHOPLineScheduledItems(entity.HOPLineScheduleCondItem element) {
      __getInternalInterface().removeArrayElement(HOPLINESCHEDULEDITEMS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the HOPLineScheduledItems array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromHOPLineScheduledItems(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(HOPLINESCHEDULEDITEMS_PROP.get(), elementID);
    }
    
    public void removeFromParent() {
      ((gw.api.domain.ClauseAdapter)__getDelegateManager().getImplementation("gw.api.domain.ClauseAdapter")).removeFromParent();
    }
    
    public void removeScheduledItem(entity.ScheduledItem item) {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).removeScheduledItem(item);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    public void renumberAutoNumberSequence() {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).renumberAutoNumberSequence();
    }
    
    public void renumberNewScheduledItems() {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).renumberNewScheduledItems();
    }
    
    public void resetAutoNumberSequence() {
      ((gw.api.domain.Schedule)__getDelegateManager().getImplementation("gw.api.domain.Schedule")).resetAutoNumberSequence();
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
    public void setBasedOnValue(entity.HOPLineCond value) {
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
     * Sets the value of the BooleanTerm1 field.
     */
    public void setBooleanTerm1(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLEANTERM1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BooleanTerm1Avl field.
     */
    public void setBooleanTerm1Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLEANTERM1AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BooleanTerm2 field.
     */
    public void setBooleanTerm2(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLEANTERM2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BooleanTerm2Avl field.
     */
    public void setBooleanTerm2Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLEANTERM2AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BooleanTerm3 field.
     */
    public void setBooleanTerm3(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLEANTERM3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BooleanTerm3Avl field.
     */
    public void setBooleanTerm3Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BOOLEANTERM3AVL_PROP.get(), value);
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
     * Sets the value of the ChangeType field.
     */
    public void setChangeType(typekey.EffDatedChangeType value) {
      __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm1 field.
     */
    public void setChoiceTerm1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm10 field.
     */
    public void setChoiceTerm10(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM10_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm10Avl field.
     */
    public void setChoiceTerm10Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM10AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm11 field.
     */
    public void setChoiceTerm11(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM11_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm11Avl field.
     */
    public void setChoiceTerm11Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM11AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm1Avl field.
     */
    public void setChoiceTerm1Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM1AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm2 field.
     */
    public void setChoiceTerm2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm2Avl field.
     */
    public void setChoiceTerm2Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM2AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm3 field.
     */
    public void setChoiceTerm3(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm3Avl field.
     */
    public void setChoiceTerm3Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM3AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm4 field.
     */
    public void setChoiceTerm4(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM4_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm4Avl field.
     */
    public void setChoiceTerm4Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM4AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm5 field.
     */
    public void setChoiceTerm5(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM5_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm5Avl field.
     */
    public void setChoiceTerm5Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM5AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm6 field.
     */
    public void setChoiceTerm6(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM6_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm6Avl field.
     */
    public void setChoiceTerm6Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM6AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm7 field.
     */
    public void setChoiceTerm7(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM7_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm7Avl field.
     */
    public void setChoiceTerm7Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM7AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm8 field.
     */
    public void setChoiceTerm8(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM8_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm8Avl field.
     */
    public void setChoiceTerm8Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM8AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm9 field.
     */
    public void setChoiceTerm9(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHOICETERM9_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChoiceTerm9Avl field.
     */
    public void setChoiceTerm9Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CHOICETERM9AVL_PROP.get(), value);
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
     * Sets the value of the Currency field.
     */
    public void setCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateTerm1 field.
     */
    public void setDateTerm1(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATETERM1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateTerm1Avl field.
     */
    public void setDateTerm1Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DATETERM1AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateTerm2 field.
     */
    public void setDateTerm2(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATETERM2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateTerm2Avl field.
     */
    public void setDateTerm2Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DATETERM2AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DirectTerm1 field.
     */
    public void setDirectTerm1(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DIRECTTERM1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DirectTerm1Avl field.
     */
    public void setDirectTerm1Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DIRECTTERM1AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DirectTerm2 field.
     */
    public void setDirectTerm2(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DIRECTTERM2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DirectTerm2Avl field.
     */
    public void setDirectTerm2Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DIRECTTERM2AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DirectTerm3 field.
     */
    public void setDirectTerm3(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DIRECTTERM3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DirectTerm3Avl field.
     */
    public void setDirectTerm3Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DIRECTTERM3AVL_PROP.get(), value);
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
     * Sets the value of the Fixed field.
     */
    public void setFixed(entity.HOPLineCond value) {
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
     * Sets the value of the HOPLine field.
     */
    public void setHOPLine(entity.HOPLine value) {
      __getInternalInterface().setFieldValue(HOPLINE_PROP.get(), value);
    }
    
    public void setHOPLineID(gw.pl.persistence.core.Key value) {
      setFieldValue(HOPLINE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HOPLineScheduledItems field.
     */
    public void setHOPLineScheduledItems(entity.HOPLineScheduleCondItem[] value) {
      __getInternalInterface().setFieldValue(HOPLINESCHEDULEDITEMS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
     * Sets the value of the PatternCode field.
     */
    public void setPatternCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PATTERNCODE_PROP.get(), value);
    }
    
    public void setPeriodWindow(com.guidewire.pl.system.util.DateRange oldPeriodRange) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setPeriodWindow(oldPeriodRange);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReferenceDateInternal field.
     */
    public void setReferenceDateInternal(java.util.Date value) {
      __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ScheduleAutoNumberSeq field.
     */
    public void setScheduleAutoNumberSeq(entity.AutoNumberSequence value) {
      __getInternalInterface().setFieldValue(SCHEDULEAUTONUMBERSEQ_PROP.get(), value);
    }
    
    public void setScheduleAutoNumberSeqID(gw.pl.persistence.core.Key value) {
      setFieldValue(SCHEDULEAUTONUMBERSEQ_PROP.get(), value);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the StringTerm1 field.
     */
    public void setStringTerm1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGTERM1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StringTerm1Avl field.
     */
    public void setStringTerm1Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(STRINGTERM1AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StringTerm2 field.
     */
    public void setStringTerm2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGTERM2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StringTerm2Avl field.
     */
    public void setStringTerm2Avl(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(STRINGTERM2AVL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.HOPLineCond value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
    
    public void syncCovTermsWithProductModel(com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext ctx) {
      ((com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods")).syncCovTermsWithProductModel(ctx);
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
    config.put("com.guidewire.pc.domain.coverage.PolicyConditionPublicMethods", "com.guidewire.pc.domain.coverage.impl.PolicyConditionImpl");
    config.put("com.guidewire.pc.domain.coverage.impl.ClauseInternal", "com.guidewire.pc.domain.coverage.impl.PolicyConditionImpl");
    config.put("com.guidewire.pc.domain.coverage.impl.PolicyConditionInternalMethods", "com.guidewire.pc.domain.coverage.impl.PolicyConditionImpl");
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
    config.put("gw.api.copier.EffDatedCopyable", "gw.api.copier.EffDatedCopier");
    config.put("gw.api.domain.Clause", "com.guidewire.pc.domain.coverage.impl.PolicyConditionImpl");
    config.put("gw.api.domain.ClauseAbstractMethods", "gw.lob.hop.HOPLineCondConditionAdapter");
    config.put("gw.api.domain.ClauseAdapter", "gw.lob.hop.HOPLineCondConditionAdapter");
    config.put("gw.api.domain.PolicyConditionAdapter", "gw.lob.hop.HOPLineCondConditionAdapter");
    config.put("gw.api.domain.Schedule", "gw.lob.hop.schedule.HOPLineScheduleCondImpl");
    config.put("gw.api.logicalmatch.EffDatedLogicalMatcher", "gw.lob.hop.HOPLineCondMatcher");
    config.put("gw.api.logicalmatch.LogicalMatcher", "gw.lob.hop.HOPLineCondMatcher");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.HOPLineScheduleCond.class, config);
    com.guidewire._generated.entity.HOPLineScheduleCondInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.HOPLineScheduleCond, com.guidewire._generated.entity.HOPLineScheduleCondInternal>() {
      public java.lang.Object getImplementation(entity.HOPLineScheduleCond bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.HOPLineScheduleCondInternal getInternalInterface(entity.HOPLineScheduleCond bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.HOPLineScheduleCond newEmptyInstance() {
        return new entity.HOPLineScheduleCond((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}