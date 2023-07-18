package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPInflationProtection.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPInflationProtection extends entity.HOPDwellingCov {
  protected HOPInflationProtection()  {
    super((java.lang.Void)null);
  }
  
  public HOPInflationProtection(entity.PolicyPeriod branch)  {
    super(branch, "zk9i4qe1i9ncn6lptuvt85f0439");
  }
  
  public HOPInflationProtection(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zk9i4qe1i9ncn6lptuvt85f0439");
  }
  
  public productmodel.OptionHOPInflationProtectionAnnualIncreaseType getHOPInflationProtectionAnnualIncreaseTerm() {
    return (productmodel.OptionHOPInflationProtectionAnnualIncreaseType)getCovTerm("zucikjgff28ikd57vgo0v17hel8");
  }
  
  public boolean getHasHOPInflationProtectionAnnualIncreaseTerm() {
    return hasCovTerm("zucikjgff28ikd57vgo0v17hel8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPInflationProtectionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPInflationProtection>() {
      public productmodel.HOPInflationProtection newEmptyInstance() {
        return new productmodel.HOPInflationProtection();
      }
      
      
    });
  }
}