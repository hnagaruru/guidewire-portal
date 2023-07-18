package entity;

/**
 * GLPolicyContactRole
 * A PolicyContactRole specific to a GeneralLiability policy line.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLPolicyContactRole.eti;GLPolicyContactRole.eix;GLPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class GLPolicyContactRole extends entity.PolicyContactRole {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.GLPolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.GLPolicyContactRole, entity.PolicyPeriod>("entity.GLPolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> GENERALLIABILITYLINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "GeneralLiabilityLine");
  
  protected GLPolicyContactRole(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.GLPolicyContactRoleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.GLPolicyContactRoleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.GLPolicyContactRoleInternal)super.__getInternalInterface();
  }
  
  public entity.GLPolicyContactRole clone() {
    return (entity.GLPolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  public entity.GLPolicyContactRole getBasedOn() {
    return (entity.GLPolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the GeneralLiabilityLine field.
   * The General Liability policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityLine getGeneralLiabilityLine() {
    return (entity.GeneralLiabilityLine)__getInternalInterface().getFieldValue(GENERALLIABILITYLINE_PROP.get());
  }
  
  public entity.GLPolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.GLPolicyContactRole)getSliceUntyped(sliceDate);
  }
  
  public entity.GLPolicyContactRole getUnsliced() {
    return (entity.GLPolicyContactRole)getUnslicedUntyped();
  }
  
  public entity.windowed.GLPolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.GLPolicyContactRoleVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the GeneralLiabilityLine field.
   */
  public void setGeneralLiabilityLine(entity.GeneralLiabilityLine value) {
    __getInternalInterface().setFieldValue(GENERALLIABILITYLINE_PROP.get(), value);
  }
  
  public entity.GLPolicyContactRole split(java.util.Date splitDate) {
    return (entity.GLPolicyContactRole)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.GLPolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.GLPolicyContactRole, com.guidewire._generated.entity.GLPolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.GLPolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.GLPolicyContactRoleInternal getInternalInterface(entity.GLPolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}