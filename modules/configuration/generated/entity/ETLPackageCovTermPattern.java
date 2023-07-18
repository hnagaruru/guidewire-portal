package entity;

/**
 * ETLPackageCovTermPattern
 * A subtype of the ETLCoverageTermPattern
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLPackageCovTermPattern.eti;ETLPackageCovTermPattern.eix;ETLPackageCovTermPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ETLPackageCovTermPattern")
public class ETLPackageCovTermPattern extends entity.ETLCoverageTermPattern {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ETLPackageCovTermPattern> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ETLPackageCovTermPattern>("entity.ETLPackageCovTermPattern");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PACKAGES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Packages");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ETLPackageCovTermPattern()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ETLPackageCovTermPattern(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ETLPackageCovTermPattern(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.ETLPackageCovTermPatternInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.ETLPackageCovTermPatternInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.ETLPackageCovTermPatternInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the Packages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPackages(entity.ETLCovTermPack element) {
    __getInternalInterface().addArrayElement(PACKAGES_PROP.get(), element);
  }
  
  /**
   * Gets the value of the Packages field.
   * All the packages for the Coverage Pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLCovTermPack[] getPackages() {
    return (entity.ETLCovTermPack[])__getInternalInterface().getFieldValue(PACKAGES_PROP.get());
  }
  
  /**
   * Removes the given element from the Packages array. This is achieved by marking the element for removal.
   */
  public void removeFromPackages(entity.ETLCovTermPack element) {
    __getInternalInterface().removeArrayElement(PACKAGES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Packages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPackages(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PACKAGES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Packages field.
   */
  public void setPackages(entity.ETLCovTermPack[] value) {
    __getInternalInterface().setFieldValue(PACKAGES_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ETLPackageCovTermPatternInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ETLPackageCovTermPattern.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the Packages array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPackages(entity.ETLCovTermPack element) {
      __getInternalInterface().addArrayElement(PACKAGES_PROP.get(), element);
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
     * Gets the value of the ClausePattern field.
     * the foreign key to the Clause Pattern for this option
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ETLClausePattern getClausePattern() {
      return (entity.ETLClausePattern)__getInternalInterface().getFieldValue(CLAUSEPATTERN_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getClausePatternID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CLAUSEPATTERN_PROP.get());
    }
    
    /**
     * Gets the value of the Code field.
     * The Code for the Coverage Term Pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODE_PROP.get());
    }
    
    /**
     * Gets the value of the CodeIdentifier field.
     * The CodeIdentifier (human readable) of the source coverage term pattern in the product model
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCodeIdentifier() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODEIDENTIFIER_PROP.get());
    }
    
    /**
     * Gets the value of the ColumnName field.
     * The column 'Coverage' table that is populated with the Coverage Term Pattern PublicID
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getColumnName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COLUMNNAME_PROP.get());
    }
    
    /**
     * Gets the value of the CovTermType field.
     * The type of the covTerm
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCovTermType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVTERMTYPE_PROP.get());
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
     * Gets the value of the ModelType field.
     * The Model Type for the pattern. Should Correspond to the ModelType typelist
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getModelType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MODELTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the Name field.
     * The Name for the Coverage Term Pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the Packages field.
     * All the packages for the Coverage Pattern.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ETLCovTermPack[] getPackages() {
      return (entity.ETLCovTermPack[])__getInternalInterface().getFieldValue(PACKAGES_PROP.get());
    }
    
    /**
     * Gets the value of the PatternID field.
     * The Public ID of the source coverage term pattern in the product model
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
    public typekey.ETLCoverageTermPattern getSubtype() {
      return (typekey.ETLCoverageTermPattern)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
     * Removes the given element from the Packages array. This is achieved by marking the element for removal.
     */
    public void removeFromPackages(entity.ETLCovTermPack element) {
      __getInternalInterface().removeArrayElement(PACKAGES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Packages array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPackages(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PACKAGES_PROP.get(), elementID);
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
     * Sets the value of the ClausePattern field.
     */
    public void setClausePattern(entity.ETLClausePattern value) {
      __getInternalInterface().setFieldValue(CLAUSEPATTERN_PROP.get(), value);
    }
    
    public void setClausePatternID(gw.pl.persistence.core.Key value) {
      setFieldValue(CLAUSEPATTERN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Code field.
     */
    public void setCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CodeIdentifier field.
     */
    public void setCodeIdentifier(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CODEIDENTIFIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ColumnName field.
     */
    public void setColumnName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COLUMNNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CovTermType field.
     */
    public void setCovTermType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVTERMTYPE_PROP.get(), value);
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
     * Sets the value of the ModelType field.
     */
    public void setModelType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MODELTYPE_PROP.get(), value);
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
     * Sets the value of the Packages field.
     */
    public void setPackages(entity.ETLCovTermPack[] value) {
      __getInternalInterface().setFieldValue(PACKAGES_PROP.get(), value);
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
    public void setSubtype(typekey.ETLCoverageTermPattern value) {
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ETLPackageCovTermPattern.class, config);
    com.guidewire._generated.entity.ETLPackageCovTermPatternInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ETLPackageCovTermPattern, com.guidewire._generated.entity.ETLPackageCovTermPatternInternal>() {
      public java.lang.Object getImplementation(entity.ETLPackageCovTermPattern bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ETLPackageCovTermPatternInternal getInternalInterface(entity.ETLPackageCovTermPattern bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ETLPackageCovTermPattern newEmptyInstance() {
        return new entity.ETLPackageCovTermPattern((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}