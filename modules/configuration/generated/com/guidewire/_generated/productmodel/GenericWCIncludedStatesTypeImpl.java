package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCOtherStatesInsurance.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericWCIncludedStatesTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericWCIncludedStatesType {
  public GenericWCIncludedStatesTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.WCOtherStatesInsurance getCoverage() {
    return (productmodel.WCOtherStatesInsurance)getClause();
  }
  
  @java.lang.Override
  public productmodel.WCOtherStatesInsurance getWCOtherStatesInsurance() {
    return (productmodel.WCOtherStatesInsurance)getClause();
  }
  
  
}