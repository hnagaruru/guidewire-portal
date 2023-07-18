package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleCond.eti;HOPCovPartScheduleCond.eix;HOPCovPartScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartScheduleCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartScheduleCondVersionList {
  public HOPCovPartScheduleCondVersionListImpl(entity.HOPCovPartScheduleCond base)  {
    super(base);
  }
  
  public HOPCovPartScheduleCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartScheduleCond AsOf(java.util.Date date) {
    return (entity.HOPCovPartScheduleCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCondItem> HOPCovPartScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartScheduleCond.HOPCOVPARTSCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPCovPartScheduledItems(entity.HOPCovPartSchCondItem bean) {
    addToArray(entity.HOPCovPartScheduleCond.HOPCOVPARTSCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartScheduleCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCovPartSchCondItemVersionList> getHOPCovPartScheduledItems() {
    return (java.util.List)getArray(entity.HOPCovPartScheduleCond.HOPCOVPARTSCHEDULEDITEMS_PROP.get());
  }
  
  
}