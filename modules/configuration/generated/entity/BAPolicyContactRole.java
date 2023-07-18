package entity;

/**
 * BAPolicyContactRole
 * A PolicyContactRole specific to a Commercial Auto policy line.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAPolicyContactRole.eti;BAPolicyContactRole.eix;BAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class BAPolicyContactRole extends entity.PolicyContactRole {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.BAPolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.BAPolicyContactRole, entity.PolicyPeriod>("entity.BAPolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BUSINESSAUTOLINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BusinessAutoLine");
  
  protected BAPolicyContactRole(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.BAPolicyContactRoleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.BAPolicyContactRoleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.BAPolicyContactRoleInternal)super.__getInternalInterface();
  }
  
  public entity.BAPolicyContactRole clone() {
    return (entity.BAPolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  public entity.BAPolicyContactRole getBasedOn() {
    return (entity.BAPolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the BusinessAutoLine field.
   * The Commercial Auto policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBusinessAutoLine() {
    return (entity.BusinessAutoLine)__getInternalInterface().getFieldValue(BUSINESSAUTOLINE_PROP.get());
  }
  
  public entity.BAPolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.BAPolicyContactRole)getSliceUntyped(sliceDate);
  }
  
  public entity.BAPolicyContactRole getUnsliced() {
    return (entity.BAPolicyContactRole)getUnslicedUntyped();
  }
  
  public entity.windowed.BAPolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.BAPolicyContactRoleVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the BusinessAutoLine field.
   */
  public void setBusinessAutoLine(entity.BusinessAutoLine value) {
    __getInternalInterface().setFieldValue(BUSINESSAUTOLINE_PROP.get(), value);
  }
  
  public entity.BAPolicyContactRole split(java.util.Date splitDate) {
    return (entity.BAPolicyContactRole)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.BAPolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.BAPolicyContactRole, com.guidewire._generated.entity.BAPolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.BAPolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.BAPolicyContactRoleInternal getInternalInterface(entity.BAPolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}