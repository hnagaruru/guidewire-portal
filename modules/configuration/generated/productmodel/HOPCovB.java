package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovB.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCovB extends entity.HOPDwellingCov {
  protected HOPCovB()  {
    super((java.lang.Void)null);
  }
  
  public HOPCovB(entity.PolicyPeriod branch)  {
    super(branch, "z26h4fbq18l81e5n478v5v07mj8");
  }
  
  public HOPCovB(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z26h4fbq18l81e5n478v5v07mj8");
  }
  
  public productmodel.DirectHOPCovBDirectLimitType getHOPCovBDirectLimitTerm() {
    return (productmodel.DirectHOPCovBDirectLimitType)getCovTerm("z4ogou9jlvl0q1jjv8fa4jf2b18");
  }
  
  public productmodel.OptionHOPCovBLimitType getHOPCovBLimitTerm() {
    return (productmodel.OptionHOPCovBLimitType)getCovTerm("zhtie7v97j1864502v6pu6ru5u8");
  }
  
  public boolean getHasHOPCovBDirectLimitTerm() {
    return hasCovTerm("z4ogou9jlvl0q1jjv8fa4jf2b18");
  }
  
  public boolean getHasHOPCovBLimitTerm() {
    return hasCovTerm("zhtie7v97j1864502v6pu6ru5u8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCovBInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCovB>() {
      public productmodel.HOPCovB newEmptyInstance() {
        return new productmodel.HOPCovB();
      }
      
      
    });
  }
}