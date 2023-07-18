package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledPersonalPropertyItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectHOPScheduledPersonalPropertyItemAppraisedValueTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectHOPScheduledPersonalPropertyItemAppraisedValueType {
  public DirectHOPScheduledPersonalPropertyItemAppraisedValueTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPScheduledPersonalPropertyItem getCoverage() {
    return (productmodel.HOPScheduledPersonalPropertyItem)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPScheduledPersonalPropertyItem getHOPScheduledPersonalPropertyItem() {
    return (productmodel.HOPScheduledPersonalPropertyItem)getClause();
  }
  
  
}