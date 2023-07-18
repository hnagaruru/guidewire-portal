package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleCov.eti;HOPCovPartScheduleCov.eix;HOPCovPartScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartScheduleCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartScheduleCovVersionList {
  public HOPCovPartScheduleCovVersionListImpl(entity.HOPCovPartScheduleCov base)  {
    super(base);
  }
  
  public HOPCovPartScheduleCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartScheduleCov AsOf(java.util.Date date) {
    return (entity.HOPCovPartScheduleCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartScheduleCovItem> HOPCovPartScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartScheduleCov.HOPCOVPARTSCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPCovPartScheduledItems(entity.HOPCovPartScheduleCovItem bean) {
    addToArray(entity.HOPCovPartScheduleCov.HOPCOVPARTSCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartScheduleCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCovPartScheduleCovItemVersionList> getHOPCovPartScheduledItems() {
    return (java.util.List)getArray(entity.HOPCovPartScheduleCov.HOPCOVPARTSCHEDULEDITEMS_PROP.get());
  }
  
  
}