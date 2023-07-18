package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPInflationProtection.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPInflationProtectionAnnualIncreaseTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPInflationProtectionAnnualIncreaseType> implements productmodel.OptionHOPInflationProtectionAnnualIncreaseType {
  public OptionHOPInflationProtectionAnnualIncreaseTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPInflationProtection getCoverage() {
    return (productmodel.HOPInflationProtection)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPInflationProtection getHOPInflationProtection() {
    return (productmodel.HOPInflationProtection)getClause();
  }
  
  
}