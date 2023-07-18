package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCreditCardProtection.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPCreditCardProtectionLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPCreditCardProtectionLimitType> implements productmodel.OptionHOPCreditCardProtectionLimitType {
  public OptionHOPCreditCardProtectionLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCreditCardProtection getCoverage() {
    return (productmodel.HOPCreditCardProtection)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCreditCardProtection getHOPCreditCardProtection() {
    return (productmodel.HOPCreditCardProtection)getClause();
  }
  
  
}