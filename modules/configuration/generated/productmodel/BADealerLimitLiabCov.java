package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADealerLimitLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BADealerLimitLiabCov extends entity.BusinessAutoCov {
  protected BADealerLimitLiabCov()  {
    super((java.lang.Void)null);
  }
  
  public BADealerLimitLiabCov(entity.PolicyPeriod branch)  {
    super(branch, "BADealerLimitLiabCov");
  }
  
  public BADealerLimitLiabCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BADealerLimitLiabCov");
  }
  
  public productmodel.DirectBADealerLimitLiabClass1Type getBADealerLimitLiabClass1Term() {
    return (productmodel.DirectBADealerLimitLiabClass1Type)getCovTerm("BADealerLimitLiabClass1");
  }
  
  public productmodel.DirectBADealerLimitLiabClass2Type getBADealerLimitLiabClass2Term() {
    return (productmodel.DirectBADealerLimitLiabClass2Type)getCovTerm("BADealerLimitLiabClass2");
  }
  
  public productmodel.GenericBADealerLimitLiabCustomerType getBADealerLimitLiabCustomerTerm() {
    return (productmodel.GenericBADealerLimitLiabCustomerType)getCovTerm("BADealerLimitLiabCustomer");
  }
  
  public productmodel.PackageBADealerLimitLiabLimitType getBADealerLimitLiabLimitTerm() {
    return (productmodel.PackageBADealerLimitLiabLimitType)getCovTerm("BADealerLimitLiabLimit");
  }
  
  public productmodel.DirectBADealerLimitLiabTotalEmpType getBADealerLimitLiabTotalEmpTerm() {
    return (productmodel.DirectBADealerLimitLiabTotalEmpType)getCovTerm("BADealerLimitLiabTotalEmp");
  }
  
  public boolean getHasBADealerLimitLiabClass1Term() {
    return hasCovTerm("BADealerLimitLiabClass1");
  }
  
  public boolean getHasBADealerLimitLiabClass2Term() {
    return hasCovTerm("BADealerLimitLiabClass2");
  }
  
  public boolean getHasBADealerLimitLiabCustomerTerm() {
    return hasCovTerm("BADealerLimitLiabCustomer");
  }
  
  public boolean getHasBADealerLimitLiabLimitTerm() {
    return hasCovTerm("BADealerLimitLiabLimit");
  }
  
  public boolean getHasBADealerLimitLiabTotalEmpTerm() {
    return hasCovTerm("BADealerLimitLiabTotalEmp");
  }
  
  static {
    com.guidewire._generated.productmodel.BADealerLimitLiabCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BADealerLimitLiabCov>() {
      public productmodel.BADealerLimitLiabCov newEmptyInstance() {
        return new productmodel.BADealerLimitLiabCov();
      }
      
      
    });
  }
}