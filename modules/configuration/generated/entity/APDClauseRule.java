package entity;

/**
 * APDClauseRule
 * Rule associated with a clause
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDClauseRule.eti;APDClauseRule.eix;APDClauseRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "APDClauseRule")
public class APDClauseRule extends entity.APDRule {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDClauseRule> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDClauseRule>("entity.APDClauseRule");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CLAUSE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Clause");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public APDClauseRule()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public APDClauseRule(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected APDClauseRule(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.APDClauseRuleInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.APDClauseRuleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.APDClauseRuleInternal)super.__getInternalInterface();
  }
  
  /**
   * Gets the value of the Clause field.
   * The clause to which this rule applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause getClause() {
    return (entity.APDClause)__getInternalInterface().getFieldValue(CLAUSE_PROP.get());
  }
  
  /**
   * Sets the value of the Clause field.
   */
  public void setClause(entity.APDClause value) {
    __getInternalInterface().setFieldValue(CLAUSE_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.APDClauseRuleInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.APDClauseRule.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the RuleElements array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRuleElements(entity.APDRuleElement element) {
      __getInternalInterface().addArrayElement(RULEELEMENTS_PROP.get(), element);
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
     * Gets the value of the Clause field.
     * The clause to which this rule applies
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDClause getClause() {
      return (entity.APDClause)__getInternalInterface().getFieldValue(CLAUSE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getClauseID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CLAUSE_PROP.get());
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
     * Gets the value of the DefaultCalculatedValue field.
     * A calculated value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDFunctionOperand getDefaultCalculatedValue() {
      return (entity.APDFunctionOperand)__getInternalInterface().getFieldValue(DEFAULTCALCULATEDVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getDefaultCalculatedValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(DEFAULTCALCULATEDVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultCodeValue field.
     * The dropdown list entry if this field is a dropdown
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDDropdownEntry getDefaultCodeValue() {
      return (entity.APDDropdownEntry)__getInternalInterface().getFieldValue(DEFAULTCODEVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getDefaultCodeValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(DEFAULTCODEVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultDateValue field.
     * The value if a date/time
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDefaultDateValue() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DEFAULTDATEVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultDecimalValue field.
     * The value if a number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDefaultDecimalValue() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEFAULTDECIMALVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultExistence field.
     * The default for an existence rule
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDDataExistenceType getDefaultExistence() {
      return (typekey.APDDataExistenceType)__getInternalInterface().getFieldValue(DEFAULTEXISTENCE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultIntegerValue field.
     * The value if an integer
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getDefaultIntegerValue() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(DEFAULTINTEGERVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultStringValue field.
     * The value if text or a dropdown entry
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDefaultStringValue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultTagValue field.
     * The value if a tag
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDTagApplicability getDefaultTagValue() {
      return (typekey.APDTagApplicability)__getInternalInterface().getFieldValue(DEFAULTTAGVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the Edition field.
     * The edition that this version of the rule applies to (if there is no edition, it is a base rule)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDEdition getEdition() {
      return (entity.APDEdition)__getInternalInterface().getFieldValue(EDITION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getEditionID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(EDITION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
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
     * Gets the value of the RuleElements field.
     * The full list of rule elements belonging to this rule
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.APDRuleElement[] getRuleElements() {
      return (entity.APDRuleElement[])__getInternalInterface().getFieldValue(RULEELEMENTS_PROP.get());
    }
    
    /**
     * Gets the value of the RuleType field.
     * The type of rule being implemented
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDRuleType getRuleType() {
      return (typekey.APDRuleType)__getInternalInterface().getFieldValue(RULETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDRule getSubtype() {
      return (typekey.APDRule)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TagType field.
     * The type of tag for a tag rule
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDTagType getTagType() {
      return (typekey.APDTagType)__getInternalInterface().getFieldValue(TAGTYPE_PROP.get());
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
     * Gets the value of the DefaultBitValue field.
     * The value if a true/false
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDefaultBitValue() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEFAULTBITVALUE_PROP.get());
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
     * Removes the given element from the RuleElements array. This is achieved by marking the element for removal.
     */
    public void removeFromRuleElements(entity.APDRuleElement element) {
      __getInternalInterface().removeArrayElement(RULEELEMENTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RuleElements array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRuleElements(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RULEELEMENTS_PROP.get(), elementID);
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
     * Sets the value of the Clause field.
     */
    public void setClause(entity.APDClause value) {
      __getInternalInterface().setFieldValue(CLAUSE_PROP.get(), value);
    }
    
    public void setClauseID(gw.pl.persistence.core.Key value) {
      setFieldValue(CLAUSE_PROP.get(), value);
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
     * Sets the value of the DefaultBitValue field.
     */
    public void setDefaultBitValue(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DEFAULTBITVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultCalculatedValue field.
     */
    public void setDefaultCalculatedValue(entity.APDFunctionOperand value) {
      __getInternalInterface().setFieldValue(DEFAULTCALCULATEDVALUE_PROP.get(), value);
    }
    
    public void setDefaultCalculatedValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(DEFAULTCALCULATEDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultCodeValue field.
     */
    public void setDefaultCodeValue(entity.APDDropdownEntry value) {
      __getInternalInterface().setFieldValue(DEFAULTCODEVALUE_PROP.get(), value);
    }
    
    public void setDefaultCodeValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(DEFAULTCODEVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultDateValue field.
     */
    public void setDefaultDateValue(java.util.Date value) {
      __getInternalInterface().setFieldValue(DEFAULTDATEVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultDecimalValue field.
     */
    public void setDefaultDecimalValue(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEFAULTDECIMALVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultExistence field.
     */
    public void setDefaultExistence(typekey.APDDataExistenceType value) {
      __getInternalInterface().setFieldValue(DEFAULTEXISTENCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultIntegerValue field.
     */
    public void setDefaultIntegerValue(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(DEFAULTINTEGERVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultStringValue field.
     */
    public void setDefaultStringValue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultTagValue field.
     */
    public void setDefaultTagValue(typekey.APDTagApplicability value) {
      __getInternalInterface().setFieldValue(DEFAULTTAGVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Edition field.
     */
    public void setEdition(entity.APDEdition value) {
      __getInternalInterface().setFieldValue(EDITION_PROP.get(), value);
    }
    
    public void setEditionID(gw.pl.persistence.core.Key value) {
      setFieldValue(EDITION_PROP.get(), value);
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
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
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
     * Sets the value of the RuleElements field.
     */
    public void setRuleElements(entity.APDRuleElement[] value) {
      __getInternalInterface().setFieldValue(RULEELEMENTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RuleType field.
     */
    public void setRuleType(typekey.APDRuleType value) {
      __getInternalInterface().setFieldValue(RULETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.APDRule value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TagType field.
     */
    public void setTagType(typekey.APDTagType value) {
      __getInternalInterface().setFieldValue(TAGTYPE_PROP.get(), value);
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
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.APDClauseRule.class, config);
    com.guidewire._generated.entity.APDClauseRuleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.APDClauseRule, com.guidewire._generated.entity.APDClauseRuleInternal>() {
      public java.lang.Object getImplementation(entity.APDClauseRule bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDClauseRuleInternal getInternalInterface(entity.APDClauseRule bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.APDClauseRule newEmptyInstance() {
        return new entity.APDClauseRule((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}