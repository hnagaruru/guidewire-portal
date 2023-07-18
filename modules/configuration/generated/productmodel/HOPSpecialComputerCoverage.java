package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSpecialComputerCoverage.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPSpecialComputerCoverage extends entity.HOPDwellingCov {
  protected HOPSpecialComputerCoverage()  {
    super((java.lang.Void)null);
  }
  
  public HOPSpecialComputerCoverage(entity.PolicyPeriod branch)  {
    super(branch, "z74i2o900p9aner9khi3ucsf1pb");
  }
  
  public HOPSpecialComputerCoverage(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z74i2o900p9aner9khi3ucsf1pb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPSpecialComputerCoverageInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPSpecialComputerCoverage>() {
      public productmodel.HOPSpecialComputerCoverage newEmptyInstance() {
        return new productmodel.HOPSpecialComputerCoverage();
      }
      
      
    });
  }
}