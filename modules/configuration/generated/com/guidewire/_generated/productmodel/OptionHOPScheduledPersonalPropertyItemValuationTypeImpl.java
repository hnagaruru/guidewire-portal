package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledPersonalPropertyItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPScheduledPersonalPropertyItemValuationTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPScheduledPersonalPropertyItemValuationType> implements productmodel.OptionHOPScheduledPersonalPropertyItemValuationType {
  public OptionHOPScheduledPersonalPropertyItemValuationTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
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