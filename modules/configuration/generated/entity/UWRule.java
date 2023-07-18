package entity;

/**
 * UWRule
 * Underwriter BizRules entity
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWRule.eti;UWRule.eix;UWRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "UWRule")
public class UWRule extends entity.Rule implements com.guidewire.pc.domain.bizrules.UWRulePublicMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.UWRule> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.UWRule>("entity.UWRule");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EndDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXTERNALLYMANAGED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExternallyManaged");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JURISDICTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Jurisdictions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LINESOFBUSINESS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LinesOfBusiness");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYTRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyTransactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STARTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StartDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UWISSUETYPE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UWIssueType");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public UWRule()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public UWRule(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected UWRule(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.UWRuleInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.UWRuleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.UWRuleInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.AppCritJurisdiction element) {
    __getInternalInterface().addArrayElement(JURISDICTIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LinesOfBusiness array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLinesOfBusiness(entity.AppCritLineOfBusiness element) {
    __getInternalInterface().addArrayElement(LINESOFBUSINESS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PolicyTransactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyTransactions(entity.AppCritPolicyTransaction element) {
    __getInternalInterface().addArrayElement(POLICYTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Gets the value of the EndDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ENDDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Jurisdictions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritJurisdiction[] getJurisdictions() {
    return (entity.AppCritJurisdiction[])__getInternalInterface().getFieldValue(JURISDICTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the LinesOfBusiness field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritLineOfBusiness[] getLinesOfBusiness() {
    return (entity.AppCritLineOfBusiness[])__getInternalInterface().getFieldValue(LINESOFBUSINESS_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyTransactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AppCritPolicyTransaction[] getPolicyTransactions() {
    return (entity.AppCritPolicyTransaction[])__getInternalInterface().getFieldValue(POLICYTRANSACTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the StartDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(STARTDATE_PROP.get());
  }
  
  /**
   * Gets the value of the UWIssueType field.
   * The Underwriter Issue Type associated to this Rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getUWIssueType() {
    return (entity.UWIssueType)__getInternalInterface().getFieldValue(UWISSUETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ExternallyManaged field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExternallyManaged() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXTERNALLYMANAGED_PROP.get());
  }
  
  public boolean isFirstVersion() {
    return ((com.guidewire.pc.domain.bizrules.UWRulePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.bizrules.UWRulePublicMethods")).isFirstVersion();
  }
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.AppCritJurisdiction element) {
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
   * Removes the given element from the LinesOfBusiness array. This is achieved by marking the element for removal.
   */
  public void removeFromLinesOfBusiness(entity.AppCritLineOfBusiness element) {
    __getInternalInterface().removeArrayElement(LINESOFBUSINESS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LinesOfBusiness array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLinesOfBusiness(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LINESOFBUSINESS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyTransactions array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyTransactions(entity.AppCritPolicyTransaction element) {
    __getInternalInterface().removeArrayElement(POLICYTRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyTransactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYTRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ENDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExternallyManaged field.
   */
  public void setExternallyManaged(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(EXTERNALLYMANAGED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.AppCritJurisdiction[] value) {
    __getInternalInterface().setFieldValue(JURISDICTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LinesOfBusiness field.
   */
  public void setLinesOfBusiness(entity.AppCritLineOfBusiness[] value) {
    __getInternalInterface().setFieldValue(LINESOFBUSINESS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyTransactions field.
   */
  public void setPolicyTransactions(entity.AppCritPolicyTransaction[] value) {
    __getInternalInterface().setFieldValue(POLICYTRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StartDate field.
   */
  public void setStartDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(STARTDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UWIssueType field.
   */
  public void setUWIssueType(entity.UWIssueType value) {
    __getInternalInterface().setFieldValue(UWISSUETYPE_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.UWRuleInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.UWRule.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToJurisdictions(entity.AppCritJurisdiction element) {
      __getInternalInterface().addArrayElement(JURISDICTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LinesOfBusiness array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLinesOfBusiness(entity.AppCritLineOfBusiness element) {
      __getInternalInterface().addArrayElement(LINESOFBUSINESS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PolicyTransactions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPolicyTransactions(entity.AppCritPolicyTransaction element) {
      __getInternalInterface().addArrayElement(POLICYTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RuleCommandDefinitions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRuleCommandDefinitions(entity.RuleCommandDefinition element) {
      __getInternalInterface().addArrayElement(RULECOMMANDDEFINITIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RuleVariables array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRuleVariables(entity.RuleVariable element) {
      __getInternalInterface().addArrayElement(RULEVARIABLES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ValidationInfoArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToValidationInfoArray(entity.RuleValidationInfo element) {
      __getInternalInterface().addArrayElement(VALIDATIONINFOARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Versions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToVersions(entity.RuleVersion element) {
      __getInternalInterface().addArrayElement(VERSIONS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public entity.RuleCommandDefinition appendRuleCommandDefinition() {
      return ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).appendRuleCommandDefinition();
    }
    
    public entity.RuleVariable appendRuleVariable() {
      return ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).appendRuleVariable();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void assignUniquePublicId() {
      ((com.guidewire.bizrules.management.RuleVersionAwareInternal)__getDelegateManager().getImplementation("com.guidewire.bizrules.management.RuleVersionAwareInternal")).assignUniquePublicId();
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
    }
    
    public void beforeRemove() {
      ((com.guidewire.pl.system.bundle.RemoveCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.RemoveCallback")).beforeRemove();
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
    
    public boolean checkIfValid() {
      return ((com.guidewire.bizrules.domain.RuleInternalMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleInternalMethods")).checkIfValid();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    public java.util.List<java.lang.String> computeIsValid() {
      return ((com.guidewire.bizrules.domain.RuleInternalMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleInternalMethods")).computeIsValid();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public void doNotValidateOnCommit() {
      ((com.guidewire.bizrules.domain.RuleInternalMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleInternalMethods")).doNotValidateOnCommit();
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
     * Gets the value of the Description field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the EndDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEndDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ENDDATE_PROP.get());
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
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AppCritJurisdiction[] getJurisdictions() {
      return (entity.AppCritJurisdiction[])__getInternalInterface().getFieldValue(JURISDICTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the LinesOfBusiness field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AppCritLineOfBusiness[] getLinesOfBusiness() {
      return (entity.AppCritLineOfBusiness[])__getInternalInterface().getFieldValue(LINESOFBUSINESS_PROP.get());
    }
    
    /**
     * Gets the value of the Name field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    public java.util.List<entity.RuleCommandDefinition> getOrderedRuleCommandDefinitions() {
      return ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).getOrderedRuleCommandDefinitions();
    }
    
    public java.util.List<entity.RuleVariable> getOrderedRuleVariables() {
      return ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).getOrderedRuleVariables();
    }
    
    public java.lang.Iterable<? extends entity.RuleVersionAware> getOwners() {
      return ((gw.bizrules.domain.RuleVersionDependent)__getDelegateManager().getImplementation("gw.bizrules.domain.RuleVersionDependent")).getOwners();
    }
    
    /**
     * Gets the value of the PolicyTransactions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AppCritPolicyTransaction[] getPolicyTransactions() {
      return (entity.AppCritPolicyTransaction[])__getInternalInterface().getFieldValue(POLICYTRANSACTIONS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RuleCommandDefinitions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleCommandDefinition[] getRuleCommandDefinitions() {
      return (entity.RuleCommandDefinition[])__getInternalInterface().getFieldValue(RULECOMMANDDEFINITIONS_PROP.get());
    }
    
    /**
     * Gets the value of the RuleCondition field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleCondition getRuleCondition() {
      return (entity.RuleCondition)__getInternalInterface().getFieldValue(RULECONDITION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRuleConditionID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RULECONDITION_PROP.get());
    }
    
    /**
     * Gets the value of the RuleContextDefinitionKey field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RuleContextDefinitionKey getRuleContextDefinitionKey() {
      return (typekey.RuleContextDefinitionKey)__getInternalInterface().getFieldValue(RULECONTEXTDEFINITIONKEY_PROP.get());
    }
    
    /**
     * Gets the value of the RuleVariables field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleVariable[] getRuleVariables() {
      return (entity.RuleVariable[])__getInternalInterface().getFieldValue(RULEVARIABLES_PROP.get());
    }
    
    /**
     * Gets the value of the StartDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getStartDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(STARTDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Rule getSubtype() {
      return (typekey.Rule)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TriggeringPointKey field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.TriggeringPointKey getTriggeringPointKey() {
      return (typekey.TriggeringPointKey)__getInternalInterface().getFieldValue(TRIGGERINGPOINTKEY_PROP.get());
    }
    
    /**
     * Gets the value of the UWIssueType field.
     * The Underwriter Issue Type associated to this Rule
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UWIssueType getUWIssueType() {
      return (entity.UWIssueType)__getInternalInterface().getFieldValue(UWISSUETYPE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUWIssueTypeID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UWISSUETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateSystemId field.
     * Identifier of the system on which the rule was updated.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUpdateSystemId() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UPDATESYSTEMID_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUserName field.
     * The name of the user who updated this rule.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUpdateUserName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UPDATEUSERNAME_PROP.get());
    }
    
    /**
     * Gets the value of the ValidationInfo field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleValidationInfo getValidationInfo() {
      return (entity.RuleValidationInfo)__getInternalInterface().getFieldValue(VALIDATIONINFO_PROP.get());
    }
    
    /**
     * Gets the value of the ValidationInfoArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleValidationInfo[] getValidationInfoArray() {
      return (entity.RuleValidationInfo[])__getInternalInterface().getFieldValue(VALIDATIONINFOARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getValidationInfoID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(VALIDATIONINFO_PROP.get());
    }
    
    /**
     * Gets the value of the Versions field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleVersion[] getVersions() {
      return (entity.RuleVersion[])__getInternalInterface().getFieldValue(VERSIONS_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the AvailableToRun field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isAvailableToRun() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(AVAILABLETORUN_PROP.get());
    }
    
    public boolean isEditable() {
      return ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).isEditable();
    }
    
    /**
     * Gets the value of the ExternallyManaged field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isExternallyManaged() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXTERNALLYMANAGED_PROP.get());
    }
    
    public boolean isFirstVersion() {
      return ((com.guidewire.pc.domain.bizrules.UWRulePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.bizrules.UWRulePublicMethods")).isFirstVersion();
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public java.lang.Boolean isValid() {
      return ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).isValid();
    }
    
    public void move(entity.RuleCommandDefinition arg0, entity.RuleCommandDefinition arg1) {
      ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).move(arg0, arg1);
    }
    
    public void onPreInit() {
      ((com.guidewire.pl.system.entity.PreInitCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.entity.PreInitCallback")).onPreInit();
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
    
    public void removeAllConditionLines() {
      ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).removeAllConditionLines();
    }
    
    public void removeEmptyRuleVariables() {
      ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).removeEmptyRuleVariables();
    }
    
    /**
     * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
     */
    public void removeFromJurisdictions(entity.AppCritJurisdiction element) {
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
     * Removes the given element from the LinesOfBusiness array. This is achieved by marking the element for removal.
     */
    public void removeFromLinesOfBusiness(entity.AppCritLineOfBusiness element) {
      __getInternalInterface().removeArrayElement(LINESOFBUSINESS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LinesOfBusiness array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLinesOfBusiness(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LINESOFBUSINESS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PolicyTransactions array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyTransactions(entity.AppCritPolicyTransaction element) {
      __getInternalInterface().removeArrayElement(POLICYTRANSACTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyTransactions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyTransactions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYTRANSACTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RuleCommandDefinitions array. This is achieved by marking the element for removal.
     */
    public void removeFromRuleCommandDefinitions(entity.RuleCommandDefinition element) {
      __getInternalInterface().removeArrayElement(RULECOMMANDDEFINITIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RuleCommandDefinitions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRuleCommandDefinitions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RULECOMMANDDEFINITIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RuleVariables array. This is achieved by marking the element for removal.
     */
    public void removeFromRuleVariables(entity.RuleVariable element) {
      __getInternalInterface().removeArrayElement(RULEVARIABLES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RuleVariables array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRuleVariables(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RULEVARIABLES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ValidationInfoArray array. This is achieved by marking the element for removal.
     */
    public void removeFromValidationInfoArray(entity.RuleValidationInfo element) {
      __getInternalInterface().removeArrayElement(VALIDATIONINFOARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ValidationInfoArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromValidationInfoArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(VALIDATIONINFOARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Versions array. This is achieved by marking the element for removal.
     */
    public void removeFromVersions(entity.RuleVersion element) {
      __getInternalInterface().removeArrayElement(VERSIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Versions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromVersions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(VERSIONS_PROP.get(), elementID);
    }
    
    public void removeRuleCommandDefinition(entity.RuleCommandDefinition arg0) {
      ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).removeRuleCommandDefinition(arg0);
    }
    
    public void removeRuleVariable(entity.RuleVariable arg0) {
      ((com.guidewire.bizrules.domain.RuleDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleDomainMethods")).removeRuleVariable(arg0);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    public void saveValidationInfoLater() {
      ((com.guidewire.bizrules.domain.RuleInternalMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleInternalMethods")).saveValidationInfoLater();
    }
    
    public void saveValidationInfoNow() {
      ((com.guidewire.bizrules.domain.RuleInternalMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleInternalMethods")).saveValidationInfoNow();
    }
    
    /**
     * Sets the value of the AvailableToRun field.
     */
    public void setAvailableToRun(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(AVAILABLETORUN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
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
     * Sets the value of the ExternallyManaged field.
     */
    public void setExternallyManaged(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(EXTERNALLYMANAGED_PROP.get(), value);
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
    public void setJurisdictions(entity.AppCritJurisdiction[] value) {
      __getInternalInterface().setFieldValue(JURISDICTIONS_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LinesOfBusiness field.
     */
    public void setLinesOfBusiness(entity.AppCritLineOfBusiness[] value) {
      __getInternalInterface().setFieldValue(LINESOFBUSINESS_PROP.get(), value);
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
     * Sets the value of the PolicyTransactions field.
     */
    public void setPolicyTransactions(entity.AppCritPolicyTransaction[] value) {
      __getInternalInterface().setFieldValue(POLICYTRANSACTIONS_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RuleCommandDefinitions field.
     */
    public void setRuleCommandDefinitions(entity.RuleCommandDefinition[] value) {
      __getInternalInterface().setFieldValue(RULECOMMANDDEFINITIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RuleCondition field.
     */
    public void setRuleCondition(entity.RuleCondition value) {
      __getInternalInterface().setFieldValue(RULECONDITION_PROP.get(), value);
    }
    
    public void setRuleConditionID(gw.pl.persistence.core.Key value) {
      setFieldValue(RULECONDITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RuleContextDefinitionKey field.
     */
    public void setRuleContextDefinitionKey(typekey.RuleContextDefinitionKey value) {
      __getInternalInterface().setFieldValue(RULECONTEXTDEFINITIONKEY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RuleVariables field.
     */
    public void setRuleVariables(entity.RuleVariable[] value) {
      __getInternalInterface().setFieldValue(RULEVARIABLES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StartDate field.
     */
    public void setStartDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(STARTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.Rule value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TriggeringPointKey field.
     */
    public void setTriggeringPointKey(typekey.TriggeringPointKey value) {
      __getInternalInterface().setFieldValue(TRIGGERINGPOINTKEY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UWIssueType field.
     */
    public void setUWIssueType(entity.UWIssueType value) {
      __getInternalInterface().setFieldValue(UWISSUETYPE_PROP.get(), value);
    }
    
    public void setUWIssueTypeID(gw.pl.persistence.core.Key value) {
      setFieldValue(UWISSUETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateSystemId field.
     */
    public void setUpdateSystemId(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(UPDATESYSTEMID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUserName field.
     */
    public void setUpdateUserName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(UPDATEUSERNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ValidationInfo field.
     */
    public void setValidationInfo(entity.RuleValidationInfo value) {
      __getInternalInterface().setFieldValue(VALIDATIONINFO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ValidationInfoArray field.
     */
    public void setValidationInfoArray(entity.RuleValidationInfo[] value) {
      __getInternalInterface().setFieldValue(VALIDATIONINFOARRAY_PROP.get(), value);
    }
    
    public void setValidationInfoID(gw.pl.persistence.core.Key value) {
      setFieldValue(VALIDATIONINFO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Versions field.
     */
    public void setVersions(entity.RuleVersion[] value) {
      __getInternalInterface().setFieldValue(VERSIONS_PROP.get(), value);
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
    config.put("com.guidewire.bizrules.domain.RuleDomainMethods", "com.guidewire.bizrules.domain.RuleImpl");
    config.put("com.guidewire.bizrules.domain.RuleInternalMethods", "com.guidewire.bizrules.domain.RuleImpl");
    config.put("com.guidewire.bizrules.management.RuleVersionAwareInternal", "com.guidewire.pc.domain.bizrules.impl.UWRuleImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.bizrules.UWRulePublicMethods", "com.guidewire.pc.domain.bizrules.impl.UWRuleImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.bizrules.impl.UWRuleImpl");
    config.put("com.guidewire.pl.system.bundle.RemoveCallback", "com.guidewire.pc.domain.bizrules.impl.UWRuleImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.bizrules.impl.UWRuleImpl");
    config.put("com.guidewire.pl.system.entity.PreInitCallback", "com.guidewire.pc.domain.bizrules.impl.UWRuleImpl");
    config.put("gw.bizrules.domain.RuleVersionDependent", "com.guidewire.pc.domain.bizrules.impl.UWRuleImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.UWRule.class, config);
    com.guidewire._generated.entity.UWRuleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.UWRule, com.guidewire._generated.entity.UWRuleInternal>() {
      public java.lang.Object getImplementation(entity.UWRule bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.UWRuleInternal getInternalInterface(entity.UWRule bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.UWRule newEmptyInstance() {
        return new entity.UWRule((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}