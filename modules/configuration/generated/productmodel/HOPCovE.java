package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCovE extends entity.HOPLineCov {
  protected HOPCovE()  {
    super((java.lang.Void)null);
  }
  
  public HOPCovE(entity.PolicyPeriod branch)  {
    super(branch, "zd7gujr17mccs3puv5jreeu1e59");
  }
  
  public HOPCovE(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zd7gujr17mccs3puv5jreeu1e59");
  }
  
  public productmodel.OptionHOPCovELimitType getHOPCovELimitTerm() {
    return (productmodel.OptionHOPCovELimitType)getCovTerm("zjihof5u6p0ob195orrdcmauhpa");
  }
  
  public productmodel.GenericHOPCovEPersonalInjuryType getHOPCovEPersonalInjuryTerm() {
    return (productmodel.GenericHOPCovEPersonalInjuryType)getCovTerm("zh4g6se5d9cc545f97tn498tsm8");
  }
  
  public boolean getHasHOPCovELimitTerm() {
    return hasCovTerm("zjihof5u6p0ob195orrdcmauhpa");
  }
  
  public boolean getHasHOPCovEPersonalInjuryTerm() {
    return hasCovTerm("zh4g6se5d9cc545f97tn498tsm8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCovEInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCovE>() {
      public productmodel.HOPCovE newEmptyInstance() {
        return new productmodel.HOPCovE();
      }
      
      
    });
  }
}