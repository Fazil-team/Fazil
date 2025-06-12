public class Test {
    public static void main(String[] args) {
        String domain = "https://mrcsh.cn";
        if(domain.endsWith("/")) domain = domain.substring(0, domain.length()-1);
        System.out.println(domain);
    }
}
