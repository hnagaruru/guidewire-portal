package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPGolfCart.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPGolfCartSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPGolfCartSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> MakeModelValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> SerialNoValueProvider;
  
  public ScheduledItemHOPGolfCartSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    MakeModelValueProvider  =  getClause().getPropertyInfosMap().get("HOPGolfCartSchedMakeModel").createValueProvider(scheduledItemEntity);
    SerialNoValueProvider  =  getClause().getPropertyInfosMap().get("HOPGolfCartSchedSerialNo").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPGolfCart getClause() {
    return (productmodel.HOPGolfCart)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getMakeModel() {
    return MakeModelValueProvider.getValue();
  }
  
  public java.lang.String getSerialNo() {
    return SerialNoValueProvider.getValue();
  }
  
  public void setMakeModel(java.lang.String makeModel) {
    MakeModelValueProvider.setValue(makeModel);
  }
  
  public void setSerialNo(java.lang.String serialNo) {
    SerialNoValueProvider.setValue(serialNo);
  }
  
  
}