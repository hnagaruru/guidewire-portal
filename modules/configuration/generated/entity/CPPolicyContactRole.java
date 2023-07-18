package entity;

/**
 * CPPolicyContactRole
 * A PolicyContactRole specific to a CommercialProperty policy line.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPPolicyContactRole.eti;CPPolicyContactRole.eix;CPPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class CPPolicyContactRole extends entity.PolicyContactRole {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.CPPolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.CPPolicyContactRole, entity.PolicyPeriod>("entity.CPPolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> COMMERCIALPROPERTYLINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CommercialPropertyLine");
  
  protected CPPolicyContactRole(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.CPPolicyContactRoleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.CPPolicyContactRoleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.CPPolicyContactRoleInternal)super.__getInternalInterface();
  }
  
  public entity.CPPolicyContactRole clone() {
    return (entity.CPPolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  public entity.CPPolicyContactRole getBasedOn() {
    return (entity.CPPolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the CommercialPropertyLine field.
   * The Commercial Property policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyLine getCommercialPropertyLine() {
    return (entity.CommercialPropertyLine)__getInternalInterface().getFieldValue(COMMERCIALPROPERTYLINE_PROP.get());
  }
  
  public entity.CPPolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.CPPolicyContactRole)getSliceUntyped(sliceDate);
  }
  
  public entity.CPPolicyContactRole getUnsliced() {
    return (entity.CPPolicyContactRole)getUnslicedUntyped();
  }
  
  public entity.windowed.CPPolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.CPPolicyContactRoleVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the CommercialPropertyLine field.
   */
  public void setCommercialPropertyLine(entity.CommercialPropertyLine value) {
    __getInternalInterface().setFieldValue(COMMERCIALPROPERTYLINE_PROP.get(), value);
  }
  
  public entity.CPPolicyContactRole split(java.util.Date splitDate) {
    return (entity.CPPolicyContactRole)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.CPPolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.CPPolicyContactRole, com.guidewire._generated.entity.CPPolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.CPPolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.CPPolicyContactRoleInternal getInternalInterface(entity.CPPolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}