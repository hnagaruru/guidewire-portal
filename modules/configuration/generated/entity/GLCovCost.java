package entity;

/**
 * GLCovCost
 * The cost for a general liability coverage
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCovCost.eti;GLCovCost.eix;GLCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class GLCovCost extends entity.GLCost {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.GLCovCost, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.GLCovCost, entity.PolicyPeriod>("entity.GLCovCost");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> GENERALLIABILITYCOV_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "GeneralLiabilityCov");
  
  protected GLCovCost(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.GLCovCostInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.GLCovCostInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.GLCovCostInternal)super.__getInternalInterface();
  }
  
  public entity.GLCovCost clone() {
    return (entity.GLCovCost)__getInternalInterface().cloneUntyped();
  }
  
  public entity.GLCovCost getBasedOn() {
    return (entity.GLCovCost)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the GeneralLiabilityCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityCov getGeneralLiabilityCov() {
    return (entity.GeneralLiabilityCov)__getInternalInterface().getFieldValue(GENERALLIABILITYCOV_PROP.get());
  }
  
  public entity.GLCovCost getSlice(java.util.Date sliceDate) {
    return (entity.GLCovCost)getSliceUntyped(sliceDate);
  }
  
  public entity.GLCovCost getUnsliced() {
    return (entity.GLCovCost)getUnslicedUntyped();
  }
  
  public entity.windowed.GLCovCostVersionList getVersionList() {
    return (entity.windowed.GLCovCostVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the GeneralLiabilityCov field.
   */
  public void setGeneralLiabilityCov(entity.GeneralLiabilityCov value) {
    __getInternalInterface().setFieldValue(GENERALLIABILITYCOV_PROP.get(), value);
  }
  
  public entity.GLCovCost split(java.util.Date splitDate) {
    return (entity.GLCovCost)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.GLCovCostInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.GLCovCost, com.guidewire._generated.entity.GLCovCostInternal>() {
      public java.lang.Object getImplementation(entity.GLCovCost bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.GLCovCostInternal getInternalInterface(entity.GLCovCost bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}