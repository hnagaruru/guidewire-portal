package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCond.eti;HOPLineScheduleCond.eix;HOPLineScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineScheduleCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineScheduleCondVersionList {
  public HOPLineScheduleCondVersionListImpl(entity.HOPLineScheduleCond base)  {
    super(base);
  }
  
  public HOPLineScheduleCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineScheduleCond AsOf(java.util.Date date) {
    return (entity.HOPLineScheduleCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleCondItem> HOPLineScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineScheduleCond.HOPLINESCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPLineScheduledItems(entity.HOPLineScheduleCondItem bean) {
    addToArray(entity.HOPLineScheduleCond.HOPLINESCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineScheduleCondItemVersionList> getHOPLineScheduledItems() {
    return (java.util.List)getArray(entity.HOPLineScheduleCond.HOPLINESCHEDULEDITEMS_PROP.get());
  }
  
  
}