package entity;

/**
 * APDCoverage
 * Coverage definition
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoverage.eti;APDCoverage.eix;APDCoverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "APDCoverage")
public class APDCoverage extends entity.APDClause {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDCoverage> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDCoverage>("entity.APDCoverage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CLAIMCATEGORIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ClaimCategories");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COSTDEFINITIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CostDefinitions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PERILS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Perils");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRICINGORDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PricingOrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEPARATEBILLING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeparateBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEPARATECOLLECTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeparateCollection");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WRITTENBYTHIRDPARTY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "WrittenByThirdParty");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public APDCoverage()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public APDCoverage(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected APDCoverage(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.APDCoverageInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.APDCoverageInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.APDCoverageInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the ClaimCategories array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClaimCategories(entity.APDCoverageClaim element) {
    __getInternalInterface().addArrayElement(CLAIMCATEGORIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the CostDefinitions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostDefinitions(entity.APDCoverageCostDefinition element) {
    __getInternalInterface().addArrayElement(COSTDEFINITIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Perils array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPerils(entity.APDCoveragePeril element) {
    __getInternalInterface().addArrayElement(PERILS_PROP.get(), element);
  }
  
  /**
   * Gets the value of the ClaimCategories field.
   * The claim categories appropriate to this coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverageClaim[] getClaimCategories() {
    return (entity.APDCoverageClaim[])__getInternalInterface().getFieldValue(CLAIMCATEGORIES_PROP.get());
  }
  
  /**
   * Gets the value of the CostDefinitions field.
   * The definition of costs that apply to this coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverageCostDefinition[] getCostDefinitions() {
    return (entity.APDCoverageCostDefinition[])__getInternalInterface().getFieldValue(COSTDEFINITIONS_PROP.get());
  }
  
  /**
   * Gets the value of the Perils field.
   * The perils included in the coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoveragePeril[] getPerils() {
    return (entity.APDCoveragePeril[])__getInternalInterface().getFieldValue(PERILS_PROP.get());
  }
  
  /**
   * Gets the value of the PricingOrder field.
   * The order in which the price is calculated (within its set)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPricingOrder() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(PRICINGORDER_PROP.get());
  }
  
  /**
   * Gets the value of the SeparateBilling field.
   * If true, this coverage will create an individual debtors charge items for billing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateBilling() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATEBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the SeparateCollection field.
   * If true, this coverage will create an individual debtors charge for cash allocation
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
   * Removes the given element from the ClaimCategories array. This is achieved by marking the element for removal.
   */
  public void removeFromClaimCategories(entity.APDCoverageClaim element) {
    __getInternalInterface().removeArrayElement(CLAIMCATEGORIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ClaimCategories array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClaimCategories(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(CLAIMCATEGORIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
   */
  public void removeFromCostDefinitions(entity.APDCoverageCostDefinition element) {
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
   * Removes the given element from the Perils array. This is achieved by marking the element for removal.
   */
  public void removeFromPerils(entity.APDCoveragePeril element) {
    __getInternalInterface().removeArrayElement(PERILS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Perils array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPerils(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PERILS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ClaimCategories field.
   */
  public void setClaimCategories(entity.APDCoverageClaim[] value) {
    __getInternalInterface().setFieldValue(CLAIMCATEGORIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CostDefinitions field.
   */
  public void setCostDefinitions(entity.APDCoverageCostDefinition[] value) {
    __getInternalInterface().setFieldValue(COSTDEFINITIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Perils field.
   */
  public void setPerils(entity.APDCoveragePeril[] value) {
    __getInternalInterface().setFieldValue(PERILS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PricingOrder field.
   */
  public void setPricingOrder(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(PRICINGORDER_PROP.get(), value);
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
   * Sets the value of the WrittenByThirdParty field.
   */
  public void setWrittenByThirdParty(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(WRITTENBYTHIRDPARTY_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.APDCoverageInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.APDCoverage.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the ClaimCategories array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToClaimCategories(entity.APDCoverageClaim element) {
      __getInternalInterface().addArrayElement(CLAIMCATEGORIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the CostDefinitions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCostDefinitions(entity.APDCoverageCostDefinition element) {
      __getInternalInterface().addArrayElement(COSTDEFINITIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDescription_L10N_ARRAY(entity.APDClause_Description_L10N element) {
      __getInternalInterface().addArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToName_L10N_ARRAY(entity.APDClause_Name_L10N element) {
      __getInternalInterface().addArrayElement(NAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ParentclauseedgeArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToParentclauseedgeArray(entity.Parentclauseedge element) {
      __getInternalInterface().addArrayElement(PARENTCLAUSEEDGEARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Perils array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPerils(entity.APDCoveragePeril element) {
      __getInternalInterface().addArrayElement(PERILS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRules(entity.APDClauseRule element) {
      __getInternalInterface().addArrayElement(RULES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Terms array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTerms(entity.APDTerm element) {
      __getInternalInterface().addArrayElement(TERMS_PROP.get(), element);
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the ClaimCategories field.
     * The claim categories appropriate to this coverage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverageClaim[] getClaimCategories() {
      return (entity.APDCoverageClaim[])__getInternalInterface().getFieldValue(CLAIMCATEGORIES_PROP.get());
    }
    
    /**
     * Gets the value of the ClauseCategory field.
     * The UI category to which the clause belongs
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClauseCategory getClauseCategory() {
      return (entity.APDClauseCategory)__getInternalInterface().getFieldValue(CLAUSECATEGORY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getClauseCategoryID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CLAUSECATEGORY_PROP.get());
    }
    
    /**
     * Gets the value of the CodeIdentifier field.
     * The code used within the product model to identify this clause
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCodeIdentifier() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODEIDENTIFIER_PROP.get());
    }
    
    /**
     * Gets the value of the CostDefinitions field.
     * The definition of costs that apply to this coverage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverageCostDefinition[] getCostDefinitions() {
      return (entity.APDCoverageCostDefinition[])__getInternalInterface().getFieldValue(COSTDEFINITIONS_PROP.get());
    }
    
    /**
     * Gets the value of the Coverable field.
     * The risk object that has this cover
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoverable getCoverable() {
      return (entity.APDCoverable)__getInternalInterface().getFieldValue(COVERABLE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCoverableID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(COVERABLE_PROP.get());
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
     * A description of the clause
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the Description_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClause_Description_L10N[] getDescription_L10N_ARRAY() {
      return (entity.APDClause_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
     */
    public entity.APDClause_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDClause_Description_L10N)__getInternalInterface().getAssociativeArrayValue(property);
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
     * Gets the value of the Name field.
     * The name of the clause as displayed in the UI
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the Name_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClause_Name_L10N[] getName_L10N_ARRAY() {
      return (entity.APDClause_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
     */
    public entity.APDClause_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.APDClause_Name_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the ParentClause field.
     * The parent clause of this clause
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClause getParentClause() {
      return (entity.APDClause)__getInternalInterface().getFieldValue(PARENTCLAUSE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getParentClauseID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PARENTCLAUSE_PROP.get());
    }
    
    /**
     * Gets the value of the ParentclauseedgeArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Parentclauseedge[] getParentclauseedgeArray() {
      return (entity.Parentclauseedge[])__getInternalInterface().getFieldValue(PARENTCLAUSEEDGEARRAY_PROP.get());
    }
    
    /**
     * Gets the value of the Perils field.
     * The perils included in the coverage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDCoveragePeril[] getPerils() {
      return (entity.APDCoveragePeril[])__getInternalInterface().getFieldValue(PERILS_PROP.get());
    }
    
    /**
     * Gets the value of the PricingOrder field.
     * The order in which the price is calculated (within its set)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getPricingOrder() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(PRICINGORDER_PROP.get());
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
     * Rules that apply to this clause
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClauseRule[] getRules() {
      return (entity.APDClauseRule[])__getInternalInterface().getFieldValue(RULES_PROP.get());
    }
    
    /**
     * Gets the value of the ScheduledItem field.
     * Scheduled item
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDScheduledItem getScheduledItem() {
      return (entity.APDScheduledItem)__getInternalInterface().getFieldValue(SCHEDULEDITEM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getScheduledItemID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SCHEDULEDITEM_PROP.get());
    }
    
    /**
     * Gets the value of the Sequence field.
     * The sequence the clauses are to be listed
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
    public typekey.APDClause getSubtype() {
      return (typekey.APDClause)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Terms field.
     * The terms that qualify this clause
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDTerm[] getTerms() {
      return (entity.APDTerm[])__getInternalInterface().getFieldValue(TERMS_PROP.get());
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
     * If true, this coverage will create an individual debtors charge items for billing
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isSeparateBilling() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATEBILLING_PROP.get());
    }
    
    /**
     * Gets the value of the SeparateCollection field.
     * If true, this coverage will create an individual debtors charge for cash allocation
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
     * Removes the given element from the ClaimCategories array. This is achieved by marking the element for removal.
     */
    public void removeFromClaimCategories(entity.APDCoverageClaim element) {
      __getInternalInterface().removeArrayElement(CLAIMCATEGORIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ClaimCategories array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromClaimCategories(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CLAIMCATEGORIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
     */
    public void removeFromCostDefinitions(entity.APDCoverageCostDefinition element) {
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
    public void removeFromDescription_L10N_ARRAY(entity.APDClause_Description_L10N element) {
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
     * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromName_L10N_ARRAY(entity.APDClause_Name_L10N element) {
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
    
    /**
     * Removes the given element from the ParentclauseedgeArray array. This is achieved by marking the element for removal.
     */
    public void removeFromParentclauseedgeArray(entity.Parentclauseedge element) {
      __getInternalInterface().removeArrayElement(PARENTCLAUSEEDGEARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ParentclauseedgeArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromParentclauseedgeArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PARENTCLAUSEEDGEARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Perils array. This is achieved by marking the element for removal.
     */
    public void removeFromPerils(entity.APDCoveragePeril element) {
      __getInternalInterface().removeArrayElement(PERILS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Perils array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPerils(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PERILS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Rules array. This is achieved by marking the element for removal.
     */
    public void removeFromRules(entity.APDClauseRule element) {
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
     * Removes the given element from the Terms array. This is achieved by marking the element for removal.
     */
    public void removeFromTerms(entity.APDTerm element) {
      __getInternalInterface().removeArrayElement(TERMS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Terms array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTerms(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TERMS_PROP.get(), elementID);
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
     * Sets the value of the ClaimCategories field.
     */
    public void setClaimCategories(entity.APDCoverageClaim[] value) {
      __getInternalInterface().setFieldValue(CLAIMCATEGORIES_PROP.get(), value);
    }
    
    /**
     * Set the category for this clause.
     * Also sets the same category on all defined descendants of this clause.
     * @param category to be set as the category for this clause and all its descendants
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setClauseCategory(entity.APDClauseCategory category) {
      ((com.guidewire.pc.domain.apd.APDClausePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.apd.APDClausePublicMethods")).setClauseCategory(category);
    }
    
    public void setClauseCategoryID(gw.pl.persistence.core.Key value) {
      setFieldValue(CLAUSECATEGORY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CodeIdentifier field.
     */
    public void setCodeIdentifier(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CODEIDENTIFIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CostDefinitions field.
     */
    public void setCostDefinitions(entity.APDCoverageCostDefinition[] value) {
      __getInternalInterface().setFieldValue(COSTDEFINITIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Coverable field.
     */
    public void setCoverable(entity.APDCoverable value) {
      __getInternalInterface().setFieldValue(COVERABLE_PROP.get(), value);
    }
    
    public void setCoverableID(gw.pl.persistence.core.Key value) {
      setFieldValue(COVERABLE_PROP.get(), value);
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
    public void setDescription_L10N_ARRAY(entity.APDClause_Description_L10N[] value) {
      __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
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
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Name_L10N_ARRAY field.
     */
    public void setName_L10N_ARRAY(entity.APDClause_Name_L10N[] value) {
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
     * Sets the value of the ParentClause field.
     */
    public void setParentClause(entity.APDClause value) {
      __getInternalInterface().setFieldValue(PARENTCLAUSE_PROP.get(), value);
    }
    
    public void setParentClauseID(gw.pl.persistence.core.Key value) {
      setFieldValue(PARENTCLAUSE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ParentclauseedgeArray field.
     */
    public void setParentclauseedgeArray(entity.Parentclauseedge[] value) {
      __getInternalInterface().setFieldValue(PARENTCLAUSEEDGEARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Perils field.
     */
    public void setPerils(entity.APDCoveragePeril[] value) {
      __getInternalInterface().setFieldValue(PERILS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PricingOrder field.
     */
    public void setPricingOrder(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(PRICINGORDER_PROP.get(), value);
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
    public void setRules(entity.APDClauseRule[] value) {
      __getInternalInterface().setFieldValue(RULES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ScheduledItem field.
     */
    public void setScheduledItem(entity.APDScheduledItem value) {
      __getInternalInterface().setFieldValue(SCHEDULEDITEM_PROP.get(), value);
    }
    
    public void setScheduledItemID(gw.pl.persistence.core.Key value) {
      setFieldValue(SCHEDULEDITEM_PROP.get(), value);
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
     * Sets the value of the Sequence field.
     */
    public void setSequence(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SEQUENCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.APDClause value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Terms field.
     */
    public void setTerms(entity.APDTerm[] value) {
      __getInternalInterface().setFieldValue(TERMS_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.apd.APDClausePublicMethods", "com.guidewire.pc.domain.apd.APDClausePublicMethodsImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.apd.model.APDTagContainer", "gw.apd.model.APDClauseTagContainerImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.APDCoverage.class, config);
    com.guidewire._generated.entity.APDCoverageInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.APDCoverage, com.guidewire._generated.entity.APDCoverageInternal>() {
      public java.lang.Object getImplementation(entity.APDCoverage bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDCoverageInternal getInternalInterface(entity.APDCoverage bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.APDCoverage newEmptyInstance() {
        return new entity.APDCoverage((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}