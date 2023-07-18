package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBlanketCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CPBlanketCov extends entity.CPBlanketCov {
  protected CPBlanketCov()  {
    super((java.lang.Void)null);
  }
  
  public CPBlanketCov(entity.PolicyPeriod branch)  {
    super(branch, "CPBlanketCov");
  }
  
  public CPBlanketCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CPBlanketCov");
  }
  
  public productmodel.OptionCPBlanketCoinsuranceType getCPBlanketCoinsuranceTerm() {
    return (productmodel.OptionCPBlanketCoinsuranceType)getCovTerm("CPBlanketCoinsurance");
  }
  
  public productmodel.OptionCPBlanketDeductibleType getCPBlanketDeductibleTerm() {
    return (productmodel.OptionCPBlanketDeductibleType)getCovTerm("CPBlanketDeductible");
  }
  
  public productmodel.DirectCPBlanketLimitType getCPBlanketLimitTerm() {
    return (productmodel.DirectCPBlanketLimitType)getCovTerm("CPBlanketLimit");
  }
  
  public boolean getHasCPBlanketCoinsuranceTerm() {
    return hasCovTerm("CPBlanketCoinsurance");
  }
  
  public boolean getHasCPBlanketDeductibleTerm() {
    return hasCovTerm("CPBlanketDeductible");
  }
  
  public boolean getHasCPBlanketLimitTerm() {
    return hasCovTerm("CPBlanketLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.CPBlanketCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CPBlanketCov>() {
      public productmodel.CPBlanketCov newEmptyInstance() {
        return new productmodel.CPBlanketCov();
      }
      
      
    });
  }
}