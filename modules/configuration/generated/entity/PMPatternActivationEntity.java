package entity;

/**
 * PMPatternActivationEntity
 * Marker which represents ProductModelPattern activation
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PMPatternActivationEntity.eti;PMPatternActivationEntity.eix;PMPatternActivationEntity.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PMPatternActivationEntity")
public class PMPatternActivationEntity extends com.guidewire.pl.persistence.code.BeanBase implements gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PMPatternActivationEntity> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PMPatternActivationEntity>("entity.PMPatternActivationEntity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTIVATIONTIMESTAMP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActivationTimestamp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNENTITYTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PatternEntityType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PatternPublicID");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PMPatternActivationEntityInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PMPatternActivationEntity(gw.pl.persistence.core.BundleProvider bundleProvider, java.util.Date param_ActivationTimestamp, java.lang.String param_PatternEntityType, java.lang.String param_PatternPublicID)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList(param_ActivationTimestamp, param_PatternEntityType, param_PatternPublicID));
  }
  
  protected PMPatternActivationEntity(java.lang.Void ignored)  {
    
  }
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PMPatternActivationEntity(java.util.Date param_ActivationTimestamp, java.lang.String param_PatternEntityType, java.lang.String param_PatternPublicID)  {
    this(gw.transaction.Transaction.getCurrent(), param_ActivationTimestamp, param_PatternEntityType, param_PatternPublicID);
  }
  
  protected com.guidewire._generated.entity.PMPatternActivationEntityInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.PMPatternActivationEntityInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Gets the value of the ActivationTimestamp field.
   * Activation timestamp
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getActivationTimestamp() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ACTIVATIONTIMESTAMP_PROP.get());
  }
  
  /**
   * Gets the value of the PatternEntityType field.
   * Product model pattern type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternEntityType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNENTITYTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the PatternPublicID field.
   * ProductModelPattern publicID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternPublicID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNPUBLICID_PROP.get());
  }
  
  /**
   * Sets the value of the ActivationTimestamp field.
   */
  public void setActivationTimestamp(java.util.Date value) {
    __getInternalInterface().setFieldValue(ACTIVATIONTIMESTAMP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PatternEntityType field.
   */
  public void setPatternEntityType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PATTERNENTITYTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PatternPublicID field.
   */
  public void setPatternPublicID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PATTERNPUBLICID_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PMPatternActivationEntityInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PMPatternActivationEntity.this.__getDelegateManager();
    }
    
    /**
     * Gets the value of the ActivationTimestamp field.
     * Activation timestamp
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getActivationTimestamp() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ACTIVATIONTIMESTAMP_PROP.get());
    }
    
    /**
     * Gets the value of the PatternEntityType field.
     * Product model pattern type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPatternEntityType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNENTITYTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the PatternPublicID field.
     * ProductModelPattern publicID
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPatternPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PATTERNPUBLICID_PROP.get());
    }
    
    /**
     * Sets the value of the ActivationTimestamp field.
     */
    public void setActivationTimestamp(java.util.Date value) {
      __getInternalInterface().setFieldValue(ACTIVATIONTIMESTAMP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PatternEntityType field.
     */
    public void setPatternEntityType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PATTERNENTITYTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PatternPublicID field.
     */
    public void setPatternPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PATTERNPUBLICID_PROP.get(), value);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PMPatternActivationEntity.class, config);
    com.guidewire._generated.entity.PMPatternActivationEntityInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PMPatternActivationEntity, com.guidewire._generated.entity.PMPatternActivationEntityInternal>() {
      public java.lang.Object getImplementation(entity.PMPatternActivationEntity bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PMPatternActivationEntityInternal getInternalInterface(entity.PMPatternActivationEntity bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PMPatternActivationEntity newEmptyInstance() {
        return new entity.PMPatternActivationEntity((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}