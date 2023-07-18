package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPValuablePersonalPropertyItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPValuablePersonalPropertyItemAggregateLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPValuablePersonalPropertyItemAggregateLimitType> implements productmodel.OptionHOPValuablePersonalPropertyItemAggregateLimitType {
  public OptionHOPValuablePersonalPropertyItemAggregateLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPValuablePersonalPropertyItem getCoverage() {
    return (productmodel.HOPValuablePersonalPropertyItem)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPValuablePersonalPropertyItem getHOPValuablePersonalPropertyItem() {
    return (productmodel.HOPValuablePersonalPropertyItem)getClause();
  }
  
  
}