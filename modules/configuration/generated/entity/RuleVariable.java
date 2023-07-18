package entity;

/**
 * RuleVariable
 * Variable defining reusable expression fragment
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RuleVariable.eti;RuleVariable.eix;RuleVariable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RuleVariable")
public class RuleVariable extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable, entity.RuleVersionDependent, entity.OrderedChild {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RuleVariable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RuleVariable>("entity.RuleVariable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> EXPRESSION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Expression");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORDERNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OrderNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RULE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Rule");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RuleVariableInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RuleVariable()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RuleVariable(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RuleVariable(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RuleVariableInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RuleVariableInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
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
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the Expression field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ExpressionFragment getExpression() {
    return (entity.ExpressionFragment)__getInternalInterface().getFieldValue(EXPRESSION_PROP.get());
  }
  
  public gw.lang.reflect.IType getExpressionType(entity.ExpressionFragment arg0, gw.bizrules.IRuleContextDefinition arg1) {
    return ((com.guidewire.bizrules.domain.RuleVariableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleVariableDomainMethods")).getExpressionType(arg0, arg1);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Name field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * Gets the value of the OrderNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOrderNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ORDERNUMBER_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Rule field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Rule getRule() {
    return (entity.Rule)__getInternalInterface().getFieldValue(RULE_PROP.get());
  }
  
  public boolean isAllFieldsEmpty() {
    return ((com.guidewire.bizrules.domain.RuleVariableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleVariableDomainMethods")).isAllFieldsEmpty();
  }
  
  public boolean isEmpty() {
    return ((com.guidewire.bizrules.domain.RuleVariableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleVariableDomainMethods")).isEmpty();
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
  
  public void removeAndCascade() {
    ((com.guidewire.bizrules.domain.RulesCascadingRemovable)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RulesCascadingRemovable")).removeAndCascade();
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Expression field.
   */
  public void setExpression(entity.ExpressionFragment value) {
    __getInternalInterface().setFieldValue(EXPRESSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
   * Sets the value of the OrderNumber field.
   */
  public void setOrderNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ORDERNUMBER_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Rule field.
   */
  public void setRule(entity.Rule value) {
    __getInternalInterface().setFieldValue(RULE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RuleVariableInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RuleVariable.this.__getDelegateManager();
    }
    
    public void accept(com.guidewire.bizrules.codegenerator.RuleGraphVisitor arg0) {
      ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).accept(arg0);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
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
    
    public boolean countsAsEmptyForValidation() {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).countsAsEmptyForValidation();
    }
    
    public java.util.List<java.lang.String> deepValidate(gw.bizrules.context.provider.RuleContextDefinitionProvider arg0) {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).deepValidate(arg0);
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
    
    public entity.KeyableBean getBean() {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).getBean();
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
    
    public java.lang.String getDisplayText() {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).getDisplayText();
    }
    
    /**
     * Gets the value of the Expression field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ExpressionFragment getExpression() {
      return (entity.ExpressionFragment)__getInternalInterface().getFieldValue(EXPRESSION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getExpressionID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(EXPRESSION_PROP.get());
    }
    
    public gw.lang.reflect.IType getExpressionType() {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).getExpressionType();
    }
    
    public gw.lang.reflect.IType getExpressionType(entity.ExpressionFragment arg0, gw.bizrules.IRuleContextDefinition arg1) {
      return ((com.guidewire.bizrules.domain.RuleVariableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleVariableDomainMethods")).getExpressionType(arg0, arg1);
    }
    
    public java.lang.String getFormattedDisplayText() {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).getFormattedDisplayText();
    }
    
    public java.lang.String getGosuText() {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).getGosuText();
    }
    
    public java.lang.String getHtmlText(entity.ConditionExpressionFragment arg0) {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).getHtmlText(arg0);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    public gw.lang.reflect.IType getListOrArrayElementType(gw.bizrules.context.provider.RuleContextDefinitionProvider arg0) {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).getListOrArrayElementType(arg0);
    }
    
    /**
     * Gets the value of the Name field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the OrderNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOrderNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(ORDERNUMBER_PROP.get());
    }
    
    public java.lang.Iterable<? extends entity.RuleVersionAware> getOwners() {
      return ((gw.bizrules.domain.RuleVersionDependent)__getDelegateManager().getImplementation("gw.bizrules.domain.RuleVersionDependent")).getOwners();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Rule field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Rule getRule() {
      return (entity.Rule)__getInternalInterface().getFieldValue(RULE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRuleID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RULE_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public boolean isAllFieldsEmpty() {
      return ((com.guidewire.bizrules.domain.RuleVariableDomainMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RuleVariableDomainMethods")).isAllFieldsEmpty();
    }
    
    public boolean isEmpty() {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).isEmpty();
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
    
    public void removeAndCascade() {
      ((com.guidewire.bizrules.domain.RulesCascadingRemovable)__getDelegateManager().getImplementation("com.guidewire.bizrules.domain.RulesCascadingRemovable")).removeAndCascade();
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
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Expression field.
     */
    public void setExpression(entity.ExpressionFragment value) {
      __getInternalInterface().setFieldValue(EXPRESSION_PROP.get(), value);
    }
    
    public void setExpressionID(gw.pl.persistence.core.Key value) {
      setFieldValue(EXPRESSION_PROP.get(), value);
    }
    
    public void setExpressionType(gw.lang.reflect.IType arg0) {
      ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).setExpressionType(arg0);
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
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the OrderNumber field.
     */
    public void setOrderNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(ORDERNUMBER_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the Rule field.
     */
    public void setRule(entity.Rule value) {
      __getInternalInterface().setFieldValue(RULE_PROP.get(), value);
    }
    
    public void setRuleID(gw.pl.persistence.core.Key value) {
      setFieldValue(RULE_PROP.get(), value);
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
    
    public java.util.List<java.lang.String> validate(gw.bizrules.context.provider.RuleContextDefinitionProvider arg0) {
      return ((com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.GosuTextBuilder")).validate(arg0);
    }
    
    public java.util.Map<java.lang.String, java.util.List<java.lang.String>> validateRuleVariable(gw.bizrules.context.provider.RuleContextDefinitionProvider arg0) {
      return ((com.guidewire.bizrules.codegenerator.RuleVariableValidationMethods)__getDelegateManager().getImplementation("com.guidewire.bizrules.codegenerator.RuleVariableValidationMethods")).validateRuleVariable(arg0);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.bizrules.codegenerator.GosuTextBuilder", "com.guidewire.bizrules.codegenerator.RuleVariableGosuTextBuilder");
    config.put("com.guidewire.bizrules.codegenerator.RuleVariableValidationMethods", "com.guidewire.bizrules.codegenerator.RuleVariableGosuTextBuilder");
    config.put("com.guidewire.bizrules.domain.RuleVariableDomainMethods", "com.guidewire.bizrules.codegenerator.RuleVariableGosuTextBuilder");
    config.put("com.guidewire.bizrules.domain.RulesCascadingRemovable", "com.guidewire.bizrules.domain.RuleVariableImpl");
    config.put("com.guidewire.bizrules.management.RuleVersionAwareInternal", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.pl.system.bundle.RemoveCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.pl.system.entity.PreInitCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("gw.bizrules.domain.RuleVersionDependent", "com.guidewire.bizrules.domain.RuleVariableImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RuleVariable.class, config);
    com.guidewire._generated.entity.RuleVariableInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RuleVariable, com.guidewire._generated.entity.RuleVariableInternal>() {
      public java.lang.Object getImplementation(entity.RuleVariable bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RuleVariableInternal getInternalInterface(entity.RuleVariable bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RuleVariable newEmptyInstance() {
        return new entity.RuleVariable((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}