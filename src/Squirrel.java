import javax.swing.*;

public class Squirrel {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Insane in the JFrame");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    MainPanel mainPanel = new MainPanel();
    
    frame.getContentPane().add(mainPanel)
    frame.pack();
    frame.setVisible(true);
  }
}
