package entity;

/**
 * PATaxable
 * A taxable unit of price for a period of time, not to be broken up any further, for Personal Auto
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PATaxable.eti;PATaxable.eix;PATaxable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PATaxable extends entity.PACost {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PATaxable, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PATaxable, entity.PolicyPeriod>("entity.PATaxable");
  
  protected PATaxable(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.PATaxableInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.PATaxableInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.PATaxableInternal)super.__getInternalInterface();
  }
  
  public entity.PATaxable clone() {
    return (entity.PATaxable)__getInternalInterface().cloneUntyped();
  }
  
  public entity.PATaxable getBasedOn() {
    return (entity.PATaxable)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  public entity.PATaxable getSlice(java.util.Date sliceDate) {
    return (entity.PATaxable)getSliceUntyped(sliceDate);
  }
  
  public entity.PATaxable getUnsliced() {
    return (entity.PATaxable)getUnslicedUntyped();
  }
  
  public entity.windowed.PATaxableVersionList getVersionList() {
    return (entity.windowed.PATaxableVersionList)getVersionListUntyped();
  }
  
  public entity.PATaxable split(java.util.Date splitDate) {
    return (entity.PATaxable)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.PATaxableInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PATaxable, com.guidewire._generated.entity.PATaxableInternal>() {
      public java.lang.Object getImplementation(entity.PATaxable bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PATaxableInternal getInternalInterface(entity.PATaxable bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}