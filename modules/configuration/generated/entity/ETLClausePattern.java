package entity;

/**
 * ETLClausePattern
 * Database representation of Product Model clause patterns
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLClausePattern.eti;ETLClausePattern.eix;ETLClausePattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ETLClausePattern")
public class ETLClausePattern extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ETLClausePattern> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ETLClausePattern>("entity.ETLClausePattern");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAUSETYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClauseType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODEIDENTIFIER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CodeIdentifier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVERAGECATEGORY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoverageCategory");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVERAGESUBTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoverageSubtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COVERAGETERMPATTERNS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CoverageTermPatterns");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVEREDPARTYTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CoveredPartyType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNINGENTITYTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwningEntityType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PatternID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ETLClausePatternInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ETLClausePattern()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ETLClausePattern(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ETLClausePattern(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ETLClausePatternInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ETLClausePatternInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the CoverageTermPatterns array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageTermPatterns(entity.ETLCoverageTermPattern element) {
    __getInternalInterface().addArrayElement(COVERAGETERMPATTERNS_PROP.get(), element);
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
   * Gets the value of the ClauseType field.
   * The type of this clause in the Product Model (Coverage, Exclusion, Policy Condition)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClauseType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAUSETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier (human readable) of the source clause pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODEIDENTIFIER_PROP.get());
  }
  
  /**
   * Gets the value of the CoverageCategory field.
   * The CoverageCategory of the Coverage Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverageCategory() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERAGECATEGORY_PROP.get());
  }
  
  /**
   * Gets the value of the CoverageSubtype field.
   * The coverage subtype of this clause in the Product Model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverageSubtype() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERAGESUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the CoverageTermPatterns field.
   * All the options for the Coverage Pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLCoverageTermPattern[] getCoverageTermPatterns() {
    return (entity.ETLCoverageTermPattern[])__getInternalInterface().getFieldValue(COVERAGETERMPATTERNS_PROP.get());
  }
  
  /**
   * Gets the value of the CoveredPartyType field.
   * The Covered Party Type of this Coverage Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoveredPartyType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVEREDPARTYTYPE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Name field.
   * The name of this clause pattern in the Product Model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * Gets the value of the OwningEntityType field.
   * The Owning Entity type for this Coverage Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwningEntityType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNINGENTITYTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source clause pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNID_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ETLClausePattern getSubtype() {
    return (typekey.ETLClausePattern)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
  
  /**
   * Removes the given element from the CoverageTermPatterns array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageTermPatterns(entity.ETLCoverageTermPattern element) {
    __getInternalInterface().removeArrayElement(COVERAGETERMPATTERNS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CoverageTermPatterns array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageTermPatterns(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COVERAGETERMPATTERNS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClauseType field.
   */
  public void setClauseType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLAUSETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CODEIDENTIFIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverageCategory field.
   */
  public void setCoverageCategory(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVERAGECATEGORY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverageSubtype field.
   */
  public void setCoverageSubtype(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVERAGESUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverageTermPatterns field.
   */
  public void setCoverageTermPatterns(entity.ETLCoverageTermPattern[] value) {
    __getInternalInterface().setFieldValue(COVERAGETERMPATTERNS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoveredPartyType field.
   */
  public void setCoveredPartyType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVEREDPARTYTYPE_PROP.get(), value);
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
   * Sets the value of the OwningEntityType field.
   */
  public void setOwningEntityType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OWNINGENTITYTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PATTERNID_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.ETLClausePattern value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ETLClausePatternInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ETLClausePattern.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the CoverageTermPatterns array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCoverageTermPatterns(entity.ETLCoverageTermPattern element) {
      __getInternalInterface().addArrayElement(COVERAGETERMPATTERNS_PROP.get(), element);
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
     * Gets the value of the ClauseType field.
     * The type of this clause in the Product Model (Coverage, Exclusion, Policy Condition)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClauseType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAUSETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the CodeIdentifier field.
     * The CodeIdentifier (human readable) of the source clause pattern in the product model
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCodeIdentifier() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODEIDENTIFIER_PROP.get());
    }
    
    /**
     * Gets the value of the CoverageCategory field.
     * The CoverageCategory of the Coverage Pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCoverageCategory() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERAGECATEGORY_PROP.get());
    }
    
    /**
     * Gets the value of the CoverageSubtype field.
     * The coverage subtype of this clause in the Product Model
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCoverageSubtype() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVERAGESUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the CoverageTermPatterns field.
     * All the options for the Coverage Pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ETLCoverageTermPattern[] getCoverageTermPatterns() {
      return (entity.ETLCoverageTermPattern[])__getInternalInterface().getFieldValue(COVERAGETERMPATTERNS_PROP.get());
    }
    
    /**
     * Gets the value of the CoveredPartyType field.
     * The Covered Party Type of this Coverage Pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCoveredPartyType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVEREDPARTYTYPE_PROP.get());
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
     * The name of this clause pattern in the Product Model
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the OwningEntityType field.
     * The Owning Entity type for this Coverage Pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOwningEntityType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNINGENTITYTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the PatternID field.
     * The Public ID of the source clause pattern in the product model
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPatternID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNID_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ETLClausePattern getSubtype() {
      return (typekey.ETLClausePattern)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
     * Removes the given element from the CoverageTermPatterns array. This is achieved by marking the element for removal.
     */
    public void removeFromCoverageTermPatterns(entity.ETLCoverageTermPattern element) {
      __getInternalInterface().removeArrayElement(COVERAGETERMPATTERNS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CoverageTermPatterns array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCoverageTermPatterns(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(COVERAGETERMPATTERNS_PROP.get(), elementID);
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
     * Sets the value of the ClauseType field.
     */
    public void setClauseType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLAUSETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CodeIdentifier field.
     */
    public void setCodeIdentifier(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CODEIDENTIFIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverageCategory field.
     */
    public void setCoverageCategory(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVERAGECATEGORY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverageSubtype field.
     */
    public void setCoverageSubtype(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVERAGESUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverageTermPatterns field.
     */
    public void setCoverageTermPatterns(entity.ETLCoverageTermPattern[] value) {
      __getInternalInterface().setFieldValue(COVERAGETERMPATTERNS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoveredPartyType field.
     */
    public void setCoveredPartyType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVEREDPARTYTYPE_PROP.get(), value);
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
     * Sets the value of the OwningEntityType field.
     */
    public void setOwningEntityType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OWNINGENTITYTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PatternID field.
     */
    public void setPatternID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PATTERNID_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.ETLClausePattern value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ETLClausePattern.class, config);
    com.guidewire._generated.entity.ETLClausePatternInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ETLClausePattern, com.guidewire._generated.entity.ETLClausePatternInternal>() {
      public java.lang.Object getImplementation(entity.ETLClausePattern bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ETLClausePatternInternal getInternalInterface(entity.ETLClausePattern bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ETLClausePattern newEmptyInstance() {
        return new entity.ETLClausePattern((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}